import { Component } from '@angular/core';
import { data } from 'autoprefixer';
import { IProduct } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product/product.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products: IProduct[] = [];
  currentProduct!: IProduct;

  constructor(private productService: ProductService){
	this.productService.getAll().subscribe({
		next: (data)=>{
			this.products = data;
		},
		error: (error) =>{
			console.log(error.message);
		}
	})
  }

  searchText: string="";
  removeItem(id: number|string){
    const confirm = window.confirm('Are you fucking sure');
    if(confirm) this.products = this.products.filter(item => item.id != id);
  }

  editProduct(product: IProduct){
	console.log(product);
	this.currentProduct=product;
  }

  onHandlerRemove(id:any){
	console.log(id);
  }
}
