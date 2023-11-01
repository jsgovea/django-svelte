export function startDuty() {
    console.log("Starting the duty");
}

export function startRandomEvent() {

}

let allEvents = [RECMission, ambush, chase, arrest, randomShots, riot, fakeCall, robbery, gangWar, bankHeist, grandTheftAuto, raid, murder, highJacker, policeBlackmail]


export function RECMission() { }

export function ambush() { }

export function chase() { }

export function arrest() { }

export function randomShots() { }

export function riot() { }

export function fakeCall() { }

export function robbery() { }

export function gangWar() { }

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


export function policeBlackmail() { }

export const moduleExports = {
    allEvents,
}