import { Component, OnInit, } from "@angular/core";
import { AuthService } from "../service/auth.service";
import { Router } from "@angular/router";

@Component({
    moduleId:module.id,
    selector:'app-login',
    templateUrl:'Login.component.html'
})

export class Loginform implements OnInit
{

     title:any='Login Details'
     constructor(private _auth:AuthService,private _router:Router){}
     
     ngOnInit(){ }


onLogin(data:any){
    console.log(data);

    this._auth.onLogin().subscribe((response)=>{

        console.log(response.json());
        const serRes= response.json();
        //Validation Logic
        if((data.username === serRes.username) && (data.password === serRes.password))
        {
            this._router.navigate(['/dashboard']);

        }
        else{
            alert("Invalid username or password");
        }
    },
    (error)=>{
console.log(error);
    })
    
}

     

    
    
}