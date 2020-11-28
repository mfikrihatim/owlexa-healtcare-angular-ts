import { Component, OnInit } from '@angular/core';
import { LayananService } from '../services/layanan.service';

@Component({
  selector: 'app-o-managed-care',
  templateUrl: './o-managed-care.component.html',
  styleUrls: ['./o-managed-care.component.css']
})
export class OManagedCareComponent implements OnInit {

  constructor(private LayananService: LayananService) { }

  result: any;
  managed_care: {
    id_managed_care: '',
    judul_managed_care: '',
    isi_managed_care: '',
    hyperlink_managed_care: '',
    foto_managed_care: '',
  };
  ngOnInit() {
    this.LayananService.GetManagedCare().subscribe(response => {
      debugger
      this.result = response.data;
      if (this.result != undefined) {
        debugger
        this.managed_care = this.result;
        console.log(this.managed_care)
      }

    }, error => { },
      () => {
      })

  }

}
