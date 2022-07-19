import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PolicyDataComponent} from './policydata/policy-data.component';
import {HttpClientModule} from "@angular/common/http";
import {AddPolicyComponent} from './addpolicy/add-policy.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {FormsModule} from "@angular/forms";
import { EditpolicyComponent } from './editpolicy/editpolicy.component';


@NgModule({
  declarations: [
    AppComponent,
    PolicyDataComponent,
    AddPolicyComponent,
    PageNotFoundComponent,
    EditpolicyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
