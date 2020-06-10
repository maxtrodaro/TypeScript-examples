interface Game {
  title: string;
  description: string;
  readonly genre: string;
  platform?: string[];
  getSimilars?: (title: string) => void;
}

const tlou: Game = {
  title: "The Last of Us",
  description: "The best game",
  genre: "Action",
  getSimilars: (title: string) => {
    console.log(`Similar games to ${title}: Metro, LoL`);
  },
};

console.log(tlou.genre);
if (tlou.getSimilars) {
  tlou.getSimilars(tlou.title);
}

interface DLC extends Game {
  originalGame: Game;
  newContent: string[];
}

const leftbehind: DLC = {
  title: "The Last of Us - Left",
  description: "The best game - Left",
  genre: "Action - Left",
  originalGame: tlou,
  newContent: ["new character"],
};

console.log(leftbehind);

class CreateGame implements Game {
  title: string;
  description: string;
  genre: string;

  constructor(title: string, description: string, genre: string) {
    this.title = title;
    this.description = description;
    this.genre = genre;
  }
}
