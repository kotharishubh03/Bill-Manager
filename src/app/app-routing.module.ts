import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './MyComponents/about/about.component';
import { PurchaseComponent } from './MyComponents/purchase/purchase.component';

const routes: Routes = [
  { path: 'About', component: AboutComponent },
  { path: 'Purchase', component: PurchaseComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
