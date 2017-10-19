import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'alert-msg',
  templateUrl: './alert.component.html'
})
export class AlertComponent implements OnInit {
  @Input() status:string;
  @Input() msg:string;
  @Input() isError:boolean;

  constructor() { }

  ngOnInit() {
  }

}
