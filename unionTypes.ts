type unionType = string | number;

function showTypes(args: unionType) {
  console.log(args);
}

showTypes('test');

showTypes(7);

