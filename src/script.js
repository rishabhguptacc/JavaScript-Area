var length;
var width;

function calculate(){
    length = document.getElementById('len').value;
    width = document.getElementById('wid').value;

 console.log(length);
 console.log(width);

   parseInt(length);
   parseInt(width);



    document.getElementById('output').innerHTML = 
    "<p>Area is " +
    area(length, width) + " sq. mtr. </p><br>" +
    "<p>Perimeter is " +
    perimeter(length,width) + " mtr. </p>"
}

  function area(length, width){
    console.log(length);
    console.log(width);
    return length*width;
    
  }


 function perimeter(length, width){
    console.log(length);
    console.log(width);
     var semiPeri =  parseInt(length) + parseInt(width);
    // var semiPeri = length + width;
     return 2*semiPeri;
 }

1