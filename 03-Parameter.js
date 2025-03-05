// !!!.Parameter.!!!
// Jetzt lernen wir Funktionen mit Parametern kennen. Mit
function gebe(eingabe) {
    return eingabe;
}
//definieren wir eine Funktion, die den übergebenen Parameter eingabe einfach wieder zurückgibt. 
// Parameter sind Variablen. 
// Sie stehen in der runden Klammer und benötigen nicht das Schlüsselwort let zu ihrer Deklaration. 
// Mit
let ergebnis = gebe('Apfel');
// wird die Funktion mit dem Argument 'Apfel' aufgerufen. 
// Jetzt wird unsere zuvor definierte Funktion ausgeführt. 
// Dabei wird zunächst das Argument 'Apfel' dem Parameter eingabe zugewiesen. 
// eingabe hat jetzt den Wert 'Apfel'. 
// In der einzigen Codezeile der Funktion wird nun die Variable eingabe mit der return-Anweisung zurückgegeben. 
// Diese Rückgabe wird der Variablen ergebnis zugewiesen. ergebnis hat dann auch den Wert 'Apfel'.

// !!!.Aufgabe.!!!
// Schreibe eine Funktion echo, die ebenfalls den übergebenen Parameter wieder zurückgibt.
function echo(ton) {
    return ton;
}


// !!!.Parameternamen.!!!
//Bitte achte darauf, dass du eventuelle Parameter deiner Funktion anders nennst als die Funktion selbst. 
// Die Funktion f1 zum Beispiel
function f1(f1) {
    return f1;
}
//macht das gleiche wie diese Funktion:
function f2(eingabe) {
    return eingabe;
}
//Die zweite Funktionsdefinition ist aber besser, weil der Parameter eingabe heißt und damit anders als die Funktion selbst.
//Aufgabe:
// Schreibe eine Funktion ping, die einen Parameter hat und dessen Wert einfach zurückgibt. 
// Achte darauf, dass der Parameter anders heißt, als die Funktion selbst.
function ping(ping) {
    return ping;
}
