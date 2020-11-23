import { Component, OnInit } from '@angular/core';
import {ModalComponent} from '../modal/modal.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
// import { OrgData } from 'angular-org-chart/src/app/modules/org-chart/orgData';
// import { IEmployee } from 'ng2-org-chart';

@Component({
  selector: 'app-struktur-organisasi',
  templateUrl: './struktur-organisasi.component.html',
  styleUrls: ['./struktur-organisasi.component.scss']
})
export class StrukturOrganisasiComponent implements OnInit {
  nodes: any = [
    {
      name: 'Arya Damar',
      cssClass: 'directur',
      image: 'assets/images/svg/eye.svg',
      title: 'President Directur',
      childs: [
        {
          name: 'Yosi Widhayanti',
          cssClass: 'manager',
          image: 'assets/images/svg/eye.svg',
          title: 'General Manager of E-Health Strategic Business Unit',
        },
        {
          name: 'Tri Rahayu',
          cssClass: 'manager',
          image: 'assets/images/svg/eye.svg',
          title: 'Operation Manager',
        },
        {
          name: 'Elvira Sofiyanti',
          cssClass: 'manager',
          image: 'assets/images/svg/eye.svg',
          title: 'Provider Relation Manager',
        },
        {
          name: 'Angga Priyo Riyanto',
          cssClass: 'manager',
          image: 'assets/images/svg/eye.svg',
          title: 'Senior Manager IT & Infrastructure',

        }
      ]
    },
  ];

constructor(public matDialog: MatDialog) { }

  ngOnInit() {
  this.nodes[0].jabatan = 'arya damar deskripsi';
  this.nodes[0].childs[0].jabatan = 'Yosi Widhayanti telah memiliki lebih dari 20 tahun pengalaman di bidang TI.\n' +
    '\n' +
    'Bergabung di PT Aplikanusa Lintasarta sejak tahun 1991 di Divisi TI dan memegang jabatan penting di Divisi TI. Pernah bertanggung jawab menangani bidang Marketing Value Added Services, hingga menjadi General Manager TI di tahun 2007.\n' +
    '\n' +
    'Selama di Divisi TI, beliau bertanggung jawab terhadap perencanaan dan penyusunan roadmap pengembangan aplikasi dan infrastruktur TI, pengembangan sistem aplikasi dan layanan operasional aplikasi dan infrastruktur TI. Pekerjaan beliau termasuk mengelola operasional Data Center, Cloud serta managed services TI. Selain itu sebagai tim perencanaan dan implementasi ISO9001:2008, ISO27000:2005, K3L, Sarbanes Oxley, ISO20001 di Lintasarta.\n' +
    '\n' +
    'Dibawah kepemimpinan beliau, Lintasarta pernah mendapat penghargaan terbaik ke dua pada e-company award tahun 2009 versi majalah Warta Ekonomi dan mendapat penghargaan IT company pada tahun 2010 versi majalah SWA. Selain penghargaan tersebut, beliau mendapat penghargaan sebagai Best Future IT Leader terbaik ke dua versi majalah SWA tahun 2010.\n' +
    '\n' +
    'Wanita kelahiran tahun 1966, menjabat sebagai General Manager E-Health Strategic Business Unit sejak bulan Juli 2015.\n' +
    '\n' +
    'Yosi menyelesaikan pendidikan Sarjana Elektro di Universitas Indonesia pada tahun 1991 dan meraih predikat cumlaude Magister Teknologi Informasi di Universitas Indonesia pada tahun 2015.';
  this.nodes[0].childs[1].jabatan = 'tri rahayu deskripsi';
    this.nodes[0].childs[2].jabatan = 'Elvira Sofiyanti deskripsi';
    this.nodes[0].childs[3].jabatan = 'Angga Priyo Riyanto deskripsi';

    this.nodes[0].images = 'assets/images/Arya_Damar_1.jpg';
    this.nodes[0].childs[0].images = 'assets/images/yosi.jpg';
    this.nodes[0].childs[1].images = 'assets/images/dr_tri.jpg';
    this.nodes[0].childs[2].images = 'assets/images/esn.jpg';
    this.nodes[0].childs[3].images = 'assets/images/angga.png';
    console.log("nodooll",this.nodes)
  }

  openModal(event) {
  console.log("event data",event);
    const dialogConfig = new MatDialogConfig();
    // The user can't close the dialog by clicking outside its body
    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "350px";
    dialogConfig.width = "600px";
    dialogConfig.data = {
      name : event.name,
      jabatan : event.title,
      deskripsi : event.jabatan,
      foto:event.images
    }
    // https://material.angular.io/components/dialog/overview
    const modalDialog = this.matDialog.open(ModalComponent, dialogConfig);
    console.log("dialog data",dialogConfig.data)
  }
}
