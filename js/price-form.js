$(document).ready(function(){
	var formulario = $('#formulario').html();
	var contadorSecciones = 1;
	var seccion_a_remover = '#seccion' + contadorSecciones;
	var cont = 0;
	$('#btn-nueva-seccion').click(function(){
		var stringInputSeccion = '<span id="span_seccion' + contadorSecciones + '"><div class="form-group"><input type="text" class="form-control" name="seccion' + contadorSecciones + '" id="seccion' + contadorSecciones + '" placeholder="Seccion ' + contadorSecciones + '"><br /></span>';
		formulario = $('#formulario').append(stringInputSeccion);
		contadorSecciones++;
	});
	$('#btn-quitar-seccion').click(function(){
		cont = contadorSecciones - 1;
		var seccion_a_remover = '#span_seccion' + cont;
		$(seccion_a_remover).remove();
		contadorSecciones = contadorSecciones-1;
	});
	$('#btn-nueva-lista').click(function(){
		cont = contadorSecciones - 1;
		var stringLista = '<span id="span_lista' + cont + '"><div class="form-group"><input type="text" class="form-control" name="lista' + cont + '" id="lista' + cont + '" placeholder="Lista ' + cont + '"><br /></span>';
		formulario = $('#formulario').append(stringLista);
	});
});