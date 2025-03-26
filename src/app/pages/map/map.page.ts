import { Component, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { GeocodingService } from 'src/app/services/geocoding.service';
import * as L from 'leaflet';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { BottomTabBarComponent } from 'src/app/components/bottom-tab-bar/bottom-tab-bar.component';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, HttpClientModule, HeaderComponent, BottomTabBarComponent],
})
export class MapPage implements AfterViewInit {
  map!: L.Map;
  marker!: L.Marker;
  category: string = '';

  constructor(
    private route: ActivatedRoute,
    private geoService: GeocodingService
  ) { }

  ngAfterViewInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.category = params.get('category') || '';
      this.initMap();
    });
  }

  initMap(): void {
    this.map = L.map('map').setView([34.7992, 48.5146], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
    }).addTo(this.map);

    this.marker = L.marker([34.7992, 48.5146], { draggable: false }).addTo(this.map);

    if (this.category) {
      this.loadPlaces();
    }
  }

  loadPlaces() {
    const center = this.map?.getCenter();
    if (!center) return;
  
    const places$ = this.geoService.getPlacesByCategory(this.category, center.lat, center.lng);
    
    if (!places$) {
      console.error(`خدمات مکانی برای دسته‌بندی '${this.category}' یافت نشد.`);
      return;
    }
  
    places$.subscribe((places) => {
      places.forEach((place: any) => {
        const lat = place.lat || place.center?.lat;
        const lon = place.lon || place.center?.lon;
        if (lat && lon) {
          L.marker([lat, lon], { icon: this.customIcon() })
            .addTo(this.map!)
            .bindPopup(`<b>${this.category}</b><br>lat: ${lat.toFixed(4)}<br>lon: ${lon.toFixed(4)}`);
        }
      });
    });
  }

  // استفاده از نشان
  // loadPlaces() {
  //   const center = this.map?.getCenter();
  //   if (!center) return;
  
  //   this.geoService.getPlacesByCategory(this.category, center.lat, center.lng).subscribe((places) => {
  //     if (!places || places.length === 0) {
  //       console.warn(`هیچ مکانی برای دسته‌بندی '${this.category}' یافت نشد.`);
  //       return;
  //     }
  
  //     places.forEach((place: any) => {
  //       const lat = place.location.y;
  //       const lon = place.location.x;
  //       const name = place.title;
  
  //       if (lat && lon) {
  //         L.marker([lat, lon], { icon: this.customIcon() })
  //           .addTo(this.map!)
  //           .bindPopup(`<b>${name}</b><br>lat: ${lat.toFixed(4)}<br>lon: ${lon.toFixed(4)}`);
  //       }
  //     });
  //   });
  // }
  
  

  customIcon() {
    return L.icon({
      iconUrl: 'https://cdn-icons-png.flaticon.com/512/684/684908.png',
      iconSize: [30, 30],
      iconAnchor: [15, 30],
    });
  }
}
