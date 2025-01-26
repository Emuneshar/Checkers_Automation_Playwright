import {test, expect, Page} from "@playwright/test"

export async function click(page: Page, xpath: String, elementName: string){
    console.log("Click on " + elementName)
    await page.locator("xpath="+xpath).click()
}