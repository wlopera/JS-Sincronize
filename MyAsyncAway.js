/**
 * Async y Await
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

const main = async (err, params) => {
  try {
    const res = await getData(err, params);
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};

console.log("Inicio.................");
main(false, { fname: "Leonel", lname: "Messi" });
main(false, { fname: "Kylian", lname: "Embappe" });
main(true, { fname: "Neymar", lname: "Santos" });

console.log("Fin....................");
