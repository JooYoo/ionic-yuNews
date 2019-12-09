import { Component, OnInit, Input } from '@angular/core';
import {Router, NavigationExtras} from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {
  @Input() article;

  constructor(private router: Router) { }

  ngOnInit() {}

  openContent(){
    let navigationExtra: NavigationExtras = {
      state: {
        data: this.article
      }
    };
    this.router.navigate(['tabs/content'], navigationExtra);
  }

}
