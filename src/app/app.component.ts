import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor() {}
  public fontSizePx = 16;
  parentX!: number;


  //this goes to hello child
  helloMyChild = '';
  greetingFromChild = '';

  sendToChild(msg:string){
    this.helloMyChild = msg;
  }

  // this gets called when event from child is triggered
  getGreetingFromChild(msg:string){
    this.greetingFromChild = msg;
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
