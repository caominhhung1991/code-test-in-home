import { Component, OnInit } from '@angular/core';
// declare var jssor_image_gallary_slider_init:any;
// jssor_image_gallary_slider_init
declare var jquery:any;
declare var $:any;
@Component({
  selector: 'app-slider-image-gallery',
  templateUrl: './slider-image-gallery.component.html',
  styleUrls: ['./slider-image-gallery.component.css']
})

export class SliderImageGalleryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // jssor_image_gallary_slider_init();
    $('.carousel').carousel({
      interval: 3000
    })

  }

  slideTo(index: number) {
    $('.carousel').carousel(index);
  }

}

// $('#myCarousel').on('slide.bs.carousel', function (e) {
//   $( '.carousel' ).removeClass('color-start');
//   $( '.carousel' ).addClass('color-finish');
//   $('#bind').html('Sliding!');
// });

// $('#myCarousel').on('slid.bs.carousel', function (e) {
//   $( '.carousel' ).removeClass('color-finish');
//   $( '.carousel' ).addClass('color-start');
//   $('#bind').html('slid again!');
// });