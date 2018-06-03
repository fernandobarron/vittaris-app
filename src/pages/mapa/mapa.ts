import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  Marker,
  GoogleMapsAnimation,
  MyLocation
} from '@ionic-native/google-maps';

@Component({
  	selector: 'page-mapa',
  	templateUrl: 'mapa.html'
})

export class MapaPage {
	mapReady: boolean = false;
	map: GoogleMap;

	constructor(public navCtrl: NavController){

	}

	ionViewDidLoad(){
	    this.cargarMapa();
	}

	cargarMapa(){
		// Create a map after the view is loaded.
	    // (platform is already ready in app.component.ts)
	    this.map = GoogleMaps.create('map_canvas', {
	      	camera: {
	        	zoom: 18,
	        	tilt: 30
	      	}
	    });

	    // Wait the maps plugin is ready until the MAP_READY event
	    this.map.one(GoogleMapsEvent.MAP_READY).then(() => {
	      	this.map.clear();

	      	var options = {
				enableHighAccuracy: true  // Set true if you want to use GPS. Otherwise, use network.
			};

			// Get the location of you
			this.map.getMyLocation(options)
			.then((location: MyLocation) => {
				// Move the map camera to the location with animation
				return this.map.animateCamera({
					target: location.latLng,
					zoom: 17,
					tilt: 30
				}).then(() => {
					// Agregar un marcador de posición
					return this.map.addMarker({
						title: 'Mi Posición',
						position: location.latLng,
						animation: GoogleMapsAnimation.BOUNCE
					});
				})
			});
			/*
			.then((marker: Marker) => {
				// show the infoWindow
				marker.showInfoWindow();

				// If clicked it, display the alert
				marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
					//this.showToast('clicked!');
				});
			});
			*/
	    });
	}

	colocarMarcadores(){
		/*this.map.addMarker({
			title: 'Mi Posición',
			position: location.latLng,
			animation: GoogleMapsAnimation.BOUNCE
		});
		*/
	}
}