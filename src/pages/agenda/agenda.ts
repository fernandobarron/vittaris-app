import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController,ModalController } from 'ionic-angular';
import { RegistroConsultaPage } from '../registro-consulta/registro-consulta';
/**
 * Generated class for the AgendaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
//import * as moment from 'moment';

@IonicPage()
@Component({
  selector: 'page-agenda',
  templateUrl: 'agenda.html',
})
export class AgendaPage {


/*
  eventSource =
  [
    {
      title: 'Consulta',
      startTime:  new Date(Date.UTC(2018, 10, 13)),
      endTime:  new Date(Date.UTC(2018, 10, 18)),
      allDay: false
    },
    {
      title: 'Consulta',
      startTime: 'Mon Nov 12 2018 18:00:00 GMT-0600',
      endTime:  'Mon Nov 12 2018 18:30:00 GMT-0600',
      allDay: false
    }
  ];
  [

    {
      cita: "Cita medicina General",
      lugar: "Consultorio uno",
      getTime: "13:00"
    },{
      cita: "Cita medicina General",
      lugar: "Consultorio uno",
      getTime: "13:00"
    },{
      cita: "Cita medicina General",
      lugar: "Consultorio uno",
      getTime: "13:00"
    },{
      cita: "Cita medicina General",
      lugar: "Consultorio uno",
      getTime: "13:00"
    },{
      cita: "Cita medicina General",
      lugar: "Consultorio uno",
      getTime: "13:00"
    },{
      cita: "Cita medicina General",
      lugar: "Consultorio uno",
      getTime: "13:00"
    }
  ,{
    cita: "Cita medicina General",
    lugar: "Consultorio uno",
    getTime: "13:00"
  }
  ];
  
  
  viewTitle: string;
  selectedDay = new Date();


  calendar = {
    mode: 'month',
    currentDate: new Date()
  };
  

  date: any;
  daysInThisMonth: any;
  daysInLastMonth: any;
  daysInNextMonth: any;
  monthNames: string[];
  currentMonth: any;
  currentYear: any;
  currentDate: any;*/
  constructor(private modalCtrl: ModalController,public navCtrl: NavController, public navParams: NavParams,private alertCtrl: AlertController) {
  
     // var dato = new Date(Date.UTC(2018, 10, 13))
     // console.log(dato);
      
  
  }

/*
  datos = [
    {
      cita: "Cita medicina General",
      lugar: "Consultorio uno",
      getTime: "13:00"
    },{
      cita: "Cita medicina General",
      lugar: "Consultorio uno",
      getTime: "13:00"
    },{
      cita: "Cita medicina General",
      lugar: "Consultorio uno",
      getTime: "13:00"
    },{
      cita: "Cita medicina General",
      lugar: "Consultorio uno",
      getTime: "13:00"
    },{
      cita: "Cita medicina General",
      lugar: "Consultorio uno",
      getTime: "13:00"
    },{
      cita: "Cita medicina General",
      lugar: "Consultorio uno",
      getTime: "13:00"
    }
  ,{
    cita: "Cita medicina General",
    lugar: "Consultorio uno",
    getTime: "13:00"
  }
  ];

*/
  ionViewDidLoad() {
    console.log('ionViewDidLoad AgendaPage');
  }
  /*

  getDaysOfMonth() {
    this.daysInThisMonth = new Array();
    this.daysInLastMonth = new Array();
    this.daysInNextMonth = new Array();
    this.currentMonth = this.monthNames[this.date.getMonth()];
    this.currentYear = this.date.getFullYear;
    
    if(this.date.getMonth() === new Date().getMonth()) {
      this.currentDate = new Date().getDate();
    } else {
      this.currentDate = 999;
    }
  
    var firstDayThisMonth = new Date(this.date.getFullYear, this.date.getMonth(), 1).getDay();
    var prevNumOfDays = new Date(this.date.getFullYear, this.date.getMonth(), 0).getDate();
    for(var i = prevNumOfDays-(firstDayThisMonth-1); i <= prevNumOfDays; i++) {
      this.daysInLastMonth.push(i);
    }
  
    var thisNumOfDays = new Date(this.date.getFullYear, this.date.getMonth()+1, 0).getDate();
    for (var i = 0; i < thisNumOfDays; i++) {
      this.daysInThisMonth.push(i+1);
    }
  
    var lastDayThisMonth = new Date(this.date.getFullYear, this.date.getMonth()+1, 0).getDay();
    var nextNumOfDays = new Date(this.date.getFullYear, this.date.getMonth()+2, 0).getDate();
    for (var i = 0; i < (6-lastDayThisMonth); i++) {
      this.daysInNextMonth.push(i+1);
    }
    var totalDays = this.daysInLastMonth.length+this.daysInThisMonth.length+this.daysInNextMonth.length;
    if(totalDays<36) {
      for(var i = (7-lastDayThisMonth); i < ((7-lastDayThisMonth)+7); i++) {
        this.daysInNextMonth.push(i);
      }
    }
  }



  goToLastMonth() {
    this.date = new Date(this.date.getFullYear, this.date.getMonth(), 0);
    this.getDaysOfMonth();
  }

  goToNextMonth() {
    this.date = new Date(this.date.getFullYear, this.date.getMonth()+2, 0);
    this.getDaysOfMonth();
  }


  registroComsulta(){
    this.navCtrl.push(RegistroConsultaPage);
  }




  addEvent() {
    let modal = this.modalCtrl.create('EventModalPage', {selectedDay: this.selectedDay});
    modal.present();
    modal.onDidDismiss(data => {
      if (data) {
        let eventData = data;
 
        eventData.startTime = new Date(data.startTime);
        eventData.endTime = new Date(data.endTime);
 
        let events = [];
        events.push(eventData);
        this.eventSource = [];
        setTimeout(() => {
          this.eventSource = events;
        });
      }
    });
  }
 
  onViewTitleChanged(title) {
    this.viewTitle = title;
  }
 
  onEventSelected(event) {
    let start = moment(event.startTime).format('LT');
    let end = moment(event.endTime).format('LT');
    
    let alert = this.alertCtrl.create({
      title: '' + event.title,
      subTitle: 'From: ' + start + '<br>To: ' + end,
      buttons: ['OK']
    })
    alert.present();
  }
 
  onTimeSelected(ev) {
    this.selectedDay = ev.selectedTime;
  }
*/


}
