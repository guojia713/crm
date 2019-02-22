import { Component, OnInit } from '@angular/core';
import { VersionService } from 'src/app/services/version.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  version: number;
  posts$: Observable<any>;


constructor(private versionService: VersionService, private http: HttpClient) {  }

ngOnInit() {
    /* this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe(
      (data) => {
        this.posts = data;
      }); */

      this.posts$ = this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

add() {
    this.versionService.add();
  }

minus() {
    this.versionService.minus();
  }
}
