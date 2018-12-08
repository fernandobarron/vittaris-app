import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { WelcomePage } from '../pages/welcome/welcome';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { HomePage } from '../pages/home/home';
import { MapaPage } from '../pages/mapa/mapa';
import { GrupoPage } from '../pages/grupo/grupo';

import { PerfilPage } from '../pages/perfil/perfil';
import { InicioPage } from '../pages/inicio/inicio';
import { ListaenfermedadesPage } from '../pages/listaenfermedades/listaenfermedades';
import { AgendaPage } from '../pages/agenda/agenda';
import { EspecialistasPage } from '../pages/especialistas/especialistas';
import { EnfermedadDetallePage } from '../pages/enfermedad-detalle/enfermedad-detalle';
import { RegistroConsultaPage } from '../pages/registro-consulta/registro-consulta';
import { ListaConsultaPage } from '../pages/lista-consulta/lista-consulta';
@Component({
  templateUrl: 'app.html'
})
export class VittarisApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any}>;
  menu: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Inicio', component: WelcomePage },
      { title: 'Asesoria', component: HomePage },
      { title: 'Buscar', component: MapaPage },
      { title: 'Registro', component: SignupPage },
      { title: 'Login', component: LoginPage }
    ];
    this.menu = [
      { title: 'Inicio', component: InicioPage },
      { title: 'Perfil',component: PerfilPage },
      { title: 'Agenda',component: AgendaPage },
      { title: 'Expediente',component: ListaConsultaPage },
      { title: 'Especialistas',component: EspecialistasPage },
      { title: 'Pagos',component: PerfilPage },
      { title: 'Aseguradora',component: PerfilPage },
      { title: 'Legales',component: PerfilPage },
      { title: 'Grupos',component: GrupoPage },
      { title: 'Cerrar Sesión', component: LoginPage }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
