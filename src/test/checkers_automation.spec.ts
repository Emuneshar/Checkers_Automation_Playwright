import {test, expect, Page} from "@playwright/test"
import {click, MovePiece, verifiedRestart, verifyTitle} from "../main/Reusable_Methods"

let page : Page

// Here we create a browser instance to run our test

test.beforeAll(async ({browser}) =>{
    page = await browser.newPage()
})

// URLs, strings and other misc data
const url = "https://www.gamesforthebrain.com/game/checkers/"
const titleForVerification = "Checkers - Games for the Brain"
const startMessage = "Select an orange piece to move."

// xpaths of pieces we will move
let xpathPieces = Array<string>()
xpathPieces.push("//*[@name = 'space62']")
xpathPieces.push("//*[@name = 'space42']")
xpathPieces.push("//*[@name = 'space51']")
xpathPieces.push("//*[@name = 'space31']")
xpathPieces.push("//*[@name = 'space60']")

// corresponding xpaths for where we will move to
let xpathPiecesTo = Array<string>()
xpathPiecesTo.push("//*[@name = 'space53']")
xpathPiecesTo.push("//*[@name = 'space33']")
xpathPiecesTo.push("//*[@name = 'space33']")
xpathPiecesTo.push("//*[@name = 'space42']")
xpathPiecesTo.push("//*[@name = 'space51']")

const xpathRestart = "//*[@href = './']"
// Beginning of test case
test("Checkers Challenge", async() => {
    await page.goto(url) // Navigate to url
    await verifyTitle(page, titleForVerification) // Verify that the title matches and we are on the correct site
    for(let i = 0; i < xpathPieces.length; i++){ // for loop to loop through our 5 moves, planned from manual testing
        console.log("This is move " + (i+1))
        await MovePiece(page, xpathPieces[i], xpathPiecesTo[i], i) // Calling the Move function 5 time to make the 5 pre planned moves , The Blue piece is taken on the 3rd move
    }
  await verifiedRestart(page, xpathRestart, startMessage) // restart the game and verify the restart was successful
  await page.waitForTimeout(3000) // added wait time due to playwright moving fast
}) // end of test case
