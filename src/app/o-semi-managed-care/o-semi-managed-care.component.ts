import { Component, OnInit } from '@angular/core';
import { LayananService } from '../services/layanan.service';

@Component({
  selector: 'app-o-semi-managed-care',
  templateUrl: './o-semi-managed-care.component.html',
  styleUrls: ['./o-semi-managed-care.component.css']
})
export class OSemiManagedCareComponent implements OnInit {

  constructor(private LayananService: LayananService) { }

  result: any;
  semi_managed_care: {
    id_semi_managed_care: '',
    judul_semi_managed_care: '',
    isi_semi_managed_care: '',
    hyperlink_semi_managed_care: '',
    files: '',
  };
  ngOnInit() {
    this.LayananService.GetSemiManagedCare().subscribe(response => {
      debugger
      this.result = response.data;
      if (this.result != undefined) {
        debugger
        this.semi_managed_care = this.result[0];
        console.log(this.semi_managed_care)
      }

    }, error => { },
      () => {
      })

  }

}
