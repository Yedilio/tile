import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainPageComponent} from "./components/main-page/main-page.component";

export const AppRoutes: { routes: Routes; module: string } = {
  module: "AppModule",
  routes: [
    { path: "", redirectTo: "main", pathMatch: "full" },
    {
      path: "main",
      component: MainPageComponent,
    },
  ],
};

@NgModule({
  imports: [
    RouterModule.forRoot(AppRoutes.routes, {
      relativeLinkResolution: "legacy",
    }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
