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
	}
	else
	{
		incorrectas++;
	}
	
	var pregunta2=document.android.androids.value;
	
	if(pregunta2=="C")
	{
		correctas++;
	}
	else
	{
		incorrectas++;
    }
    
    var pregunta3=document.android.logo.value;
	
	if(pregunta3=="B")
	{
		correctas++;
	}
	else
	{
		incorrectas++;
    }
    
     
    var pregunta4=document.android.abierto.value;
	
	if(pregunta4=="B")
	{
		correctas++;
	}
	else
	{
		incorrectas++;
    }

    var pregunta5=document.getElementById("p5").value;

    if(pregunta5=="Google Play" || pregunta5=="google play" || pregunta5=="Play Store" || pregunta5=="play store")
    {
        correctas++;
    }
    else
    {
        incorrectas++;
    }

    var pregunta6=document.getElementById("p6").value;

    if(pregunta6=="Apple Pie" || pregunta6=="apple pie")
    {
        correctas++;
    }
    else
    {
        incorrectas++;
    }

    var pregunta7=document.android.multi.value;
	
	if(pregunta7=="B")
	{
		correctas++;
	}
	else
	{
		incorrectas++;
    }

    var pregunta8=document.getElementById("p8").value;

    if(pregunta8=="APK" || pregunta8=="apk")
    {
        correctas++;
    }
    else
    {
        incorrectas++;
    }

    var pregunta9=document.android.dispositivos.value;
	
	if(pregunta9=="B")
	{
		correctas++;
	}
	else
	{
		incorrectas++;
    }

    var pregunta10=document.android.multimedia.value;
	
	if(pregunta10=="A")
	{
		correctas++;
	}
	else
	{
		incorrectas++;
    }

    var pregunta11=document.getElementById("p11").value;

    if(pregunta11=="Java" || pregunta11=="java")
    {
        correctas++;
    }
    else
    {
        incorrectas++;
    }

    var pregunta12=document.android.arquitecturas.value;
	
	if(pregunta12=="D")
	{
		correctas++;
	}
	else
	{
		incorrectas++;
    }

    var pregunta13=document.getElementById("p13").value;

    if(pregunta13=="Almacenamiento" || pregunta11=="almacenamiento")
    {
        correctas++;
    }
    else
    {
        incorrectas++;
    }

    var pregunta14=document.android.ventajas.value;
	
	if(pregunta14=="B")
	{
		correctas++;
	}
	else
	{
		incorrectas++;
    }

    var pregunta15=document.android.origen.value;
	
	if(pregunta15=="A")
	{
		correctas++;
	}
	else
	{
		incorrectas++;
    }

    var pregunta16=document.getElementById("p16").value;

    if(pregunta16=="4")
    {
        correctas++;
    }
    else
    {
        incorrectas++;
    }

    var pregunta17=document.getElementById("p17").value;

    if(pregunta17=="Google" || pregunta17=="google" )
    {
        correctas++;
    }
    else
    {
        incorrectas++;
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