/**
 * Callbacks
 */
console.log("---------------------------------------------------------------");
const sum = (a, b, cb) => cb(a + b);
const print = (data) => console.log(data);
sum(1, 2, print);

//  ****************
console.log("---------------------------------------------------------------");

const getData = (isValid, cb, cbErr) => {
  if (isValid) {
    setTimeout(() => {
      cb({
        fname: "Leonel",
        lname: "Messi",
      });
    }, 3000);
  } else {
    cbErr(new Error("No se pudo obtener los datos..."));
  }
};

const printData = (data) => console.log(data);

const errorHandler = (err) => console.log(err);

getData(false, printData, errorHandler);
console.log("---------------------------------------------------------------");
getData(true, printData, errorHandler);
