import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { BottomTabBarComponent } from 'src/app/components/bottom-tab-bar/bottom-tab-bar.component';


@Component({
  selector: 'app-place-details',
  templateUrl: './place-details.page.html',
  styleUrls: ['./place-details.page.scss'],
  standalone: true,
  imports: [ CommonModule, IonicModule, HeaderComponent, BottomTabBarComponent]
})
export class PlaceDetailsPage {

  @Input() place = {
    name: 'آرامگاه بوعلی سینا',
    image: 'data:image/jpeg;base64,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',
    description: `نام این پل را همچنین پل شاه، پل بابا رکن‌الدین...`,
    features: `بوعلی سینا یکی از دانشمندان بزرگ ایرانی است که در روستای افشه بخارا به‌عنوان پایتخت ساسانیان در ازبکستان کنونی متولد شد و زندگی بسیار پر فراز و نشیبی داشت. این دانشمند بزرگ نه تنها در طب مهارتی زبانزد داشت بلکه به‌عنوان یک فیلسوف نیز شناخته می‌شد که در حوزه‌های بسیاری از جمله اخلاق و فلسفه صاحب نظر بود و به‌عنوان ریاضی‌دان، اخترشناس، فیزیکدان، جغرافی‌دان، شیمیدان، زمین‌شناس و شاعر نیز شهرت داشت.

  
ابوعلی سینا در دوران زندگی خود پزشک پادشاهان بسیاری بود و در این دوران عناوین مختلفی به او داده شد که شامل شیخ‌ الرئیس، شرف الملک، حجت حق و شاهزارده اطباء بود. ابوعلی سینا روزی بر اثر بیماری در شهر همدان دار فانی را وداع گفت و پیکر پاک او برای ایرانیان باقی ماند. حالا هم آرامگاهش یکی از جاهای دیدنی همدان شده است.


ابوعلی سینا در دوران زندگی خود پزشک پادشاهان بسیاری بود و در این دوران عناوین مختلفی به او داده شد که شامل شیخ‌ الرئیس، شرف الملک، حجت حق و شاهزارده اطباء بود. ابوعلی سینا روزی بر اثر بیماری در شهر همدان دار فانی را وداع گفت و پیکر پاک او برای ایرانیان باقی ماند. حالا هم آرامگاهش یکی از جاهای دیدنی همدان شده است.

`
  };

  showOnMap() {
    alert('نمایش روی نقشه برای ' + this.place.name);
  }
}
