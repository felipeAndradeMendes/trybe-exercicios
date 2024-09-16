// // FIX 01 ABA SINTAXE GERAL

// class SuperClass {
//   isSuper: boolean;
//   constructor() {
//     this.isSuper = true;
//   }

//   public sayHello(): void {
//     console.log('Olá, mundo!')
//   }
// }

// class SubClass extends SuperClass{

// }

// const newSuperClassObj = new SuperClass();
// const newSUBClassObj = new SubClass();

// const myFunc = (obj: SuperClass) => {
//   obj.sayHello();
// }

// myFunc(newSuperClassObj);
// myFunc(newSUBClassObj);

///
// // FIX 02 ABA SINTAXE GERAL

// class SuperClass {
//   isSuper: boolean;
//   constructor() {
//     this.isSuper = true;
//   }

//   protected sayHello(): void {
//     console.log('Olá, mundo!')
//   }
// }

// class SubClass extends SuperClass{
//   public sayHello2(){
//     this.sayHello();
//   }
// }

// // const newSuperClassObj = new SuperClass();
// const newSUBClassObj = new SubClass();

// const myFunc = (obj: SubClass) => {
//   obj.sayHello2();
// }

// // myFunc(newSuperClassObj);
// myFunc(newSUBClassObj);

// FIX 03 ABA SINTAXE GERAL

class SuperClass {
  isSuper: boolean;
  constructor() {
    this.isSuper = true;
  }

  protected sayHello(): void {
    console.log('Olá, mundo!')
  }
}

class SubClass extends SuperClass{
  constructor() {
    super()
    this.isSuper = false;
  }

  public sayHello2(){
    this.sayHello();
  }
}

const newSuperClassObj = new SuperClass();
const newSUBClassObj = new SubClass();

const myFunc = (obj: SuperClass) => {
  obj.isSuper ? console.log('Super') : console.log('Sub');
}

myFunc(newSuperClassObj);
// myFunc(newSUBClassObj);



// FIX 04 ABA IMPLEMENTANDO INTERFACES

interface MyInterface {
  myNumber: number;
  myFunc(myParam: number): string;
}

class MyClass implements MyInterface {
  constructor(
    public myNumber: number
  ) {}

  myFunc(myParam: number): string {
    return `A soma é ${ myParam + this.myNumber}`;
  }
}

const newMyClassObj = new MyClass(12);

console.log(newMyClassObj.myFunc(12));



// FIX 05 ABA IMPLEMENTANDO INTERFACES

interface Logger {
  log(param: string): void;
}

interface Database {
  logger: Logger;
  save(key: string, value: string): void;
}

class ConsoleLogger implements Logger {
  log(param: string): void{
    console.log(`Console log 01: ${param}`)

  }
}

class ConsoleLogger2 implements Logger {
  log(param: string): void{
    console.log(`Console log 02: ${param}`)
  }
}

class ExampleDatabase implements Database {
  constructor(public logger: Logger = new ConsoleLogger()){}
 
  save(key: string, value: string): void {
    this.logger.log(`Salvando o valor ${value} na chave ${key}`);
  }
}

const logger1 = new ConsoleLogger();
const logger2 = new ConsoleLogger2();

const database1 = new ExampleDatabase(logger1);
const database2 = new ExampleDatabase(logger2);
const database3 = new ExampleDatabase();

database1.save('chave 1', 'valor 1');
database2.save('chave 2', 'valor 2');
database3.save('chave 3', 'valor 3');