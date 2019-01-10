import { Component, OnInit } from "@angular/core";
import { JobsService } from "../service/jobs.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
    moduleId:module.id,
    selector:'app-delete',
    templateUrl:'delete.component.html'
})

export class DeleteComponent implements OnInit{
pId:any;

    constructor(private _jobs:JobsService,
        private _router:Router,
        private _actRoute:ActivatedRoute){
            this.pId=this._actRoute.snapshot.url[1].path;
        }
    ngOnInit(){}


    onDelete(){
        this._jobs.deleteJob(this.pId).subscribe((res)=>{
            alert("Successfully deleted job id");
            this._router.navigate(['/dashboard']);
        },(err)=>{
            console.log(err);

        });
    }
}