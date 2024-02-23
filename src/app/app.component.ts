import { Component, OnInit, AfterViewInit, ElementRef} from '@angular/core';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

   constructor(private elementRef:ElementRef){}

   ngOnInit(){}

  title = 'my-app';
  isMenuCollapsed = true;

ngAfterViewInit() {


 const header = this.elementRef.nativeElement.querySelector('.page-header')
  const toggleClass = "is-sticky";
    window.addEventListener('scroll',() => {
    const currentScroll = window.pageYOffset
        if (currentScroll > 150) {
         header.classList.add(toggleClass);
      } else {
        header.classList.remove(toggleClass);
      }
  });

  // let carousel = this.elementRef.nativeElement.querySelector('.carouselOne');

  // const dragging = (e:any) =>{
  //   console.log(e.pageX)
  // }

  // carousel.addEventListener("mousemove", dragging);


}




}
