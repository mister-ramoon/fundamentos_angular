const username: string | number = "ramonruizdev";
const sum = (a: number, b: number) => {
  return a + b;
}
sum(1, 3);

class Person {

  constructor(public age: number, private lastName: string) { }
}


const ramon = new Person(20, "Ruiz");
ramon.age;
