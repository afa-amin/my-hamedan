import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  imports: [RouterModule, IonicModule, CommonModule],
  styleUrls: ['./service-list.component.scss'],
})
export class ServiceListComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}
  @Input() title: string = '';

  services = [
    { name: 'همدان من', image: 'https://s.cafebazaar.ir/images/icons/ir.isfahan.app.twa-683d507a-d869-4b80-9096-de55e92b6c27_512x512.png' },
    { name: 'همدان ما', image: 'https://s.cafebazaar.ir/images/icons/ir.isfahan.app.twa-683d507a-d869-4b80-9096-de55e92b6c27_512x512.png' },
    { name: 'همدان اونا', image: 'https://s.cafebazaar.ir/images/icons/ir.isfahan.app.twa-683d507a-d869-4b80-9096-de55e92b6c27_512x512.png' },
    { name: 'همدان همه', image: 'https://s.cafebazaar.ir/images/icons/ir.isfahan.app.twa-683d507a-d869-4b80-9096-de55e92b6c27_512x512.png' },
    { name: 'همدان همه جا', image: 'https://s.cafebazaar.ir/images/icons/ir.isfahan.app.twa-683d507a-d869-4b80-9096-de55e92b6c27_512x512.png' },
  ];
}
