import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-list',
  templateUrl: './select-list.component.html',
  styleUrls: ['./select-list.component.css']
})
export class SelectListComponent implements OnInit {
  status={
    status:['in progress','finished','not started'],
  }

  constructor() { }

  ngOnInit(): void {
  }

}
