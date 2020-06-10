"use strict";
var tlou = {
    title: "The Last of Us",
    description: "The best game",
    genre: "Action",
    getSimilars: function (title) {
        console.log("Similar games to " + title + ": Metro, LoL");
    },
};
console.log(tlou.genre);
if (tlou.getSimilars) {
    tlou.getSimilars(tlou.title);
}
var leftbehind = {
    title: "The Last of Us - Left",
    description: "The best game - Left",
    genre: "Action - Left",
    originalGame: tlou,
    newContent: ["new character"],
};
console.log(leftbehind);
var CreateGame = /** @class */ (function () {
    function CreateGame(title, description, genre) {
        this.title = title;
        this.description = description;
        this.genre = genre;
    }
    return CreateGame;
}());
