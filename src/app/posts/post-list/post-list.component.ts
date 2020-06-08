import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Post } from '../post.model';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})

export class PostListComponent implements OnInit, OnDestroy {

    // {title: 'First Post', content: "Post 1"},
    // {title: 'Second Post', content: 'Post 2'},
    // {title: 'Third Post', content: 'Post 3'}

  posts: Post[] = [];
  private postsSub: Subscription;

  constructor(public postsService: PostsService) {}

  ngOnInit(){
    this.posts = this.postsService.getPosts();
    this.postsSub = this.postsService.getPostUpdateListener()
      .subscribe((posts: Post[]) => {
        this.posts = posts;
      });
  }
  ngOnDestroy(){
    this.postsSub.unsubscribe();
  }
}
