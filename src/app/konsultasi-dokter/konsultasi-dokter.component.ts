import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { LayananService } from '../services/layanan.service';

@Component({
  selector: 'app-konsultasi-dokter',
  templateUrl: './konsultasi-dokter.component.html',
  styleUrls: ['./konsultasi-dokter.component.css']
})
export class KonsultasiDokterComponent implements OnInit {

  constructor(public matDialog: MatDialog, private LayananService: LayananService) { }

  result: any;
  konsultasi: {
    id_konsultasi: '',
    nama_konsultasi: '',
    perusahaan_konsultasi: '',
    posisi_konsultasi: '',
    email_konsultasi: '',
    telp_konsultasi: '',
    pertanyaan_konsultasi: '',
  };
  ngOnInit() {
    this.LayananService.GetKonsultasi().subscribe(response => {
      debugger
      this.result = response.data;
      if (this.result != undefined) {
        debugger
        this.konsultasi = this.result;
        console.log(this.konsultasi)
      }

    }, error => { },
      () => {
      })

  }

  openModal() {
    const dialogConfig = new MatDialogConfig();
    // The user can't close the dialog by clicking outside its body
    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "350px";
    dialogConfig.width = "600px";
    // https://material.angular.io/components/dialog/overview
    const modalDialog = this.matDialog.open(ModalComponent, dialogConfig);
  }

}
