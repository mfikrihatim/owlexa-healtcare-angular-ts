import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import { LayananService } from '../services/layanan.service';

@Component({
  selector: 'app-press-release',
  templateUrl: './press-release.component.html',
  styleUrls: ['./press-release.component.css']
})
export class PressReleaseComponent implements OnInit {
  news: News[];
  constructor(private newsService: CrudService, private LayananService: LayananService) {

  }
  result: any;
  berita: {
    id: '',
    img: '',
    title: '',
    wording: '',
    hyperlink: '',
  };
  ngOnInit() {

    this.newsService.listNews().subscribe(data => {
      this.news = data;
      // this.getBerita();
    }, erro => {
      this.news = JSON.parse(erro.error).message;
    });
    console.log('news', this.news)
  }

  // getBerita() {
  //   this.LayananService.GetBerita().subscribe(response => {
  //     debugger
  //     this.result = response.data;
  //     if (this.result != undefined) {
  //       debugger
  //       this.berita = this.result[0];
  //       console.log(this.berita)
  //     }

  //   }, error => { },
  //     () => {
  //     })
  // }

}

class News {
  id: number;
  img: string;
  title: string;
  wording: string;
}

