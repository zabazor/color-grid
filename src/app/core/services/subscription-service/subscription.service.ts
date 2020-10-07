import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SubscriptionService {
  // PROPERTIES
  private subscribers: any[] = [];

  constructor() {}

  // PUBLIC METHODS

  /**
   * add
   * @description Creates a subscriber and assigns it a name.
   * @param name a name for the subscriber.
   * @param value subscriber data.
   * @example add('subscriber_name');
   * @example add('subscriber_name', 'value');
   */
  add(name: string, value?: any): void {
    const subscriber = {
      name,
      data: new Subject(),
    };

    subscriber.data.next(value);
    this.subscribers.push(subscriber);
  }

  /**
   * remove
   * @description Removes a subscriber.
   * @param name a name for the subscriber.
   * @example remove('subscriber_name');
   */
  remove(name: string): void {
    this.subscribers = this.subscribers.filter((p) => p.name !== name);
  }

  /**
   * set
   * @description Sets a subscribers data by name.
   * @param name the name of the subscriber.
   * @param data subscriber data.
   * @example set('subscriber_name', 'value');
   * @example set('subscriber_name', { data: 'value'});
   */
  set(name: string, value: any): void {
    const subscriber = this.getSubscriber(name);

    if (!subscriber) {
      this.add(name, value);
      this.set(name, value);
    }

    subscriber.data.next(value);
  }

  /**
   * get
   * @description Gets a subscribers value by name.
   * @param name the name of the subscriber.
   * @returns subscriber data.
   * @example get('subscriber_name');
   */
  get(name: string): Observable<any> {
    const subscriber = this.getSubscriber(name);

    if (!subscriber) {
      this.add(name);
      return this.get(name);
    }

    return subscriber.data.asObservable();
  }

  // PRIVATE METHODS

  /**
   * getSubscriber
   * @description Gets a subscribers by name.
   * @param name the name of the subscriber.
   * @returns subscriber object.
   * @example getSubject('subscriber_name');
   */
  private getSubscriber(name: string): any {
    if (this.subscribers.length) {
      for (const subscriber of this.subscribers) {
        if (subscriber.name === name) {
          return subscriber;
        }
      }
    }

    return false;
  }
}
