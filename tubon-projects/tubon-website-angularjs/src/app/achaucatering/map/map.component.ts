import { Component, OnInit } from '@angular/core';
import { } from '@agm/core';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  title: string = 'My first AGM project';
  lat: number = 11.069240;
  lng: number = 106.695806;
  constructor() { }
  // 11.069240, 106.695806
  
  
  ngOnInit() {
  }

}

// <script>
// function initMap() {
//   var myLatLng = {lat: 11.0687202, lng: 106.6674429};

//   // Create a map object and specify the DOM element for display.
//   var map = new google.maps.Map(document.getElementById('map'), {
//     center: myLatLng,
//     zoom: 15
//   });

//   // Create a marker and set its position.
//   var marker = new google.maps.Marker({
//     map: map,
//     position: myLatLng,
//     title: 'Á Châu Catering! 54-56, đường số 44, P. Hoà Phú, TP. Thủ Dầu Một, Bình Dương'
//   });
// }
// </script>
// <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyD3T-BlBd0ZXo8nOLXjy1wI3YgOKlvDzro&callback=initMap" async defer></script>
