const btn = document.getElementById('formulario__btn');

document.getElementById('formulario')
    .addEventListener('submit', function(event) {
    event.preventDefault();

    btn.value = 'Enviando Consulta...';

    const serviceID = 'default_service';
    const templateID = 'template_322vtrc';

    emailjs.sendForm(serviceID, templateID, this)
    
    .then(() => {
        
        btn.value = 'Consulta enviada.';
        alert('Mensaje enviado correctamente');
    },  (err) => {
    
        btn.value = 'Consulta enviada.';
        alert(JSON.stringify(err));
    });
});