import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  private isAddTaskHidden: boolean = true;
  private subject = new Subject<any>();

  constructor() {}

  toggleAddTask(): void {
    this.isAddTaskHidden = !this.isAddTaskHidden;
    this.subject.next(this.isAddTaskHidden);
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
