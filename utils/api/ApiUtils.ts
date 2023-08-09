const fetch = require('node-fetch').default;
const ENDPOINT = "public/v2/users/";
const base = 'https://gorest.co.in/'
export async function makeApiCall(
 // apiUrl: string | undefined,
  method: string,
  data?: any,
  userID?: any
) {
  let url = `${base}${ENDPOINT}`;
  if (userID !== undefined) {
    url += userID;
  }

  const response = await fetch(url, {
    method,
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${process.env.TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response;
}

