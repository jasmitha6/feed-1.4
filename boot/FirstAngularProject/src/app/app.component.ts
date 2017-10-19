import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<input type='text' 
             placeholder= "Username" 
             [(ngModel)] = "userName">
             <input type='password' 
             placeholder= "Password" 
             [(ngModel)] = "password">
             <br>Welcome {{userName}} {{password}}`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName: string;
  password: string;
}
