//prima classe
var FirstUser = /** @class */ (function () {
    //dichiarazione del costruttore
    function FirstUser(credito, numerochiamate) {
        this.carica = credito;
        this.numeroChiamate = numerochiamate;
    }
    //implementazione metodo ricarica
    FirstUser.prototype.ricarica = function (unaRicarica) {
        this.carica += unaRicarica;
    };
    // implementazione metodo chiamata
    FirstUser.prototype.chiamata = function (minutiDurata) {
        this.carica -= minutiDurata * 0.20;
        this.numeroChiamate++;
    };
    // impletazione metodo numero 404
    FirstUser.prototype.numero404 = function () {
        return this.carica;
    };
    //impletazione metodo getNumeroChiamate
    FirstUser.prototype.getNumeroChiamate = function () {
        return this.numeroChiamate;
    };
    // impletazione metodo azzera chiamate (no return)
    FirstUser.prototype.azzeraChiamate = function () {
        return this.numeroChiamate = 0;
    };
    return FirstUser;
}());
//seconda classe e terza classe sono identiche alla prima
var SecondUser = /** @class */ (function () {
    function SecondUser(carica, numeroChiamate) {
        this.carica = carica;
        this.numeroChiamate = numeroChiamate;
    }
    SecondUser.prototype.ricarica = function (unaRicarica) {
        this.carica += unaRicarica;
    };
    SecondUser.prototype.chiamata = function (minutiDurata) {
        this.carica -= minutiDurata * 0.20;
        this.numeroChiamate++;
    };
    SecondUser.prototype.numero404 = function () {
        return this.carica;
    };
    SecondUser.prototype.getNumeroChiamate = function () {
        return this.numeroChiamate;
    };
    SecondUser.prototype.azzeraChiamate = function () {
        return this.numeroChiamate = 0;
    };
    return SecondUser;
}());
var ThirdUser = /** @class */ (function () {
    function ThirdUser(carica, numeroChiamate) {
        this.carica = carica;
        this.numeroChiamate = numeroChiamate;
    }
    ThirdUser.prototype.ricarica = function (unaRicarica) {
        this.carica += unaRicarica;
    };
    ThirdUser.prototype.chiamata = function (minutiDurata) {
        this.carica -= minutiDurata * 0.20;
        this.numeroChiamate++;
    };
    ThirdUser.prototype.numero404 = function () {
        return this.carica;
    };
    ThirdUser.prototype.getNumeroChiamate = function () {
        return this.numeroChiamate;
    };
    ThirdUser.prototype.azzeraChiamate = function () {
        return this.numeroChiamate = 0;
    };
    return ThirdUser;
}());
// implementazione della classe
var Utente1 = new FirstUser(5, 2);
console.log('UTENTE 1');
console.log('Valore della carica disponibile: ' + Utente1.numero404());
console.log('Numero chiamate: ' + Utente1.numeroChiamate);
Utente1.chiamata(5);
Utente1.ricarica(50);
console.log('Valore della carica disponibile: ' + Utente1.numero404());
console.log('dopo l\'azzeramento delle chiamate:');
console.log('Numero chiamate: ' + Utente1.azzeraChiamate());
var Utente2 = new SecondUser(10, 4);
console.log('UTENTE 2');
console.log('Valore della carica disponibile: ' + Utente2.numero404());
console.log('Numero chiamate: ' + Utente2.numeroChiamate);
Utente2.chiamata(10);
Utente2.ricarica(50);
console.log('Valore della carica disponibile: ' + Utente2.numero404());
console.log('dopo l\'azzeramento delle chiamate:');
console.log('Numero chiamate: ' + Utente2.azzeraChiamate());
var Utente3 = new ThirdUser(50, 5);
console.log('UTENTE 3');
console.log('Valore della carica disponibile: ' + Utente3.numero404());
console.log('Numero chiamate: ' + Utente3.numeroChiamate);
Utente3.chiamata(20);
Utente1.ricarica(20);
console.log('Valore della carica disponibile: ' + Utente3.numero404());
console.log('dopo l\'azzeramento delle chiamate:');
console.log('Numero chiamate: ' + Utente3.azzeraChiamate());
