import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { UserProfileComponent } from '../user-profile/user-profile.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  searchItem?: string
  @Output() profileSearch = new EventEmitter<any>();

  search() {
    this.profileSearch.emit(this.searchItem)
  
  }

  constructor() { }

  ngOnInit(): void {
  }

}
