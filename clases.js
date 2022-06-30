const fs = require("fs");

class Contenedor{
	constructor(product) {
		this.product = product;
	}

	async firstProduct(product) {
		try {
			product.id = 1;
			await fs.promises.writeFile(this.product, JSON.stringify([product]));
		}catch(err){
			console.log(err.message);
		}
	}
   
	async save(producto) {
		try {

			const products = await fs.readFile(this.product,"utf-8");
			const previousInfo = JSON.parse(products);

			//Obtener id
			producto.id = productos.lenght + 1;

			//Escribir datos
			let newArray = [previousInfo, producto];
			await fs.promises.writeFile(this.product, JSON.stringify(newArray));
		}  catch(err) {
			console.log("No se creo ningun producto", err.message);
			this.firstProduct(producto);
		}
	}

	async getById(id) {
        try {
            const products = await fs.promises.readFile(this.product, 'utf-8');
            const allProducts =  JSON.parse(product);
            const res = allProducts.find(element => element.id == id);
            console.log(res);
        } catch(err) {
            console.log(err.message);
        }
    }

	async getAll() {
        try {
            const products = await fs.promises.readFile(this.product, 'utf-8');
            const allProducts = JSON.parse(product);
            console.log(allProducts);
        } catch(err) {
            console.log(err.message);
        }
    }


	async deleteById(id) {
        try {
            const product = await fs.promises.readFile(this.product, 'utf-8');
            const allProducts =  JSON.parse(product);
            const res = allProducts.filter(element => element.id !== id);

            await fs.promises.writeFile(this.product, JSON.stringify(res));
        } catch(err) {
            console.log(err.message);
        }
    }

	async deleteAll() {
        try {
            await fs.promises.unlink(this.product);
        } catch(err) {
            console.log("Se borro el producto");
        }
    }
}



let newProductos = new Contenedor("./productos.txt");
//Producto 1
newProductos.save({name:"Buzo Adidas negro", price: 13999, url:"/BuzoAdidasNegro.jpg" })

//Producto 2
newProductos.save({name:"Remera Puma", price: 4499, url:"/RemeraPuma.jpg" })

//Producto 3
newProductos.save({name:"Zapatillas Adidas Coreracer", price: 9999, url:"/ZapatillasAdidasCoreracer.jpg"})

newProductos.deleteAll();