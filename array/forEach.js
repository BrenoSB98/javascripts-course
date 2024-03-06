const teamsF1 = ["Mercedes", "RedBull", "Ferrari", "Racing Bulls", "Alpine"];

teamsF1.forEach((element, index) => console.log(`${index + 1}. ${element}`));

Array.prototype.forEach2 = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

teamsF1.forEach2((element, index) => console.log(`${index + 1}) ${element}`));
