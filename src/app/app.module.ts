import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component'
import { ImportComponent } from './import.component'
import { NotFoundComponent } from './not-found.component'

const routes: Routes = [
  { path: 'import', component: ImportComponent },
  { path: '', redirectTo: '/import', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
]

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  declarations: [AppComponent, ImportComponent, NotFoundComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
