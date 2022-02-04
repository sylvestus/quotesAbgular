// import { Component, OnInit, Input } from '@angular/core';
// import { Goal } from '../goal';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Goal } from '../goal';

@Component({
  selector: 'app-goal-detail',
  templateUrl: './goal-detail.component.html',
  styleUrls: ['./goal-detail.component.css']
})
// export class GoalDetailComponent implements OnInit {
//   @Input() goal: Goal;
//   constructor() { }

//   ngOnInit(): void {
//   }

// }

export class GoalDetailComponent implements OnInit {

  @Input() goal: Goal;
  @Output() isComplete = new EventEmitter<boolean>();

  goalDelete(complete:boolean){
    this.isComplete.emit(complete);
  }
  constructor() { }

  ngOnInit() {
  }

}

