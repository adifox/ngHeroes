import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataStorageService {
  constructor(public httpClient: HttpClient) {}

  getData() {
    return this.httpClient.get('https://my-json-server.typicode.com/adifox/fake-json-directory/db');
  }
}
