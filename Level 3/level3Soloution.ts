export type Person = {
    name: string;
    age?: number
  };
  
  export function createPerson(name: string, age?: number): Person {
    let person: Person = { name };
    if (age !== undefined) {
      person.age = age;
    }
    return person;
  }
  