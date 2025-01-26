import {test, expect, Page} from "@playwright/test"
import { title } from "process"

export async function captureText(page: Page, xpath: string, elementName: string){
    console.log("Capture text on "+elementName)
    let result = await page.locator(xpath).textContent()
}

export async function click(page: Page, xpath: String, elementName: string){
    console.log("Click on " + elementName)
    await page.locator("xpath="+xpath).click()
}

export async function MovePiece(page: Page, xpathOrigin: string, xpathDestination: string, index: number){
    const messageOne = "Select an orange piece to move." // Message to check if we can make the first move
    const messageTwo = "Make a move"
    const xpathMessage = "//*[@id = 'message']"
    let messageText = await captureText(page, xpathMessage, "Captured text for verification") // text used for verification

    if(messageText === messageOne || messageText === messageTwo){
        console.log("Move can be made")
        await click(page, xpathOrigin, "Piece")
        await page.waitForTimeout(2000)
        await click(page, xpathDestination, "Piece moved susccessfully")
        if((index +1) == 3){
            console.log("Blue piece was taken")
        }
        await page.waitForTimeout(2000)
    }
    else {
        console.log("Sorry couldn't make the move")
    }
}

export async function verifiedRestart(page: Page, xpathRestart: string, textToVerify: string){
    const xpathMessage = "//*[@id = 'message']" // xpath for element that contains the message
    await click(page, xpathRestart, "Game Restarted") // click on the restart button
    await page.waitForTimeout(3000) // gives time for the site to relaod if neccesary
    let messageText = await captureText(page, xpathMessage, "for verification") // captures text for us to verify if the game restarted

    if(messageText === textToVerify){ // checks if the message is the one that is displayed when the gane is new
        console.log("Restart verified") // Prints out that the restart is verified
    }
    else{
        console.log("Restart could not be verified") // otherwise prints out that the restart could not be verified
    }
}

export async function verifyTitle(page: Page, titleForVerification: string){
    let currentTitle = await page.title()
    if(currentTitle === titleForVerification){
        console.log("Site Navigated to successfully, title is a match")
    }
    else{
        console.log("Wrong site was navigated to")
    }

}