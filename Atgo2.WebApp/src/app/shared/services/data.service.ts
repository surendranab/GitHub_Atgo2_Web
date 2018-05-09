import {
  Injectable
} from '@angular/core';
import {
  Subject
} from 'rxjs/Rx';

@Injectable()
export class DataService {
  private notifyObj$ = new Subject();

  getNotifyBedData() {
    return this.notifyObj$;
  }

  updateNotifyBedData(data: any) {
    this.notifyObj$.next(data);
  }
}
