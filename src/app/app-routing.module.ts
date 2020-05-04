import { ResumePageComponent } from './resume-page/resume-page.component';
import { DetailPageComponent } from './detail-page/detail-page.component';
import { MasterPageComponent } from './master-page/master-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:'', component:MasterPageComponent},
  {path:'employees/:employeeId', component:DetailPageComponent},
  {path:'employees/:employeeId/resume', component:ResumePageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
