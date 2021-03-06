import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class MainLayoutComponent implements OnInit {
  @Input() title:string
  @Input() navLink:string[]
  constructor() { }

  ngOnInit() {
  }

}
