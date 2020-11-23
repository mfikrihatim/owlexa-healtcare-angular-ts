import {Component, OnInit} from '@angular/core';
import {CrudService} from '../crud.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-daftar-jaringan-kesehatan',
  templateUrl: './daftar-jaringan-kesehatan.component.html',
  styleUrls: ['./daftar-jaringan-kesehatan.component.css']
})
export class DaftarJaringanKesehatanComponent implements OnInit {
  providers:Provider[];
  constructor(private providerService : CrudService) { }

  ngOnInit() {
    this.providerService.listProvider().subscribe(data=>{
      this.providers= data;
    },erro => {
      this.providers = JSON.parse(erro.error).message;
    });
    console.log('provider',this.providers)
  }
}

class Provider {
  id: number;
  type: string;
  name: string;
  address: string;
  city: string;
  phoneNumber : string;
}
