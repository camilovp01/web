import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ServerModel } from 'src/app/models/server.model';
import { map, retry } from 'rxjs/operators';
import { HistoryModel } from 'src/app/models/history.model';

@Injectable({
  providedIn: 'root'
})
export class InfoDomainService {

  private urlBase: string = environment.urlServicio;
  public status: string = '';

  constructor(private http: HttpClient) { }

  public infodomain$(domain: string, cache: string, startNew: string) {
    let url = `${this.urlBase}infodomain`;
    return this.http.get<ServerModel>(url, { params: { domain, cache, startNew } }).pipe(
      map((data: ServerModel) => {
        this.status = data.status;
        return data;
      }),
      retry(3)
    );
  }

  public gethistory$() {
    let url = `${this.urlBase}infodomain/gethistory`;
    return this.http.get<HistoryModel>(url);
  }

  public saveHistory$(domain) {
    let url = `${this.urlBase}infodomain/saveHistory`;
    return this.http.post(url, { domain });
  }

}
