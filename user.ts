// accountInfo
// charInfo
// PlayerInfo

type AccountInfo = {
  id: number;
  name: string;
  email?: string;
};

const account: AccountInfo = {
  id: 123,
  name: "Eduardo",
};

type CharInfo = {
  nickname: string;
  level: number;
};

const char: CharInfo = {
  nickname: "Ponzio",
  level: 100,
};

// intersection
type PlayerInfo = AccountInfo & CharInfo;

const player: PlayerInfo = {
  id: 123,
  name: "teste",
  nickname: "testando",
  level: 100,
};
