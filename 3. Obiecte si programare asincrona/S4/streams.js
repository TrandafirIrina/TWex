class Stream {
  #value;
  #nextValue;
  static #count = 0;
  constructor(value, nextValue) {
    this.#value = value;
    this.#nextValue = nextValue;
    Stream.#count++;
  }

  get value() {
    return this.#value;
  }

  get next() {
    this.#value = this.#nextValue(this.#value);
    return this.#value;
  }

  static get count() {
    return Stream.#count;
  }
}

class ConstantStream extends Stream {
  constructor(value) {
    super(value, (value) => value);
  }
}

class NextIntegerStream extends Stream {
  constructor() {
    super(0, (value) => value + 1);
  }
}

const constantStream = new ConstantStream(1);
const nextIntegerStream = new NextIntegerStream();

for (let i = 0; i < 10; i++) {
  console.log(`constant[${i}] = ${constantStream.next}`);
  console.log(`nextIntegerStream[${i}] = ${nextIntegerStream.next}`);
}

console.log(Stream.count);

class SirPar extends Stream {
  constructor(value) {
    super(value, (value) => {
      if (value % 2) return value + 1;
      else return value + 2;
    });
  }
}

const sirPar = new SirPar(5);
for (let i = 0; i < 10; i++) {
  console.log(`sirPar[${i}] = ${sirPar.next}`);
}

class Robot {
  constructor(name) {
    this.name = name;
  }

  move() {
    console.log(`${this.name} is moving`);
  }
}

const r0 = new Robot("some robot");
r0.move();

class Weapon {
  constructor(description) {
    this.description = description;
  }

  fire() {
    console.log(`${this.description} is firing`);
  }
}

const w0 = new Weapon("pew pew laser");
w0.fire();

class CombatRobot extends Robot {
  constructor(name) {
    super(name);
    this.weapons = [];
  }

  addWeapon(w) {
    this.weapons.push(w);
  }

  fire() {
    console.log("firing all weapons");
    for (const w of this.weapons) {
      w.fire();
    }
  }
}

const r1 = new CombatRobot("some combat robot");
r1.addWeapon(w0);
r1.fire();

Robot.prototype.fly = function () {
  console.log(`${this.name} is flying`);
};

r1.fly();

class Software {
  constructor(name) {
    this.name = name;
  }

  run() {
    console.log(`${this.name} is running`);
  }
}

class Plugin {
  constructor(name) {
    this.name = name;
  }

  install() {
    console.log(`${this.name} is installing`);
  }
}

class Browser extends Software {
  constructor(name) {
    super(name);
    this.plugins = [];
  }

  addPlugin(p) {
    this.plugins.push(p);
  }

  install() {
    for (const p of this.plugins) {
      p.install();
    }
  }
}

const browser = new Browser("Chrome");
browser.run();
const p0 = new Plugin("addBlock");
const p1 = new Plugin("accuweather");
browser.addPlugin(p0);
browser.addPlugin(p1);
browser.install();

function fibGen(){
  const cache = [1, 1]
  const fib = (index)=>{
    if(index<cache.length){
      console.log('found '+index)
      return cache[index]
    }else{
      console.log('calculated '+index)
      cache[index] = fib(index-1)+fib(index-2)
      return cache[index]
    }
  }
  return fib
}

const fib = fibGen()
console.log(fib(1))
console.log(fib(5))
console.log(fib(3))

function exponentiere(){
    const cache=[1, 2]
    let exp = (index)=>{
      if(index<cache.length){
        console.log('found '+index)
        return cache[index]
      }else{
        console.log('calculated '+index)
        cache[index] = exp(index-1)*cache[1]
        return cache[index]
      }
    }
    return exp
}

const exp = exponentiere()
console.log(exp(1))
console.log(exp(5))
console.log(exp(3))

String.prototype.capitalizeWords = function(){
  return this.replace(/\b[a-z]/g, match=>match.toUpperCase());
}
console.log('these words will be capitalized.'.capitalizeWords());

Number.prototype.times = function(func){
  let r = 0;
  for(let i = 0; i<this;i++)
    r = r+func(this);
  return r
}

let t = new Number(3)

let rez = t.times((n)=>n*2)
console.log(rez)

const orderCoffee = (type)=>{
  const types = {
    SPECIAL: 'SPECIAL',
    REGULAR: 'REGULAR'
  }

  if(Object.values(types).indexOf(type) === -1){
    throw new Error('coffee error')
  }else{
    console.log(`preparing ${type} coffee`)
  }
}

// try{
//     orderCoffee('REGULAR')
//     orderCoffee('SWEET_COFFEE_NO_SUGAR_NO_CAFFEINE')
// }catch(err){ 
//   console.warn(err)
// }

function increaseSalary(arr, proc){
  if(!Array.isArray(arr))
    throw new Error('salary array is not an array')
  else if(typeof(proc)!=='number')
    throw new Error('procent is not a number')
  else return arr.map(e=>e+proc*e);
}

try{
  console.log(increaseSalary([1,2,3,4], 0.1))
  // console.log(increaseSalary({something:"something"},0.1))
  // console.log(increaseSalary([1,2,3,4],`eh`))
}catch(err){
  console.warn(err)
}

const fetch = require('node-fetch')

function getObjectFromUrl(url){
  return new Promise(resolve=>
    fetch(url)
    .then(response=>response.text())
    .then(text=>resolve(JSON.parse(text)))
  )
}

function getCountryBounds(country){
  return new Promise(resolve=>
    getObjectFromUrl(`https://nominatim.openstreetmap.org/search?country=${country}&format=json`)
  .then(object=>resolve({
    minLatitude: object[0].boundingbox[0],
    maxLatitude: object[0].boundingbox[1],
    minLongitude: object[0].boundingbox[2],
    maxLongitude: object[0].boundingbox[3]
  }))
  )
}

function main(){
  getCountryBounds('Romania')
  .then(bounds=>console.log(bounds))
}

main()

async function getObjFromUrl(url){
  const response = await fetch(url);
  const text = await response.text();
  return JSON.parse(text);
}

async function getCountBounds(country){
  const object = await getObjFromUrl(`https://nominatim.openstreetmap.org/search?country=${country}&format=json`)
  return{
    minLatitude: object[0].boundingbox[0],
    maxLatitude: object[0].boundingbox[1],
    minLongitude: object[0].boundingbox[2],
    maxLongitude: object[0].boundingbox[3]
  }
}

async function main2(){
  const bounds = await getCountBounds('Romania')
  console.log(bounds)
}

main2()

function getObFromUrl(url){
  return new Promise(resolve=>{
    fetch("https://pastebin.com/raw/VUcVj71N")
    .then(response=>response.text())
    .then(text=>resolve(JSON.parse(text)))
  })
}

function getPlaneList(){
  return new Promise(resolve=>{
    getObFromUrl("https://pastebin.com/raw/VUcVj71N")
    .then(response=>response["lista_avioane"])
    .then(response=>resolve(response))
  })
}

function main3(){
  getPlaneList()
  .then(response=>console.log(response))
}

main3()

async function gOFU(url){
  const response = await fetch("https://pastebin.com/raw/VUcVj71N");
  const text = await response.text()
  return JSON.parse(text)
}

async function gPL(){
  const ob = await gOFU("https://pastebin.com/raw/VUcVj71N")
  const lista_avioane = ob["lista_avioane"]
  return lista_avioane
}

async function main4(){
  const lista_avioane = await gPL();
  console.log(lista_avioane);
}

main4()