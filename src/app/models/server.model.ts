import { SslInfoModel } from './ssl-info.model';

export class ServerModel {

  constructor(
    public status?: string,
    public servers?: Array<SslInfoModel>,
    public servers_changed?: boolean,
    public ssl_grade?: string,
    public previous_ssl_grade?: string,
    public logo?: string,
    public title?: string,
    public is_down?: boolean
  ) { }

}
