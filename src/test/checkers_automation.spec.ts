import {test, expect, Page} from "@playwright/test"
import {click, MovePiece, verifiedRestart, verifyTitle} from "../../main/Reusable_Methods"

let page : Page

// Here we create a browser instance to run our test

test.beforeAll(async ({browser}) =>{
    page = await browser.newPage()
})



