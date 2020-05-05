import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-resume-page',
  templateUrl: './resume-page.component.html',
  styleUrls: ['./resume-page.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush

})
export class ResumePageComponent implements OnInit {
  private TABS = {
    0:'Home',
    1:'New',
    2:'We',
    3:'About',
  }
  selectedTab$:BehaviorSubject<string> = new BehaviorSubject(this.TABS[0])
  constructor() { }

  ngOnInit() {
  }

  onTabSelected(event:CustomEvent) {
    const index = event.detail.tabIndex
    this.selectedTab$.next(this.TABS[index])
  }

}
