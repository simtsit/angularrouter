import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bodyholder',
  templateUrl: './bodyholder.component.html',
  styleUrls: ['./bodyholder.component.css']
})
export class BodyholderComponent implements OnInit {

  options = [{
    "name" : "name1",
    "body" : "111 111 111 111 111 111",
    "url" : "case-1"
  },{
    "name" : "name2",
    "body" : "222 222 222 222 222 222",
    "url" : "case-2"
  },{
    "name" : "name3",
    "body" : "333 333 333 333 333 333",
    "url" : "case-3"
  },{
    "name" : "name4",
    "body" : "444 444 444 444 444 444",
    "url" : "case-4"
  },{
    "name" : "name5",
    "body" : "555 555 555 555 555 555",
    "url" : "case-5"
  }];

  constructor() { }

  ngOnInit() {
  }

}
