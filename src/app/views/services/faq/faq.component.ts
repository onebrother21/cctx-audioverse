import { Component } from '@angular/core';

@Component({
  selector: 'qs-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
})
export class FAQComponent {
  title = "faq";
  faqs:{q:string;a:string;open:boolean}[] = [];
  faqs_:{q:string;a:string}[] = [
    {
      q:"Do you provide support?",
      a:"Answer. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id suscipit ex. Suspendisse rhoncus laoreet purus quis elementum. "+
      "Phasellus sed efficitur dolor, et ultricies sapien. Quisque fringilla sit amet dolor commodo efficitur. "+
      "Aliquam et sem odio. In ullamcorper nisi nunc, et molestie ipsum iaculis sit amet."
    },{
      q:"What is a web hosting service?",
      a:"Answer. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id suscipit ex. Suspendisse rhoncus laoreet purus quis elementum. "+
      "Phasellus sed efficitur dolor, et ultricies sapien. Quisque fringilla sit amet dolor commodo efficitur. "+
      "Aliquam et sem odio. In ullamcorper nisi nunc, et molestie ipsum iaculis sit amet."
    },{
      q:"Do I have to pay in advance?",
      a:"Answer. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id suscipit ex. Suspendisse rhoncus laoreet purus quis elementum. "+
      "Phasellus sed efficitur dolor, et ultricies sapien. Quisque fringilla sit amet dolor commodo efficitur. "+
      "Aliquam et sem odio. In ullamcorper nisi nunc, et molestie ipsum iaculis sit amet."
    },{
      q:"How much does web hosting cost?",
      a:"Answer. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id suscipit ex. Suspendisse rhoncus laoreet purus quis elementum. "+
      "Phasellus sed efficitur dolor, et ultricies sapien. Quisque fringilla sit amet dolor commodo efficitur. "+
      "Aliquam et sem odio. In ullamcorper nisi nunc, et molestie ipsum iaculis sit amet."
    },
  ];
  constructor(){
    this.faqs = this.faqs_.map(o => ({...o,open:false}));
  }
}
