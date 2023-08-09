import { test, expect } from '@playwright/test';

const ENDPOINT = 'public/v2/users/';
const USER = '4181272';



test('Get User By ID', async ({ baseURL }) => {
  // Define the cookies here or use the cookies from your storage state
  const endpointUrl = `${baseURL}${ENDPOINT}${USER}`;
  const response = await fetch(endpointUrl, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Authorization': `Bearer ${process.env.TOKEN}`
    },
  });

  expect(response.status).toEqual(200);
  const user = await response.json();
  // Do further assertions with the user data if needed
});