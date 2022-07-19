import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AddPolicyComponent} from "./addpolicy/add-policy.component";
import {PolicyDataComponent} from "./policydata/policy-data.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {EditpolicyComponent} from "./editpolicy/editpolicy.component";

const routes: Routes = [
  {path: '', component: PolicyDataComponent},
  {path: 'addpolicy', component: AddPolicyComponent},
  {path: 'editpolicy', component: EditpolicyComponent},
  {path: 'getpolicy', component: PolicyDataComponent},
  //wild card route should always be the last route
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
