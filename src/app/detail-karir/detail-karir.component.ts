import { Component, OnInit } from '@angular/core';
import { LayananService } from '../services/layanan.service';

@Component({
  selector: 'app-detail-karir',
  templateUrl: './detail-karir.component.html',
  styleUrls: ['./detail-karir.component.css']
})
export class DetailKarirComponent implements OnInit {

  constructor(private LayananService: LayananService) { }

  result: any;
  karir: {
    id_karir: '',
    posisi_karir: '',
    perusahaan_karir: '',
    isi_karir: '',
    foto_karir: '',
  };
  ngOnInit() {
    this.LayananService.GetKarir().subscribe(response => {
      debugger
      this.result = response.data;
      if (this.result != undefined) {
        debugger
        this.karir = this.result[0];
        console.log(this.karir)
      }

    }, error => { },
      () => {
      })

  }

}
