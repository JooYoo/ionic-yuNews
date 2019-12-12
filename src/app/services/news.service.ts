import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { LoadingController } from '@ionic/angular';

const apiKey = environment.apiKey;
const apiUrl = environment.apiUrl;
const params = new HttpParams().set('apiKey', apiKey);

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private loading;

  constructor(
    private http: HttpClient,
    public loadingController: LoadingController
  ) { }

  async showLoading() {
    this.loading = await this.loadingController.create({
      duration: 1000
    });

    return await this.loading.present();
  }

  getData(url) {
    //this.showLoading();
    return this.http.get(`${apiUrl}/${url}`, { params })
    //.pipe(
    // tap(value => {
    // if(this.loading){
    //   this.loading.dismiss();
    // }
    // console.log(value);
    // })
    //);
  }

  //TODO: to finish write the api call string
  getHeadlines(url) {
    let yesterday = this.getData(-1);
    let today = this.getDate(0);
    
    return this.http.get(`${apiUrl}/${url}&from=${yesterday}&to=${today}&sortBy=popularity`, { params });
  }

  getDate(offset: number): string {
    let date = new Date();
    let yyyy = date.getUTCFullYear();
    let mm = date.getUTCMonth() + 1;
    let dd = date.getUTCDate() + offset;

    return `${yyyy}-${mm}-${dd}`;
  }




}