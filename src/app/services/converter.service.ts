import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ConverterService {
    private REST_API_SERVER = 'https://free.currconv.com/api/v7/';
    private API_KEY = '?apikey=89c141bdd134632b4d36';

    constructor(
        private http: HttpClient
    ) {}

    // public getCurrencies() {
    //
    //     return this.http.get(`${this.REST_API_SERVER}/currency${this.API_KEY}`);
    // //     currencies?apiKey
    // }
}
