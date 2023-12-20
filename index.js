import express from 'express'
import ProductController from './src/controllers/product.controller.js';
import path from 'path';  //this is how you give the location of the folder


const server = express();

//now we need to tell our server that we are using the view engine now
server.set("view engine","ejs");
server.set("views",path.join(path.resolve(),"src",'views'));

// create an instance of ProductController

const productController = new ProductController();  // wheenever you have to call the function  or class 
                                                   //you first have to create first its instance
server.get('/', (productController.getProducts)); //this mean when our path is default please go to the getProducts function
server.use(express.static('src/views'));
    // return res.send('Welcome to Inventory App');
server.listen(3400);
console.log('Server is listening on port 3400');