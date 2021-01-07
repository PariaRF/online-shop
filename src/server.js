const mockProducts = [
    {
        id: 1,
        name: "product one",
        price: 1000,
        hasOff: true,
    },
    {
        id: 2,
        name: "product two",
        price: 2000,
        hasOff: false,
    },
    {
        id: 3,
        name: "product three",
        price: 3000,
        hasOff: true,
    },
    {
        id: 4,
        name: "product four",
        price: 4000,
        hasOff: false,
    },
];

const getMockProducts = new Promise((resolve, reject) =>
    setTimeout(() => {
        resolve(mockProducts);
    }, 3000)
);

const getProductById = (id) =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            const products = mockProducts.filter((product) => product.id === id);
            if (products[0]) {
                resolve(products[0]);
            } else {
                reject("no product found");
            }
        }, 3000);
    });

export { getMockProducts, mockProducts, getProductById };