const alumnos = [
    { nombre: 'German David Neira Rivera', edad: 23 },
    { nombre: 'Santiago Pascual Plaus', edad: 32 },
    { nombre: 'Santiago Canosa', edad: 40 },
    { nombre: 'Francisco Campos', edad: 46 },
    { nombre: 'Daniel Andres Gallo Garcia', edad: 22 },
    { nombre: 'Juanse Calviño', edad: 28 },
    { nombre: 'Jorge Roldan', edad: 31 },
    { nombre: 'Leymar Gutierrez', edad: 42 },
    { nombre: 'Juan Jose Diaz', edad: 27 },
    { nombre: 'Matias Fernandez', edad: 29 },
    { nombre: 'Leandro Amaro', edad: 26 },
    { nombre: 'Franco Carini', edad: 31 },
    { nombre: 'Francisco Escobar Sabio', edad: 28 },
    { nombre: 'Pilar Castro', edad: 27 },
    { nombre: 'Sebastian Rodriguez', edad: 31 },
    { nombre: 'Carlos Martin Rodriguez', edad: 28 },
    { nombre: 'Pablo Aramayo', edad: 33 },
  ]
  
  // DISCLAIMER: La edad es ficticia y solo destinada para realizar los siguientes ejercicios
  
  // 1. Obtener un array de strings con solo nombres de cada alumno usando .map()

  const nombreAlumnos = alumnos.map(({nombre}) => nombre) 
  console.log( 'nombreAlumnos', nombreAlumnos)

  
  // 2. Obtener un array con aquellos alumnos mayores a 30 años usando .filter()

  const edadAlumnos = alumnos.filter(({edad}) => edad > 30) 
  console.log( 'edadAlumnos', edadAlumnos)
  
  // 3. Obtener un entero con la edad total de todos los alumnos usando .reduce() (Investigar)

  const edadTotalAlumnos = alumnos.reduce((contador, {edad}) => edad + contador, 0)
  console.log('edadTotalAlumnos', edadTotalAlumnos)
  
  // min 1:07
  
  // 4. Obtener en una constante la edad de "Leandro Amaro" usando .find() ( Investigar ) y destructuring del resultado

  const alumnoEncontrado = alumnos.find(({nombre}) => nombre === 'Leandro Amaro')


  if (alumnoEncontrado){
    const {edad} = alumnoEncontrado
    
    console.log(alumnoEncontrado)
    console.log(edad)
  }


  // 5. Obtener en una constante primer alumno del array de alumnos usando destructuring y posteriormente en otra constante su nombre también
  
  const [primerAlumno] = alumnos 
  console.log('primerAlumno: ', primerAlumno) 

  const {nombre: nombrePrimerAlumno} = primerAlumno 
  
  console.log('nombrePrimerAlumno: ', nombrePrimerAlumno) 


  // 6. Obtener un array con aquellos alumnos que empiezan con la letra "F", usando .filter()

  // const alumnosConF = alumnos.include(({nombre}) => nombre === 'F')


  
  // 7. Obtener un array agregando una propiedad/key/atributo más a cada elemento usando .map()

  
  // 8. Obtener a partir de la constante en 3, el promedio de edad del curso dividiendo la misma por el total de alumnos

  const promedioEdad = alumnos.reduce((contador, {edad}) => (edad+contador)/17 ,0)
	


  
  
  