const emailPerfil = document.getElementById("emailPerfil")
const nombre = document.getElementById("nombre")
const segundo_nombre = document.getElementById("segundo_nombre")
const apellido = document.getElementById("apellido")
const segundo_apellido = document.getElementById("segundo_apellido")
const telefono = document.getElementById("telefono")

emailPerfil.value=localStorage.getItem("usuario");
nombre.value=localStorage.getItem("nombre")
segundo_nombre.value=localStorage.getItem("segundo_nombre")
apellido.value=localStorage.getItem("apellido")
segundo_apellido.value=localStorage.getItem("segundo_apellido")
telefono.value=localStorage.getItem("telefono")



    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    forms.forEach(form => {
      form.addEventListener('submit', event => {
        event.preventDefault()
        localStorage.setItem("nombre", nombre.value)
        localStorage.setItem("segundo_nombre", segundo_nombre.value)
        localStorage.setItem("apellido", apellido.value)
        localStorage.setItem("segundo_apellido", segundo_apellido.value)
        localStorage.setItem("telefono", telefono.value)

        if (!form.checkValidity()) {
          event.stopPropagation()
          
        }
  
        form.classList.add('was-validated')
      }, false)
    })