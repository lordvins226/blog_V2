import { Subject } from 'rxjs';
import { Post } from '../models/post.model';
import { Injectable } from "@angular/core";

@Injectable()
export class PostService {


  postsSubject = new Subject<any[]>();
  private posts = [
    {
      id: 1,
      title : 'Mon premier post',
      content : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
      created_at: new Date,
      
    },
    {
      id: 2,
      title : 'Mon deuxieme post',
      content : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
      created_at: new Date,
      
      
    },
    {
      id: 3,
      title : 'Encore un post',
      content : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
      created_at: new Date,
     
    }
];
 

emitPostsSubject() {
  this.postsSubject.next(this.posts.slice());
}

addNewPost(post: Post) {
  this.posts.push(post);
  this.emitPostsSubject();
}

suppressPost(i: number) {
  this.posts.splice(i, 1);
  this.emitPostsSubject();
}

}
