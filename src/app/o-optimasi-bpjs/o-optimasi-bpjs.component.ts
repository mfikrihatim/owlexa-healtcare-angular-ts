import { Component, OnInit } from '@angular/core';
import { LayananService } from '../services/layanan.service';

@Component({
  selector: 'app-o-optimasi-bpjs',
  templateUrl: './o-optimasi-bpjs.component.html',
  styleUrls: ['./o-optimasi-bpjs.component.css']
})
export class OOptimasiBpjsComponent implements OnInit {

  constructor(private LayananService: LayananService) { }

  result: any;
  optimalisasi_bpjs: {
    id_optimalisasi_bpjs: '',
    judul_optimalisasi_bpjs: '',
    isi_optimalisasi_bpjs: '',
    hyperlink_optimalisasi_bpjs: '',
    foto_optimalisasi_bpjs: '',
  };
  ngOnInit() {
    this.LayananService.GetOptimalisasiBPJS().subscribe(response => {
      debugger
      this.result = response.data;
      if (this.result != undefined) {
        debugger
        this.optimalisasi_bpjs = this.result[0];
        console.log(this.optimalisasi_bpjs)
      }

    }, error => { },
      () => {
      })

  }

}
