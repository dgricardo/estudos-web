import { Component, OnInit } from '@angular/core';
import {
  catchError,
  interval,
  Subject,
  Subscription,
  switchMap,
  takeUntil,
  takeWhile,
  tap,
  throwError,
  timer,
} from 'rxjs';
import { RelatorioService } from 'src/shared/services/relatorio.service';

@Component({
  selector: 'app-short-polling',
  templateUrl: './short-polling.component.html',
  styleUrls: ['./short-polling.component.scss'],
})
export class ShortPollingComponent implements OnInit {
  relatorios: any[] = [];
  private pollingSubscription: Subject<void> = new Subject<void>();

  constructor(private relatorioService: RelatorioService) {}

  ngOnInit(): void {
    timer(0, 5000) // Define o intervalo em milissegundos (5000 ms = 5 segundos)
      .pipe(
        switchMap(() => this.relatorioService.getRelatorios()),
        tap((relatorios: any) => {
          this.relatorios = relatorios;
        }),
        catchError((err) => {
          this.pollingSubscription.next();
          return throwError(() => err);
        }),
        takeWhile((response: any[]) => {
          return response.some(
            (relatorio) => relatorio.status === 'PROCESSANDO'
          );
        }),
        takeUntil(this.pollingSubscription) //Completa o observable quando um segundo observable (this.pollingSubscription neste caso) emite um valor. Quando this.pollingSubscription emite um valor, o polling é encerrado. Isso é útil para cancelar o polling quando a instância do componente for destruída ou algum evento específico for emitido.
      )
      .subscribe();
  }

  ngOnDestroy() {
    console.log('destruindo short-polling');
    this.pollingSubscription.next();
  }
}
