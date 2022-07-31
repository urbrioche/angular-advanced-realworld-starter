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

}
