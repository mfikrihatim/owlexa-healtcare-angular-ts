import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { OrgChartModule } from 'angular-org-chart';
import { NgxOrgChartModule } from 'ngx-org-chart';
// import { OrgChartModule } from 'ng2-org-chart';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { ModalComponent } from './modal/modal.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterpageComponent } from './footerpage/footerpage.component';
import { HomebodyComponent } from './homebody/homebody.component';
import { LatestNewsComponent } from './latest-news/latest-news.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SelectionUpMenuComponent } from './selection-up-menu/selection-up-menu.component';
import { NavbarInformationComponent } from './navbar-information/navbar-information.component';
import { SliderImageComponent } from './slider-image/slider-image.component';
import { LogoAndInformationComponent } from './logo-and-information/logo-and-information.component';
import { MapComponent } from './map/map.component';
import { LintasartaComponent } from './lintasarta/lintasarta.component';
import { AboutOwlexaComponent } from './about-owlexa/about-owlexa.component';
import { OwlexaComponent } from './owlexa/owlexa.component';
import { StrukturOrganisasiComponent } from './struktur-organisasi/struktur-organisasi.component';
import { FaqComponent } from './faq/faq.component';
import { PendaftaranProviderBaruComponent } from './pendaftaran-provider-baru/pendaftaran-provider-baru.component';
import { PromoComponent } from './promo/promo.component';
import { KontakComponent } from './kontak/kontak.component';
import { KarirComponent } from './karir/karir.component';
import { KonsultasiDokterComponent } from './konsultasi-dokter/konsultasi-dokter.component';
import { KlienBerhargaComponent } from './klien-berharga/klien-berharga.component';
import { ArtikelComponent } from './artikel/artikel.component';
import { ArtikelDetailComponent } from './artikel-detail/artikel-detail.component';
import { PressReleaseComponent } from './press-release/press-release.component';
import { EventComponent } from './event/event.component';
import { DetailKarirComponent } from './detail-karir/detail-karir.component';
import { OCorporateHealthComponent } from './o-corporate-health/o-corporate-health.component';
import { OThirdPartyAdministratorComponent } from './o-third-party-administrator/o-third-party-administrator.component';
import { OOptimasiBpjsComponent } from './o-optimasi-bpjs/o-optimasi-bpjs.component';
import { OSemiManagedCareComponent } from './o-semi-managed-care/o-semi-managed-care.component';
import { OManagedCareComponent } from './o-managed-care/o-managed-care.component';
import { OFrontEndTechnologyServiceComponent } from './o-front-end-technology-service/o-front-end-technology-service.component';
import { LayananPendukungComponent } from './layanan-pendukung/layanan-pendukung.component';
import { DaftarJaringanKesehatanComponent } from './daftar-jaringan-kesehatan/daftar-jaringan-kesehatan.component';
import { DetailPromoComponent } from './detail-promo/detail-promo.component';
import { NavbarMobileComponent } from './navbar-mobile/navbar-mobile.component';
import { ChatComponent } from './chat/chat.component';
import {CrudService} from './crud.service';
import { SurveiOnlineProviderComponent } from './survei-online-provider/survei-online-provider.component';
import { SurveiOnlineKorporasiComponent } from './survei-online-korporasi/survei-online-korporasi.component';
import { SurveiOnlineMemberComponent } from './survei-online-member/survei-online-member.component';
import { NavbarFixedTopComponent } from './navbar-fixed-top/navbar-fixed-top.component';
import { LoginComponent } from './login/login.component';
import { TentangKamiService } from './services/tentang-kami.service';

declare var $: any;
console.log(`jQuery version: ${$.fn.jquery}`);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterpageComponent,
    HomebodyComponent,
    LatestNewsComponent,
    NavbarComponent,
    SelectionUpMenuComponent,
    NavbarInformationComponent,
    SliderImageComponent,
    LogoAndInformationComponent,
    MapComponent,
    LintasartaComponent,
    AboutOwlexaComponent,
    OwlexaComponent,
    StrukturOrganisasiComponent,
    FaqComponent,
    PendaftaranProviderBaruComponent,
    PromoComponent,
    KontakComponent,
    KarirComponent,
    KonsultasiDokterComponent,
    KlienBerhargaComponent,
    ArtikelComponent,
    ArtikelDetailComponent,
    PressReleaseComponent,
    EventComponent,
    DetailKarirComponent,
    OCorporateHealthComponent,
    OThirdPartyAdministratorComponent,
    OOptimasiBpjsComponent,
    OSemiManagedCareComponent,
    OManagedCareComponent,
    OFrontEndTechnologyServiceComponent,
    LayananPendukungComponent,
    DaftarJaringanKesehatanComponent,
    DetailPromoComponent,
    NavbarMobileComponent,
    ChatComponent,
    SurveiOnlineProviderComponent,
    SurveiOnlineKorporasiComponent,
    SurveiOnlineMemberComponent,
    NavbarFixedTopComponent,
    LoginComponent,
    ModalComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    NgxPageScrollCoreModule,
    NgxPageScrollModule,
    OrgChartModule,
    NgxOrgChartModule,
    MatButtonModule,
    MatDialogModule,
    BrowserAnimationsModule,
  ],
  providers: [CrudService,TentangKamiService],
  bootstrap: [AppComponent],
  entryComponents: [ModalComponent]
})
export class AppModule { }
