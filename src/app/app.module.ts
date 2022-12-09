import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataTableComponent } from './components/data-table/data-table.component';
import { ObservableExampleComponent } from './components/observable-example/observable-example.component';
import { AngularComponent } from './components/service-example/angular/angular.component';
import { DataStructureComponent } from './components/service-example/data-structure/data-structure.component';
import { DefaultComponent } from './components/service-example/default/default.component';
import { PythonComponent } from './components/service-example/python/python.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { MaterialModule } from './shared/material.module';

@NgModule({
  declarations: [
    AppComponent,
    PythonComponent,
    DataStructureComponent,
    AngularComponent,
    ObservableExampleComponent,
    DataTableComponent,
    DefaultComponent,
    UserFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
