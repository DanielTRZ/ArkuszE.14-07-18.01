function srednia()
{
var uczen1=document.getElementById('uczen1').value;
var uczen2=document.getElementById('uczen2').value;
var uczen3=document.getElementById('uczen3').value;
var oceny=0;
    
if(isNaN(uczen1)||uczen1==""||isNaN(uczen2)||uczen2==""||isNaN(uczen3)||uczen3=="")
{
alert("Wpisz poprawne dane");
// obliczenia.innerHTML ="wpisz poprawne dane";  
 }
    else
        {
            uczen1*=1;
            uczen2*=1;
            uczen3*=3;
          //parseInt("uczen1");
          //parseInt("uczen2");
          //parseInt("uczen3");
             oceny=(uczen1+uczen2+uczen3)/3;
           
             obliczenia.innerHTML=oceny;
        }
}
