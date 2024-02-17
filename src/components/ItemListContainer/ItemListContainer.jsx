import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import "./itemlistcontainer.css";
import { useParams } from "react-router-dom";
import { db } from "../../services/config";
import { collection, getDocs, where, query } from "firebase/firestore";

const ItemLisContainer = () => {
  const [productos, setProductos] = useState([]);

  const { idCategorias } = useParams([]);

  useEffect(() => {
    const misProductos = idCategorias
      ? query(collection(db, "inventario"), where("idCat", "==", idCategorias))
      : collection(db, "inventario");

    getDocs(misProductos)
      .then((res) => {
        const nuevosProductos = res.docs.map((doc) => {
          const data = doc.data();
          return { id: doc.id, ...data };
        });
        setProductos(nuevosProductos);
      })
      .catch((error) => console.log(error));
  }, [idCategorias]);

  return (
    <div className="itemListcontainer bounce-in-top">
      <ItemList productos={productos} />
    </div>
  );
};

export default ItemLisContainer;
