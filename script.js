console.log("probando")


// CALLBACKS

let myName = "Jorge";

function simpleFunction(name) {
  console.log( `Hola ${name}` )
}

simpleFunction(myName)



function functionThatAcceptsAnotherFunction(patata) {
  // let patata = simpleFunction; // pasa la referencia
  // patata sería la funcion de callback
  patata("Iñigo")

}

functionThatAcceptsAnotherFunction( simpleFunction )



// dos razones:

// 1. existen metodos que utilizar funciones de callback para funcionar

let str = "what does the fox say";

let str2 = str.replace("fox", "cow")
console.log(str2)

function replacerFunction(wordToReplace) {
  return wordToReplace + "!!!"
}

let str3 = str.replace("fox", replacerFunction)
console.log(str3)

let str4 = str.replace("does", replacerFunction)
console.log(str4)

let str5 = str.replace("what", (wordToReplace) => {
  return wordToReplace + "???"
})

console.log(str5)


// 2. existen codigos avanzados que utilizan el concepto de callbacks



let personObj = {
  title: "Sir",
  name: "Ian",
  lastName: "McKellen"
};

function fullName(person) {
  return `${person.name} ${person.lastName}`
} // ref 1234

console.log( fullName(personObj) )

function titleName(person) {
  return `${person.title} ${person.name} ${person.lastName}`
} // ref 5555

console.log( titleName(personObj) )

function greetPerson(personParam, callback) {
  // let callback = ref 1234 (fullName)
  // hola nombre
  // console.log(callback(personParam))
  let personToGreet = callback(personParam) // ref 1234
  return `Hola ${personToGreet}, Bienvenido!`
} // ref XXXX

console.log( greetPerson(personObj, fullName) )
//                                  ref 1234
console.log( greetPerson(personObj, titleName) )
//                                  ref 5555

let personObj2 = {
  title: "Sir",
  name: "Patrick",
  lastName: "Stewert"
};

console.log( greetPerson(personObj2, titleName) )




// ASINCRONIA EN JS


let myStr = "Hola"; // 0.1
console.log(myStr); // 0.2

let myStr2 = "Adios"; // 0.1
console.log(myStr2); // 0.3

// JAVASCRIPT ES UN LENGUAJE SINCRONO
// JAVACRIPT TIENE ALGUNOS COMPORTAMIENTOS ESPECIALES ASINCRONOS

// hay algunos metodos que simular este comportamientos


// setTimeout( arg1, arg2)
// 1. arg1. funcion de callback
// 2. arg2. un tiempo de ejecucion en ms

// function printSomething() {
//   console.log("EJECUTANDOSE")
// }

// setTimeout( printSomething, 2000 )

setTimeout( () => {
  console.log("ejecutandose! en 2 seg")
}, 2000 )

setTimeout( () => {
  console.log("a los 0 segundos")
}, 0 )

// setTimeout( () => {
//   console.log("este será despues")
// }, 2000 )

console.log("esto está despues del timeout")
// javascript primero proceso todo lo sincrono
// luego procesa todo lo asincrono



// setInterval

//  el id de el intervalo (ref)
//   |
// let intervalId = setInterval( () => {
//   console.log("ejecutando para siempre")
// }, 1500 )


// clearInterval => detener un intervalo o timeout pasando su id

// deten el intervalo dentro de 5 segundos
// setTimeout( () => {
//   console.log("deteniendo el intervalo")
//   clearInterval(intervalId)
// }, 5000 )


let counter = 0;

let id = setInterval( () => {
  counter = counter + 1
  console.log("intervalo más rapido", counter)
  if (counter > 100) {
    clearInterval(id)
  }
}, 100 )


