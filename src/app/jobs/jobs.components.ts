import { Component, OnInit } from "@angular/core";
import { JobsService } from "../service/jobs.service";

@Component({
    moduleId:module.id,
    selector:'app-jobs',
    templateUrl:'jobs.components.html'
})
export class jobscomponent implements OnInit{
    title="Jobs";
    jobsDetails:any[]=[];
    constructor(private _jobs:JobsService){

    }
    ngOnInit(){
        this.getMyJobs();
    }
      getMyJobs(){
          this._jobs.getJobs().subscribe( (response)=>{
                console.log(response.json());
                this.jobsDetails = response.json();
          
          },
          (error)=>{
              console.log(error);

          })

   

    }
}

