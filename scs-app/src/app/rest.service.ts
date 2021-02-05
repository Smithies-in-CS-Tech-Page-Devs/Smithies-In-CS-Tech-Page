import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class RestApiService {
    constructor(private httpClient: HttpClient){

    }

    getStuff(){
        this.httpClient.get('http://localhost:5000/api/hello').subscribe(data => {
           
            console.log('getting data')
            console.log(data);
            return data;
          })
    }


}