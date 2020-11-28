import { Component, Input, OnInit } from '@angular/core';
import { TentangKamiService } from '../services/tentang-kami.service';

@Component({
  selector: 'app-owlexa',
  templateUrl: './owlexa.component.html',
  styleUrls: ['./owlexa.component.css']
})
export class OwlexaComponent implements OnInit {

  constructor(private tentangKamiService: TentangKamiService) { }
  result: any;
  business_unit: {
    id_business_unit: '',
    judul_business_unit: '',
    isi_business_unit: '',
    hyperlink_business_unit: '',
    video_business_unit: '',
  };

  @Input() judul: any = 'Tentang Owlexa';
  @Input() smalltext = 'Owlexa sebagai Unit Bisnis';
  // tslint:disable-next-line:max-line-length
  @Input() description = 'Untuk memenuhi kebutuhan layanan administrasi asuransi ' +
    'dan jaminan kesehatan yang handal, cepat dan akurat, maka PT Aplikanusa ' +
    'Lintasarta membentuk unit bisnis e-Health dengan brand Owlexa Healthcare. ' +
    'Dengan pengalaman selama 29 tahun sebagai perusahaan yang melayani lebih ' +
    'dari 2500 korporasi, Lintasarta berkomitmen untuk memberikan pelayanan ' +
    'terbaik bagi seluruh stakeholder di industri kesehatan.' +
    'Owlexa memberikan pelayanan tanpa batas, diantaranya memberikan pelayanan ' +
    'terhadap proses administrasi klaim perusahaan atau asuransi mulai dari ' +
    'proses membership & policy administration, eligibility member, case monitoring, ' +
    'discharge sampai pada proses pembayaran tagihan klaim biaya pengobatan. ' +
    'Didukung oleh sistem dan teknologi yang handal serta sumber daya manusia' +
    ' berpengalaman di bidangnya, Owlexa dapat memberikan layanan administrasi' +
    ' kesehatan yang optimal, efisien, cepat dan akurat serta pelayanan terbaik.';
  @Input() image = '<img src="assets/images/logo_kecil_resize.jpg">';

  ngOnInit() {
    this.tentangKamiService.GetBisnisUnit().subscribe(response => {
      debugger
      this.result = response.data;
      if (this.result != undefined) {
        debugger
        this.business_unit = this.result[0];
        // this.video = this.business_unit.video_business_unit;
        console.log(this.business_unit)
      }
    }, error => { },
      () => {
      })

  }

}
