import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { map } from 'rxjs/operators';

@Injectable()
export class TodosService {

  constructor(private http: HttpClient) {
  }

  getList() {
    return this.http
      .get(`${environment.url}.json`)
      .pipe(map(res => {
        return Object.keys(res)
          .map(id => {
            return { id, ...res[id] };
          });

      }));
  }

}
