import { Component, OnInit } from '@angular/core';
import { LayananService } from '../services/layanan.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  constructor(private LayananService: LayananService) { }

  result: any;
  faq: {
    id_faq: '',
    isi_faq: '',

  };
  ngOnInit() {
    this.LayananService.GetFaq().subscribe(response => {
      debugger
      this.result = response.data;
      if (this.result != undefined) {
        debugger
        this.faq = this.result;
        console.log(this.faq)
      }

    }, error => { },
      () => {
      })

  }


}
