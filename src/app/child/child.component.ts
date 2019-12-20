import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  message = 'My name is child';
  msgToParent = 'message from child to parent'
  @Input() parentMessage: string;
  @Output() messageEvent = new EventEmitter<string>();
  ngOnInit() {
  }

  sendMessage() {
    this.messageEvent.emit(this.msgToParent);
  }
}
