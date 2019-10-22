import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-postlistitem',
  templateUrl: './postlistitem.component.html',
  styleUrls: ['./postlistitem.component.scss']
})
export class PostlistitemComponent implements OnInit {
  @Input() index: number;
  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postLoveits: number;
  @Input() date: Date;
  
  constructor( private postService: PostService) {}

  ngOnInit() {}
 
  increment(){
    this.postLoveits ++;
  }
 


  decrement() {
    this.postLoveits--;
  }
  
  OnIncrement(){
    if(this.postLoveits>0){
      return true;
    }
  }

  OnDecrement(){
    if(this.postLoveits<0){
      return false;
    }
  }
  
 OnSuppPost(){
     this.postService.suppressPost(this.index);
   }
}
