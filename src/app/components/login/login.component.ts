import { Component, OnInit } from '@angular/core';
import {MediaService} from '../../services/media.service';
import { HttpErrorResponse } from '@angular/common/http/src/response';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:string;
  password:string;
  userdata:any;

  constructor(private mediaService: MediaService, private router: Router) { }

  ngOnInit() {
  }

  login(){
    this.userdata = {
      username: this.username,
      password: this.password
    };
    this.mediaService.get_login_data(this.userdata).subscribe(data => {
      console.log(data);
      localStorage.setItem('token', data['token']);
      this.router.navigate(['front']);
    }, (err: HttpErrorResponse) => {
      console.log(err.statusText);
    });
  }

}
