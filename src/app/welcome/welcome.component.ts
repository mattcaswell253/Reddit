import { Component, Input } from '@angular/core';
import { PostListComponent }  from '../post-list.component';
import { AppComponent } from '../app.component';
import { Post } from './../post.model';
import { POSTS } from './../mock-posts';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  masterPostList = POSTS;


}
