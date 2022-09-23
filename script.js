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

// setTimeout( () => {
//   console.log("ejecutandose! en 2 seg")
// }, 2000 )

// setTimeout( () => {
//   console.log("a los 0 segundos")
// }, 0 )

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


// let counter = 0;

// let id = setInterval( () => {
//   counter = counter + 1
//   console.log("intervalo más rapido", counter)
//   if (counter > 100) {
//     clearInterval(id)
//   }
// }, 100 )


function blast() {

  let timer = 0;

  let timerId = setInterval(() => {
    timer = timer + 1;

    if (timer % 3 === 0 && timer % 5 === 0) {
      console.log("BOOM BANG!!")
    } else if (timer % 5 === 0) {
      console.log("BANG!")
    } else if (timer % 3 === 0) {
      console.log("BOOOM!")
    } else {
      console.log(timer)
    }

    if (timer >= 15) {
      clearInterval(timerId)
    }

  }, 1000)

}

// blast()


// METODOS EN OBJETOS


let person = {
  name: "Alicia",
  place: "Pais de las Maravillas",
  friends: ["Sombrerero", "Gato Chesire", "Liebre de Marzo", "Conejo Blanco", "Humpty Dumpty"],
  sayHello() {
    // console.log(this)
    // return `Hola, soy Alicia`
    // return `Hola, soy ${person.name}`
    return `Hola, soy ${this.name} de ${this.place}`;
    // this
    // la palabra this, usada en objetos, apunta al objeto dueño de esa propieda o metodo
  },
  currentSize() {
    let random = Math.random() * 2
    let randomEnd = Math.floor(random) // 0 1
    if (randomEnd === 1) {
      return `${this.name} es grande!`
    } else {
      return `${this.name} es chica!`
    }
    // de manera totalmente aleatoria,
    // 50% return "Alice es grande"
    // 50% return "Alice es chica"
  },
  wishMerryUnbirthday() {
    // buscar un elemento aleatorio del array de friends
    // return `feliz no cumpleaños a: _____`
    let friendQty = this.friends.length
    let randomNum = Math.random() * friendQty;
    let randomInt = Math.floor(randomNum)
    return `Feliz Feliz no cumpleaños a ${this.friends[randomInt]}`
  }
}

console.log(person.friends[1])

console.log( person.sayHello() )
person.name = "Alice";
// console.log( person )
console.log( person.sayHello() )

console.log( person.currentSize() )

console.log( person.wishMerryUnbirthday() )




// OOP


let strBasic = "Hola";
console.log(strBasic)

let strBasic3 = String("Hola")
console.log(strBasic3)

// String
// Boolean
// Number

let strBasic2 = new String("Hola")
console.log(strBasic2)

String.prototype.askHelpFromTA = function() {
  return "llamando a Carolina o a Iñigo"
}

let newStr = "adios";
console.log( newStr.askHelpFromTA() )




// CLASES


class Hero {

  constructor(nameParam, secretIdentityParam) {
    // propiedades
    // this.name = "Iron Man"; // el nombre siempre será igual
    this.name = nameParam;
    this.secretIdentity = secretIdentityParam,
    this.isEvil = false;
  }

  // metodos
  revealSecret = () => {
    return `Mi identidad secreta es: ${this.secretIdentity}`
  }

  turnEvil = () => {
    this.isEvil = true;
    return `${this.name} se ha vuelto malvad@! MUAHAHAHAH`
  }

}

let hero1 = new Hero("Iron Man", "Tony Stark")
console.log(hero1)
console.log(hero1.revealSecret())

let hero2 = new Hero("Black Widow", "Natasha Romanof")
console.log(hero2)
console.log(hero2.revealSecret())

console.log(hero2.turnEvil())
console.log("despues del turnEvil", hero2)



// SUBCLASE

class SuperHero extends Hero {

  constructor(nameParam, secretIdentityParam, superPowerParam) {
    super(nameParam, secretIdentityParam) // pasar los parametros que necesita el padre para asignar las propiedades
    // los parametros se heradan con super()
    this.superPower = superPowerParam
  }

  // los metodos se heredan automaticamente.
  useSuperPower(target) {
    return `${this.name} usa el superpoder ${this.superPower} con ${target.name}`
  }

}

let superHero1 = new SuperHero("Spiderman", "Peter Parker", "Sentido Aracnido")
console.log(superHero1)
console.log(superHero1.revealSecret())
// console.log(superHero1.useSuperPower())

console.log(superHero1.useSuperPower( hero1 ))