import { Component, OnInit } from '@angular/core';
// importing some animations
import { trigger, style, transition,animate, keyframes, query, stagger } from '@angular/animations';
import { DataService } from '../data.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    // fist using trigger for setup with goals being my animation name
    trigger('goals', [
      transition('* => *', [
        // when something enters the dom do ...
         query(':enter', style({ opacity: 0 }), {optional: true}),

         query(':enter', stagger('300ms' , [
           animate('.6s ease-in', keyframes([

              style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),

              style({opacity: .5, transform: 'translateY(35px)', offset: .3}),

              style({opacity: 1, transform: 'translateY(0)', offset: 1}),

           ]))]), {optional: true}),

         // for animation to actually work we use query to arrange after something leaves the template(array)

         query(':leave', stagger('300ms' , [
          animate('.6s ease-in', keyframes([

             style({opacity: 1, transform: 'translateY(0)', offset: 0}),

             style({opacity: .5, transform: 'translateY(35px)', offset: .3}),

             style({opacity: 0, transform: 'translateY(-75%)', offset: 1}),

          ]))]), {optional: true})

         // stagger allows take a number of element an place a delay for animation

      ])
    ])



  ]
})
export class HomeComponent implements OnInit {
  // my home properties
   itemCount: number;
   btnText: string = 'Add an item';
   goalText: string = 'my first life goal';
   goals = [];



// to create an instance of the dependency injector use the constructor

  constructor(private _data: DataService ) { }

  // this is iniciated on app load
  ngOnInit() {

     this._data.goal.subscribe(res => this.goals = res);

     this.itemCount = this.goals.length;

     this._data.changeGoal(this.goals);
  }

  addItem() {
    // pushes input to array
    this.goals.push(this.goalText);
    // this clear the input box after submition
    this.goalText = '';
    // this count the items
    this.itemCount = this.goals.length;
    this._data.changeGoal(this.goals);
  }

  removeItem(i) {

    this.goals.splice(i, 1);
    // any time an item is remove we update the goal so he is just receptor of changes

    this._data.changeGoal(this.goals);
  }

}
