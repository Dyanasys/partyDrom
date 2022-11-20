import {Component, OnInit} from '@angular/core';
import {ArticleService} from "../services/article.service";
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  articles: any; //esta variable se pasa al html
  constructor(private articleService: ArticleService, private route: ActivatedRoute, private router: Router) {
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

  delete(id: any) {
    this.articleService.delete(id).subscribe(
      res => {
        this.articles = this.articles.filter((a: any) => a.id == id);
      }
    );
    this.router.navigateByUrl('/').then(r => console.log("router navigate of delete"));
  }

}
