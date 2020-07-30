import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { StoreService } from './store.service';
import { AppComponent } from './app.component';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app.routing';
// import { ComponentsModule } from './components/components.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { StoreDetailComponent } from './components/store-details/store-details.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    // ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  
  ],
  declarations: [
    AppComponent,
    // AdminLayoutComponent,
    // AuthLayoutComponent,
    DashboardComponent,
    UserProfileComponent,
    StoreDetailComponent,
    LoginComponent,
    RegisterComponent,
    FooterComponent,
    NavbarComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
