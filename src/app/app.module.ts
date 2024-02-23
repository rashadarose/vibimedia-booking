import { NgModule } from '@angular/core';
import {
  HttpClient,
  HttpClientModule
} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import $ from 'jquery';
import { DatePipe } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { FullCalendarModule } from '@fullcalendar/angular';
import { AppComponent } from './app.component';
import { CalendarComponent } from './calendar/calendar.component';
import { NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { RoomComponent } from './room/room.component';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductComponent } from './product/product.component';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';




@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    HomeComponent,
    RoomComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbPopoverModule,
    FullCalendarModule,
    NgbCollapseModule,
    ReactiveFormsModule,
    NgbCarouselModule,
    HttpClientModule,FormsModule, NgxDaterangepickerMd.forRoot()
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
