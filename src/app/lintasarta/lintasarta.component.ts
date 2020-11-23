import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lintasarta',
  templateUrl: './lintasarta.component.html',
  styleUrls: ['./lintasarta.component.css']
})
export class LintasartaComponent implements OnInit {

  constructor() { }

  judul: any;
  smalltext: string;
  description: string;
  ngOnInit() {
    this.judul = 'Tentang Lintas Arta';
    this.smalltext = '  PT Aplikanusa Lintasarta adalah perusahaan yang bergerak di bidang Information and Technology';
    // tslint:disable-next-line:max-line-length
    this.description = 'Didirikan tahun 1988, Lintasarta bermula dari menyediakan sistem pelaporan bank dan layanan komunikasi data bagi sektor\n' +
      '  perbankan, yang akhirnya berujung pada pengembangan ATM Bersama. ATM Bersama ini memungkinkan konsumen berbagai bank\n' +
      '  yang berbeda melakukan transaksi antar bank melalui ATM. Di saat yang sama, keahlian perusahaan dan cakupan operasional\n' +
      '  berkembang secara eksponensial, menjadikan Lintasarta sebagai salah satu penyedia layanan ICT terkemuka di Indonesia.\n' +
      '  Kini Lintasarta melayani lebih dari 1.600 mitra perusahaan, menghubungkan lebih dari 18.000 jaringan, memanfaatkan\n' +
      '  infrastruktur canggih berbasis Platform Next Generation Network (NGN), dengan local support di lebih dari 44 kota yang\n' +
      '  tersebar di berbagai propinsi di Indonesia.';
  }

}
