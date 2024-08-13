import { Component, OnInit } from '@angular/core';
import { ProductService, Product } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];
  error: string | null = null;
  query: string = '';

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  
  }

  searchProducts(): void {
    if (!this.query.trim()) {
      this.products = [];
      this.error = 'Por favor, ingresa un término de búsqueda.';
      return;
    }

    this.productService.searchProducts(this.query).subscribe({
      next: (data) => {
        const queryLower = this.query.toLowerCase();
        this.products = data.filter(product =>
          product.name.toLowerCase().includes(queryLower) ||
          product.id.toString() === this.query
        );
        
        if (this.products.length === 0) {
          this.error = 'No se encontraron productos.';
        } else {
          this.error = null;
        }
      },
      error: () => this.error = 'Error al buscar productos'
    });
  } 
}