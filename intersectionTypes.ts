type leftType = {
  id: number
  left: string
}

type rightType = {
  id: number
  right: string
}

type intersectionType = leftType & rightType;

function showType(args: intersectionType) {
  console.log(args)
}

showType({ id: 1, left: 'test', right: 'another test' })