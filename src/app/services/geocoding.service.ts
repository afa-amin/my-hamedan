import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class GeocodingService {
  constructor(private http: HttpClient) { }

  reverseGeocode(lat: number, lon: number) {
    return this.http
      .get<any>(
        `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lon}`
      )
      .pipe(map((res) => res.display_name));
  }

  getPlacesByCategory(category: string, lat: number, lon: number, radius = 5000) {
    const categoryMap: { [key: string]: string } = {
      restaurants: 'restaurant',
      cafes: 'cafe',
      fastfood: 'fast_food',
      hospitals: 'hospital',
      pharmacies: 'pharmacy',
      gasStations: 'fuel',
      banks: 'bank',
      hotels: 'hotel',
      libraries: 'library',
      busStations: 'bus_station',
      subwayStations: 'subway_entrance',
      clothing: 'clothes',
      gyms: 'gym',
      schools: 'school',
      parking: 'parking',
      pedestrian: 'pedestrian',
      barbershops: 'hairdresser',
      supermarkets: 'supermarket',
      mobileShops: 'mobile_phone'
    };

    const amenity = categoryMap[category];
    if (!amenity) {
      console.warn(`دسته‌بندی ${category} یافت نشد!`);
      return null; 
    }


    const query = `
    [out:json];
    (
      node["amenity"="${amenity}"](around:${radius},${lat},${lon});
      way["amenity"="${amenity}"](around:${radius},${lat},${lon});
      relation["amenity"="${amenity}"](around:${radius},${lat},${lon});
    );
    out center;
  `;

    const url = `https://overpass-api.de/api/interpreter?data=${encodeURIComponent(query)}`;

    return this.http.get<any>(url).pipe(map((res) => res.elements));
  }
}

// استفاده از نشان
// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { map } from 'rxjs/operators';

// @Injectable({
//   providedIn: 'root',
// })
// export class GeocodingService {
//   private API_KEY = 'service.02d0418951534957aa6fb432723eeff4';
//   private BASE_URL = 'https://api.neshan.org/v1/search';

//   constructor(private http: HttpClient) {}

//   reverseGeocode(lat: number, lon: number): Observable<string> {
//     return this.http
//       .get<any>(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lon}`)
//       .pipe(map((res) => res.display_name));
//   }

//   getPlacesByCategory(category: string, lat: number, lon: number): Observable<any> {
//     const headers = new HttpHeaders({
//       'Api-Key': this.API_KEY,
//     });

//     return this.http
//       .get<any>(`${this.BASE_URL}?term=${category}&lat=${lat}&lng=${lon}`, { headers })
//       .pipe(map((res) => res.items));
//   }
// }
