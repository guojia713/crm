import { Component, OnInit } from '@angular/core';
import { VersionService } from 'src/app/services/version.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  version: number;

  constructor(private versionService: VersionService) {
    console.log(this.versionService);
    this.versionService.version$.subscribe((v) => {
      this.version = v;
    });
  }
  ngOnInit() {
  }

}
