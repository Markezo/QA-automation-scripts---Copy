import fetch from 'node-fetch';

const ENDPOINT = "public/v2/users/";

export async function makeApiCall(
  baseURL: string | undefined,
  method: string,
  data?: any,
  userID?: any
) {
  let url = `${baseURL}${ENDPOINT}`;
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

