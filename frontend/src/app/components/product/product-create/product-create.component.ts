import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  constructor(private ProductService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.ProductService.showMessage('Operação executada com sucesso')
  }

  createProduct(): void {
    this.ProductService.showMessage('Operção executada com sucesso!')
  }

  cancel(): void {
    this.router.navigate(['/products'])
  }

}
