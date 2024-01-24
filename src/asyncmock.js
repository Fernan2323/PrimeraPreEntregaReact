const productos = [
    { id: '1', nombre: 'RTX 3090', precio: 1000, img:'../img/grafica.jpg', idCat: '2'},
    { id: '2', nombre: 'GTX 1650', precio: 500, img:'../img/gtx-1650.jpg', idCat: '2'},
    { id: '3', nombre: 'RX 560', precio: 450, img:'../img/rx-560.jpg', idCat: '2'},
    { id: '4', nombre: 'Intel i5', precio: 800, img:'../img/intel-i5.jpg', idCat: '3'},
    { id: '5', nombre: 'Ryzen 5', precio: 600, img:'../img/ryzen-5.jpg', idCat: '3'},
    { id: '6', nombre: 'Ryzen 7', precio: 1200, img:'../img/ryzen-7.jpg', idCat: '3'},
    { id: '7', nombre: 'RAM fury', precio: 100, img:'../img/ram-fury.jpg', idCat: '4'},
    { id: '8', nombre: 'RAM vengeance', precio: 80, img:'../img/ram-vengeance.jpg', idCat: '4'},
]

export const getProductos = () => {

    return new Promise((r) =>{

        setTimeout(() => {
            
           r(productos)   

        }, 100)
    })
}

// Funcion q retorna un solo item

export const getUnProducto = (id) => {

    return new Promise( resolve => {

        setTimeout(() =>{

            const producto = productos.find(prod => prod.id === id);

            resolve(producto);
        }, 100)
    })
}

// Creamos una funcion q retorne toda la categoria.

export const GetProductosPorcategoria = (idCategorias) => {

    return new Promise (resolve => {

        setTimeout(() => {

            const productosCategoria = productos.filter(prod => prod.idCat === idCategorias)
            resolve(productosCategoria);
        }, 100)
    })
}