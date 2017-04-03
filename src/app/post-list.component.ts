import { Component, Input } from '@angular/core';
import { Post } from './post.model';

@Component({
  selector: 'post-list',
  template: `
  <ul>
    <li *ngFor="let currentPost of childPostList">{{currentPost.name}}</li>
  </ul>
  `
})

export class PostListComponent {
  @Input() childPostList: Post[];
}
