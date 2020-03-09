import { Component, OnInit } from '@angular/core';
import { InfoDomainService } from 'src/app/services/info-domain/info-domain.service';
import { HistoryModel } from 'src/app/models/history.model';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styles: []
})
export class HistoryComponent implements OnInit {

  public history: HistoryModel;

  constructor(private _infoDomainService: InfoDomainService) { }

  ngOnInit() {
    this._infoDomainService.gethistory$().subscribe((data) => {
      this.history = data;
    });
  }

}
