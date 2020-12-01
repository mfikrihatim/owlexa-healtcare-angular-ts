import { Component, OnInit } from '@angular/core';
import { LayananService } from '../services/layanan.service';

@Component({
  selector: 'app-o-third-party-administrator',
  templateUrl: './o-third-party-administrator.component.html',
  styleUrls: ['./o-third-party-administrator.component.css']
})
export class OThirdPartyAdministratorComponent implements OnInit {

  constructor(private LayananService: LayananService) { }

  result: any;
  third_party: {
    id_third_party: '',
    judul_third_party: '',
    isi_third_party: '',
    hyperlink_third_party: '',
    foto_third_party: '',
  };
  ngOnInit() {
    this.LayananService.GetThirdParty().subscribe(response => {
      debugger
      this.result = response.data;
      if (this.result != undefined) {
        debugger
        this.third_party = this.result;
        console.log(this.third_party)
      }

    }, error => { },
      () => {
      })

  }

}
