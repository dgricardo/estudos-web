import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShortPollingComponent } from './short-polling/short-polling.component';
import { LongPollingComponent } from './long-polling/long-polling.component';
import { SseComponent } from './sse/sse.component';
import { WebsocketComponent } from './websocket/websocket.component';

const routes: Routes = [
  {
    path: 'short-polling',
    component: ShortPollingComponent,
  },
  {
    path: 'long-polling',
    component: LongPollingComponent,
  },
  {
    path: 'sse',
    component: SseComponent,
  },
  {
    path: 'websocket',
    component: WebsocketComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
