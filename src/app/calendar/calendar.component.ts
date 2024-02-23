import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';
import { NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';
import { NodeapiService } from '../nodeapi.service';
import $ from 'jquery';
import { DatePipe } from '@angular/common';
import { loadStripe } from '@stripe/stripe-js';
import { HttpClient } from '@angular/common/http';




@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss'
})
export class CalendarComponent implements AfterViewInit, OnInit {

  constructor(private nodeapiService: NodeapiService, private datePipe: DatePipe, private http: HttpClient, private elementRef: ElementRef){}

  allValue: any;
  photos: string = 'Photography';
  selected: any;
  date: any;
  day: any;
  Month: any;
  Year: any;

  

   items: any = [{ "name": "Rashad",
   "images": "",
   "quantity": 1},
   { "name": "Rashad",
   "images": "",
   "quantity": 1}

   ]

   ngOnInit() {
    this.getInfo();
    //  $('#learn').click(function () {
    //  console.log('click')
    // });
  }

  ngAfterViewInit() {
    // let carousel = this.elementRef.nativeElement.querySelector('.carouselOne');

    // const dragging = (e:any) =>{
    //   carousel.scrollLeft = e.pageX;
    //   //console.log(e.pageX)
    // }

    // carousel.addEventListener("mousemove", dragging);

    let observer = new IntersectionObserver((entries)=>{
      entries.forEach((entry)=>{
        console.log(entry)
        if(entry.isIntersecting){
          entry.target.classList.add('show');
        }else{
          entry.target.classList.remove('show')
        }
      })
    })

    let hidenElements = this.elementRef.nativeElement.querySelectorAll('.hidden-fade');
    hidenElements.forEach((el:any)=> observer.observe(el))

    let hidenElementsNext = this.elementRef.nativeElement.querySelectorAll('.hidden-fade-two');
    hidenElementsNext.forEach((el:any)=> observer.observe(el))

   }


  book(){
    this.date = new Date(this.selected.endDate.toISOString().split("T")[0]);
    this.Month = this.date.getMonth()+1;
    this.day = this.date.getDate()+1;
    this.Year = this.date.getFullYear();
    console.log(this.selected.startDate.$d.toUTCString(), this.selected.endDate.toISOString().split("T")[0])
    this.date = `${this.Month}-${this.day}-${this.Year}`
    console.log(`${this.Month}-${this.day}-${this.Year}`);
    //console.log(this.date.getDate())
    }

     
     getInfo(){
      this.nodeapiService.getInfo().subscribe({
        next: (info: any) =>{
          this.allValue = info;
          console.log(this.allValue)

        }
      })
     }

       getHtmlNow(){
   
          //this.allValue = info;
          console.log('got it now');
          window.location.href = 'http://localhost:4200/all/yo'

      
     }

      getInfoId(){
      this.nodeapiService.getInfoId(38).subscribe({
        next: (info: any) =>{
          this.allValue = info;
          console.log(this.allValue[0])

        }
      })
     }

     postName(){
      let infoData = {
        'name' : 'rashad'
      }
      
      this.nodeapiService.postName(infoData).subscribe({
        next: () =>{
          // console.log(JSON.parse(infoData));
        }
      })
     }

     updateName(){
      const infoData = {
        booking: this.date,
        id: 32
      }
      this.nodeapiService.updateInfo(infoData).subscribe({
        next: () =>{
          console.log(infoData);
        }
      })
     }

     deleteName(){
      const infoData ={
        id: '33'
      }

      console.log('deleted info' + infoData.id);
      
        this.nodeapiService.deleteInfo(36).subscribe({
          next: () =>{
            console.log('deleted info' + infoData.id);
          }
        })
     }

      onCheckout(): void {
    this.http
      .post('http://vibimedia.com/all/checkout',{})
      .subscribe(async (res: any) => {
        let stripe = await loadStripe('pk_test_51OgH0MIssiDZvurlqWd4CAm05WLZIJlLsXJWLluqjE5C22qCKOKArMydlkbQfojviReh8OrDVrWm5lSEzLCPygVN00Fn0H4ir6');
        stripe?.redirectToCheckout({
          sessionId: res.id,
        });
      });
  }

  


  // onCheckout = async () => {
  //   const res = await fetch('http://localhost:4200/all/checkout', {
  //     method: 'POST',
  //     headers: {
  //       "Content-Type": 'application/json'
  //     }
  //   })
  //   const body = await res.json()
  //   window.location.href = body.url
  // }
}
