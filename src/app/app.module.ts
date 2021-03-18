// Module
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// routing
import { AppRoutingModule } from './app-routing.module';

// Component
import { AppComponent } from './app.component';
import { GetStartedComponent } from './components/get-started/get-started.component';
import { GetFreeTrialComponent } from './components/get-free-trial/get-free-trial.component';
import { InputComponent } from './components/reusable/input/input.component';
import { DisplayDataComponent } from './components/display-data/display-data.component';
import { NavBarComponent } from './components/common/nav-bar/nav-bar.component';
import { SectionComponent } from './components/common/section/section.component';

// Store
import { StoreModule } from '@ngrx/store';
import { GetFreeTrialDetailsReducer } from './store/reducers/get-free-trial.reducer';

// Services
import { PaymentService } from './services/payment.service';


@NgModule({
  declarations: [
    AppComponent,
    GetStartedComponent,
    GetFreeTrialComponent,
    InputComponent,
    DisplayDataComponent,
    NavBarComponent,
    SectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot({
      getFreeTrialDetails: GetFreeTrialDetailsReducer,
    }),
  ],
  providers: [PaymentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
