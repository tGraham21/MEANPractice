import { Component } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})

export class PostListComponent{
  posts = [
    {title: 'First Post', content: "Post 1"},
    {title: 'Second Post', content: 'Post 2'},
    {title: 'Third Post', content: 'Post 3'}
  ];
}
