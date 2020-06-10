"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var UserAccount = /** @class */ (function () {
    function UserAccount(name, age) {
        this.name = name;
        this.age = age;
    }
    Object.defineProperty(UserAccount.prototype, "setAge", {
        set: function (age) {
            this.age = age;
        },
        enumerable: false,
        configurable: true
    });
    UserAccount.prototype.logDetails = function () {
        console.log("The player " + this.name + " is " + this.age + " years old.");
    };
    return UserAccount;
}());
var CharAccount = /** @class */ (function (_super) {
    __extends(CharAccount, _super);
    function CharAccount(name, age, nickname, level) {
        var _this = _super.call(this, name, age) || this;
        _this.nickname = nickname;
        _this.level = level;
        return _this;
    }
    Object.defineProperty(CharAccount.prototype, "getLevel", {
        get: function () {
            console.log("------GET------");
            return this.level;
        },
        enumerable: false,
        configurable: true
    });
    CharAccount.prototype.logCharDetails = function () {
        console.log("The player " + this.name + " is " + this.age + " and has the char " + this.nickname + " at level " + this.level);
    };
    return CharAccount;
}(UserAccount));
// const edu = new UserAccount("Eduardo", 22);
// console.log(edu.name);
// edu.logDetails();
// edu.setAge = 1000;
// console.log(edu);
var john = new CharAccount("John", 40, "johnmaster", 80);
// john.nickname = "ponzio";
console.log(john.level);
john.logDetails();
john.logCharDetails();
console.log(john.getLevel);
