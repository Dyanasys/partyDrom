import {Component, OnInit} from '@angular/core';
import {ArticleService} from "../services/article.service";

@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.scss']
})
export class NewArticleComponent implements OnInit {

  constructor(private articleService: ArticleService) {
  }

  article: any;

  ngOnInit(): void {
  }

  add(title: string, body: string, author: string) {
    this.article = {
      'title': title,
      'body': body,
      'author': author
    }

    this.articleService.addArticle(this.article as any).subscribe(article => {
      this.article = article
    });

    console.log('article added :)');
  }

}
