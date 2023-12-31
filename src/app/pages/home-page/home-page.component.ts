import { Component } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  products: IProduct[] = [];
  currentProduct!: IProduct;

  constructor(private productService: ProductService){}
  ngOnInit():void{
    this.getAll();
  }

  getAll(){
    this.productService.getAll().subscribe((res: any)=>{
      this.products = res;
    })
  }
}
