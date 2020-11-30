import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LayananService } from '../services/layanan.service';

@Component({
  selector: 'app-detail-promo',
  templateUrl: './detail-promo.component.html',
  styleUrls: ['./detail-promo.component.css']
})
export class DetailPromoComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private LayananService: LayananService) { }
  id_promo: string = null;
  result: any;
  promo: {
    // id_promo: '',
    nama_promo: '',
    kode_promo: '',
    exp_promo: '',
    platform_promo: '',
    ket_promo: '',
    foto_promo: '',
    hyperlink_promo: '',
  };
  ngOnInit() {
    this.id_promo = this.activatedRoute.snapshot.queryParamMap.get('id_promo');
    debugger
    this.LayananService.getByIdPromo(this.id_promo).subscribe(data => {
      this.result = data.data[0];
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
