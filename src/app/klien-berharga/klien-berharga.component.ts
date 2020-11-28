import { Component, OnInit } from '@angular/core';
import { LayananService } from '../services/layanan.service';


@Component({
  selector: 'app-klien-berharga',
  templateUrl: './klien-berharga.component.html',
  styleUrls: ['./klien-berharga.component.css']
})
export class KlienBerhargaComponent implements OnInit {

  constructor(private LayananService: LayananService) { }

  result: any;
  klien: {
    id_klien_berharga: '',
    nama_klien_berharga: '',
    foto_klien_berharga: '',
  };
  ngOnInit() {
    this.LayananService.GetKlienBerharga().subscribe(response => {
      debugger
      this.result = response.data;
      if (this.result != undefined) {
        debugger
        this.klien = this.result[0];
        console.log(this.klien)
      }

    }, error => { },
      () => {
      })

  }

}
