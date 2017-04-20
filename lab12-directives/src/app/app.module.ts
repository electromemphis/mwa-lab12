import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UListComponent } from './u-list.component';
import { UpperDirective } from './directives/upper.directive';
import { MyVisibilityDirective } from './directives/my-visibility.directive';
import { MyColorDirective } from './directives/my-color.directive';

@NgModule({
  declarations: [
    AppComponent,
    UListComponent,
    UpperDirective,
    MyVisibilityDirective,
    MyColorDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
