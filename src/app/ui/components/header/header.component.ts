import { Component, OnInit } from '@angular/core';
import { VersionService } from 'src/app/services/version.service';
import { filter, takeWhile } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public close = false;
  public title = 'Title';
  version$: Observable<number>;
  version: number;

  constructor(private versionService: VersionService) {
    console.log(this.versionService);
    this.version$ = this.versionService.version$
      .pipe(takeWhile(x => x < 10));
  }

  ngOnInit() {}

  toggle() {
    console.log('Click on nav');
    this.close = !this.close;
  }
}
