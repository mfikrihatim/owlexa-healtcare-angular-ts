import { Component, OnInit } from '@angular/core';
import { LayananService } from '../services/layanan.service';

@Component({
  selector: 'app-detail-promo',
  templateUrl: './detail-promo.component.html',
  styleUrls: ['./detail-promo.component.css']
})
export class DetailPromoComponent implements OnInit {

  constructor(private LayananService: LayananService) { }

  result: any;
  promo: {
    id_promo: '',
    nama_promo: '',
    kode_promo: '',
    exp_promo: '',
    platform_promo: '',
    ket_promo: '',
    foto_promo: '',
    hyperlink_promo: '',
  };
  ngOnInit() {
    this.LayananService.GetPromo().subscribe(response => {
      debugger
      this.result = response.data;
      if (this.result != undefined) {
        debugger
        this.promo = this.result[0];
        console.log(this.promo)
      }

    }, error => { },
      () => {
      })

  }

}
