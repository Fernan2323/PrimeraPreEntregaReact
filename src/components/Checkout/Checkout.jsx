import { useState, useContext } from "react";
import { CartContext } from "../../assets/CartContext/CartContext";
import { db } from "../../services/config";
import { collection, addDoc, updateDoc, getDoc, doc } from "firebase/firestore";
import "./checkout.css";

const Checkout = () => {
  const { carrito, deleteCart, total } = useContext(CartContext);

  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [emailConfirmacion, setEmailConfirmacion] = useState("");
  const [ordenId, setOrdenId] = useState("");
  const [error, setError] = useState("");

  const handlerSubmit = (event) => {
    event.preventDefault();

    if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
      setError("¡Faltan campos por completar!");
      return;
    }

    if (email !== emailConfirmacion) {
      setError("Los emails no coinciden, ¡Por favor intentelo nuevamente!");
      return;
    }

    const orden = {
      items: carrito.map((prod) => ({
        id: prod.item.id,
        nombre: prod.item.nombre,
        cantidad: prod.cantidad,
      })),
      total: total,
      fecha: new Date(),
      nombre,
      apellido,
      telefono,
      email,
    };

    Promise.all(
      orden.items.map(async (productoOrden) => {
        const productoRef = doc(db, "inventario", productoOrden.id);
        const productoDoc = await getDoc(productoRef);
        const stockActual = productoDoc.data().stock;

        await updateDoc(productoRef, {
          stock: stockActual - productoOrden.cantidad,
        });
      })
    )

      .then(() => {
        addDoc(collection(db, "ordenes"), orden)
          .then((docRef) => {
            setOrdenId(docRef.id);
            deleteCart();
          })
          .catch((error) => console.log("Error al crear la orden", error));
      })

      .catch((error) => {
        console.log("No pudimos actualizar el stock", error);
        setError("Error al actualizar el stock");
      });
  };

  return (
    <div>
      <h2>Finaliza tu compra</h2>

      <section>
        <div className="container-check">
          {carrito.map((prod) => (
            <div key={prod.item.id}>
              <p>
                {" "}
                {prod.item.nombre} x {prod.cantidad}{" "}
              </p>
              <p> {prod.item.precio} </p>
            </div>
          ))}
        </div>
      </section>

      <form onSubmit={handlerSubmit}>
        <h3>Ingresa tus datos</h3>
        <div className="div-form">
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            id="nombre"
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className="div-form">
          <label htmlFor="apellido">Apellido</label>
          <input
            type="text"
            id="apellido"
            onChange={(e) => setApellido(e.target.value)}
          />
        </div>

        <div className="div-form">
          <label htmlFor="telefono">Telefono</label>
          <input
            type="text"
            id="telefono"
            onChange={(e) => setTelefono(e.target.value)}
          />
        </div>

        <div className="div-form">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="div-form">
          <label htmlFor="emailConfir">Confirmar email</label>
          <input
            type="email"
            id="emailConfir"
            onChange={(e) => setEmailConfirmacion(e.target.value)}
          />
        </div>

        {error && <p> {error} </p>}
        <div className="btn">
          <button> Finalizar Orden </button>
          <button> Eliminar </button>
        </div>

        {ordenId && (
          <h3>¡Gracias por su compra! Tu numero de orden es: {ordenId} </h3>
        )}
      </form>
    </div>
  );
};

export default Checkout;
