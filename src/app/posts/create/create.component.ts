import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {PostService} from '../../post.service';
import {Router} from '@angular/router';

@Component({
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  form = this.fb.group({
    title: this.fb.control('', {
      validators: [Validators.required]
    }),
    description: this.fb.control(''),
    body: this.fb.control('', {
      validators: [Validators.required, Validators.minLength(10)]
    }),
    tags: this.fb.array([
      this.fb.control('Angular'),
      this.fb.control('HTML'),
      this.fb.control('CSS')
    ])
  });

  constructor(
    private fb: FormBuilder,
    private postService: PostService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
  }

  removeTag(index: number) {
    this.form.controls.tags.removeAt(index);
  }

  addTag(value: string) {
    this.form.controls.tags.push(this.fb.control(value));
  }

  createPost() {
    // console.log(this.form.value);
    const article = {
      title: this.form.value.title || '',
      description: this.form.value.description || '',
      body: this.form.value.body || '',
      tagList: <Array<string>>(this.form.value.tags || []).filter(tag => !!tag)
    };
    this.postService.createArticle(article).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
