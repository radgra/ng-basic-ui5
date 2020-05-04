import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume-page',
  templateUrl: './resume-page.component.html',
  styleUrls: ['./resume-page.component.scss']
})
export class ResumePageComponent implements OnInit {
  private TABS = {
    0:'Home',
    1:'New',
    2:'We',
    3:'About',
  }
  selectedTab:string = 'New'
  constructor() { }

  ngOnInit() {
  }

  onTabSelected(event:CustomEvent) {
    const index = event.detail.tabIndex
    this.selectedTab = this.TABS[index]
  }

}
