import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-headlines',
  templateUrl: './headlines.page.html',
  styleUrls: ['./headlines.page.scss'],
})
export class HeadlinesPage implements OnInit {
  catogries = [
    'China',
    'World',
    'Business',
    'Technology',
    'Entertainment',
    'Sports',
    'Science'
  ];

  constructor() { }

  ngOnInit() {
  }

}
