import { Component, OnInit } from "@angular/core";
import { JobsService } from "../service/jobs.service";
import { ActivatedRoute } from "@angular/router";

@Component({
    moduleId:module.id,
    selector:'app-details',
    templateUrl:'details.components.html'
})
export class detailscomponent implements OnInit{
    title="Details";
    pathId:any;
    jobsInfo:any[]
    constructor(private _detail:JobsService,private _route:ActivatedRoute){
        this.pathId= this._route.snapshot.url[1].path;
    }
    ngOnInit(){
        this.getMyJob();

    }
    getMyJob(){
        this._detail.getsingleJob(this.pathId).subscribe((response)=>{
              console.log(Array.of(response.json()));
              this.jobsInfo=Array.of(response.json());
                   
        },
        (error)=>{
            console.log(error);

        })

 
}
}