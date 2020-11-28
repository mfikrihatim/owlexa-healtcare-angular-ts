import { Component, OnInit } from '@angular/core';
import { LayananService } from '../services/layanan.service';

@Component({
  selector: 'app-o-corporate-health',
  templateUrl: './o-corporate-health.component.html',
  styleUrls: ['./o-corporate-health.component.css']
})
export class OCorporateHealthComponent implements OnInit {

  constructor(private LayananService: LayananService) { }

  result: any;
  corporate_health: {
    id_corporate_health: '',
    judul_corporate_health: '',
    isi_corporate_health: '',
    hyperlink_corporate_health: '',
    foto_corporate_health: '',
  };
  ngOnInit() {
    this.LayananService.GetCorporate().subscribe(response => {
      debugger
      this.result = response.data;
      if (this.result != undefined) {
        debugger
        this.corporate_health = this.result;
        console.log(this.corporate_health)
      }

    }, error => { },
      () => {
      })

  }


}
