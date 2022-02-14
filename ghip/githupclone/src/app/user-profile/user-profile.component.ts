import { UserRepositories } from './../user-repositories';
import { UserProfileRequestService } from './../user-profile-request.service';
import { UserProfiles } from '../user-profiles'; 
import { Component, OnInit } from '@angular/core';





@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  userProfile! : UserProfiles;
  userRepos!: any

  


  constructor( private userProfileRequest:UserProfileRequestService) { 
    this.userRepos= new UserRepositories("","","","")
  }
  
  search(searchItem:any) {
    
   
    this.userProfileRequest.requestProfile(searchItem).then((success)=>{
      this.userProfile = this.userProfileRequest.userProfile

      console.log(this.userProfile.followers)

    })
    
    this.userProfileRequest.requestRepos(searchItem).then((success) => {
      this.userRepos = this.userProfileRequest.userRepos
      
      console.log(this.userRepos);

     //console.log(this.userRepos.name)
      
    },
      (error) => {
        console.log(error)
      }
    ) 
  }

  ngOnInit(): void {
  this.search('sylvestus');
 
  }

}
