import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
  })
export class MembreService {

    private readonly prefix = '/membre';

    constructor(private http: HttpClient) { }

    getMembre(username: string): Observable<object> {
        return this.http.get(`${environment.api}${this.prefix}/getone/${username}`);
    }

    getAdminMembre(id: number): Observable<object> {
        return this.http.get(`${environment.api}${this.prefix}/adminget/${id}`);
    }

    createMembre(customer: object): Observable<object> {
        return this.http.post(`${environment.api}${this.prefix}` + `/create`, customer);
    }

    updateMembre(id: number, value: any): Observable<object> {
        return this.http.put(`${environment.api}${this.prefix}/${id}`, value);
    }

    updateMembrePassword(id: number, value: any): Observable<object> {
        return this.http.put(`${environment.api}${this.prefix}/password/${id}`, value);
    }

    updateMembreRole(id: number, value: any): Observable<object> {
        return this.http.put(`${environment.api}${this.prefix}/updaterole/${id}`, value);
    }

    getMembreList(): Observable<any> {
        return this.http.get(`${environment.api}${this.prefix}`);
    }

    deleteUser(username: string): Observable<any> {
        return this.http.delete(`${environment.api}${this.prefix}/deleteuser/${username}`);
    }
}
