import { Injectable } from "@angular/core";
import { HttpClient }from '@angular/common/http';
@Injectable({
    providedIn: 'root'
  })

  export class ProfileService {

    private username:string;
    private client_id = "0ddd798ddad906269c18";
    private client_secret = "8d00ece48247a8eaffc420181de3c83776e0310c";
    constructor(private http:HttpClient) { 
        console.log("Service is now ready!");
        this.username = "mwendaB";
      }