import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {
  sources = []

  constructor(private storage: Storage) { }

  ngOnInit() {
    this.storage.get('favorite').then(val => {
      if (val != null) {
        this.sources = JSON.parse(val);
      }
    });
  }

}
