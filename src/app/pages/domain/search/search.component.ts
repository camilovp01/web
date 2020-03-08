import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { ServerModel } from '../../../models/server.model'
import { InfoDomainService } from 'src/app/services/info-domain/info-domain.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  public search: FormGroup;
  public is_submit: boolean = false;
  public showSpinner: boolean = false;

  public server: ServerModel;

  constructor(public _infoDomainService: InfoDomainService) { }

  ngOnInit() {
    this.search = new FormGroup({
      text: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      cache: new FormControl(null)
    });
  }

  searchDomain(is_submit: boolean) {
    this.is_submit = is_submit;
    if (this.search.invalid) {
      return null;
    }
    let domain = this.search.value.text;
    let cache = this.search.value.cache;
    let startNew = cache ? 'false' : 'true';
    this.showSpinner = true;
    this._infoDomainService.infodomain$(domain, cache, startNew).subscribe((data) => {
      this.server = data;
      this.showSpinner = false;
      if (this._infoDomainService.status === 'READY') {
        this.is_submit = false;
        return
      }
      if (this._infoDomainService.status) {

        const interval = setInterval(() => {
          if (this._infoDomainService.status !== 'READY') {
            this._infoDomainService.infodomain$(domain, cache, 'false').subscribe((data) => {
              this.server = data;
            });
          } else {
            this.is_submit = false;
            clearInterval(interval);
          }
        }, 20000);

      } else {
        this.is_submit = false;
        Swal.fire({
          title: "Ups!",
          text: "Ocurrió un error inesperado en el servicio, vuelve a intentarlo",
          icon: "error",
        });

      }

    });

  }

}
