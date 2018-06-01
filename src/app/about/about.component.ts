import { Component, OnInit } from '@angular/core';
// to be able to retrieve the id at the url to have access to route parameters
import { ActivatedRoute } from '@angular/router';

import { Router } from '@angular/router';

import { DataService } from '../data.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  goals: any;
  // creating an instance of activated route, and router which can help me to create a back link
  // to a page i want i just need to give the path

  constructor(private route: ActivatedRoute, private router: Router, private _data: DataService) {
    this.route.params.subscribe(res => console.log(res.id));

   }

  ngOnInit() {
    this._data.goal.subscribe(res => this.goals = res);
  }
  sendMeHome() {
    this.router.navigate(['']);
  }

}
