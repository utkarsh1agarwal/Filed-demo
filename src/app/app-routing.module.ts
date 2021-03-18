import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayDataComponent } from './components/display-data/display-data.component';
import { GetFreeTrialComponent } from './components/get-free-trial/get-free-trial.component';
import { GetStartedComponent } from './components/get-started/get-started.component';



const routes: Routes = [
  // default route
  { path: '', redirectTo: '/get-started', pathMatch: 'full' },
  { path: 'get-started', component: GetStartedComponent },
  { path: 'get-free-trial', component: GetFreeTrialComponent },
  { path: 'show-data', component: DisplayDataComponent },
  // Wild card route
  { path: '**', redirectTo: '/get-started'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
