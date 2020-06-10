abstract class UserAccount {
  public name: string;
  protected age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  set setAge(age: number) {
    this.age = age;
  }

  logDetails(): void {
    console.log(`The player ${this.name} is ${this.age} years old.`);
  }
}

class CharAccount extends UserAccount {
  private nickname: string;
  readonly level: number;

  constructor(name: string, age: number, nickname: string, level: number) {
    super(name, age);

    this.nickname = nickname;
    this.level = level;
  }

  get getLevel() {
    console.log("------GET------");
    return this.level;
  }

  logCharDetails(): void {
    console.log(
      `The player ${this.name} is ${this.age} and has the char ${this.nickname} at level ${this.level}`
    );
  }
}

// const edu = new UserAccount("Eduardo", 22);
// console.log(edu.name);
// edu.logDetails();
// edu.setAge = 1000;
// console.log(edu);

const john = new CharAccount("John", 40, "johnmaster", 80);
// john.nickname = "ponzio";
console.log(john.level);
john.logDetails();
john.logCharDetails();
console.log(john.getLevel);
