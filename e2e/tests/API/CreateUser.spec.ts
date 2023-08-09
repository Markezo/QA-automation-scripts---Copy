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


  test("Create User", async ({ }) => {
    const response = await postRequest();
    let user= await response.json();
    id = user.id;
  });

  test("Update User", async ({  }) => {
    putRequest(id);
  });


  test("Get User By ID", async ({  }) => {
    getRequest(id);
  });

  test("Delete User", async ({  }) => {
    const response =  await deleteRequest(id);
    const getUserResponse = await getRequestAfterDelete(id);
  });
});
