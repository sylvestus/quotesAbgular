import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserProfileRequestService } from './user-profile-request.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserRepositoriesComponent } from './user-repositories/user-repositories.component';
import { FormComponent } from './form/form.component';
import { CustomDatePipe } from './custom-date.pipe';
import { UnderlineDirective } from './underline.directive';





@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    UserRepositoriesComponent,
    FormComponent,
    CustomDatePipe,
    UnderlineDirective,
    
   
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
   
    HttpClientModule
  ],
  providers: [UserProfileRequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
