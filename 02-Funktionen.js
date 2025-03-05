// !!!.Funktionen.!!!
// Eine Funktion ist ein Block von Anweisungen, der beliebig oft ausgeführt werden kann.
// Eine Funktion kann Parameter entgegennehmen und eine Funktion kann einen Wert zurückgeben. 
// Funktionen kann man in JavaScript auf verschiedene Weisen definieren. 
// Die vielleicht gebräuchlichste ist die sogenannte Funktionsdeklaration. 
// Sie wird mit dem Schlüsselwort function eingeleitet. 
// Es folgen:
//der Name der Funktion
//die Parameter eingeschlossen in runden Klammern,
//die Anweisungen eingeschlossen in geschweiften Klammern.

// Mit dem Schlüsselwort return kann ein Wert zurückgegeben werden. 
// Gleichzeitig beendet return die Funktion. 
// Anweisungen nach einem return werden nicht mehr ausgeführt. 
// Mit 
function farbe() {
    return 'grün';
}
// definieren wir eine Funktion mit Namen farbe, die 'grün' zurückgibt. 
// Die Funktion nimmt keine Paramter entgegen (die runde Klammer ist leer) 
// und sie enthält genau eine Anweisung, die Rückgabe. 
// Die Funktion wird nicht mit einem Semikolon abgeschlossen. 

// Über ihren Namen wird die Funktion aufgerufen:
let ergebnis = farbe();
// Jetzt wird die Funktion ausgeführt. 
// Ihre Rückgabe wird der Variablen ergebnis zugewiesen. 
// ergebnis hat dann den Wert 'grün'.
// Aufgabe:
// Definiere eine Funktion hallo, die 'Hallo Welt!' zurückgibt.
function hallo() {
    return 'Hallo Welt!';
}

// !!!.Mehrere Funktionen.!!! 
//Wir definieren nun mehr als eine Funktion. 
// Zur Erinnerung: So wird eine Funktion mit Namen farbe definiert, die den Wert 'rot' zurückgibt:
function farbe() {
    return 'rot';
}
// Aufgabe: 
//Definiere zwei Funktionen. Die erste Funktion a soll 'Hallo a!' zurückgeben. 
// Die zweite Funktion b soll 'Hallo b!' zurückgeben.
function a() {
    return 'Hallo a!';
}
function b() {
    return 'Hallo b'
}


// !!!.Funktionsaufruf.!!!
// Wichtig ist der Unterschied zwischen der Definition und dem Aufruf einer Funktion. Mit der Definition, z. B.
function f() {
    return 'Hallo';
}
//wird festgelegt, was die Funktion machen soll. 
// Sie wird dabei nicht ausgeführt. 
// Sie wird lediglich zur Ausführung bereitgestellt. 
// Erst mit ihrem Aufruf
let x = f();
//wird die Funktion ausgeführt. 
// Dann werden die Anweisungen im Funktionsblock der Reihe nach abgearbeitet. 
// Die Rückgabe der Funktion wird in diesem Beispiel der Variablen x zugewiesen. 
// x erhält den Wert 'hallo'. Definiert wurde die Funktion mit dem Schlüsselwort function. 
// Aufgerufen wurde die Funktion über ihren Namen.

// Aufgabe:
//1. Definiere eine Funktion begruesse, die den Wert 'Moin!' zurückgibt.
//2. Deklariere eine Variable begruessung. 
// Rufe die Funktion begruesse auf und weise der Variablen begruessung die Rückgabe dieses Aufrufs zu.
function begruesse() {
    return 'Moin!';
}

let begruessung = begruesse();