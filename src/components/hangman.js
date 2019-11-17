import React,{Component} from 'react';
//importujemo komponentu Vesala
import Vesala from './Vesala';
//importujemo funkciju koja nam daje random programski jezik
import randWord from './word';
//ovde importujemo sliku za svaki broj gresaka
import greska0 from './images/0.jpg';
import greska1 from './images/1.jpg';
import greska2 from './images/2.jpg';
import greska3 from './images/3.jpg';
import greska4 from './images/4.jpg';
import greska5 from './images/5.jpg';
import greska6 from './images/6.jpg';

class Hangman extends Component {

    // default props ako hangman ne dobije props ovi su mu po default
    static defaultProps = {
        maxNetacnih: 6,
        slike:[greska0,greska1,greska2,greska3,greska4,greska5,greska6]
    }
    //konstruktor
    constructor(props){
        super(props);

        this.state = {
            greske: 0,
            pogadjao: [],
            odgovor: randWord()
        }
    }

    //1.pogodjenaRec() vraca trenutno stanje reci kao niz npr [j,a,_,a]  za "java" ako smo do tad pogodili 'j' i 'a'


    //2.handleClickNaDugme kada se klikne na dugme menjamo state dodajemo tu vrednost
    

    //3.generisiDugmice() vratiti niz jsx dugmica svaki je jedno slovo abecede

    
    
    render(){
        //1.provervamo da li je pobedio i smestamo kao boolean


        //2.proveravamo da li je izgubio i smestamo kao boolean


        //3.u promenjivu smestamo sve jsx dugmice iz funkcije generisiDugmice()


        //4.ako je korisnik pobedio umesto dugmica poruka pobedio
        

        //5.ako je korisnik izgubio umesto dugmica poruka izgubio
        
        //6.vracamo jsx
        return (
            
        );
    }
}
export default Hangman;