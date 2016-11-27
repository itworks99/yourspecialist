<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from '../search.service';
import { Ng2MapComponent } from 'ng2-map';

@Component({
  selector: 'search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css'],

})
export class SearchResults implements OnInit {

  public searchService: SearchService;
  public results: [];
  public positions= [];

  @ViewChild(Ng2MapComponent) ng2MapComponent: Ng2MapComponent;
  public map: google.maps.Map;

  ngOnInit() {
      this.ng2MapComponent.mapReady$.subscribe(map => {
        this.map = map;
      })
  }

  this.Ng2MapComponent['apiUrl'] = 'https://maps.google.com/maps/api/js?key=AIzaSyD-zPVmwjpZghR1hURXLt-t89-bbzAD5gE' +
'&libraries=visualization';

addMarkers(){
  positions = [];
  for (let i = 0; i < results.lenght; i++); {
    Lat = resuts[i].geo.data.lat;
    Lng = resuts[i].geo.data.lng;

    var latLng = new google.maps.LatLng(Lat,Lng);
    var marker = new google.maps.Marker({
      position: latLng,
      map: map
    });
}

}
  constructor(searchService: SearchService, private router: Router) {
    var self = this;
    this.searchService = searchService;
    this.searchService.providers.subscribe(function(value) {
      self.results = value;
      });
    }
}
=======
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from '../search.service';

@Component({
  selector: 'search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResults implements OnInit {

  public searchService: SearchService;
  public results: any[];

  constructor(searchService: SearchService, private router: Router) {
    var self = this;
    this.searchService = searchService;
    this.searchService.providers.subscribe(function(value) {
      self.results = value;
    });
    console.log(self.results)
  }

  ngOnInit() {
  }
}
>>>>>>> refs/remotes/RHoKAustralia/master
