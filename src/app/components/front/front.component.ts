import { Component, OnInit } from '@angular/core';
import { MediaService } from '../../services/media.service';
import { HttpErrorResponse } from '@angular/common/http/src/response';
import {Router} from '@angular/router';
@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.css']
})
export class FrontComponent implements OnInit {

  constructor(private mediaService: MediaService, private router: Router) { }

  ngOnInit() {
    this.mediaService.getUserData(localStorage.getItem('token')).subscribe(data => {
      console.log(data);
      console.log("Welcome " + data['username']);
    }, (err: HttpErrorResponse) => {
        console.log(err);
        this.router.navigate(['login']);
    });
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

}
