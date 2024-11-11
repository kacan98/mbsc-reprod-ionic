import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { IonicModule } from '@ionic/angular'
import { MbscModule } from '@mobiscroll/angular'
import { HomePageRoutingModule } from './home-routing.module'
import { HomePage } from './home.page'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    MbscModule,
  ],
  declarations: [
    HomePage,
 ],
})
export class HomePageModule {}
