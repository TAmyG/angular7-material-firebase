import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MatModule } from './mat/mat.module';
import { ListCustomersComponent } from './components/list-customers/list-customers.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { CustomerService } from './services/customer.service';
// firebase
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

@NgModule({
  declarations: [AppComponent, ListCustomersComponent],
  imports: [
    BrowserModule,
    MatModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.configFirebase)
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule {}
