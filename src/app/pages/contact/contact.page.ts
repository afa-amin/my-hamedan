import { Component, AfterViewInit, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import * as L from 'leaflet';
import { IonicModule } from '@ionic/angular';
import { GeocodingService } from 'src/app/services/geocoding.service';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { BottomTabBarComponent } from 'src/app/components/bottom-tab-bar/bottom-tab-bar.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, FormsModule, HeaderComponent, BottomTabBarComponent]
})
export class ContactPage {
  map!: L.Map;
  marker!: L.Marker;
  selectedAddress: string = '';
  detailedAddress: string = '';

  constructor(private geoService: GeocodingService) { }

  ngAfterViewInit(): void {
    this.initMap();
  }

  loadingMap = true;

  initMap() {
    this.map = L.map('map').setView([34.7992, 48.5146], 14);
    const tileLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18 });
    tileLayer.on('load', () => {
      this.loadingMap = false;
    });
    tileLayer.addTo(this.map);


    this.marker = L.marker([34.7992, 48.5146], { draggable: true }).addTo(this.map);
    this.marker.on('dragend', (event) => this.updateAddress());

    this.map.on('click', (e: any) => {
      this.marker.setLatLng(e.latlng);
      this.updateAddress();
    });

    this.updateAddress();
  }

  updateAddress() {
    const latlng = this.marker.getLatLng();
    this.geoService.reverseGeocode(latlng.lat, latlng.lng).subscribe((address: string) => {
      this.selectedAddress = address || `Lat: ${latlng.lat}, Lng: ${latlng.lng}`;
    });
  }

  confirmLocation() {
    console.log('آدرس نهایی:', this.selectedAddress);
    console.log('توضیحات کاربر:', this.detailedAddress);
  }
}
