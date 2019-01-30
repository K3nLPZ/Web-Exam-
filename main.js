function increaseValue(i) {
    var value = parseInt(document.getElementById('number'+i).value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number'+i).value = value;
  }
  
  function decreaseValue(i) {
    var value = parseInt(document.getElementById('number'+i).value, 10);
    value = isNaN(value) ? 0 : value;
    value < 1 ? value = 1 : '';
    value--;
    document.getElementById('number'+i).value = value;
  }


  function mess() {
    alert("Thank you for your purchase");
  }

var car=[];  

function addCar () {
   
var number0= document.getElementById('number0').value
var number1= document.getElementById('number1').value
var number2= document.getElementById('number2').value

var product0= document.getElementById('product0').innerHTML
var product1= document.getElementById('product1').innerHTML
var product2= document.getElementById('product2').innerHTML

var price0= document.getElementById('price0').innerHTML
var price1= document.getElementById('price1').innerHTML
var price2= document.getElementById('price2').innerHTML

console.log(number0,number1,number2);
var i=0
if (car.length>0) {

    while (i<car.length) {
        if (car[i].nombre =='product'+i) {
            console.log("item already in car") 
            break;         
        }else {
            if (parseInt('number'+i)>0) {
        car.push({nombre:'product'+i,cantidad:'number'+i, price:parseFloat('price'+i)});
        console.log(car);
        }
        i++
    }

} }
else {
    if (number0>0) {
    car.push({nombre:product0,cantidad:number0, price:parseFloat(price0)});
    
}
if (number1>0) {
    car.push({nombre:product1,cantidad:number1, price:parseFloat(price1)});
   
}
if (number2>0) {
    car.push({nombre:product2,cantidad:number2, price:parseFloat(price2)});
    

}
}

// if (number0>0) {
//     car.push({nombre:product0,cantidad:number0, price:parseFloat(price0)});
//     console.log(car);
// }
// if (number1>0) {
//     car.push({nombre:product1,cantidad:number1, price:parseFloat(price1)});
//     console.log(car);
// }
// if (number2>0) {
//     car.push({nombre:product2,cantidad:number2, price:parseFloat(price2)});
//     console.log(car);

// }

 var total= document.getElementById("total");
 total.innerHTML=sumar ();
}

function sumar () {
    var i=0;
    var stotal =0;

    while (i<car.length) {
   
   stotal= stotal + (car[i].cantidad * car[i].price);
   i++;
    }
    console.log(stotal);
    return stotal
    
    // console.log(stotal);

}

function refreshScores(){
    let dataList = document.getElementById("total");
    dataList.innerHTML=null;

    // while (dataList.childElementCount > 1){
    //     dataList.removeChild(dataList.lastChild);
    // }
    //loadDataGrid();
}

 


