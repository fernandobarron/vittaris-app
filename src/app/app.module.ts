import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { VittarisApp } from './app.component';
import { WelcomePage } from '../pages/welcome/welcome';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { MapaPage } from '../pages/mapa/mapa';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NativeAudio } from '@ionic-native/native-audio';

import { GoogleMaps } from '@ionic-native/google-maps';
import { Geolocation } from '@ionic-native/geolocation';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';

import { PerfilPage } from '../pages/perfil/perfil';
import { InicioPage } from '../pages/inicio/inicio';
import { AlertaPage } from '../pages/alerta/alerta';

import {RegistroEspacialistaPage} from '../pages/registro-espacialista/registro-espacialista';
import {RegistroEstudiantePage} from '../pages/registro-estudiante/registro-estudiante';
import { ListaenfermedadesPage } from '../pages/listaenfermedades/listaenfermedades';
import { AgendaPage } from '../pages/agenda/agenda';
import { EspecialistasPage } from '../pages/especialistas/especialistas';
import { EnfermedadDetallePage } from '../pages/enfermedad-detalle/enfermedad-detalle';

import { RegistroConsultaPage } from '../pages/registro-consulta/registro-consulta';
import { ListaConsultaPage } from '../pages/lista-consulta/lista-consulta';
import { DetalleConsultaPage } from '../pages/detalle-consulta/detalle-consulta';
import { GrupoPage } from '../pages/grupo/grupo';

import { Calendar } from '@ionic-native/calendar';
import { NgCalendarModule  } from 'ionic2-calendar';
@NgModule({
  declarations: [
    VittarisApp,
    WelcomePage,
    LoginPage,
    SignupPage,
    HomePage,
    ListPage,
    MapaPage,
    PerfilPage,
    InicioPage,
    AlertaPage,
    RegistroEspacialistaPage,
    RegistroEstudiantePage,
    ListaenfermedadesPage,
    AgendaPage,
    EspecialistasPage,
    EnfermedadDetallePage,
    RegistroConsultaPage,
    ListaConsultaPage,
    DetalleConsultaPage,GrupoPage

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(VittarisApp),
    NgCalendarModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    VittarisApp,
    WelcomePage,
    LoginPage,
    SignupPage,
    HomePage,
    ListPage,
    MapaPage,
    PerfilPage,
    InicioPage,
    AlertaPage,
    RegistroEspacialistaPage,
    RegistroEstudiantePage,
    ListaenfermedadesPage,
    AgendaPage,
    EspecialistasPage,
    EnfermedadDetallePage,
    RegistroConsultaPage,ListaConsultaPage,DetalleConsultaPage,GrupoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    NativeAudio,
    GoogleMaps,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider,
    Calendar
  ]
})
export class AppModule {}
