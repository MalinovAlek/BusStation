// Create transport center which will have a main station,
// the main station will have a bus stops (peron), also should
// have busses and each bus should have its own spot in main station,
// line and status is it moving or parked.
// 1. Transport center (main station, station)
//     - num. of spots
//     - free spots
//     - list of busses in station
// 2. Lines
//     - start destination
//     - end destination
//     - num. of stations
//     - line number
// 3. Buses (status is prop of bus, station)
//     - Free sits
//     - Moving
//     - Current station
//     - Color
    
// Bonus: 
// Make limited spaces in main station for busses e.g 10 max
// so the program will check how many busses are created and is 
// there a spot to create new one. (11th bus can't be created)
// Bonus of Bonus:
// Make a function that will print all buses and their current state
// in a table, so you will have a visual report of all busses at once.
// For 5ka 
// Use the (window) screen as a map of a town. define points with names
// that represent a bus station. Set interval of 5s and display the
// busses on the map according their curent station.

class TransportCenter {
    constructor(){
        this.numOfSpots = 10;
        this.freeSpots =  undefined;
        this.listOfBuses = [];
    }

}

class Lines extends TransportCenter {
    constructor(numOfSpots, freeSpots, listOfBuses){
        super(numOfSpots,freeSpots,listOfBuses)
        this.start = undefined;
        this.end = undefined;
        this.numOfStations = undefined;
        this.lineNumber = undefined
    }
}

class Bus extends Lines{
    constructor(numOfSpots, freeSpots, listOfBuses, start, end,numOfStations,lineNumber){
        super(numOfSpots, freeSpots, listOfBuses, start, end,numOfStations,lineNumber)
        this.freeSits = 50;
        this.moving = false;
        this.currentStation = undefined;
        this.color = undefined
    }
}



let petka = new Bus
petka.start = 'Deksion'
petka.end = 'Novo Lisice'
petka.lineNumber = 5

let dvojka = new Bus
dvojka.lineNumber = 2
dvojka.start = 'Saraj'
dvojka.end = 'Avtokomanda'

let saraj = document.querySelector('#start2')
let deksion = document.querySelector('#deksion')
let avtokomanda = document.querySelector('#avtokomanda')
let nLisice = document.querySelector('#novo-lisice')

let dvojkaStanici = Array.from(document.querySelectorAll('.dvojka')) 
let petkaStainici = Array.from(document.querySelectorAll('.petka')) 


let body = document.querySelector('body')
let busDiv;

function createBus(startStation,bus) {
    
   busDiv = document.createElement('div')
    busDiv.innerText = `Line num: ${bus.lineNumber}
    Free sits: ${bus.freeSits}
    Direction:  `
    busDiv.style.border = "2px solid red"
    busDiv.style.width = '120px'
    startStation.appendChild(busDiv)
}

createBus(saraj,dvojka)
moveRoute (dvojkaStanici,busDiv,dvojka)

createBus(avtokomanda,dvojka)
moveRouteReverse(dvojkaStanici,busDiv,dvojka)

createBus(deksion,petka)
moveRoute (petkaStainici,busDiv,petka)

createBus(nLisice,petka)
moveRouteReverse(petkaStainici,busDiv,petka)

function moveRoute (route,busDiv,bus) {
    route.forEach((station, i) => 
    setTimeout(() => {
        if(i < route.length){
            station.appendChild(busDiv)
            busDiv.innerText = `Line num: ${bus.lineNumber}
            Free sits: ${Math.floor(Math.random() * 40) + 1}
            Direction: ${bus.end} `
        }
        if (i === route.length - 1) {
            moveRouteReverse(route,busDiv,bus)
            busDiv.innerText = `Line num: ${bus.lineNumber}
            Free sits: ${bus.freeSits}
            Direction: ${bus.start} `
        }
        
     },
     (i + 1) * 5000))
  }

  function moveRouteReverse (route,busDiv,bus) {
    route.slice().reverse().forEach((station, i) => 
    setTimeout(() => {
       if (i < route.length) {
        station.appendChild(busDiv)
        busDiv.innerText = `Line num: ${bus.lineNumber}
        Free sits: ${Math.floor(Math.random() * 40) + 1}
        Direction: ${bus.start} `
       }
       if (i === route.length - 1) {
        moveRoute (route,busDiv,bus)
        busDiv.innerText = `Line num: ${bus.lineNumber}
        Free sits: ${bus.freeSits}
        Direction: ${bus.end} `
    }
     },
     (i + 1 ) * 5000))
  }

