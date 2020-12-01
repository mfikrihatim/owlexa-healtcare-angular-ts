import { Component, OnInit } from '@angular/core';
import { LayananService } from '../services/layanan.service';

@Component({
  selector: 'app-o-front-end-technology-service',
  templateUrl: './o-front-end-technology-service.component.html',
  styleUrls: ['./o-front-end-technology-service.component.css']
})
export class OFrontEndTechnologyServiceComponent implements OnInit {

  constructor(private LayananService: LayananService) { }

  result: any;
  technologi_service: {
    id_technologi_service: '',
    judul_technologi_service: '',
    isi_technologi_service: '',
    hyperlink_technologi_service: '',
    foto_technologi_service: '',
  };
  ngOnInit() {
    this.LayananService.GetTechnology().subscribe(response => {
      debugger
      this.result = response.data;
      if (this.result != undefined) {
        debugger
        this.technologi_service = this.result;
        console.log(this.technologi_service)
      }

    }, error => { },
      () => {
      })

  }

}
