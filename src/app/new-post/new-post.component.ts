import { Component, Output, EventEmitter } from '@angular/core';
import { Post } from '../post.model';


@Component({
  selector: 'new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css'],
  template: `
  <div class="newPost">
  <h1> New Post </h1>
  </div>
  <div>
  <label> Enter Post Title: </label>
  <input #newName>
  </div>
  <div>
  <label> Enter Post Details: </label>
  <input #newDetails>
  </div>
  <div>
  <label> Enter Post Image: </label>
  <input #newImage>
  <br>
  <button class="btn-lg"(click)="submitForm(newName.value, newDetails.value, newImage.value); newName.value=''; newDetails.value=''; newImage.value='';">Add</button>
  </div>

  `
})
export class NewPostComponent  {
  @Output() newPostSender = new EventEmitter();

  submitForm(name: string, details: string, image: string) {
    var newPostToAdd: Post = new Post(name, details, image);
    this.newPostSender.emit(newPostToAdd);
  }

}
