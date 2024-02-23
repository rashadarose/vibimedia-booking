import { Component } from '@angular/core';
import { Calendar, CalendarOptions } from '@fullcalendar/core'; // useful for typechecking
import dayGridPlugin from '@fullcalendar/daygrid';
import iCalendarPlugin from '@fullcalendar/icalendar'
import interactionPlugin from '@fullcalendar/interaction';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  

   calendarOptions: CalendarOptions = {
    
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin,iCalendarPlugin, interactionPlugin ],
    dateClick: (info)=>{
     },
    select: function(info) {
      // alert('selected ' + info.startStr + ' to ' + info.endStr);
      
       let jump = prompt('')
       console.log(jump)
     },
    selectable: true,
    events: 
    {url: '../assets/listing-644889898312763227.ics',
    format: 'ics',}
    
  };

  handleDateClick(arg: any) {
    alert('date click! ' + arg.dateStr)
  }

  //dateClick: (arg:any) => this.handleDateClick(arg),

}

// {
//   title  : 'event2',
//   start  : '2010-01-05',
//   end    : '2010-01-07'
// },

// {url: '../assets/listing-644889898312763227.ics',
//   format: 'ics',}