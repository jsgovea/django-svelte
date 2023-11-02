export function startDuty() {
    console.log("Starting the duty");
}

export function startRandomEvent() {

}

// let allEvents = [RECMission, ambush, chase, arrest, randomShots, riot, fakeCall, robbery, gangWar, bankHeist, grandTheftAuto, raid, murder, highJacker, policeBlackmail]


let allEvents = [randomShots]

export function RECMission() {
    // Icon name
    // Sound name
    // Event details
    console.log("RECMission");
}

export function ambush() {
    console.log("Ambush");
}

export function chase() {
    console.log("chase");
}

export function arrest() {
    console.log("Arrest");
}

export function randomShots() {
    // Icon name
    // Sound name
    // Event details
    console.log("randomshots");
    return ["piecemarker.png", "random_shots.wav", "The sounds came from the neighboring street, to the north of me. It's a quiet neighborhood, and this is unusual. I haven't seen any disturbances or people nearby."]
}

export function riot() {
    console.log("riot");
}

export function fakeCall() {
    console.log("fakecall");
}

export function robbery() {
    console.log("robbery");
}

export function gangWar() {
    // Icon name
    // Sound name
    // Event details
    console.log("gangwar");
}

export function bankHeist() {
    console.log("bankheist");
}

export function grandTheftAuto() {
    console.log("GTA");
}

export function raid() {
    console.log("Raid");
}

export function murder() {
    console.log("Murder");
}

export function highJacker() {
    console.log("highJacker");
}

function paranormalActivity() { }

function oldUnsolvedCases() { }

export function policeBlackmail() { }

export const moduleExports = {
    allEvents,
    paranormalActivity,
    oldUnsolvedCases
}