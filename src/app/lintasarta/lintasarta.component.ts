import { Component, OnInit } from '@angular/core';
import { debug } from 'console';

import { TentangKamiService } from '../services/tentang-kami.service';
@Component({
  selector: 'app-lintasarta',
  templateUrl: './lintasarta.component.html',
  styleUrls: ['./lintasarta.component.css']
})
export class LintasartaComponent implements OnInit {

  constructor(private tentangKamiService: TentangKamiService) { }
  result : any;
  judul: any;
  smalltext: string;
  description: string;
  video : string;
  lintasarta : {
    id_lintasarta: '',
    judul_lintasarta: '',
    isi_lintasarta: '',
    hyperlink_lintasarta: '',
    video_lintasarta: '',
  };
  ngOnInit() {
    this.tentangKamiService.GetLintasarta().subscribe(response => {
      debugger
    this.result = response.data;
    if(this.result != undefined){
      debugger
      this.lintasarta = this.result[0];
      this.video = this.lintasarta.video_lintasarta;
      console.log(this.lintasarta)
    }

    }, error => { },
      () => {
      })

  }
}
