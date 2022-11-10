import {Component, OnInit} from '@angular/core';
import {ArticleService} from "../services/article.service";
// import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.scss']
})
export class NewArticleComponent implements OnInit {

  constructor(private articleService: ArticleService) {
  }

  article: any;
  // articles: any;
  // dataSource = new MatTableDataSource<any>();

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

  // refresh() {
  //   // this.articles = this.articleService.listArticles().subscribe(article => {
  //   //   this.articles = article;
  //   // });
  //   this.articleService.listArticles().subscribe((data: any[]) => {
  //     this.dataSource.data = data;
  //   });
  //   console.log('refresh2');
  // }

}
