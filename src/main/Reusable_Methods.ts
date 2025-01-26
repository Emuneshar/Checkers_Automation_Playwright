import {test, expect, Page} from "@playwright/test"

export async function click(page: Page, xpath: String, elementName: string){
    console.log("Click on " + elementName)
    await page.locator("xpath="+xpath).click()
}

export async function MovePiece(page: Page, xpathOrigin: string, xpathDestination: string, index: number){
    const messageOne = "Select an orange piece to move." // Message to check if we can make the first move
    const messageTwo = "Make a move"
    const xpathMessage = "//*[@id = 'message']"
    let messageText = await captureText(page, xpathMessage, "Captured text for verification")
    
}