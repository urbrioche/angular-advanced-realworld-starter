import {Component, OnInit} from '@angular/core';
import {PostService} from "../../post.service";
import {ActivatedRoute} from "@angular/router";
import {Article} from "../../interfaces/article";

@Component({
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  article?: Article;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(param => {
        const id = param.get('id') || '';
        this.postService.getArticle(id).subscribe(result => {
          this.article = result.article;
        });
      }
    )
  }

}
