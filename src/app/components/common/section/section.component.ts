import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  testimonials = [
    {
      quote: "“It surpassed our expectations”",
      desc: "Filed has completely surpassed our expectations. I will refer everyone I know. Filed is worth much more than I paid.",
      name: "Tania Y. Flexi Content @Hello",
      img: "/assets/icons/f2.png"
    },
    {
      quote: "“The essential marketing tool”",
      desc: "“Filed is the most valuable business resource we have EVER purchased. I was amazed at the quality of filed. We were treated like royalty.”",
      name: "Jack Francis Manager @ Accidents Direct",
      img: "/assets/icons/f1.png"
    },
    {
      quote: "“Your company is truly upstanding”",
      desc: "“The service was excellent. After using filed my business skyrocketed! It really saves me time and effort.”",
      name: "Dawna N. Editor @ Museum of Typography",
      img: "/assets/icons/f3.png"
    }
  ]

}
