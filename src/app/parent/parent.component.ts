import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  message = 'My name is parent';
  childData = 'Message From parent';
  messageFromChild: string;  // message from  child
  receiveMsg($event) {
    this.messageFromChild = $event;
  }
  constructor() { }
  ngOnInit() {
  }
}
