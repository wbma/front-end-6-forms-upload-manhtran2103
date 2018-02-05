import { Component, OnInit } from '@angular/core';
import { MediaService } from '../../services/media.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  title:string;
  description:string;
  file:File;
  constructor(public mediaService: MediaService) { }

  ngOnInit() {
  }

  setFile(evt){
    console.log(evt.target.files[0]);
    this.file = evt.target.files[0];
  }
  
  startUpLoad(e){
    e.preventDefault();
    //create FormData -object
    let formData = new FormData();
    // add title, description, file to FormData object
    formData.append('file', this.file);
    formData.append('title', `${this.title}`);
    formData.append('description', `${this.description}`);
    // send to server
    console.log(formData);
    this.mediaService.upLoadMedia(formData).subscribe(data => {
      console.log(data);
    });
  }
}
