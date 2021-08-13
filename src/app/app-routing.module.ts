import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { ProductAddComponent } from './product-add/product-add.component';

const routes: Routes = [
  {
    path: 'content',
    component: ContentComponent
  },

  {
    path: 'content/:value',
    component: ContentComponent
  },
  {
    path: 'productadd',
    component: ProductAddComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
