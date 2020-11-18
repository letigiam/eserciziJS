
//esercizio 1

const { count } = require("console");

/* Si sviluppi una funzione che dato un input intero, si verifichi
questo sia un anno bisestile o meno */
year = 2019;

function leapYear(year){
    if(year%400==0 || year%4==0 && !(year%100==0)){
        console.log('l\'anno è bisestile');
    }else{
        console.log('l\'anno non è bisestile')
    }
}
console.log(leapYear(year));

//esercizio 2
/* Si sviluppi una funzione che dato un input array di numeri,
ritorni true/false a seconda se l’array è ordinato in maniera
ascendente o discendente o undefined  */

//var arr = [10,2,5,7,1,6,9,3,4,8];
var arr = [1,2,3,4,5,6,7,8,9];  

function order(arr){
    for(var i=0; i<arr.length; i++){
        if(arr[i]>arr[i+1]){
            return true;
        }else {
            return false;
        }
    }
} console.log(order(arr));


var arr = [10,2,5,7,1,6,9,3,4,8];

arr.sort(function(a,b){
    return a-b;});
    console.log(arr)

arr.reverse(function(a,b){
    return a-b;
});console.log(arr)


array = [10,2,5,7,1,6,9,3,4,8];
    //calcolare il numero massimo
    function get_Max(array){
        max = array[0];//inizializzo la variabile max di array con indice 0
        for(var i=0; i < count(array); i++){
            if( max < array[i] ){ 
                max = array [i];
            }
        } return max;
    } console.log(get_Max(array));