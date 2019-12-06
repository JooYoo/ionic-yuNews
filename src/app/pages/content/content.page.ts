import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.page.html',
  styleUrls: ['./content.page.scss'],
})
export class ContentPage implements OnInit {
  data;

  constructor(private route: ActivatedRoute, private router: Router) { 
    this.receiveFromArticle();
  }

  ngOnInit() {
    
  }

  receiveFromArticle(){
    this.route.queryParams.subscribe(params =>{
      if(this.router.getCurrentNavigation().extras.state){
        this.data = this.router.getCurrentNavigation().extras.state.data;
      }
    })
  }

}
