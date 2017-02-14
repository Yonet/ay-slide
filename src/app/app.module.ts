import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ListModule } from './list/list.module';
import { AppComponent } from './app.component';
import { TrackingDirective } from './tracking.directive';

@NgModule({
  declarations: [
    AppComponent,
    TrackingDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
