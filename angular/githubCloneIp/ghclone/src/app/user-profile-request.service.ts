import { Injectable } from '@angular/core';
import { UserProfile } from './user-profile';
import { UserRepositories } from './user-repositories';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { FormComponent } from './form/form.component';
import { Observable } from 'rxjs';
//import 'rxjs/add/operator/map'

@Injectable({
  providedIn: 'root',
})
export class UserProfileRequestService {
  userProfile!: UserProfile;
  userRepos!: UserRepositories;

  constructor(private http: HttpClient) {
    this.userProfile = new UserProfile('', '', 0, 0, 0, '', '','');
    this.userRepos = new UserRepositories('', '', '', '');
  }

  requestProfile(searchItem: string | number) {
    interface ApiResponseI {
      avatar_url: string;
      login: string;
      public_repos: number;
      following:number;
      followers: number;
      location: string;
      email: string;
      created_at:string
    }
    let headers = new HttpHeaders({
      Authorization: 'token ' + environment.apiKey,
    });
    let options = { headers: headers };
    let final_url = environment.apiUrl + searchItem + '?api_Key=' + environment.apiKey;
    
    let promise = new Promise((resolve, reject) => {
      this.http
        .get<ApiResponseI>(final_url, options)
        .toPromise()
        .then(
          (response) => {

            this.userProfile.avatar_url = response!.avatar_url;
            this.userProfile.email=response!.email;
            this.userProfile.followers=response!.followers;
            this.userProfile.following=response!.following;
            this.userProfile.location=response!.location;
            this.userProfile.login=response!.login;
            this.userProfile.public_repos=response!.public_repos;
            this.userProfile.created_at= response!.created_at
            

            resolve(null);
            console.log(this.userProfile);
          },
          (error) => {
            reject();
            console.log(error);
          }
        );
    });
    return promise;
  }
  requestRepos(searchItem: string | number) {
    interface ApiResponseII {
      html_url: string;
      name: string;
      description: string;
      language: string;
    }
    let url = environment.apiUrl  + searchItem + '/repos'+ '?api_Key=' + environment.apiKey;
  let promise = new Promise((resolve, reject) => { 
    this.http.get<ApiResponseII>(url).toPromise().then(response => {
      this.userRepos=response!;
     
       //this.userRepos.name = response!.name;
       //this.userRepos.description=response!.description
       //this.userRepos.language=response!.language
       //this.userRepos.html_url=response!.html_url

       
      resolve(response)

    }, error => {
      reject();
      console.log(error)
    })

  });
  return promise
  }
}