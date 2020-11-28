import { Component, OnInit } from '@angular/core';
import { LayananService } from '../services/layanan.service';

@Component({
  selector: 'app-latest-news',
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.css']
})
export class LatestNewsComponent implements OnInit {

  constructor(private LayananService: LayananService) { }

  result: any;
  berita: {
    id: '',
    img: '',
    title: '',
    wording: '',
    hyperlink: '',
  };
  ngOnInit() {
    this.LayananService.GetBerita().subscribe(response => {
      debugger
      this.result = response.data;
      if (this.result != undefined) {
        debugger
        this.berita = this.result[0];
        console.log(this.berita)
      }

    }, error => { },
      () => {
      })

  }

}
