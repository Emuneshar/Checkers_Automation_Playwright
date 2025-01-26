import {test, expect, Page} from "@playwright/test"
import {click, MovePiece, verifiedRestart, verifyTitle} from "../../main/Reusable_Methods"

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


