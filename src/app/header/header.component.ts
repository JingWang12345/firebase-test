import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{


  user: any
  constructor(private auth: AuthService){}

  ngOnInit(): void{
    this.auth.userSubject.subscribe({
      next: (user: any)=> this.user = user,
      error: (err:any) => console.log(err)
    });

  }

  logIn(){
    this.auth.signIn();
  }


logOut(){
  this.auth.signOut();
}

}




