import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthenticationService } from '../services/authentication.service';

const urlBase = "http://localhost:3333"

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private authentication: AuthenticationService) {}

  private getHttpOptions() {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + this.authentication.getToken(),
      }),
    };
    return httpOptions;
  }

  create(user: any): Promise<any>{
    return this.http.post(urlBase + "/users", user, this.getHttpOptions()).toPromise();
  }

  delete(id: number): Promise<any>{
    return this.http.delete(urlBase + "/users/" + id, this.getHttpOptions()).toPromise();
  }

  getAll(): Promise<any>{
    return this.http.get(urlBase + "/users", this.getHttpOptions()).toPromise();
  }

  verificaSenha(user: any): Promise<any>{
    return this.http.post(urlBase + "/user/verificaSenha", user).toPromise();
  }
}
