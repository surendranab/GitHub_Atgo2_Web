import {
    Injectable
  } from '@angular/core';

  import {
    Http,
    Headers,
    RequestOptions,
    URLSearchParams
  } from '@angular/http';

  import {
    environment
  } from '../../../environments/environment';

  import {
    Router
  } from '@angular/router';

  import {
    routeUrl
  } from '../../app.config';

  declare var JSEncrypt: any;

@Injectable()
export class HttpService {
  token: any;
  etag: any;

  constructor(private http: Http, private router: Router) {}

  createTicket(token) {
    const publicKey = '-----BEGIN PUBLIC KEY-----' +
      'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCbfwy990vx6l+Ji+DDrKUwHvM8' +
      'ApJK1AuSUJAQ7CitDAnHDf1td2ebjvXsFSbnvTS9kJsb0YGCPAdTGasWsWxInEwh' +
      '1iGiRP8O5g4L02x/Z+JflSr5a0F9tKd4SvrJWTZUHV+BtrpfGgr07cIrOJ5HVfE8' +
      'Sh/EZGOtfMx7ycgw1wIDAQAB' +
      '-----END PUBLIC KEY-----';

    const encryptData = new JSEncrypt();
    encryptData.setPublicKey(publicKey);
    let encryptedData;
    let toEncrypt;
    for (let i = 0; i < 10; i++) {
      toEncrypt = (Date.now() / 1000) + ',' + token;
      encryptedData = encryptData.encrypt(toEncrypt);
      if (!encryptedData.endsWith('==')) {
        break;
      }
    }
    return encryptedData;
  }

  getToken() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;
    if (!this.token) {
      localStorage.clear();
      this.router.navigate([routeUrl.login]);
    }
  }

  buildUrl(resourceUrl: any) {
    return environment.serviceBaseUrl + resourceUrl;
  };

  createAuthorizationHeader() {
    this.getToken();
    const headers = new Headers({
      'Authorization': this.createTicket(this.token),
      'Content-Type': 'application/json'
    });
    const search = new URLSearchParams();
    search.set('timestamp', (new Date()).getTime().toString());
    const options = new RequestOptions({
      headers: headers,
      search: search
    });
    return options;
  }

  get(url: string) {
    const headers = this.createAuthorizationHeader();
    return this.http.get(this.buildUrl(url), headers);
  }

  getAuth(url: string) {
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    const options = new RequestOptions({
      headers: headers
    });
    return this.http.get(this.buildUrl(url), options);
  }

  postAuth(url: string, data: any) {
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    const options = new RequestOptions({
      headers: headers
    });
    return this.http.post(this.buildUrl(url), data, options);
  }

  putAuth(url: string, data: any) {
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    const options = new RequestOptions({
      headers: headers
    });
    return this.http.put(this.buildUrl(url), data, options);
  }

  post(url: string, data: any) {
    const headers = this.createAuthorizationHeader();
    return this.http.post(this.buildUrl(url), data, headers);
  }

  delete(url: string) {
    const headers = this.createAuthorizationHeader();
    return this.http.delete(this.buildUrl(url), headers);
  }

  put(url: string, data: any) {
    const headers = this.createAuthorizationHeader();
    headers.headers.append('If-Match', this.etag);
    return this.http.put(this.buildUrl(url), data, headers);
  }

  putWithoutEtag(url: string, data: any) {
    const headers = this.createAuthorizationHeader();
    return this.http.put(this.buildUrl(url), data, headers);
  }
}