function load() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            document.getElementById("data").innerHTML = "";
            var dataParse = xhttp.responseText;
            var obj = JSON.parse(dataParse);
            document.getElementById("data").innerHTML = obj.rates[convertTo] + "<br />";
            
            console.log(obj);

        }
    };
    var base = document.getElementById("baseRate").value;
    var convertTo = document.getElementById("compareWith").value;
    console.log(convertTo);
    
    xhttp.open("GET", "http://api.fixer.io/latest?base="+base);
    xhttp.send();
}

function enter(e){
 var key=e.keyCode || e.which;
  if (key==13){
     load();
  }
}