export class randomGen {
    readonly rand: number;
    readonly userEmail: string;
    readonly userPhoneNumber: number;

  constructor() {
    this.rand = Math.floor(Math.random() * 1000000);
    this.userEmail = 'user+' + this.rand + '@gmail.com';
    this.userPhoneNumber = Math.floor(Math.random() * (9999999999 - 1000000000) + 1000000000);
  }
}