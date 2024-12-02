import { Component, OnInit } from '@angular/core';
import {
  catchError,
  delay,
  Observable,
  of,
  Subscription,
  switchMap,
} from 'rxjs';
import { TemperaturaService } from 'src/shared/services/temperatura.service';

@Component({
  selector: 'app-long-polling',
  templateUrl: './long-polling.component.html',
  styleUrls: ['./long-polling.component.scss'],
})
export class LongPollingComponent implements OnInit {
  temperatura: number;
  temperaturaSubscription: Subscription;

  constructor(private temperaturaService: TemperaturaService) {}

  ngOnInit(): void {
    this.temperaturaSubscription = this.longPollingTemperatura().subscribe();
  }

  ngOnDestroy(): void {
    this.temperaturaSubscription.unsubscribe();
  }

  longPollingTemperatura(): Observable<any> {
    return this.temperaturaService.getTemperatura().pipe(
      catchError(() => of('Erro ao obter temperatura')),
      switchMap((response) => {
        this.temperatura = response;

        return of(response).pipe(
          // reinicia o polling após 3 segundos
          delay(3000),
          switchMap(() => this.longPollingTemperatura())
        );
      })
    );
  }
}
