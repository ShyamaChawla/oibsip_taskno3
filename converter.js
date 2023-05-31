function convert()
{
  let option= document.getElementById('inputtype').value;

  if(option=="celsius")
  {
    let celsius = document.getElementById('inputdata').value;

    document.getElementById('answerCel').value=celsius;

    answerfah = parseFloat((celsius*9/5)+32);
    document.getElementById('answerFah').value=answerfah;
    celsius=parseFloat(celsius);
    answerkel = parseFloat(celsius+273.15);
    document.getElementById('answerKel').value=answerkel;
    
  }
  if(option=="fahrenheit")
  {
    let fahrenheit = document.getElementById('inputdata').value;

    answercel = parseFloat((fahrenheit-32)/1.8);
    document.getElementById('answerCel').value=answercel;

    document.getElementById('answerFah').value=fahrenheit;

    answerkel = parseFloat(((fahrenheit-32)/1.8)+273.15);
    document.getElementById('answerKel').value=answerkel;
    
  }
  if(option=="kelvin")
  {
    let kelvin = document.getElementById('inputdata').value;

    answercel = parseFloat(kelvin-273.15);
    document.getElementById('answerCel').value=answercel;
    
    answerfah = parseFloat(((kelvin-273.15)*1.8)+32);
    document.getElementById('answerFah').value=answerfah;

    document.getElementById('answerKel').value=kelvin;
    
  }

}
