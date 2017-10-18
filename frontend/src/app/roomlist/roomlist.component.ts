import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-roomlist',
  templateUrl: './roomlist.component.html',
  styleUrls: ['./roomlist.component.css']
})
export class RoomlistComponent implements OnInit {
  
  ListKamar = [
    { 'no_kamar': '11', 'harga': '500000', 'available': true},
    { 'no_kamar': '12', 'harga': '450000', 'available': true},
    { 'no_kamar': '13', 'harga': '450000', 'available': false},
    { 'no_kamar': '14', 'harga': '450000', 'available': true},
    { 'no_kamar': '15', 'harga': '450000', 'available': false},
    { 'no_kamar': '16', 'harga': '450000', 'available': true},
    { 'no_kamar': '17', 'harga': '450000', 'available': false},
    { 'no_kamar': '18', 'harga': '450000', 'available': false},
    { 'no_kamar': '19', 'harga': '450000', 'available': true},
    { 'no_kamar': '20', 'harga': '400000', 'available': true}
  ];

  constructor() { }

  ngOnInit() {
  }

}
