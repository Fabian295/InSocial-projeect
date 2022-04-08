import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';
import { PageNotFoundComponent } from './components/shared/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/shop', pathMatch: 'full' },
  { path: 'details', component: CartDetailsComponent },
  { path: 'shop', component: ShoppingCartComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
