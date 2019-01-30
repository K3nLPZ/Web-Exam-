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

  