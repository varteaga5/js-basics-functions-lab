// Code your solution in this file!
function distanceFromHqInBlocks(streetNum) {
// 1) returns a distance in blocks
// 2) returns a distance in blocks
// 3) calculates distances below 42nd street
    return Math.abs(streetNum - 42)
}

function distanceFromHqInFeet(num) {
// 4) returns a distance in feet
// 5) returns a distance in feet
// 6) calculates distances below 42nd street
    return distanceFromHqInBlocks(num) * 264

}
function distanceTravelledInFeet(num1, num2) {
// 7) returns the distance travelled in feet
// 8) returns a distance in feet
// 9) returns distance when destination is below distance
    return Math.abs(num1 - num2) * 264

}
function calculatesFarePrice(start, destination) {
// 10) gives customers a free sample
// 11) charges 2 cents per foot when total feet travelled is between 400 and 2000 (remember the first 400 feet are free!)
// 12) charges 25 dollars for a distance over 2000 feet
// 13) does not allow rides over 2500 feet
let distance = distanceTravelledInFeet(start, destination)
    if (distance > 2500) {
        return 'cannot travel that far'
    }
    if (distance < 400){
        return 0
    }
    if (distance > 400 && distance < 2000){
        return (distance - 400) * .02
    }
    if (distance > 2000) {
        return 25
    }

}
