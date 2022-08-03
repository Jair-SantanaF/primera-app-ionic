import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pk-list',
  templateUrl: './pk-list.page.html',
  styleUrls: ['./pk-list.page.scss'],
})
export class PKListPage implements OnInit {

  characters = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any>('https://pokeapi.co/api/v2/pokemon/').subscribe(data => {
      this.characters = data.results;
    }
    );
  }

}
