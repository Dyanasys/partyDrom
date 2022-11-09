import {Component, OnInit} from '@angular/core';
import {ArticleService} from "../services/article.service";

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  articles: any; //esta variable se pasa al html
  constructor(private articleService: ArticleService) {
  }

  ngOnInit(): void {
    this.showArticles();
  }

  showArticles() {
    this.articles = this.articleService.listArticles().subscribe(article => {
      this.articles = article;
      console.log(this.articles);
    });
  }

}