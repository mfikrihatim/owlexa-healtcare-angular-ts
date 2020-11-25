import { Component, OnInit } from '@angular/core';
import { LayananService } from '../services/layanan.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

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
