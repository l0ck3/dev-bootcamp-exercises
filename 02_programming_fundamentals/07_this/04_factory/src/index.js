const { createHumans } = require("./humanFactory");

const humans = createHumans([{ lastName: "toto" }, { genre: "female" }]);

console.log(humans);
