import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent implements OnInit {
    amount: number;
    currencyFrom: '';
    currencyTo: '';
    total = 0;
    currencyList = {
            USD: {
                symbol: 'USD',
                name: 'US Dollar',
                exchange_USD: 1,
                exchange_EUR: 0.83,
                exchange_GBP: 0.72,
                exchange_ARS: 148
            },
            EUR: {
                symbol: 'EUR',
                name: 'Euro',
                exchange_USD: 0.83,
                exchange_EUR: 1,
                exchange_GBP: 0.87,
                exchange_ARS: 160.87
            },
            GBP: {
                symbol: 'GBP',
                name: 'British Pound',
                exchange_USD: 0.72,
                exchange_EUR: 1.15,
                exchange_GBP: 1,
                exchange_ARS: 182.72
            },
            ARS: {
                symbol: 'ARS',
                name: 'Argentine Peso',
                exchange_USD: 0.0067,
                exchange_EUR: 0.0062,
                exchange_GBP: 0.0055,
                exchange_ARS: 1
            }
        }
    ;
    constructor() { }

    convert(): void {
        if (this.amount == undefined || this.currencyFrom == undefined || this.currencyTo == undefined){
            return;
        }
        this.total = this.amount * this.currencyList[this.currencyFrom]['exchange_' + this.currencyTo];
    }


    ngOnInit(): void {
  }

}
