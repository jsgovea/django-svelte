import { moduleExports } from './gameEvents'

export function getLocation() {
    let currentLocation = { lat: 32.481674, lng: -116.939936 }
    let randomLocation = { lat: 0, lng: 0 }

    const radius = 5;
    const randomLat = currentLocation.lat + (Math.random() - 0.5) * (5 / 110.54)
    const randomLng = currentLocation.lng + (Math.random() - 0.5) * (5 / (111.32 * Math.cos(currentLocation.lat * Math.PI / 180)))

    console.log(randomLocation = { lat: randomLat, lng: randomLng });

    return randomLocation = { lat: randomLat, lng: randomLng }
}

function randomNumber(n) {
    return Math.floor(Math.random() * n)
}

function getRandomEvent() {
    let randomIndex = randomNumber(moduleExports.allEvents.length)
    let randomEventFunction = moduleExports.allEvents[randomIndex]
    console.log(randomEventFunction());
}

export const utilsModuleExports = {
    getLocation,
    getRandomEvent
}