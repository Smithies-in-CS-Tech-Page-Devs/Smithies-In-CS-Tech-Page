import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { RestApiService } from '../rest.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss',
    '../app.component.scss'],
    animations:[
        trigger('fade', [ 
            transition('void => *', [
              style({ opacity: 0 }), 
              animate("0s 2s", style({opacity: 1}))
            ]) 
        ])
    ]
})

export class HomeComponent implements OnInit {

    constructor(private restapiservice: RestApiService) { }
    ngOnInit() {
        console.log('within ngoninit');
        console.log(this.restapiservice.getStuff());
        console.log('done withngoninit')    
     }


}