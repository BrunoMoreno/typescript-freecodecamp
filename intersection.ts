interface Person {
  name: string;
  age: number;
}

interface Worker {
  companyId: string;
}

type Employee = Person & Worker;

const bestOfMonth: Employee = {
  name: 'Peter',
  age: 39,
  companyId: '12345'
}