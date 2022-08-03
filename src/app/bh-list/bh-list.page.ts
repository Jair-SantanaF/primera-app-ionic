import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-bh-list',
  templateUrl: './bh-list.page.html',
  styleUrls: ['./bh-list.page.scss'],
})
export class BHListPage implements OnInit {

  characters = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any>('https://swapi.dev/api/people/').subscribe(data => {
      this.characters = data.results;
    }
    );
  }

}
