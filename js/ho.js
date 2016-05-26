$(document).ready(function() {
	$( '.class_a1' ).click(function( event ) {
		alert( 'Thanks for visiting!' );
	});

	$("#Button").click(onClickElement);

	function onClickElement(){
		$("#Lorem").css({
			"color":"lime",
			"font-Size":"30px"
		});
	}


	//Atrr Atributo href
	$("#a2").click(onClickhref);
	function onClickhref(){
		$("[href]='#'").attr('href', 'http://empieza.desafiolatam.com/');
	}

	//Agregar y Quitar Clases de CSS
	var addelem1 = $("#addelem1");
	var delelem1 = $("#delelem1");
	var addelem2 = $("#addelem2");
	var delelem2 = $("#delelem2");

	addelem1.click(onClickAddelem1);
	delelem1.click(onClickDelelem1);
	addelem2.click(onClickAddelem2);
	delelem2.click(onClickDelelem2);

	function onClickAddelem1() {
		$("#psinclass").addClass("elem1");
	};
	
	function onClickDelelem1() {
		$("#psinclass").removeClass("elem1");
	};

	function onClickAddelem2() {
		$("#psinclass").addClass("elem2");
	};
	
	function onClickDelelem2 () {
		$("#psinclass").removeClass("elem2");
	};

	//Text
	$(document).ready(init);
	
	function init(){
		$("#parrafo1").click(changeText);
	}

	function changeText(){
		 $(this).text("Cambiamos el Texto mediante JQuery.");
		 //leer el texto en el Elemento
		 console.log($('#parrafo1').text());
	}


	//append,after,before
	$("#Button002").click(contentAdd);
	function contentAdd () {
		 $("#contenido01").append('Soy un append');
	}
	$("#Button003").click(contentAft);
	function contentAft () {
		 $("#contenido01").after('Soy un after');
	}
	$("#Button004").click(contentBef);
	function contentBef () {
		 $("#contenido01").before('Soy un before');
	}

	//mouseover,mouseout
	$("#Parrafor0002").mouseover(makeOver);
	function makeOver() {
		 $(this).css("background-color","yellow");
	}

	$("#Parrafor0002").mouseout(makeOutOver);
	function makeOutOver() {
		 $(this).css("background-color","peru");
	}

	//mousemove
	$(document).mousemove(locationCursor);
	function locationCursor(){
		$("#positionmousemove").text("Location for x in Mouse: "+ event.clientX + " location for y in Mouse: " + event.clientY);
	}

	//mousedown y mouseup
	$("#Parrafor0003").mousedown(makeDown);
	function makeDown(){
		$("#pressmousedownup").text("Tu presionaste el boton");
	}
	$("#Parrafor0003").mouseup(makeUp);
	function makeUp(){
		$("#pressmousedownup").text("Tu soltaste el boton");
	}
	
	//dblclick
	$("#Parrafor0004").dblclick(doubleClick);
	function doubleClick(){
		$("#dblclick").text("Doble click listo");
	}

	//keypress
	$(document).keypress(keyPressed);
	function keyPressed(e){
		$("#keypress").text("Key pressed! and the code is: " + e.keycode);
	}

	//Animation
	$("#showContent").click(showContent);
	function showContent() {
		//$("#Parrafor0005").show();
		//$("#Parrafor0005").show("slow");
		//$("#Parrafor0005").show(2000);

		//velocidad y transparencia
		//$("#Parrafor0005").fadeTo(2000,1);

		//$("#Parrafor0005").slideDown(2000);

		//El elemento debe ser visible
		//$("#Parrafor0005").animate({height:300},2000);

	}
	$("#hidenContent").click(hidenContent);
	function hidenContent() {
		//$("#Parrafor0005").hide();
		//$("#Parrafor0005").hide("fast");
		//$("#Parrafor0005").hide(2000);

		//velocidad y transparencia
		//$("#Parrafor0005").fadeTo(2000,0.4);

		//$("#Parrafor0005").slideUp(2000);
		//$("#Parrafor0005").animate({height:300,width:400},2000);

	}
	//toggle
	$("#toggleContent").click(toggleContent);
	function toggleContent() {
		$("#Parrafor0005").toggle(2000);
		//$("#Parrafor0005").slideToggle(2000);
	}

	//callbackContent
	$("#sincallbackContent").click(sincallbackContent);
	function sincallbackContent(){
		$("#Parrafor0005").toggle(2000);
		callbackFunction();
	}
	$("#concallbackContent").click(concallbackContent);
	function concallbackContent(){
		$("#Parrafor0005").toggle(2000,callbackFunction);
	}
	function callbackFunction(){
		alert("Animacion Terminada!!");
	}


//Ejercicio N1
	$("#Button007").click(makeExercise);
	function makeExercise(){
	// 1. Pon tu nombre al atributo value del campo first name
		$('input[name=firstname]').attr('value','Eli Bermudez');
	// 2. Pon el valor a la pregunta Favorite Day of Week a Monday
		$('option[value="Monday"]').attr('selected',"");
	// 3. Cambia la etiqueta de First name a 'Tu nombre'
		$('label[name=first_name_label]').text('Tu nombre:');
	// 4. Obtén el valor del atributo 'name' del campo Favorite Day of The Week
		console.log($('select').attr('name'));
	// 5. Escoge la opción Female de la pregunta de género.
		$('input[value=male]').removeAttr('checked');
		$('input[value=female]').attr('checked',"");
	// 6. Encuentra la primera form del documento y pon el atributo name = personal_info
		$('form:first').attr('name','personal_info');
	// 7. Encuentra la primera form del documento y pon el atributo name = job_info
		$('form:first').attr('name','job_info');
	// 8. Agrega un título h1 a cada una de las formas que diga 'Entrevista personal', 'Entrevista de trabajo' respectivamente
			$('form:first label:first-child').before('<h5>Entrevista personal</h5>');
			$('form:last *:first-child').before('<h5>Entrevista de trabajo</h5>');
	// 9. Agrega un título a la pregunta Male/Female 'Gender'
		$('input[value=male]').before('<h6>Gender</h6>');
	// 10. Agrega una pregunta Email: con un input de tipo texto después de last name
		$('input[name=lastname]').after('<br><label name="e_mail" for="email">Email:</label><input type="email" id="email" name="email">');
	// 11. Agrega la clase form a ambas formas
		$('form').addClass('class','form');
	}	

});