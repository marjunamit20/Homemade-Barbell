import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products {

  @Output() addProduct = new EventEmitter<any>();

  selectedCategory = 'All';

  products = [
    {
      name: 'Barbell 10kg',
      description: 'Even 10kg feels heavy when your heart carries more',
      price: 100,
      category: 'Small',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwuGunmhBBKmS_SRvcZQiR7ueZvvfKsH4nlomk_xud&s'
    },
    {
      name: 'Barbell 15kg',
      description: '15kg on the bar, but my shoulders can’t bear the weight of solitude.',
      price: 150,
      category: 'Medium',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCdMTJ5H_n6TfL8r9w9gSd3ZDqP6LB4tEQyg&s'
    },
    {
      name: 'Barbell 20kg',
      description: '20kg feels light compared to the weight of my thoughts.',
      price: 200,
      category: 'Large',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0uJjAMImvVu1bEt2Uo-tHkWkf-fDkjc_Y6Q&s'
    }
  ];

  get filteredProducts() {
    if (this.selectedCategory === 'All') {
      return this.products;
    }
    return this.products.filter(p => p.category === this.selectedCategory);
  }

  setCategory(category: string) {
    this.selectedCategory = category;
  }

  addToCart(product: any) {
    this.addProduct.emit(product);
    alert(product.name + ' added to cart!');
  }

}
