class CalcController {


    constructor(){
        this._displayCalc; 
        this._currentDate;
        this.inicialize();
    }

    inicialize(){
        let displayCalcEl = document.querySelector("#display");
        let dateEl = document.querySelector("#data");
        let timeEl = document.querySelector("#hora");

    
        displayCalcEl.innerHTML = "4567";
    }



    get displayCalc(){
        return this._displayCalc;
    }

    set displayCalc(valor){
        this._displayCalc = valor;
        
    }   

    get currentDate(){
        return this._currentDate;
    }

    set currentDate(valor){
        this._currentDate = valor;
    }



    //pesquisando sobre o método inicialize




}