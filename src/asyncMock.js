const products = [
    {
        id: '1',
        name: 'PINTURA A LA TIZA',
        price: 650,
        category: 'Pintura',
        img:'https://www.eqartistica.com.ar/wp-content/uploads/2019/01/tiza.png',
        stock: 10,
        description: 'Pintura a base de tiza, con mucha adherencia y poder cubritivo.'
    },
    {
        id: '2',
        name: 'ACRILICO',
        price: 250,
        category: 'Pintura',
        img:'https://www.eqartistica.com.ar/wp-content/uploads/2019/02/acrilico-50.png',
        stock: 10,
        description: 'Pintura acrilica de base acuosa.'
    },
    {
        id: '3',
        name: 'PINTURA VINTAGE',
        price: 900,
        category: 'Pintura',
        img:'https://www.eqartistica.com.ar/wp-content/uploads/2021/09/vintage-web.png',
        stock: 10,
        description: 'Pintura semicubritiva, ideal para realizar patinas.'
    },
    {
        id: '4',
        name: 'PASTA DE MODELAR',
        price: 600,
        category: 'Pastas',
        img:'https://www.eqartistica.com.ar/wp-content/uploads/2019/02/pasta-de-modelar-1.png',
        stock: 10,
        description: 'Pasta blanca. Ideal para crear texturas en soportes rígidos o flexibles.'
    },
    {
        id: '5',
        name: 'PASTA FLEXIBLE',
        price: 600,
        category: 'Pastas',
        img:'https://www.eqartistica.com.ar/wp-content/uploads/2020/06/pastaflexible-100.png',
        stock: 10,
        description: 'Pasta blanca. Ideal para rellenar moldes bajo relieve (puntillas o sellos).'
    },
    {
        id: '6',
        name: 'LACA POLIURETANICA',
        price: 650,
        category: 'Barnices y lacas',
        img:'https://www.eqartistica.com.ar/wp-content/uploads/2019/02/laca-poliuretanica.png',
        stock: 10,
        description: 'Laca formulada con resinas poliuretanicas, solubles en agua, transparente, solida, autonivelante y brillante. Resiste el rayado y el calor.'
    },
    {
        id: '7',
        name: 'BARNIZ Y DILUYENTE',
        price: 800,
        category: 'Barnices y lacas',
        img:'https://www.eqartistica.com.ar/wp-content/uploads/2019/02/barnizdiluyente-al-agua.png',
        stock: 10,
        description: 'Barníz protector que brinda una película transparente, resistente y elástica.Terminación: mate, satinada o brillante. Solubles en agua. NO TÓXICO'
    },
    {
        id: '8',
        name: 'BARNIZ EXTRA MATE',
        price: 800,
        category: 'Barnices y lacas',
        img:'https://www.eqartistica.com.ar/wp-content/uploads/2019/02/barniz-extra-mate.png',
        stock: 10,
        description: 'Barníz protector para dar terminación final extra mate de forma pareja. Suave al tacto. Para todo tipo de pinturas acrílicas. Ideal para usar con pintura a la tiza. Solubles en agua. NO TÓXICO'
    },

]

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {            
            resolve(products)
            
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise ((resolve) => {
        setTimeout(() => {            
            resolve(products.find(prod=> prod.id === productId))
            
        }, 500)
    })
}

export const getProductsByCategory = (productCategory) => {
    
    return new Promise ((resolve) => {
        setTimeout(() => {            
            resolve(products.filter(prod=> prod.category === productCategory))
            
        }, 500)
    })
}