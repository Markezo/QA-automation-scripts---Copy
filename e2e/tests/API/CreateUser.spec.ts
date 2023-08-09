import { test, expect } from "@playwright/test";
import {
  deleteRequest,
  getRequest,
  getRequestAfterDelete,
  postRequest,
  putRequest,
} from "../../fixtures/apiConfig";

test.describe.serial("API calls", () => {
  let id: number;


  test("Create User", async ({ baseURL }) => {
    const response = await postRequest(baseURL);
    let user= await response.json();
    id = user.id;
  });

  test("Update User", async ({ baseURL }) => {
    putRequest(baseURL, id);
  });


  test("Get User By ID", async ({ baseURL }) => {
    getRequest(baseURL, id);
  });

  test("Delete User", async ({ baseURL }) => {
    const response =  await deleteRequest(baseURL, id);
    const getUserResponse = await getRequestAfterDelete(baseURL, id);
  });
});
