/**
 * Event loop:  Un ciclo constante de ejecucion
 * Event queue: Un evento de cola que encola las tareas que ejecutara el event loop
 * Thread pool: Lugar donde se envian tareas muy pesadas para que se genere un nuevo hilo
 *              de ejecucion, mientras el event loop sigue ejecutando tareas del event queue.
 *              Esta tarea se la envia el event loop. Al final de terminar todas las tareas del
 *              event queue, las tareas del thread pool que esten terminadas se envian al event queue
 *              para luego ser tomas por el event loop y despacharlas.
 */

console.log("Tarea 1");
console.log("Tarea 2");
console.log("Tarea 3");
setTimeout(() => {
  console.log("Tarea 4");
}, 2000);
console.log("Tarea 5");
