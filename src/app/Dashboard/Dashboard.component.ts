import { Component, OnInit } from "@angular/core";
import { JobsService } from "../service/jobs.service";


@Component({
    moduleId:module.id,
    selector:'app-dashboard',
    templateUrl:'Dashboard.component.html'
})

export class DashboardComponent implements OnInit
{
     jobslist:any[]= [];
   constructor(private _jobs:JobsService){}
    ngOnInit(){
        this.getAll();
    }


    getAll(){
        this._jobs.getJobs().subscribe((res)=>{
            this.jobslist = res.json();
            console.log(res.json());
        },
        (err)=>{
    
            console.log(err)
    
        });
    }
}


   
   

    
