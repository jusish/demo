import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RecordsService {
  info1: string[] = ['Justin', 'ED453', 'justin@gmail.com'];
  info2: string[] = ['Adam john', 'ED200', 'adam@gmail.com'];
  info3: string[] = ['moses', 'ED154', 'moses@gmail.com'];
  getinfo1(): string[] {
    return this.info1;
  }
  getinfo2(): string[] {
    return this.info2;
  }
  getinfo3(): string[] {
    return this.info3;
  }
  constructor() {}
}
