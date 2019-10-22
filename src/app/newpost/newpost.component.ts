import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post.model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs';
import { PostService } from '../services/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newpost',
  templateUrl: './newpost.component.html',
  styleUrls: ['./newpost.component.scss']
})
export class NewpostComponent implements OnInit {

  postForm: FormGroup;
  formStatus: string;
  post: Post;
  index: number;
  loveIts: number;
  postDate: Date;
  

  posts: any[];
  postSubscription: Subscription;

  constructor( private formBuilder: FormBuilder,
                private postService: PostService,
                private router: Router ) { }

  ngOnInit() {
    this.initForm();
    this.postSubscription = this.postService.postsSubject.subscribe(
      (posts: any[]) => {
        this.posts = posts;
      }
    );
    this.postService.emitPostsSubject();
  }

  ngOnDestroy() {
    this.postSubscription.unsubscribe();
  }

  initForm() {
    this.postForm = this.formBuilder.group({
      title: '',
      content: ''
    });
  }

  onSubmitForm() {
    const formValue = this.postForm.value;
    this.postDate = new Date;
    this.index = this.posts.length;
    this.loveIts = 0;

    if ( formValue['title'] !== '' && formValue['content'] !== '') {

      const newPost = new Post(
        this.index,
        formValue['title'],
        formValue['content'],
        this.postDate,
      );
      this.postService.addNewPost(newPost);
      this.router.navigate(['/posts']);

    } else {

      this.formStatus = 'disabled';

    }
  }


}
