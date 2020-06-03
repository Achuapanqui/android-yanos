window.addEvent("domready", function(e){

$("calificar").addEvent("click", function(){
  var SM = new SimpleModal({"btn_ok":"-->"});
      SM.show({
        "title":"Calificación",
        "contents":calcular()
      });
});

});

function calcular()
{
	var correctas=0;
	var incorrectas=0;
	
	var pregunta1=document.getElementById("p1").value;
	
	if(pregunta1=="2003")
	{
        correctas++;
        document.getElementById("1").style.backgroundColor="#c3e6cb";
	}
	else
	{
        incorrectas++;
        document.getElementById("1").style.backgroundColor="#f5c6cb";
	}
	
	var pregunta2=document.android.androids.value;
	
	if(pregunta2=="C")
	{
        correctas++;
        document.getElementById("2").style.backgroundColor="#c3e6cb";
	}
	else
	{
        incorrectas++;
        document.getElementById("2").style.backgroundColor="#f5c6cb";
    }
    
    var pregunta3=document.android.logo.value;
	
	if(pregunta3=="B")
	{
        correctas++;
        document.getElementById("3").style.backgroundColor="#c3e6cb";
	}
	else
	{
        incorrectas++;
        document.getElementById("3").style.backgroundColor="#f5c6cb";
    }
    
     
    var pregunta4=document.android.abierto.value;
	
	if(pregunta4=="B")
	{
        document.getElementById("4").style.backgroundColor="#c3e6cb";
        correctas++;
        
	}
	else
	{
        incorrectas++;
        document.getElementById("4").style.backgroundColor="#f5c6cb";
    }

    var pregunta5=document.getElementById("p5").value;

    if(pregunta5=="Google Play" || pregunta5=="google play" || pregunta5=="Play Store" || pregunta5=="play store")
    {
        document.getElementById("5").style.backgroundColor="#c3e6cb";
        correctas++;
    }
    else
    {
        incorrectas++;
        document.getElementById("5").style.backgroundColor="#f5c6cb";
    }

    var pregunta6=document.getElementById("p6").value;

    if(pregunta6=="Apple Pie" || pregunta6=="apple pie")
    {
        document.getElementById("6").style.backgroundColor="#c3e6cb";
        correctas++;
    }
    else
    {
        incorrectas++;
        document.getElementById("6").style.backgroundColor="#f5c6cb";
    }

    var pregunta7=document.android.multi.value;
	
	if(pregunta7=="B")
	{
        document.getElementById("7").style.backgroundColor="#c3e6cb";
		correctas++;
	}
	else
	{
        incorrectas++;
        document.getElementById("7").style.backgroundColor="#f5c6cb";
    }

    var pregunta8=document.getElementById("p8").value;

    if(pregunta8=="APK" || pregunta8=="apk")
    {
        document.getElementById("8").style.backgroundColor="#c3e6cb";
        correctas++;
    }
    else
    {
        incorrectas++;
        document.getElementById("8").style.backgroundColor="#f5c6cb";
    }

    var pregunta9=document.android.dispositivos.value;
	
	if(pregunta9=="B")
	{
        document.getElementById("9").style.backgroundColor="#c3e6cb";
		correctas++;
	}
	else
	{
        incorrectas++;
        document.getElementById("9").style.backgroundColor="#f5c6cb";
    }

    var pregunta10=document.android.multimedia.value;
	
	if(pregunta10=="A")
	{
        document.getElementById("10").style.backgroundColor="#c3e6cb";
		correctas++;
	}
	else
	{
        incorrectas++;
        document.getElementById("10").style.backgroundColor="#f5c6cb";
    }

    var pregunta11=document.getElementById("p11").value;

    if(pregunta11=="Java" || pregunta11=="java")
    {
        document.getElementById("11").style.backgroundColor="#c3e6cb";
        correctas++;
    }
    else
    {
        incorrectas++;
        document.getElementById("11").style.backgroundColor="#f5c6cb";
    }

    var pregunta12=document.android.arquitecturas.value;
	
	if(pregunta12=="D")
	{
        document.getElementById("12").style.backgroundColor="#c3e6cb";
		correctas++;
	}
	else
	{
        incorrectas++;
        document.getElementById("12").style.backgroundColor="#f5c6cb";
    }

    var pregunta13=document.getElementById("p13").value;

    if(pregunta13=="Almacenamiento" || pregunta11=="almacenamiento")
    {
        document.getElementById("13").style.backgroundColor="#c3e6cb";
        correctas++;
    }
    else
    {
        incorrectas++;
        document.getElementById("13").style.backgroundColor="#f5c6cb";
    }

    var pregunta14=document.android.ventajas.value;
	
	if(pregunta14=="B")
	{
        document.getElementById("14").style.backgroundColor="#c3e6cb";
		correctas++;
	}
	else
	{
        incorrectas++;
        document.getElementById("14").style.backgroundColor="#f5c6cb";
    }

    var pregunta15=document.android.origen.value;
	
	if(pregunta15=="A")
	{
        document.getElementById("15").style.backgroundColor="#c3e6cb";
		correctas++;
	}
	else
	{
        incorrectas++;
        document.getElementById("15").style.backgroundColor="#f5c6cb";
    }

    var pregunta16=document.getElementById("p16").value;

    if(pregunta16=="4")
    {
        document.getElementById("16").style.backgroundColor="#c3e6cb";
        correctas++;
    }
    else
    {
        incorrectas++;
        document.getElementById("16").style.backgroundColor="#f5c6cb";
    }

    var pregunta17=document.getElementById("p17").value;

    if(pregunta17=="Google" || pregunta17=="google" )
    {
        document.getElementById("17").style.backgroundColor="#c3e6cb";
        correctas++;
    }
    else
    {
        incorrectas++;
        document.getElementById("17").style.backgroundColor="#f5c6cb";
    }

    var porcorrectas=parseInt(correctas*100/17);
    var porincorrectas=parseInt(incorrectas*100/17);
	
	document.getElementById("correctos").textContent = "Correctos: " + correctas;
	document.getElementById("incorrectos").textContent = "Incorrectos: " + incorrectas;
	document.getElementById("aciertos").textContent = "Porcentaje de Aciertos: " + porcorrectas + "%";
    document.getElementById("errores").textContent = "Porcentaje de Errores: " + porincorrectas + "%";
    document.getElementById("nota").textContent = "*Nota: El porcentaje no da justo porque está redondeado para que quede más prolijo*";

    var resultadofinal;

    if(porcorrectas>=0 && porcorrectas<=40)
    {
        resultadofinal="Debe ponerse a estudiar más - Desastre";
    }
    else
    {
        if(porcorrectas>=41 && porcorrectas<=69)
        {
            resultadofinal="Está bien pero debe ponerse a estudiar más - Regular";
        }
        else
        {
            if(porcorrectas==70)
            {
                resultadofinal="Buenas Respuestas - Bueno";
            }
            else
            {
                if(porcorrectas>70)
                {
                    resultadofinal="Muy buenas respuestas - Excelente";
                }
            }
        }
    }

    return resultadofinal;
}