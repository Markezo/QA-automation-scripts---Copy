const fetch = require('node-fetch').default;
const ENDPOINT = "public/v2/users/";
const TOKEN = process.env.API_TOKEN;
const BASE_URL = process.env.API_BASE_URL;

export async function makeApiCall(
 // apiUrl: string | undefined,
  method: string,
  data?: any,
  userID?: any
) {
  let url = `${BASE_URL}${ENDPOINT}`;
  if (userID !== undefined) {
    url += userID;
  }

  const response = await fetch(url, {
    method,
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response;
}

