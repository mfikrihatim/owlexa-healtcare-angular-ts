import { Component, OnInit } from '@angular/core';
import {CrudService} from '../crud.service';

@Component({
  selector: 'app-press-release',
  templateUrl: './press-release.component.html',
  styleUrls: ['./press-release.component.css']
})
export class PressReleaseComponent implements OnInit {
  news:News[];
  constructor(private newsService : CrudService) {

  }

  ngOnInit() {
    this.newsService.listNews().subscribe(data=>{
      this.news= data;
    },erro => {
      this.news = JSON.parse(erro.error).message;
    });
    console.log('news',this.news)
  }
  }
class News {
  id: number;
  img: string;
  title: string;
  wording: string;
}

