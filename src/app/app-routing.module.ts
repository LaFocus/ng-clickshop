import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: 'main',
    loadComponent: () => import('./components/Main/main.component').then(m => m.MainComponent)
  },
  {
    path: 'payments',
    loadComponent: () => import('./components/payments/payments.component').then(m => m.PaymentsComponent)
  },
  {
    path: 'selected',
    loadComponent: () => import('./components/selected/selected.component').then(m => m.SelectedComponent)
  },
  {
    path: 'cart',
    loadComponent: () => import('./components/cart/cart.component').then(m => m.CartComponent)
  },
  {
    path: 'products/:id',
    loadComponent: () => import('./components/product/product.component').then(m => m.ProductComponent)
  },
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
