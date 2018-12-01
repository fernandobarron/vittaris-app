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

@NgModule({
  declarations: [
    VittarisApp,
    WelcomePage,
    LoginPage,
    SignupPage,
    HomePage,
    ListPage,
    MapaPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(VittarisApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    VittarisApp,
    WelcomePage,
    LoginPage,
    SignupPage,
    HomePage,
    ListPage,
    MapaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    NativeAudio,
    GoogleMaps,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider
  ]
})
export class AppModule {}
