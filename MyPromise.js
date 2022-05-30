/**
 * Promises
 */
const getData = (err, { fname, lname }) =>
  new Promise((res, rej) => {
    console.log("datos Iniciales:", err, fname, lname);
    if (!err) {
      setTimeout(() => {
        res({
          fname: fname,
          lname: lname,
        });
      }, 3000);
    } else {
      rej(`No se pudo obtener los datos de ${fname} ${lname}`);
    }
  });
console.log("Inicio.................");
getData(false, { fname: "Leonel", lname: "Messi" })
  .then((data) => {
    console.log(data);
    return getData(false, { fname: "Kylian", lname: "Embappe" });
  })
  .then((data2) => console.log(data2))
  .catch((err) => console.log(err));

getData(true, { fname: "Neymar", lname: "Santos" })
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
console.log("Fin....................");
