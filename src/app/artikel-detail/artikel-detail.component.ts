import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CrudService } from '../crud.service';
@Component({
  selector: 'app-artikel-detail',
  templateUrl: './artikel-detail.component.html',
  styleUrls: ['./artikel-detail.component.css']
})
export class ArtikelDetailComponent implements OnInit {
  id: string = null;
  articel: Articel;
  constructor(private activatedRoute: ActivatedRoute,private articelService: CrudService) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.queryParamMap.get('id');
    this.articelService.getByIdArticel(this.id).subscribe(data => {
      this.articel = data.data[0];
    }, erro => {
      this.articel = JSON.parse(erro.error).message;
    });
    console.log('news', this.articel)
  }
  }


class Articel {
  id: number;
  img: string;
  title: string;
  wording: string;
}
