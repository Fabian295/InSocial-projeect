import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  fkimage:String = 'assets/img/fk_ice.png';
  titel = 'FK Shop'

  constructor() { }

  ngOnInit(): void {
  }

}
