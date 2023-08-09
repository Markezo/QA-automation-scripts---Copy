import { API } from "../page-objects/booker/common/APIRequests/API"
import { commonPO } from "../page-objects/booker/common/common";
import { SQLquery } from '../page-objects/booker/common/SQLquery'
import { test } from "@playwright/test";
import { randomGen } from "../page-objects/booker/common/randomGenerator";

const baseTest = test.extend<{
    api: API;
    common: commonPO;
    random: randomGen;
    sqlQuery: SQLquery;
}>({
    api: async ({ }, use) => {
        await use(new API())
    },
    common: async ({ page }, use) => {
        await use(new commonPO(page))
    },
    random: async ({ }, use) => {
        await use(new randomGen())
    },
    sqlQuery: async ({ }, use) => {
        await use(new SQLquery())
    }
})

export default baseTest;
export const skip = baseTest.skip;
export const use = baseTest.use;
export const fixme = baseTest.fixme;