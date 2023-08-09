import { APIRequestContext, expect } from "@playwright/test";
import { UserData } from './APITypes'
import { randomGen } from "../randomGenerator";

const fs = require("fs");
const fsExtra = require("fs-extra");


export class apiUserRequests {
    readonly randomGen: randomGen;

    constructor () {
        this.randomGen = new randomGen();
      }

    async defaultWorkerValues(): Promise<UserData> {
        return ({
            name: "Test",
            surname: "Worker",
            password: "Password89347",
            email: this.randomGen.userEmail,
        })
    }

    async createUser (request: APIRequestContext, bearerToken: string, origin: string, userData: UserData) {
        const createUserResponse = await request.post(`${origin}api/v1/users`,
            {
                data: userData,
                headers: { 
                    Authorization: "Bearer " + bearerToken, 
                    origin: origin
                },
            }
        );
        if (createUserResponse.status() != 201) {
            console.log(await createUserResponse.json());
        }
        expect(createUserResponse.status()).toBe(201);
        return await createUserResponse.json();
    }
}