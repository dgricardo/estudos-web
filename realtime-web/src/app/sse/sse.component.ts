import { Component, OnInit } from '@angular/core';
import { SseService } from 'src/shared/services/sse.service';

@Component({
  selector: 'app-sse',
  templateUrl: './sse.component.html',
  styleUrls: ['./sse.component.scss'],
})
export class SseComponent implements OnInit {
  qtdeNotificacoes = 0;
  notificacoes: string[] = [];

  constructor(private sseService: SseService) {}

  ngOnInit(): void {
    this.sseService
      .connect('http://localhost:8080/realtime/v1/notificacoes/observar', [
        'alertas',
      ])
      .subscribe({
        next: (event: MessageEvent) => {
          this.qtdeNotificacoes++;
          this.notificacoes?.unshift(event.data);
        },
      });
  }

  ngOnDestroy(): void {
    this.sseService.close();
  }
}
