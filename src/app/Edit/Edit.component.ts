import { Component, OnInit } from "@angular/core";
import { JobsService } from "../service/jobs.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
    moduleId:module.id,
    selector:'app-edit',
    templateUrl:'Edit.compoonent.html'
})

export class EditComponent implements OnInit{

    jobId:any;
    jobInfo:any []= [];
constructor(private _jobs:JobsService,
    private _router:Router,
    private _actRoute:ActivatedRoute){
        this.jobId=this._actRoute.snapshot.url[1].path;
    }
    ngOnInit(){
this.getSingleData();
    }

    getSingleData()
    {
        this._jobs.getsingleJob(this.jobId).subscribe((res)=>{
   console.log(Array.of(res.json()));
   this.jobInfo= Array.of(res.json());
               },
        (err)=>{

            console.log(err);

        })

    }


    onUpdate(data:any){
        console.log(data);
        this._jobs.editJob(data).subscribe((res)=>{
            alert("Successfully updated Job List");
            this._router.navigate(['/dashboard']);
        },
        (err)=>{
            console.log(err);

        })
    }
}