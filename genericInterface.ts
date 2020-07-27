interface GenericTypes<T> {
  id: number
  name: T
}

function showType(args: GenericTypes<string>) {
  console.log(args);
}

showType({
  id: 1,
  name: 'Test'
});

function showTypeTwo(args: GenericTypes<number>) {
  console.log(args);
}

showTypeTwo({
  id: 1,
  name: 4
});