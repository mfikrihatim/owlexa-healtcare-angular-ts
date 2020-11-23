import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OwlexaComponent} from './owlexa/owlexa.component';
import { LintasartaComponent } from './lintasarta/lintasarta.component';
import { StrukturOrganisasiComponent} from './struktur-organisasi/struktur-organisasi.component';
import {FaqComponent} from './faq/faq.component';
import {PendaftaranProviderBaruComponent} from './pendaftaran-provider-baru/pendaftaran-provider-baru.component';
import {PromoComponent} from './promo/promo.component';
import {KontakComponent} from './kontak/kontak.component';
import {KarirComponent} from './karir/karir.component';
import {KonsultasiDokterComponent} from './konsultasi-dokter/konsultasi-dokter.component';
import {KlienBerhargaComponent} from './klien-berharga/klien-berharga.component';
import {ArtikelComponent} from './artikel/artikel.component';
import {ArtikelDetailComponent} from './artikel-detail/artikel-detail.component';
import {PressReleaseComponent} from './press-release/press-release.component';
import {OCorporateHealthComponent} from './o-corporate-health/o-corporate-health.component';
import {DaftarJaringanKesehatanComponent} from './daftar-jaringan-kesehatan/daftar-jaringan-kesehatan.component';
import {DetailKarirComponent} from './detail-karir/detail-karir.component';
import {EventComponent} from './event/event.component';
import {OThirdPartyAdministratorComponent} from './o-third-party-administrator/o-third-party-administrator.component';
import {LayananPendukungComponent} from './layanan-pendukung/layanan-pendukung.component';
import {OOptimasiBpjsComponent} from './o-optimasi-bpjs/o-optimasi-bpjs.component';
import {OSemiManagedCareComponent} from './o-semi-managed-care/o-semi-managed-care.component';
import {OManagedCareComponent} from './o-managed-care/o-managed-care.component';
import {OFrontEndTechnologyServiceComponent} from './o-front-end-technology-service/o-front-end-technology-service.component';
import {DetailPromoComponent} from './detail-promo/detail-promo.component';
import {ChatComponent} from './chat/chat.component';
import {SurveiOnlineProviderComponent} from './survei-online-provider/survei-online-provider.component';
import {SurveiOnlineKorporasiComponent} from './survei-online-korporasi/survei-online-korporasi.component';
import {SurveiOnlineMemberComponent} from './survei-online-member/survei-online-member.component';
import {LoginComponent} from './login/login.component';

// import {EventComponent} from './event/event.component';



const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'owlexa/owlexa', component: OwlexaComponent },
  { path: 'owlexa/lintasarta', component: LintasartaComponent },
  { path: 'owlexa/struktur-organisasi', component: StrukturOrganisasiComponent },
  { path: 'owlexa/faq', component: FaqComponent},
  { path: 'owlexa/provider-baru', component: PendaftaranProviderBaruComponent},
  { path: 'owlexa/promo', component: PromoComponent},
  { path: 'owlexa/kontak', component: KontakComponent},
  { path: 'owlexa/karir', component: KarirComponent},
  { path: 'owlexa/konsultasi-dokter', component: KonsultasiDokterComponent},
  { path: 'owlexa/klien-berharga', component: KlienBerhargaComponent},
  { path: 'owlexa/artikel', component: ArtikelComponent},
  { path: 'owlexa/artikel-detail', component: ArtikelDetailComponent},
  { path: 'owlexa/press-release', component: PressReleaseComponent},
  { path: 'owlexa/klien-berharga', component: KlienBerhargaComponent},
  { path: 'owlexa/o-corporate-health', component: OCorporateHealthComponent},
  { path: 'owlexa/daftar-jaringan-kesehatan', component: DaftarJaringanKesehatanComponent},
  { path: 'owlexa/event', component: EventComponent},
  { path: 'owlexa/layanan-pendukung', component: LayananPendukungComponent},
  { path: 'owlexa/detail-karir', component: DetailKarirComponent},
  { path: 'owlexa/o-third-party-administrator', component: OThirdPartyAdministratorComponent},
  { path: 'owlexa/o-optimasi-bpjs', component: OOptimasiBpjsComponent},
  { path: 'owlexa/o-semi-managed-care', component: OSemiManagedCareComponent},
  { path: 'owlexa/o-managed-care', component: OManagedCareComponent},
  { path: 'owlexa/o-front-end-technology-service', component: OFrontEndTechnologyServiceComponent},
  { path: 'owlexa/detail-promo', component: DetailPromoComponent},
  { path: 'owlexa/chat', component: ChatComponent},
  { path: 'owlexa/survei-online-provider', component: SurveiOnlineProviderComponent},
  { path: 'owlexa/survei-online-korporasi', component: SurveiOnlineKorporasiComponent},
  { path: 'owlexa/survei-online-member', component: SurveiOnlineMemberComponent},
  { path: 'owlexa/login', component: LoginComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
