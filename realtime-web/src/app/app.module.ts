import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabMenuModule } from 'primeng/tabmenu';
import { LongPollingComponent } from './long-polling/long-polling.component';
import { SseComponent } from './sse/sse.component';
import { WebsocketComponent } from './websocket/websocket.component';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { ShortPollingComponent } from './short-polling/short-polling.component';
import { ProgressBarModule } from 'primeng/progressbar';
import { KnobModule } from 'primeng/knob';
import { FormsModule } from '@angular/forms';
import { BadgeModule } from 'primeng/badge';
import { RxStompService } from './rx-stomp.service';
import { rxStompServiceFactory } from './rx-stomp-service-factory';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    AppComponent,
    ShortPollingComponent,
    LongPollingComponent,
    SseComponent,
    WebsocketComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TabMenuModule,
    HttpClientModule,
    TableModule,
    ProgressBarModule,
    KnobModule,
    FormsModule,
    BadgeModule,
    InputTextModule,
    ButtonModule,
  ],
  providers: [
    {
      provide: RxStompService,
      useFactory: rxStompServiceFactory,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
