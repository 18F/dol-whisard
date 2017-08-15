import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component'
import { ImportPageComponent } from './import-page.component'
import { NotFoundComponent } from './not-found.component'

import { FileReaderService } from './_service/file-reader.service'

const routes: Routes = [
  { path: '', component: ImportPageComponent },
  { path: '**', component: NotFoundComponent },
]

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  declarations: [AppComponent, ImportPageComponent, NotFoundComponent],
  providers: [FileReaderService],
  bootstrap: [AppComponent],
})
export class AppModule {}
