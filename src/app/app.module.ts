import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { jobscomponent } from './jobs/jobs.components';
import { detailscomponent } from './details/details.components';
import { routingModule, appRoutingProvider } from './app.routing';
import { JobsService } from './service/jobs.service';
import {HttpModule} from '@angular/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { Loginform } from './Login/Login.component';
import { DashboardComponent } from './Dashboard/Dashboard.component';
import { AuthService } from './service/auth.service';
import { femenucomponent } from './femenu/femenu.component';
import { AdminmenuComponent } from './adminmenu/adminmenu.component';
import { NewComponent } from './New/New.component';
import { EditComponent } from './Edit/Edit.component';
import { DeleteComponent } from './Delete/Delete.component';

@NgModule({
  imports:      [ BrowserModule,routingModule,HttpModule,FormsModule,ReactiveFormsModule],
  declarations: [ AppComponent,jobscomponent,detailscomponent,Loginform,DashboardComponent,femenucomponent,AdminmenuComponent,NewComponent,EditComponent,DeleteComponent],
  providers:    [appRoutingProvider,JobsService,AuthService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
