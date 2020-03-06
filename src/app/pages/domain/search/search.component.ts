import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { ServerModel } from '../../../models/server.model'
import { SslInfoModel } from '../../../models/ssl-info.model'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  public search: FormGroup;
  public is_submit: boolean = false;
  public showSpinner: boolean = false;

  public sslInfo1: SslInfoModel = new SslInfoModel(
    'adres purba',
    'pais prueba',
    'owner',
    'ssl_grade'
  )

  public sslInfo2: SslInfoModel = new SslInfoModel(
    'adres purba',
    'pais prueba',
    'owner',
    'ssl_grade'
  )

  public server: ServerModel;

  constructor() { }

  ngOnInit() {
    this.search = new FormGroup({
      text: new FormControl(null, [Validators.required, Validators.minLength(3)])
    });
  }

  searchDomain(is_submit: boolean) {
    this.is_submit = is_submit;
    if (this.search.invalid) {
      return null;
    }
    this.showSpinner = true;
    setTimeout(() => {
      this.server = new ServerModel([this.sslInfo1, this.sslInfo2], true, 'ssgrade', 'previus grade', 'logo', 'title', false);
      this.showSpinner = false;
    }, 3000);

    console.log(this.search);
  }

}
