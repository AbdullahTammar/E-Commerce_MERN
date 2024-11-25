import productModel from "../models/productModel";

export const getAllProducts = async () => {
    return await productModel.find();
}

export const seedInitialProducts = async () => {
    const products = [
        { title: "Mac Mini 4", image: "https://www.pcmasters.de/system/photos/24374/full/Apple_Mac_Mini.jpg", price: 10, stock: 100 },
        // { title: "Product 2", image: "image2.jpg", price: 15, stock: 120 },
        // { title: "Product 3", image: "image3.jpg", price: 20, stock: 80 },
        // { title: "Product 4", image: "image4.jpg", price: 25, stock: 60 },
        // { title: "Product 5", image: "image5.jpg", price: 30, stock: 150 },
        // { title: "Product 6", image: "image6.jpg", price: 35, stock: 50 },
        // { title: "Product 7", image: "image7.jpg", price: 40, stock: 200 },
        // { title: "Product 8", image: "image8.jpg", price: 45, stock: 90 },
        // { title: "Product 9", image: "image9.jpg", price: 50, stock: 70 },
        // { title: "Product 10", image: "image10.jpg", price: 55, stock: 30 },
    ];

    const existingProducts = await getAllProducts();

    if(existingProducts.length === 0) {
        await productModel.insertMany(products);
    }

}



