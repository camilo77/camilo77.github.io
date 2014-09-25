$(document).ready(function(){
	$("div").click(function(){

		/*posicion de un elemento
		$(this).position().top*/
		/*var pos = $(this).position().top*/
		/*posicionar el scroll de la pagina en la posicion indicada*/
		/*$(window).scrollTop(pos)*/
		
		
		focoElemento(this,30,900);
	});

	/*
	$( "#clickme" ).click(function() {
	  $( "#book" ).animate({
	    opacity: 0.25,
	    left: "+=50",
	    top:"-=500"
	  }, 500);
	});*/
});

/*  
	enfocar elemento en la posicion deseada
	focoElemento(this,0,900);
*/
function focoElemento(elemento, top, velocidad){

	/*encontrando la posicion del elemento a enfocar*/
	var posicion = $(elemento).position().top

	/*creando efecto y enfocando*/
	$('html, body').animate(
		{scrollTop: posicion-top},velocidad
	);
}

/*
	enfocar pagina en la posicion deseada
	focoPagina(100,400)
*/
function focoPagina(posicion, velocidad){
	/*enfocando pagina*/
	$('html, body').animate(
		{scrollTop: posicion},velocidad
	);
}


/*saber posicion de el scroll de la pagina
			
			$(window).scrollTop()
			$(window).scrollLeft()

			retorna valor de pixeles
*/

/*mover el scroll de la ventana a la posicion deseada

	$(window).scrollTop(pos)

*/

/*conocer posiscion de un elemento
	
	$(elemento).position()
	$(elemento).position().top
	$(elemento).position().left
*/