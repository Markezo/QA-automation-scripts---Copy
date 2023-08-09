import { apiUserRequests } from './Users'
import storageState from "../../../../login/storageState.json";

export class API {
    readonly user: apiUserRequests;
    readonly bearerToken: string;
    

    constructor () {
      this.user = new apiUserRequests();
      // this.bearerToken = storageState.cookies.find(
      //   (item) => item.name === "accessToken"
      // )?.value!;
    }
}