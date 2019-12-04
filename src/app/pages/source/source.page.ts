import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-source',
  templateUrl: './source.page.html',
  styleUrls: ['./source.page.scss'],
})
export class SourcePage implements OnInit {
  news;
  id;
  constructor(private newsService: NewsService,
    private activedRoute: ActivatedRoute,
    private router: Router) {
      this.receiveFromSources();
  }

  ngOnInit() {
   // this.id = this.activedRoute.snapshot.paramMap.get('id');
   // this.news = this.newsService.getData(`everything?sources=${this.id}`);
  }

  receiveFromSources() {
    this.activedRoute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.id = this.router.getCurrentNavigation().extras.state.id;
        this.news = this.newsService.getData(`everything?sources=${this.id}`);
      }
    })
  }



}
