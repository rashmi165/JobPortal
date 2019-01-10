import { Component, OnInit } from "@angular/core";
import { JobsService } from "../service/jobs.service";
import { Router } from "@angular/router";
import { Subscriber } from "rxjs/Subscriber";

@Component({
    moduleId:module.id,
    selector:'app-NewComponent',
    templateUrl:'New.component.html'
})


export class NewComponent implements OnInit{
    
jobList:any;

constructor(private _jobs:JobsService,
    private _router:Router){}

    ngOnInit(){}
    onSubmit(data:any){
        console.log(data);

        this._jobs.createJob(data).subscribe((res)=>{
            alert("Successfully created Job List");
            this._router.navigate(['/dashboard']);
        },
        (err)=>{
            console.log(err);

        })

     
    }
}