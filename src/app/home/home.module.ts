import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeContainerComponent } from './home-container/home-container.component';
import { MainBannerComponent } from './home-container/main-banner/main-banner.component';
import { NumbersBannerComponent } from './home-container/numbers-banner/numbers-banner.component';
import { JoinNowComponent } from './home-container/join-now/join-now.component';
import { StatsComponent } from './home-container/stats/stats.component';
import { OptionsComponent } from './home-container/options/options.component';
import { SecondBannerComponent } from './home-container/second-banner/second-banner.component';
import { QNAComponent } from './home-container/qna/qna.component';
import { TopCommentsComponent } from './home-container/top-comments/top-comments.component';
import { ThirdBannerComponent } from './home-container/third-banner/third-banner.component';
import { SignUpComponent } from './home-container/sign-up/sign-up.component';
import { MatInputModule, MatFormFieldModule, MatTabsModule, MatExpansionModule, MatCardModule} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { NgCircleProgressModule } from 'ng-circle-progress';


@NgModule({
  declarations: [HomeContainerComponent, MainBannerComponent,
     NumbersBannerComponent, JoinNowComponent, StatsComponent, OptionsComponent,
     SecondBannerComponent, QNAComponent, TopCommentsComponent, ThirdBannerComponent, SignUpComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    MatInputModule,
    MatExpansionModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatCardModule,
    HttpClientModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: '#e09900',
      innerStrokeColor: '#C7E596',
      animationDuration: 300
    }),
    MatTabsModule
  ], exports: [
    HomeContainerComponent
  ]
})
export class HomeModule { }
