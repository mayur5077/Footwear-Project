import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommanService {
  baseurl = 'https://644d12f0cfdddac9709c5144.mockapi.io/api/callig/';

  constructor(private http: HttpClient) {}

  // getproduct(path: string) {
  //   return this.http.get(this.producturl + path);
  // }

  // postproduct(path: string, data: any) {
  //   return this.http.post(this.producturl + path, data);
  // }

  // putproduct(path: string, data: any) {
  //   return this.http.put(this.producturl + path, data);
  // }

  // deleteproduct(path: string) {
  //   return this.http.delete(this.producturl + path);
  // }
  // -----------------------------------------------------
  get(path: string) {
    return this.http.get(this.baseurl + path);
  }

  post(path: string, data: any) {
    return this.http.post(this.baseurl + path, data);
  }

  put(path: string, data: any) {
    return this.http.put(this.baseurl + path, data);
  }

  delete(path: string) {
    return this.http.delete(this.baseurl + path);
  }
}
