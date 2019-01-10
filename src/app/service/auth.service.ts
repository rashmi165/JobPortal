import { Injectable } from "@angular/core";
import { Http} from "@angular/http";

@Injectable()

export class AuthService
{
    baseUrl:any='http://localhost:3000';
    constructor(private http:Http){}

    onLogin()
    {
        return this.http.get(this.baseUrl + '/users/1');
    }
}