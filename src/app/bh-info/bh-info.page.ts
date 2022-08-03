import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-bh-info',
  templateUrl: './bh-info.page.html',
  styleUrls: ['./bh-info.page.scss'],
})
export class BhInfoPage implements OnInit {

  infoId: string;
  info;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.infoId = this.route.snapshot.paramMap.get('id');
    this.http.get('https://swapi.dev/api/people/' + this.infoId).subscribe(data => {
      this.info = data;
    }
    );
  }

}
