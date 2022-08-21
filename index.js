// Code your solution in this file!
const scuberHeadquarters = 42;

function distanceFromHqInBlocks(pickUpLocation) {
    let distanceInBlock = pickUpLocation > scuberHeadquarters ? pickUpLocation - scuberHeadquarters : scuberHeadquarters - pickUpLocation;
    return distanceInBlock;
}

distanceFromHqInBlocks(43);
distanceFromHqInBlocks(50);
distanceFromHqInBlocks(34);

function distanceFromHqInFeet(pickUpLocation) {
    let distanceInBlocks = distanceFromHqInBlocks(pickUpLocation)
    let distanceInFeet = distanceInBlocks * 264;
    return distanceInFeet;
}

distanceFromHqInFeet(43)
distanceFromHqInFeet(50)
distanceFromHqInFeet(34)


function distanceTravelledInFeet(start, destination) {
    let distanceTravelled = destination > start ? (destination - start) * 264 : (start - destination) * 264;
    return distanceTravelled;
}
distanceTravelledInFeet(43, 48);
distanceTravelledInFeet(50, 60);
distanceTravelledInFeet(34, 28);

function calculatesFarePrice(start, destination) {
    let distanceInFeet = distanceTravelledInFeet(start, destination);
    if (distanceInFeet <= 400) {
        return 0;
    } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
        let price = (distanceInFeet - 400) * 0.02;
        // return (distanceInFeet - 400) * 0.02;
        return price;;
    }
    else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
        return 25;
    } else if (distanceInFeet > 2500) {
        return 'cannot travel that far';
    }
}
calculatesFarePrice(43, 44);
calculatesFarePrice(34, 32);
calculatesFarePrice(50, 58);
calculatesFarePrice(34, 24);