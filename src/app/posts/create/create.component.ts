import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';

@Component({
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  form = this.fb.group({
    title: this.fb.control(''),
    description: this.fb.control(''),
    body: this.fb.control(''),
    tags: this.fb.array([
      this.fb.control('Angular'),
      this.fb.control('HTML'),
      this.fb.control('CSS')
    ])
  });

  constructor(private fb: FormBuilder) {
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
    console.log(this.form.value);
  }
}
