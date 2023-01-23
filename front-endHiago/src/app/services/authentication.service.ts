import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private baseUrl: string = 'http://localhost:3333';
  private token: string = null;

  constructor(private http: HttpClient) {}

  async login(usuario): Promise<boolean> {
    if (usuario) {
      return this.http
        .post<boolean>(`${this.baseUrl}/user/login`, usuario)
        .toPromise()
        .then((resultado: any) => {
          this.token = resultado.token;
          return true;
        })
        .catch((err) => {
          this.token = null;
          return false;
        });
    }
    return false;
  }

  logout() {
    this.token = null;
    console.log(this.token);
    
  }

  getToken() {
    return this.token;
  }

  isLogado(): boolean {
    return this.token ? true : false;
  }
}