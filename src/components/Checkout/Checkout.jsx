// Version sin descuento de stock

/* import { useState, useContext } from "react";
import { CartContext } from "../../assets/CartContext/CartContext";
import { db } from "../../services/config";
import { collection, addDoc } from "firebase/firestore";

const Checkout = () => {

    const {carrito, deleteCart, total} = useContext(CartContext);

    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [telefono, setTelefono] = useState('');
    const [email, setEmail] = useState('');
    const [emailConfirmacion, setEmailConfirmacion] = useState('');
    const [ordenId, setOrdenId] = useState('');
    const [error, setError] = useState('');

    // Funcion manjadora del formulario

    const handlerSubmit = (event) => {
        event.preventDefault();

        //Verificamos q todos los campos esten completos:

        if(!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
            setError('¡Faltan campos por completar!');
            return;
        }

        // Validamos q los emails coincidan:
        if(email !== emailConfirmacion) {
            setError('Los emails no coinciden, ¡Por favor intentelo nuevamente!')
            return
        }

        // Creamos un objeto con todos los datos de la orden:

        const orden = {
            items: carrito.map(prod => ({
                id: prod.item.id,
                nombre: prod.item.nombre,
                cantidad: prod.cantidad
            })),
            total: total,
            fecha: new Date(),
            nombre,
            apellido,
            telefono,
            email
        }

        // GUardamos la orden de compras en la base de datos:

        addDoc(collection(db, 'ordenes'), orden)
        .then(docRef => {
            setOrdenId(docRef.id);
            deleteCart();
        })
        .catch(error => {
            console.log('Hubo un error al crear la orden de compra', error);
            setError('Error al crear la orden');
        })
    }

  return (
    <div>

        <h2>Checkout - Finalizamos la compra</h2>
        <form onSubmit={handlerSubmit}>
            {
                carrito.map(prod => (
                    <div key={prod.item.id}>
                        <p> {prod.item.nombre} x {prod.cantidad} </p>
                        <p> {prod.item.precio} </p>
                        <hr />
                    </div>
                ))
            }

              <div>
                <label htmlFor="nombre">Nombre</label>
                <input type="text" id="nombre" onChange={(e) => setNombre(e.target.value)} />
              </div>

              <div>
                <label htmlFor="apellido">Apellido</label>
                <input type="text" id="apellido" onChange={(e) => setApellido(e.target.value)} />
              </div>

              <div>
                <label htmlFor="telefono">Telefono</label>
                <input type="text" id="telefono" onChange={(e) => setTelefono(e.target.value)} />
              </div>

              <div>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" onChange={(e) => setEmail(e.target.value)} />
              </div>

              <div>
                <label htmlFor="emailConfir">Confirmar email</label>
                <input type="email" id="emailConfir" onChange={(e) => setEmailConfirmacion(e.target.value)} />
              </div>

              {
                error && <p> {error} </p>
              }

              <button> Finalizar Orden </button>

              {
                ordenId && <h3>¡Gracias por su compra! Tu numero de orden es: {ordenId} </h3>

              }

              
        </form>
    </div>
  )
}

export default Checkout */

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Version q descuenta stock

import { useState, useContext } from "react";
import { CartContext } from "../../assets/CartContext/CartContext";
import { db } from "../../services/config";
import { collection, addDoc, updateDoc, getDoc, doc } from "firebase/firestore";
import './checkout.css'

const Checkout = () => {

    const {carrito, deleteCart, total} = useContext(CartContext);

    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [telefono, setTelefono] = useState('');
    const [email, setEmail] = useState('');
    const [emailConfirmacion, setEmailConfirmacion] = useState('');
    const [ordenId, setOrdenId] = useState('');
    const [error, setError] = useState('');

    // Funcion manjadora del formulario

    const handlerSubmit = (event) => {
        event.preventDefault();

        //Verificamos q todos los campos esten completos:

        if(!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
            setError('¡Faltan campos por completar!');
            return;
        }

        // Validamos q los emails coincidan:
        if(email !== emailConfirmacion) {
            setError('Los emails no coinciden, ¡Por favor intentelo nuevamente!')
            return
        }

        // Creamos un objeto con todos los datos de la orden:

        const orden = {
            items: carrito.map(prod => ({
                id: prod.item.id,
                nombre: prod.item.nombre,
                cantidad: prod.cantidad
            })),
            total: total,
            fecha: new Date(),
            nombre,
            apellido,
            telefono,
            email
        }

        // Modificaiones para q descuente stock: lo q tenemos q hacer es ejecutar varias promesas en paralelo, por un lado puedo crear la orden de compra y por otro actualizar el stock:
       
        Promise.all(

            orden.items.map (async (productoOrden) => {
                //Por cada producto obtengo una referencia y apartir de esa referencia el doc.
                const productoRef = doc(db, 'inventario', productoOrden.id);
                const productoDoc = await getDoc(productoRef);
                const stockActual = productoDoc.data().stock;
                //recordemos q data() me permite obtener los datos del documento

                await updateDoc(productoRef, {stock: stockActual - productoOrden.cantidad});
                //Modifico el stock y subo la actualizacion
            })
        )
        // Guardamos en la base de datos la orden de compra:

        .then(() => {
            addDoc(collection(db, 'ordenes'), orden)
            .then(docRef => {
                setOrdenId(docRef.id);
                deleteCart();
                // Aca podemos limprar los input y usar el sweet alert 2 para mostrar el oorder ID.
            })
            .catch(error => console.log('Error al crear la orden', error))
        })

        .catch(error => {
            console.log('No pudimos actualizar el stock', error);
            setError('Error al actualizar el stock');

        })

    }
       

  return (
    <div>

        <h2>Finaliza tu compra</h2>
        
          <section>
          <div className="container-check">
            {
                carrito.map(prod => (
                    <div key={prod.item.id}>
                        <p> {prod.item.nombre} x {prod.cantidad} </p>
                        <p> {prod.item.precio} </p>
                       
                      
                        <hr />
                    </div>
                ))
            }
            </div>
          </section>

         <div className="div-form">
         <form onSubmit={handlerSubmit}>
              <div>
                <label htmlFor="nombre">Nombre</label>
                <input type="text" id="nombre" onChange={(e) => setNombre(e.target.value)} />
              </div>

              <div>
                <label htmlFor="apellido">Apellido</label>
                <input type="text" id="apellido" onChange={(e) => setApellido(e.target.value)} />
              </div>

              <div>
                <label htmlFor="telefono">Telefono</label>
                <input type="text" id="telefono" onChange={(e) => setTelefono(e.target.value)} />
              </div>

              <div>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" onChange={(e) => setEmail(e.target.value)} />
              </div>

              <div>
                <label htmlFor="emailConfir">Confirmar email</label>
                <input type="email" id="emailConfir" onChange={(e) => setEmailConfirmacion(e.target.value)} />
              </div>

              {
                error && <p> {error} </p>
              }

              <button> Finalizar Orden </button>

              {
                ordenId && <h3>¡Gracias por su compra! Tu numero de orden es: {ordenId} </h3>

              }

              
        </form>
         </div>
          
    </div>
  )
}

export default Checkout