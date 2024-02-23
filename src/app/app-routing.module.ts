import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CalendarComponent } from './calendar/calendar.component';
import { HomeComponent } from './home/home.component';
import { RoomComponent } from './room/room.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {path: 'booking', component: HomeComponent}, 
  {path: '', component: CalendarComponent},
  {path: 'room', component: RoomComponent},
  {path: 'forms', component: ProductComponent},
  ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
