//interfaccia smartphone
interface Smartphone{
    //inserire proprietà interfaccia
    carica:number,
    numeroChiamate:number,
    //dichiarare i metodi
    ricarica(carica: number, unaRicarica:number): void;
    chiamata(carica: number , minutiDurata: number):void;
    numero404():number;
    getNumeroChiamate():number;
    azzeraChiamate(): void;
}
//prima classe
class FirstUser implements Smartphone{
    //modificatori di accesso
public numeroChiamate: number;
public carica: number;
    //dichiarazione del costruttore
constructor(credito: number, numerochiamate:number){
    this.carica = credito;
    this.numeroChiamate= numerochiamate;

}
    //implementazione metodo ricarica
    public ricarica(unaRicarica: number): void {
        this.carica += unaRicarica;
    }
    // implementazione metodo chiamata
    public chiamata(minutiDurata: number): void {
        this.carica -= minutiDurata * 0.20
        this.numeroChiamate++;
    }
    // impletazione metodo numero 404
    public numero404(): number {
        return this.carica;
    }
    //impletazione metodo getNumeroChiamate
    public getNumeroChiamate(): number {
        return this.numeroChiamate;
    }
    // impletazione metodo azzera chiamate (no return)
    public azzeraChiamate() {
        return this.numeroChiamate = 0;
    }
}



//seconda classe e terza classe sono identiche alla prima
class SecondUser implements Smartphone {
    public carica: number;
    public numeroChiamate: number;

    constructor(carica: number, numeroChiamate: number) {
        this.carica = carica;
        this.numeroChiamate = numeroChiamate;
    }

    public ricarica(unaRicarica: number): void {
        this.carica += unaRicarica;
    }

    public chiamata(minutiDurata: number): void {
        this.carica -= minutiDurata * 0.20
        this.numeroChiamate++;
    }

    public numero404(): number {
        return this.carica;
    }

    public getNumeroChiamate(): number {
        return this.numeroChiamate;
    }

    public azzeraChiamate() {
        return this.numeroChiamate = 0;
    }
}


class ThirdUser implements Smartphone {
    public carica: number;
    public numeroChiamate: number;

    constructor(carica: number, numeroChiamate: number) {
        this.carica = carica;
        this.numeroChiamate = numeroChiamate;
    }

    public ricarica(unaRicarica: number): void {
        this.carica += unaRicarica;
    }

    public chiamata(minutiDurata: number): void {
        this.carica -= minutiDurata * 0.20
        this.numeroChiamate++;
    }

    public numero404(): number {
        return this.carica;
    }

    public getNumeroChiamate(): number {
        return this.numeroChiamate;
    }

    public azzeraChiamate() {
        return this.numeroChiamate = 0;
    }
}
// implementazione della classe
let Utente1 = new FirstUser(5, 2);
console.log('UTENTE 1');
console.log('Valore della carica disponibile: ' + Utente1.numero404());
console.log('Numero chiamate: ' + Utente1.numeroChiamate);
Utente1.chiamata(5);
Utente1.ricarica(50);
console.log('Valore della carica disponibile: ' + Utente1.numero404());
console.log('dopo l\'azzeramento delle chiamate:');
console.log('Numero chiamate: ' + Utente1.azzeraChiamate());

let Utente2 = new SecondUser(10, 4);
console.log('UTENTE 2');
console.log('Valore della carica disponibile: ' + Utente2.numero404());
console.log('Numero chiamate: ' + Utente2.numeroChiamate);
Utente2.chiamata(10);
Utente2.ricarica(50);
console.log('Valore della carica disponibile: ' + Utente2.numero404());
console.log('dopo l\'azzeramento delle chiamate:');
console.log('Numero chiamate: ' + Utente2.azzeraChiamate());

let Utente3 = new ThirdUser(50, 5);
console.log('UTENTE 3');
console.log('Valore della carica disponibile: ' + Utente3.numero404());
console.log('Numero chiamate: ' + Utente3.numeroChiamate);
Utente3.chiamata(20);
Utente1.ricarica(20);
console.log('Valore della carica disponibile: ' + Utente3.numero404());
console.log('dopo l\'azzeramento delle chiamate:');
console.log('Numero chiamate: ' + Utente3.azzeraChiamate());