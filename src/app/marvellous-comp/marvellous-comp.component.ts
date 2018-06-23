import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Marvellous-Comp-Component',
  templateUrl: './marvellous-comp.component.html',
  styleUrls: ['./marvellous-comp.component.css']
})
export class MarvellousCompComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }
  title = "Inside Sub Component";
}
