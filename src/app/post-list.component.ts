import { Component, Input } from '@angular/core';
import { Post } from './post.model';

@Component({
  selector: 'post-list',
  template: `
  <ul>
    <div *ngFor="let currentPost of childPostList">
    <h4 (click)="showPost(currentPost)">{{currentPost.name}}</h4>
    </div>
  </ul>
  <div *ngIf="selectedPostName">
    <a href = "{{selectedPostName.details}}">Read more</a>
    <br>
    <img src = "{{selectedPostName.image}}">
    <br>
    <br>
    <button (click)="finishedViewing()">Done</button>
  </div>
  <new-post (newPostSender)="addPost($event)"></new-post>
  `
})

export class PostListComponent {
  @Input() childPostList: Post[];
  selectedPost: Post = null;
  selectedPostName: Post = null;


  showPost(clickedPost) {
  this.selectedPostName = clickedPost;
  }

  finishedViewing() {
  this.selectedPostName = null;
}

addPost(newPostFromChild: Post) {
  this.childPostList.push(newPostFromChild);
}

}
