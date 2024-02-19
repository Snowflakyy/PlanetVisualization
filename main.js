const planetN = new Map();
planetN.set("mercury", 3.59);
planetN.set('venus', 8.87);
planetN.set('earth', 9.81);
planetN.set("mars", 3.77);
planetN.set('jupiter', 25.95);
planetN.set('saturn', 11.08);
planetN.set("uranus", 10.67);
planetN.set('neptune', 14.07);
planetN.set('pluto', 0.42);
const calcWeight = (weight) =>{
    //const planetName = document.getElementById('planet-selection').value;
    let planetName='earth'
    let result = Math.round(planetN.get(planetName)*weight/10)*10+'.00'
    return result
}
console.log(calcWeight(100))