const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const tareas = [];

function mostrarTareas() {
  console.log('Lista de tareas:');
  tareas.forEach((tarea, index) => {
    console.log(`${index + 1}. [${tarea.completada ? '✔' : '❌'}] ${tarea.descripcion}`);
  });
  console.log('-----------------------');
}

function agregarTarea() {
  rl.question('Ingrese la descripción de la tarea: ', (descripcion) => {
    tareas.push({ descripcion, completada: false });
    console.log('Tarea añadida correctamente.');
    mostrarTareas();
    mostrarMenu();
  });
}

function eliminarTarea() {
  mostrarTareas();
  rl.question('Ingrese el número de la tarea que desea eliminar: ', (index) => {
    index = parseInt(index) - 1;
    if (index >= 0 && index < tareas.length) {
      tareas.splice(index, 1);
      console.log('Tarea eliminada correctamente.');
    } else {
      console.log('Número de tarea inválido.');
    }
    mostrarTareas();
    mostrarMenu();
  });
}

function completarTarea() {
  mostrarTareas();
  rl.question('Ingrese el número de la tarea que desea marcar como completada: ', (index) => {
    index = parseInt(index) - 1;
    if (index >= 0 && index < tareas.length) {
      tareas[index].completada = true;
      console.log('Tarea marcada como completada correctamente.');
    } else {
      console.log('Número de tarea inválido.');
    }
    mostrarTareas();
    mostrarMenu();
  });
}

function mostrarMenu() {
  console.log('\nSeleccione una opción:');
  console.log('1. Mostrar tareas');
  console.log('2. Agregar tarea');
  console.log('3. Eliminar tarea');
  console.log('4. Completar tarea');
  console.log('5. Salir');

  rl.question('Ingrese el número de la opción: ', (opcion) => {
    switch (opcion) {
      case '1':
        mostrarTareas();
        mostrarMenu();
        break;
      case '2':
        agregarTarea();
        break;
      case '3':
        eliminarTarea();
        break;
      case '4':
        completarTarea();
        break;
      case '5':
        rl.close();
        break;
      default:
        console.log('Opción inválida. Intente de nuevo.');
        mostrarMenu();
        break;
    }
  });
}

mostrarMenu();
