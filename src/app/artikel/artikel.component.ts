import { Component, OnInit } from '@angular/core';
import {CrudService} from '../crud.service';

@Component({
  selector: 'app-artikel',
  templateUrl: './artikel.component.html',
  styleUrls: ['./artikel.component.css']
})
export class ArtikelComponent implements OnInit {
  articel : Articel[];
  constructor(private articelService : CrudService) { }

  ngOnInit() {
    this.articelService.listArticel().subscribe(data=>{
      this.articel= data;
    },erro => {
      this.articel = JSON.parse(erro.error).message;
    });
    console.log('news',this.articel)
  }
  }

class Articel {
  id: number;
  img: string;
  title: string;
  wording: string;
}

