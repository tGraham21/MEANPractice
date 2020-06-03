import { Component, Input } from '@angular/core';
import { Post } from '../post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})

export class PostListComponent{

    // {title: 'First Post', content: "Post 1"},
    // {title: 'Second Post', content: 'Post 2'},
    // {title: 'Third Post', content: 'Post 3'}

  @Input() posts: Post[] = [];
}
