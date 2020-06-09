// Type alias
type Uid = number | string | undefined;

// type | type = Union
function logDetails(uid: number | string, item: string) {
  console.log(`A product with ${uid} has a title as ${item}`);
}

function logInfo(uid: Uid, user: string) {
  console.log(`An user with ${uid} has a name as ${user}`);
}

type Platform = "Windows" | "Linux" | "Mac Os" | "ios";

function renderPlatform(platform: Platform) {
  return platform;
}

renderPlatform("ios");

logDetails(12, "sapato");
logDetails("123", "sapato");

logInfo(12, "sapato");
logInfo("123", "sapato");
