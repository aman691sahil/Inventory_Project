import path from 'path';
import ProductModel from '../models/product.model.js';

export default class ProductController{

    getProducts(req,res){
        let products=ProductModel.get();
        console.log(products);

        console.log(path.resolve());  //This is giving us the current directory

        // return res.sendFile(path.join(path.resolve(),"src",'views',"products.html" ));
        res.render("products",{products:products});
    }
}

//what are controller is doing here is serving the request and sending it back to the client