function test()
{
r=0;
if (document.forma.a[1].checked){r++;}
if (document.forma.d.value==6){r++;}
if (document.forma.c.value==3){r++;}
if ((!document.forma.b[0].checked)&&
    (document.forma.b[1].checked)&&
    (!document.forma.b[2].checked)&&
    (document.forma.b[3].checked)) {r++;}
k=4;
r=Math.round(r*5/k);
alert("Ваша оценка: "+r);
document.forma.answer.value="Ваша оценка: "+r;
}