import { Injectable, OnInit } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { job } from "./job";

@Injectable()

export class JobsService{
baseUrl:any='http://localhost:3000';

constructor(private _http:Http){}
//read all jobs list

getJobs(){
    return this._http.get(this.baseUrl+'/jobs');
}
//read single job profile
getsingleJob(id:any)
{

    return this._http.get(this.baseUrl+'/jobs/'+id);
}
//create new job post

createJob(data:any): Observable<job>
{
    const body={
        id:data.id,
        title:data.title,
        company:data.company,
        exp:data.exp,
        location:data.location,
        salary:data.salary,
        logo:data.logo,
        positions:data.positions,
        role:data.role,
        Requirement:data.Requirement,
        keyskills:data.keyskills,
        profile:data.profile,
        contact:data.contact,
        email:data.email

};
return this._http.post<any>(this.baseUrl+ '/jobs',body)
//return null
}

editJob(data:any): Observable<job>
{
    const body={
        id:data.id,
        title:data.title,
        company:data.company,
        exp:data.exp,
        location:data.location,
        salary:data.salary,
        logo:data.logo,
        positions:data.positions,
        role:data.role,
        Requirement:data.Requirement,
        keyskills:data.keyskills,
        profile:data.profile,
        contact:data.contact,
        email:data.email

};
return this._http.put<any>(this.baseUrl+ '/jobs/' + data.id ,body)
//return null
}

deleteJob(id:any)
{
   return this._http.delete(this.baseUrl+'/jobs/'+id);
}
}



