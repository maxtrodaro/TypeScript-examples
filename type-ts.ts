// Type Alias

// definição
type GameT = {
  title: string;
};

type DLCT = {
  extra: string;
};

// intersection
type GameCollectionT = Game & DLCT & { content: boolean };

// implements
class CreateGameT implements GameCollectionT {
  title: string;
  extra: string;

  constructor(title: string, extra: string) {
    this.title = title;
    this.extra = extra;
  }
}

// declaração função
type getSimilarsT = (title: string) => void;

// permite declarar tipos primitivos
type IDT = string | number;

// pode declarar tuplas
type TupleT = [number, number];
[1, 2] as TupleT;

// Apenas uma declaração por escopo
type JQueryT = { a: string };
type JQueryT = { b: string };
