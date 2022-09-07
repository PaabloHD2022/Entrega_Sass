const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

//Validacion de datos ingresados por el usuario.
const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/, // 7 a 14 numeros.
}

const campos = {
	nombre: false,
	correo: false,
	telefono: false,
	consulta: false,
}

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "nombre":
			validarCampo(expresiones.nombre, e.target, 'nombre');
		break;

		case "correo":
			validarCampo(expresiones.correo, e.target, 'correo');
		break;
		
		case "telefono":
			validarCampo(expresiones.telefono, e.target, 'telefono');
		break;

		case "consulta":
			validarCampo(expresiones.consulta, e.target, 'consulta');
		break;
	}
}

function enviarInfo(){
	let nombre = document.getElementById("nombre").value.trim();
	let correo = document.getElementById("correo").value.trim();
	let telefono = document.getElementById("telefono").value.trim();
	let consulta = document.getElementById("consulta").value.trim();
	
	return {
		name: nombre,
		email: correo,
		cel: telefono,
		messages: consulta
	}
}

//Valida inputs. 
const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos[campo] = false;
	}
}

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
	e.preventDefault(); //Evita que al apretar el boton 'enviar' la pagina suba al header.|

	if(campos.nombre && campos.correo && campos.telefono){

		localStorage.setItem('enviarInfo', JSON.stringify(enviarInfo()))
		swal.fire({
			icon: "success",
			title: "Mensaje enviado correctamente",
			text: "Nos pondremos en contacto con usted a la brevedad...",			
			
		});
				
			//Quita los iconos verdes del formulario una vez enviado.
			document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
			icono.classList.remove('formulario__grupo-correcto');
		});
	} else {
		
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');{

			swal.fire({
				icon: "warning",
				title: "Ingrese todos los datos en el formulario",
			});
		}
	}
});
	const btn = document.getElementById('formulario__btn');

	document.getElementById('formulario')
    .addEventListener('submit', function(event) {
    event.preventDefault();

    btn.value = 'enviando...';

    const serviceID = 'default_service';
    const templateID = 'template_322vtrc';

    emailjs.sendForm(serviceID, templateID, this).then(() => {
        btn.value = 'enviar correo';
		
			//aca inicia el mensaje de "mensaje enviado correctamente"
			if(campos.nombre && campos.correo && campos.telefono){ // se valida la informacion y envia el modal con el mensaje

			localStorage.setItem('enviarInfo', JSON.stringify(enviarInfo()))
				swal.fire({
					icon: "success",
					title: "Mensaje enviado correctamente",
					text: "Nos pondremos en contacto con usted a la brevedad...",
				});
			
				//Quita los iconos verdes del formulario una vez enviado.
				document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
				icono.classList.remove('formulario__grupo-correcto');
				});
			}//luego de enviar el correo y enviar el mensaje con exito me lleva a la tienda

			location.href= "../Views/TiendaOnline.html";//aca ejecuta el codigo que hace aparecer el mensaje enviado
			//en caso de que sea error  el codigo a continuacion enviara el mensaje de error   
	
		}, (err) => { 
			btn.value = 'enviar mensaje';
			document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');{

			swal.fire({
				icon: "warning",
				title: "Ingrese todos los datos en el formulario",
			});
		}
    });
});

