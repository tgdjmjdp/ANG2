import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostService } from '../posts.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  enteredTitle = '';
  enteredContent = '';

  onAddPost(form: NgForm) {

    if (form.invalid) {
      return;
    }

    form.resetForm();
  }
  constructor(public postService: PostService) {

  }

  ngOnInit() {
  }

}
