import { Component, OnInit } from '@angular/core';
import { Post } from 'src/models/post.model';
import { UserPostsService } from 'src/app/services/user-posts.service';

@Component({
  selector: 'app-active-posts',
  templateUrl: './active-posts.component.html',
  styleUrls: ['./active-posts.component.scss'],
})
export class ActivePostsComponent implements OnInit {
  postArray: Post[] = [];
  constructor(private getUserPost: UserPostsService) {
    this.getUserPost.handleFetch().then((posts) => {
      this.postArray = posts;
    });
  }

  ngOnInit(): void {}
}
