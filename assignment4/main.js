function myFunction() {
    let bill = prompt("Please enter your bill amount");
    let tip=0;
    if (bill >500) {
      tip=bill*3/100;
      document.getElementById("demo").innerHTML =
      "The tip is: $" + tip ;
    }
    else if(bill>300 && bill<=500){
        tip=bill*5/100;
      document.getElementById("demo").innerHTML =
      "The tip is: $" + tip ;
    }
    else if(bill>100 && bill<=300){
        tip=bill*10/100;
      document.getElementById("demo").innerHTML =
      "The tip is: $" + tip;
    }
    else if(bill<=100){
      document.getElementById("demo").innerHTML =
      "No tip needed";
    }
    document.getElementById("demo1").innerHTML =
  "Thank you!";
}