import { Component, OnInit } from '@angular/core';
import { RxStompService } from '../rx-stomp.service';
import { Message } from '@stomp/stompjs';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-websocket',
  templateUrl: './websocket.component.html',
  styleUrls: ['./websocket.component.scss'],
})
export class WebsocketComponent implements OnInit {
  private topicSubscription: Subscription;

  mensagem: string;
  mensagens: string[] = [];

  constructor(private rxStompService: RxStompService) {}

  ngOnInit(): void {
    this.topicSubscription = this.rxStompService
      .watch('/topic/mensagem')
      .subscribe((message: Message) => {
        console.log(message.body);
        this.mensagens.unshift(message.body);
      });
  }

  enviarMensagem() {
    this.rxStompService.publish({
      destination: '/app/enviar-mensagem',
      body: this.mensagem,
    });

    this.mensagem = '';
  }

  ngOnDestroy() {
    this.topicSubscription.unsubscribe();
  }
}
