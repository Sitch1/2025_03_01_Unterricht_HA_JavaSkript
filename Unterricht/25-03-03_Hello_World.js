//---------------------+
//                     |
//      JAVASCRIPT     |
//                     |
//---------------------+ 

// Kommentare mit zwei Schrägstrichen

// Hello World!
console.log("Hello World!")
// Im Browser geht auch alert("Hello world")
//alert("Hello World!")
// Variablen Deklarieren ("Erstellen") (Mit let oder var) (const für Konstanten)
let Number = 1
console.log(Number)

// Kleine Fingerübung:
// Deklariere eine variable name und eine Variable alter
let my_name = "Dustin";
let age = 31;

console.log(my_name)
console.log(age)
// Gebt beide auf der Konsole aus 


// Primitive Datentypen in Javascript:

a = 5               //Nummer, egal ob ganz Zahlen oder komma Zahlen.
a = true            //Boolean
a = "Text"          // string
a = undefined       // undefinde ("Noch keinen Wert")
a = null            // null ("Absichtlich kein Wert")

// Primitive Rechenoperationen in Javascript:
let x = 2
let y = 4
console.log(x + y)
console.log(x - y)
console.log(x * y)
console.log(x / y)
console.log(x * (x + y))

// Eine Hochzahl
z = a ** 2 - b ** 2
console.log(z)

// Eine Wurzelrechner
z = Math.sqrt(b)
console.log(z)

// MODULU (Rest der Division)
z = x % y
console.log(z)

// Boolsche Operationen
console.log(true && 3 < 2)
console.log(3 >= 3)
console.log(false || 1 == 2)

console.log(1 == "1")       //true
console.log(1 === "1")      //false