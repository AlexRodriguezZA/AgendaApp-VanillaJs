
class contacto{
    contructor(nombre,email,NumContac){
        this.nombre = nombre;
        this.email = email;
        this.NumContac = NumContac;
    }
}

class Interfaz{
    agregarContacto(contact){
        const listacontacto = document.getElementById("List-contact")
        const ElementosContacto = document.createElement("div")
        ElementosContacto.innerHTML = `
        <div class="card text-center mb-4">
            <div class="card-body">
                <strong> |Nombre </strong>: ${contact.nombre}
                <strong> |Email </strong>: ${contact.email}
                <strong> |Contacto </strong>: ${contact.NumContac}
                <a href="#" name="eliminar" class="btn btn-danger">Eliminar</a>
            </div>
        </div>
        `;
        listacontacto.appendChild(ElementosContacto)

    }
    eliminarContacto(elementhtml){
        if(elementhtml.name === "eliminar"){
            elementhtml.parentElement.parentElement.parentElement.remove();

        }

    }
    resetearFormulario(){
        document.getElementById("contact-form").reset()
    }
}

//Evento guardar
document.getElementById("contact-form").addEventListener("submit", function (e){
    const name = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    const number = document.getElementById("numero").value;
    //OBJETO CONTACTO
    const contact = new contacto()
    contact.contructor(name,correo,number)
    //OBJETO INTERFAZ
    const Inter = new Interfaz()
    Inter.resetearFormulario() //Limpiamos el formulario
    Inter.agregarContacto(contact)
    e.preventDefault()
    
});

//Evento eliminar contacto

document.getElementById("List-contact").addEventListener("click", function(e){
    const Inter = new Interfaz();
    Inter.eliminarContacto(e.target) 
})