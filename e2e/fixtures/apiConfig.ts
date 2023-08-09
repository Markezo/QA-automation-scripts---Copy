import { expect } from "@playwright/test";
import { makeApiCall } from "../../utils/api/ApiUtils";
import { userApiData } from "../../utils/api/user";

let id: number;
const data = new userApiData();
const updated_data = {name:'LokoPoko'}

export async function getRequest (baseURL, id){
    const response = await makeApiCall(baseURL, "GET", undefined, id);
    expect(response.status).toEqual(200);
    return response;
}

export async function getRequestAfterDelete (baseURL, id){
    const response = await makeApiCall(baseURL, "GET", undefined, id);
    expect(response.status).toEqual(404);
    return response;
}

export async function postRequest (baseURL){
    const response = await makeApiCall(baseURL, "POST", data);
    expect(response.status).toEqual(201);
    return response;
}

export async function putRequest (baseURL, id){
    const response = await makeApiCall(baseURL, "PUT", updated_data, id);
    expect(response.status).toEqual(200);
}

export async function deleteRequest (baseURL, id){
    const response = await makeApiCall(baseURL, "DELETE", undefined, id);
    expect(response.status).toEqual(204);
    return response;
}