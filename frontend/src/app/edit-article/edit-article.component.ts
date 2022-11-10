import {Component, OnInit} from '@angular/core';
import {ArticleService} from "../services/article.service";
import {ActivatedRoute, Router} from '@angular/router';
// import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.scss']
})
export class EditArticleComponent implements OnInit {

  id: any;
  article: any;

  constructor(private route: ActivatedRoute, private router: Router, private articleService: ArticleService) {
  }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    this.id = Number(routeParams.get('id'));
    console.log(this.id);
    this.articleService.find(this.id).subscribe((data:any)=>{
      this.article = data;
    });
    console.log(this.article);
  }

}
