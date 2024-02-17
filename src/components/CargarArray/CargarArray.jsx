import { useState, useEffect } from "react";
import { db } from "../../services/config";
import { collection, doc, setDoc } from "firebase/firestore";
import { productos } from "../../asyncmock";

const CargarArray = () => {
  useEffect(() => {
    const cargarData = async () => {
      try {
        const inventario = productos;

        const productosCollection = collection(db, "inventario");

        inventario.forEach(async (producto) => {
          const productoDoc = doc(productosCollection, producto.id.toString());
          await setDoc(productoDoc, producto);
        });
      } catch (error) {
        console.log((error) => console.log(error));
      }
    };
    cargarData();
  }, []);
  return <div>CargarArray</div>;
};

export default CargarArray;