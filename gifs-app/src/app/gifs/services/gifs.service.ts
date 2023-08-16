import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchResponse, Gif } from '../interfaces/gifs.interfaces';

@Injectable({
  providedIn: 'root'
})

export class GifsService {
  
  constructor(private http: HttpClient) { 
    this.loadLocalsStorage();
  }

  private apiKey: string = 'vFxK9CenaEdbilkLknqHorfWiGD3a9yp';
  private serviceUrl: string = 'https://api.giphy.com/v1/gifs';
  private _tagsHistory: string[] = [];
  public gifList: Gif[] = [];

  get tagsHistory() {
    return [...this._tagsHistory];
  }

  searchTag(tag: string): void {
    if (tag.length === 0) return;
    this.organizeHistory(tag);
    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '10')
      .set('q', tag);
    this.http.get<SearchResponse>(`${this.serviceUrl}/search`, { params })
      .subscribe(resp => {
        this.gifList = resp.data;
        console.log('Gifts', this.gifList);
      });
  }

  private organizeHistory(tag: string): void {
    tag = tag.toLowerCase();
    if (this.tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag !== tag);
    }
    this._tagsHistory.unshift(tag);
    this._tagsHistory = this.tagsHistory.splice(0, 10);
    this.saveLocalStorage();
  }
  private saveLocalStorage():void
{
  localStorage.setItem('history',JSON.stringify(this._tagsHistory));
}

private loadLocalsStorage():void{
  if(!localStorage.getItem('history')) return;
  this._tagsHistory = JSON.parse(localStorage.getItem('history')!);
  if(this._tagsHistory.length === 0) return;
  this.searchTag(this._tagsHistory[0]);
}
}
