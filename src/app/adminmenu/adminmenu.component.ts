import { Component } from "@angular/core";
import { Router } from "@angular/router";


@Component({
    moduleId:module.id,
    selector:'app-adminmenu',
    templateUrl:'adminmenu.component.html',
    styleUrls:['adminmenu.component.css']
})

export class AdminmenuComponent{
    constructor(private _router:Router){

    }

    onLogOut():any{
        const status =confirm("Are you sure, You need to logout?");
        if(status)
        {
           this._router.navigate(['/admin']);

        }
        else{
            return null;
        }
    }

}