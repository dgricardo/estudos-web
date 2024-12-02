import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'realtime-web';

  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      {
        label: 'Short polling',
        icon: 'pi pi-sync',
        routerLink: 'short-polling',
      },
      {
        label: 'Long polling',
        icon: 'pi pi-arrow-right-arrow-left',
        routerLink: 'long-polling',
      },
      { label: 'SSE', icon: 'pi pi-arrow-left', routerLink: 'sse' },
      { label: 'Websocket', icon: 'pi pi-arrows-h', routerLink: 'websocket' },
    ];
  }
}
