class Persona {
  constructor (nombre, apellido, edad){
    this.nombre = nombre;
    this.apellido = apellido ;
    this.edad = edad;
 }
}
// Creación de un array para almacenar objetos Persona
const Personas = []
// Solicitar al usuario la cantidad de personas a ingresar al sistema
const cantidadPersonas = parseInt(prompt("cuantas personas va a ingresar al sistema"));
// Verificar si la entrada es válida
if(isNaN(cantidadPersonas) || cantidadPersonas === ""){
   alert("valor no valido, porfavor ingrese un numero")
}
else{
   // Ciclo para ingresar los datos de las personas
    for (let i = 0; i< cantidadPersonas; i++) {

       const nombre = prompt("ingrese el nombre");
       const apellido = prompt("ingrese el apellido");
       const edad = parseInt(prompt("ingrese la edad del usuario"))

       // Verificar si los datos ingresados son válidos
       if(isNaN(edad) || edad === "" || nombre === "" || !isNaN(nombre || apellido) || apellido === "" ){
          alert("uno de los datos ingresados no es valido, en edad solo numeros y en nombre y apellido solo letras")
          break;
       }
       const pers = new Persona(nombre, apellido, edad)
       Personas.push(pers)
     }
     // Función de filtro para encontrar personas mayores de edad
       const filtroEdad = pers => pers.edad >= 18;
       const PersonasMayores = Personas.filter(filtroEdad)
       console.log("todas las personas: \n")
       console.log(Personas)
       console.log("Personas mayores de edad: \n")
       for (const personaMayor of PersonasMayores){
      console.log(`persona: ${personaMayor.nombre} ${personaMayor.apellido} ${personaMayor.edad} años`)
   }
}
