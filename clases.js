const fs = require("fs");

class Contenedor{
	constructor(product) {
		this.product = product;
	}

	async firstProduct(product) {
		try {
			product.id = 1;
			await fs.promises.writeFile(this.archivo, JSON.stringify([product]));
		}catch(err){
			console.log(err.message);
		}
	}
   
	async save(producto) {
		try {

			const products = await fs.readFile(this.archivo,"utf-8");
			const previousInfo = JSON.parse(products);

			//Obtener id
			let newId = previousInfo[previousInfo.lenght - 1].id + 1;
			producto.id = newId;

			//Escribir datos
			let newArray = [previousInfo, producto];
			await fs.promises.writeFile(this.archivo, JSON.stringify(newArray));
		}  catch(err) {
			console.log("No se creo ningun producto", err.message);
			this.firstProduct(producto);
		}
	}

	getById() {

	}

	getAll() {

	}

	deleteById() {

	}

	deleteAll() {

	}
}



let newProduct = new Contenedor (productos.txt);
producto1.save({nombre:"Buzo Adidas negro", precio: 13999, url:"/BuzoAdidasNegro.jpg" })
producto2.save({nombre:"Remera Puma", precio: 4499, url:"/RemeraPuma.jpg" })
producto3.save({nombre:"Zapatillas Adidas Coreracer", precio: 9999, url:"/ZapatillasAdidasCoreracer.jpg"})