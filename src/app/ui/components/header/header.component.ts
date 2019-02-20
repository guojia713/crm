import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public close = false;
  public title = 'Title';

  constructor() { }

  ngOnInit() {
  }


  toggle() {
    console.log('Click on nav');
    this.close = !this.close;
  }
}
