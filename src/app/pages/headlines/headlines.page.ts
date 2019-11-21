import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-headlines',
  templateUrl: './headlines.page.html',
  styleUrls: ['./headlines.page.scss'],
})
export class HeadlinesPage implements OnInit {
  news;
  categories = [
    'China',
    'Germany',
    'America',
    'World',
    'Business',
    'Technology',
    'Entertainment',
    'Sports',
    'Science'
  ];

  constructor(private newsService: NewsService) { }

  ngOnInit() {
  }

  onGetCategoryData(category) {
    this.news = this.newsService.getData(
      `everything?q=${category.toLowerCase()}`
    );
  }

}
