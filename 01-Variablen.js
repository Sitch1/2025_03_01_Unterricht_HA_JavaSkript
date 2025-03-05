

//**Zusammenfassung:**

//* **Variable:** Ein Behälter für einen Wert.
//* **Deklaration:** Mit dem Schlüsselwort `let` wird eine Variable erstellt.
//* **Initialisierung:** Mit dem Zuweisungsoperator `=` wird der Variablen ein Wert zugewiesen.
//* **Beispiel:** `let vorname = 'Franz';`
//* JavaScript unterscheidet zwischen Groß- und Kleinschreibung (case-sensitive).

//**Zusatzinformationen (Stichwörter):**

//* let: Deklaration von Variablen mit Block-Scope.
//* var: Ältere Deklaration, globaler oder Funktions-Scope (vermeiden, wenn möglich).
//* const: Deklariert eine Konstante, deren Wert nicht verändert werden kann.
//* Datentypen: Variablen können verschiedene Datentypen speichern (z.B. Zeichenketten, Zahlen).

let vorname = 'Max'
// Mehrere Variblen
//Deklariere eine Variable blume und weise ihr den Wert 'Rose' zu. 
//Deklariere eine zweite Variable tier und weise ihr den Wert 'Hund' zu.
let blume = 'Rose'
let tier = 'Hund'

//Einer Variablen kann man jederzeit mit dem Gleichheitszeichen einen neuen Wert zuweisen. 
// Das Schlüsselwort let wird dabei nicht nochmal verwendet.
let farbe = 'rot'
farbe = 'orange'

// Einer Variablen kann man auch den Wert einer anderen Variablen zuweisen:
let name1 = 'Olga';
let name2 = name1;
name1 = 'Clara';
// In der zweiten Codezeile wird der Variablen name2 der Wert der Variablen name1 zugewiesen. name2 erhält den Wert 'Olga'. 
// Diesen Wert behält name2 bei, auch wenn anschließend name1 einen neuen Wert erhält.
// Beispiel:
// Welchen Wert hat x nach Ausführung des folgenden Codes?
let x = 'rot';
let y = 'grün';
let z = y;
y = x;
x = z;
// Antwort: 'grün'

