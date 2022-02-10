var length;
var width;

function calculate(){
    length = document.getElementById('len').value;
    width = document.getElementById('wid').value;

 

   


    document.getElementById('output').innerHTML = 
    "<p>Area is " +
    area() + " sq. mtr. </p><br>" +
    "<p>Perimeter is " +
    perimeter() + " mtr. </p>"
}

  function area(){
    return length*width;
  }


 function perimeter(){
     return 2*( length + width);
 }

