let user = []
user.lon = parseFloat(readline().replace(',', '.'));
user.lat = parseFloat(readline().replace(',', '.'));
const defibrillatorsCount = parseInt(readline());

function calculateDistance(lonA, latA, lonB, latB) {
    lonA = parseFloat(lonA);
    latA = parseFloat(latA);
    lonB = parseFloat(lonB);
    latB = parseFloat(latB);
    
    let x = (lonB - lonA) * Math.cos((latA + latB) / 2);
    let y = latB - latA;
    let d = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2)) * 6371;
    
    return d;
}

function sortByDistance(a, b) {
    if (a.distance === b.distance) {
        return 0;
    } else {
        return (a.distance < b.distance) ? -1 : 1;
    }
}

defibrillator = [];
for (let i = 0; i < defibrillatorsCount; i++) {
    let current = readline().split(";");
    
    defibrillator[i] = [];
    defibrillator[i].no = current[0];
    defibrillator[i].name = current[1];
    defibrillator[i].address = current[2];
    defibrillator[i].phone = current[3];
    defibrillator[i].lon = parseFloat(current[4].replace(',', '.'));
    defibrillator[i].lat = parseFloat(current[5].replace(',', '.'));
    defibrillator[i].distance = parseFloat(calculateDistance(user.lon, user.lat, defibrillator[i].lon, defibrillator[i].lat));
}

defibrillator.sort(sortByDistance);

print(defibrillator[0].name);
