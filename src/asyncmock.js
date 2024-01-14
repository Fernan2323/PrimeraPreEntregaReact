const productos = [
    { id: 1, nombre: 'Memoria ram', precio: 500, img:'./img/ram.jpg'},
    { id: 2, nombre: 'Procesador', precio: 100, img:'./img/procesador.jpg'},
    { id: 3, nombre: 'Disco SSD', precio: 200, img:'./img/discossd.jpg'},
    { id: 4, nombre: 'Tarjeta grafica', precio: 1000, img:'./img/grafica.jpg'},
]

export const getProductos = () => {

    return new Promise((r) =>{

        setTimeout(() => {
            
           r(productos)   

        }, 500)
    })
}