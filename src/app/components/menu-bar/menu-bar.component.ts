import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {
  public items: MenuItem[];

  constructor() { }

  ngOnInit() {
    this.items = [{
      label: 'File',
      items: [
        { label: 'New', icon: 'fa fa-plus' },
        { label: 'Open', icon: 'fa fa-download' }
      ]
    },
    {
      label: 'Edit',
      items: [
        { label: 'Undo', icon: 'fa fa-refresh' },
        { label: 'Redo', icon: 'fa fa-repeat' }
      ]
    }];
  }

}
