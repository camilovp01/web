export class SslInfoModel {

    constructor(
        public address: string,
        public ssl_grade: string,
        public country: string,
        public owner: string,
        public progress: number
    ) { }

}
