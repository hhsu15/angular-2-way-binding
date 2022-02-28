import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css'],
})
export class HelloComponent implements OnInit {
  // this is a property
  size = 20;
  @Input() greetingFromParent = ''; // decorate the property with @Input()
  @Output() greetingEmitter = new EventEmitter<string>();

  // use the two-way binding - banana in a box. 
  @Input() x!: number;
  @Output() xChange = new EventEmitter<number>()

  sendXtoParent(num:number){
    this.xChange.emit(num);
  }

  constructor() {}

  ngOnInit(): void {}

  makeBigger() {
    this.size += 1;
  }

  sendGreeting(msg: string) {
    this.greetingEmitter.emit(msg);
  }

  // declar an input property to bind to a parent property
}
