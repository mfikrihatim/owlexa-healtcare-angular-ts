import { Component, OnInit } from '@angular/core';
import {CrudService} from '../crud.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-pendaftaran-provider-baru',
  templateUrl: './pendaftaran-provider-baru.component.html',
  styleUrls: ['./pendaftaran-provider-baru.component.css']
})
export class PendaftaranProviderBaruComponent implements OnInit {
  providers:ProviderBaru = new ProviderBaru();
  input = new FormData();
  submitted : boolean = false;
  valueRadio;
  constructor(private providerService : CrudService,
              private router : Router) { }
  ngOnInit() {
  }

  onSubmit(){
    this.submitted = true;
    this.providerService.createProvider(this.providers)
      .subscribe(data=>console.log("datassskuh",data), error => console.log(error));
    this.providerService.uploadFileProvider(this.providers).subscribe(
      data=>console.log(data), error => {
        console.log(error)
      }
    )
    this.providers = new ProviderBaru();
    this.gotoListProvider();
  }

  gotoListProvider(){
    this.router.navigateByUrl('owlexa/daftar-jaringan-kesehatan')
  }

  onItemChange(value){
    this.valueRadio = value;
  }
}

class ProviderBaru{
  id: number;
  providerName: string;
  providerCategory: string;
  address: string;
  city:string;
  province:string;
  country:string;
  postalCode:number;
  bankName:string;
  bankAccount:string;
  bankAccountName:string;
  npwp:string;
  nomerNpwp:string;
  tdp:string;
  nomerTdp:string;
  suratIzinOps:string;
  nomerSuratIzinOps:string;
  softcopyTarif:string;
  suratIzinPenetapanKelas:string;
  softcopyObat:string;
  companyProfile:string;
  telelphone:string;
  fax:string;
  namaMarketing:string;
  telpMarketing:string;
  emailMarketing:string;
  namaFinance:string;
  telpFinance:string;
  emailFinance:string;
  namaIt:string;
  telpIt:string;
  emailIt:string;
  website:string;
  telpCp:string;
  longitude:string;
  latitude:string;
  indemnity:string;
  semiManagedCare:string;
  managedCare:string;
  optimasiBPJS:string;
  technologyOnly:string;
  vip:string;
  kerjasamaBpjs:string;
  jaringanInet:string;
  diskon:string;
  kesepakatanHarga:string;
  sisfoRs:string;
  bersediaBridging:boolean;
  bersediaPksProses:boolean;
  suratKerjasamaOwlexa:boolean;
  digitalClaim:boolean;
}
