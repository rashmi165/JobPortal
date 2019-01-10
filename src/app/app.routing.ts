import {Routes,RouterModule} from '@angular/router';
import{ModuleWithProviders} from '@angular/core';
import { jobscomponent } from './jobs/jobs.components';
import { detailscomponent } from './details/details.components';
import { Loginform } from './Login/Login.component';
import { DashboardComponent } from './Dashboard/Dashboard.component';
import { NewComponent } from './New/New.component';
import { EditComponent } from './Edit/Edit.component';
import { DeleteComponent } from './Delete/Delete.component';

const routes:Routes=[
    {
     path:'',
     redirectTo:'jobs',
     pathMatch:'full'
    },
{
    path: 'jobs',
    component:jobscomponent
},
{
    path:'details/:id',
    component:detailscomponent
},
{
    path:'admin',
    component:Loginform
},
{
    path:'dashboard',
    component:DashboardComponent
},

{
    path:'new',
    component:NewComponent
},
{
    path:'edit/:id',
    component:EditComponent
},
{
    path:'delete/:id',
    component:DeleteComponent
}

];

export const appRoutingProvider:any[]=[];
export const routingModule:ModuleWithProviders=RouterModule.forRoot(routes);
