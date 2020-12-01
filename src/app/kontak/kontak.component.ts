import { Component, OnInit } from '@angular/core';
import { LayananService } from '../services/layanan.service';

@Component({
  selector: 'app-kontak',
  templateUrl: './kontak.component.html',
  styleUrls: ['./kontak.component.css']
})
export class KontakComponent implements OnInit {

  constructor(private LayananService: LayananService) { }

  result: any;
  kontak: {
    id_kontak: '',
    posisi_kontak: '',
    whatsapp_kontak: '',
    phone_kontak: '',
    instagram_kontak: '',
    email_kontak: '',
    alamat_kontak: '',
  };
  ngOnInit() {
    this.LayananService.GetKontak().subscribe(response => {
      debugger
      this.result = response.data;
      if (this.result != undefined) {
        debugger
        this.kontak = this.result[0];
        console.log(this.kontak)
      }

    }, error => { },
      () => {
      })

  }

}
