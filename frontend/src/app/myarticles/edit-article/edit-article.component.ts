import {Component, OnInit} from '@angular/core';
import {ArticleService} from "../../services/article.service";
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
  private sub: any;

  constructor(private route: ActivatedRoute, private router: Router, private articleService: ArticleService) {
  }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    this.id = Number(routeParams.get('id'));
    console.log("id of article: " + this.id);
    this.sub = this.articleService.find(this.id).subscribe((data: any) => {
      this.article = data;
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  update(title: string, body: string, author: string) {
    this.articleService.update(this.id, this.article).subscribe((res) => {
      this.router.navigateByUrl('/').then(r => console.log("router navigate of edit"));
    });
  }

  // edit():void{
  //   const routeParams = this.route.snapshot.paramMap;
  //   this.id = Number(routeParams.get('id'));
  //   console.log("id of article: " + this.id);
  //   this.articleService.find(this.id).subscribe((data: any) => {
  //     this.article = data;
  //     console.log("Article for editing: " + JSON.stringify(this.article));
  //   });
  // }

}
