import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { BottomTabBarComponent } from 'src/app/components/bottom-tab-bar/bottom-tab-bar.component';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
  standalone: true,
  imports: [ CommonModule, IonicModule, HeaderComponent, BottomTabBarComponent]
})
export class CategoriesPage {
  allCategories = [
    { id: 'all', name: 'همه', icon: 'apps-outline' },
    { id: 'restaurants', name: 'رستوران‌ها', icon: 'restaurant-outline' },
    { id: 'cafes', name: 'کافه‌ها', icon: 'cafe-outline' },
    { id: 'hotels', name: 'هتل‌ها', icon: 'bed-outline' },
    { id: 'gas-stations', name: 'پمپ بنزین‌ها', icon: 'flame-outline' },
    { id: 'pharmacies', name: 'داروخانه‌ها', icon: 'medkit-outline' },
    { id: 'supermarkets', name: 'سوپرمارکت‌ها', icon: 'cart-outline' }
  ];

  samplePlaces: any[] = [];
  selectedCategoryId: string = 'all';

  constructor() {
    this.generateRandomPlaces(this.selectedCategoryId);
  }

  changeCategory(categoryId: string) {
    this.selectedCategoryId = categoryId;
    this.generateRandomPlaces(categoryId);
  }

  private generateRandomPlaces(categoryId: string) {
    if (categoryId === 'all') {
      this.generateAllPlaces();
    } else {
      this.generateCategoryPlaces(categoryId);
    }
  }

  private generateAllPlaces() {
    this.samplePlaces = [];
    
    this.allCategories
      .filter(c => c.id !== 'all')
      .forEach(category => {
        const placeNames = this.getPlaceNamesByCategory(category.id);
        const count = Math.floor(Math.random() * 3) + 1;
        
        for (let i = 0; i < count; i++) {
          this.samplePlaces.push({
            name: `${placeNames[i % placeNames.length]} ${i + 1}`,
            distance: `${Math.floor(Math.random() * 10) + 1} کیلومتر`,
            rating: (Math.random() * 1 + 4).toFixed(1),
            category: category.name,
            icon: category.icon
          });
        }
      });
    
    this.samplePlaces = this.shuffleArray(this.samplePlaces);
  }

  private generateCategoryPlaces(categoryId: string) {
    const category = this.allCategories.find(c => c.id === categoryId);
    const placeNames = this.getPlaceNamesByCategory(categoryId);
    const count = Math.floor(Math.random() * 3) + 3;
    
    this.samplePlaces = [];
    if (category) {
      for (let i = 0; i < count; i++) {
        this.samplePlaces.push({
          name: `${placeNames[i % placeNames.length]} ${i + 1}`,
          distance: `${Math.floor(Math.random() * 10) + 1} کیلومتر`,
          rating: (Math.random() * 1 + 4).toFixed(1),
          category: category.name,
          icon: category.icon
        });
      }
    }
  }

  private getPlaceNamesByCategory(categoryId: string): string[] {
    const names: Record<string, string[]> = {
      'restaurants': ['رستوران', 'سفره خانه', 'غذاخوری'],
      'cafes': ['کافه', 'کافی شاپ', 'تهران کافه'],
      'hotels': ['هتل', 'مهمانپذیر', 'اقامتگاه'],
      'gas-stations': ['پمپ بنزین', 'گازرسان', 'CNG'],
      'pharmacies': ['داروخانه', 'داروپخش', 'شبانه روزی'],
      'supermarkets': ['هایپر', 'سوپرمارکت', 'فروشگاه']
    };
    
    return names[categoryId] || ['مکان'];
  }

  private shuffleArray(array: any[]): any[] {
    return array.sort(() => Math.random() - 0.5);
  }
}
