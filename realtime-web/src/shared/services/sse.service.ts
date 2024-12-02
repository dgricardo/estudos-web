import { Injectable, NgZone } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SseService {
  private eventSource: EventSource;

  constructor(private zone: NgZone) {}

  connect(url: string, eventNames: string[] = []): Observable<Event> {
    this.eventSource = new EventSource(url);

    return new Observable((subscriber: Subscriber<Event>) => {
      this.eventSource.onerror = (error) => {
        this.zone.run(() => subscriber.error(error));
      };

      eventNames.forEach((event: string) => {
        this.eventSource.addEventListener(event, (data) => {
          this.zone.run(() => subscriber.next(data));
        });
      });
    });
  }

  close(): void {
    if (!this.eventSource) {
      return;
    }

    this.eventSource.close();
    this.eventSource = null;
  }
}
