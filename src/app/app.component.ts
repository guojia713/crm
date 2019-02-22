import { Component } from '@angular/core';
import { interval } from 'rxjs';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'crm';

  constructor(private swUpdate: SwUpdate) {}

  // Mise a jour automatique
  ngOnInit() {
    interval(1000).subscribe(() => {
      this.swUpdate.checkForUpdate().then(() => {
        console.log('check en cours ');
      });
    });

    this.swUpdate.available.subscribe(version => {
      if (version) {
        this.swUpdate.activateUpdate().then(() => {
          window.location.reload();
        });
      }
    });
  }
}
