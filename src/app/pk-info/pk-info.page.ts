import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pk-info',
  templateUrl: './pk-info.page.html',
  styleUrls: ['./pk-info.page.scss'],
})
export class PkInfoPage implements OnInit {

  infoId: string;
  info;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.infoId = this.route.snapshot.paramMap.get('id');
    this.http.get('https://pokeapi.co/api/v2/pokemon/' + this.infoId).subscribe(data => {
      this.info = data;
    }
    );
  }

}
