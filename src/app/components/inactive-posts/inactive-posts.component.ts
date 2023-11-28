import { Component, OnInit } from '@angular/core';
import { Post } from 'src/models/post.model';
import { UserPostsService } from 'src/app/services/user-posts.service';

@Component({
  selector: 'app-inactive-posts',
  templateUrl: './inactive-posts.component.html',
  styleUrls: ['./inactive-posts.component.scss'],
})
export class InactivePostsComponent implements OnInit {
  postArray: Post[] = [];
  constructor(private getUserPost: UserPostsService) {
    this.getUserPost.handleFetch().then((posts) => {
      this.postArray = posts;
    });
  }

  ngOnInit(): void {}
}
