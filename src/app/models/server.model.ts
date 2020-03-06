import { SslInfo } from './ssl-info.model';

export class Server {

  constructor(
    public servers?: Array<SslInfo>,
    public servers_changed?: boolean,
    public ssl_grade?: string,
    public previous_ssl_grade?: string,
    public logo?: string,
    public title?: string,
    public is_down?: boolean
  ) { }

}
