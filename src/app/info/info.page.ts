import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {

  infoId: string;
  info;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.infoId = this.route.snapshot.paramMap.get('id');
    this.http.get('https://rickandmortyapi.com/api/character/' + this.infoId).subscribe(data => {
      this.info = data;
    }
    );
  }
}