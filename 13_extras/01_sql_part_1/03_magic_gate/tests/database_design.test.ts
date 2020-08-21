import * as fs from "fs";
import * as path from "path";

import { parseString } from "xml2js";

const openFileMemory = (): Promise<string> => {
  return new Promise((resolve) => {
    fs.readFile(
      path.join(__dirname, "../src/data/memory.xml"),
      "utf-8",
      (err, data) => {
        if (err) throw err;
        resolve(data);
      }
    );
  });
};

const openFileTictactoe = (): Promise<string> => {
  return new Promise((resolve) => {
    fs.readFile(
      path.join(__dirname, "../src/data/tictactoe.xml"),
      "utf-8",
      (err, data) => {
        if (err) throw err;
        resolve(data);
      }
    );
  });
};

const getJson = (xml: string): Promise<Parsed> => {
  return new Promise((resolve) => {
    parseString(xml, function (err, result) {
      resolve(result);
    });
  });
};

type Table = {
  $: {
    name: string;
  };
  row: object[];
};
type Parsed = {
  sql: {
    table: Table[];
  };
};

describe("Testing Memory Game xml file :", () => {
  let tablesVal: any;
  beforeAll(() => {
    return new Promise((resolve, reject) => {
      openFileMemory()
        .then((data) => data)
        .then((stringifiedXml) => getJson(stringifiedXml))
        .then((parsedXml: Parsed) => {
          const {
            sql: { table: tables },
          } = parsedXml;
          tablesVal = tables;
          resolve();
        });
    });
  });

  test("The diagram should be composed of 2 tables", () => {
    expect(tablesVal.length).toBe(2);
  });

  test("Testing name of first table", () => {
    expect(tablesVal[0].$.name).toBe("game_state");
  });

  test("game_state table should have 4 rows", () => {
    expect(tablesVal[0].row.length).toBe(4);
  });

  test("The names of each column of game_state table are correct", () => {
    expect(tablesVal[0].row[0].$.name).toBe("id");
    expect(tablesVal[0].row[1].$.name).toBe("position");
    expect(tablesVal[0].row[2].$.name).toBe("discovered");
    expect(tablesVal[0].row[3].$.name).toBe("player_id");
  });

  test("The types of each column of game_state table are correct", () => {
    expect(tablesVal[0].row[0].datatype[0]).toBe("INTEGER");
    expect(tablesVal[0].row[1].datatype[0]).toBe("VARCHAR");
    expect(tablesVal[0].row[2].datatype[0]).toBe("BOOLEAN");
    expect(tablesVal[0].row[3].datatype[0]).toBe("INTEGER");
  });

  test("The foreign key is properly set between both tables", () => {
    expect(tablesVal[0].row[3].relation[0].$.table).toBe("players");
    expect(tablesVal[0].row[3].relation[0].$.row).toBe("id");
  });

  test("Testing name of second table", () => {
    expect(tablesVal[1].$.name).toBe("players");
  });

  test("players table should have 3 rows", () => {
    expect(tablesVal[1].row.length).toBe(3);
  });

  test("The names of each column of players table are correct", () => {
    expect(tablesVal[1].row[0].$.name).toBe("id");
    expect(tablesVal[1].row[1].$.name).toBe("number_of_pairs");
    expect(tablesVal[1].row[2].$.name).toBe("turn");
  });

  test("The types of each column of players table are correct", () => {
    expect(tablesVal[1].row[0].datatype[0]).toBe("INTEGER");
    expect(tablesVal[1].row[1].datatype[0]).toBe("INTEGER");
    expect(tablesVal[1].row[2].datatype[0]).toBe("BOOLEAN");
  });
});

describe("Testing Tictactoe xml file :", () => {
  let tablesVal: any;
  beforeAll(() => {
    return new Promise((resolve, reject) => {
      openFileTictactoe()
        .then((data) => data)
        .then((stringifiedXml) => getJson(stringifiedXml))
        .then((parsedXml: Parsed) => {
          const {
            sql: { table: tables },
          } = parsedXml;
          tablesVal = tables;
          resolve();
        });
    });
  });

  test("The diagram should be composed of 3 tables", () => {
    expect(tablesVal.length).toBe(3);
  });

  test("Testing name of first table", () => {
    expect(tablesVal[0].$.name).toBe("game_state");
  });

  test("game_state table should have 3 rows", () => {
    expect(tablesVal[0].row.length).toBe(3);
  });

  test("The names of each column of game_state table are correct", () => {
    expect(tablesVal[0].row[0].$.name).toBe("id");
    expect(tablesVal[0].row[1].$.name).toBe("position");
    expect(tablesVal[0].row[2].$.name).toBe("current_player_id");
  });

  test("The types of each column of game_state table are correct", () => {
    expect(tablesVal[0].row[0].datatype[0]).toBe("INTEGER");
    expect(tablesVal[0].row[1].datatype[0]).toBe("VARCHAR");
    expect(tablesVal[0].row[2].datatype[0]).toBe("INTEGER");
  });

  test("The foreign key is properly set between both tables", () => {
    expect(tablesVal[0].row[2].relation[0].$.table).toBe("current_players");
    expect(tablesVal[0].row[2].relation[0].$.row).toBe("id");
  });

  test("Testing name of second table", () => {
    expect(tablesVal[1].$.name).toBe("current_players");
  });

  test("players table should have 3 rows", () => {
    expect(tablesVal[1].row.length).toBe(3);
  });

  test("The names of each column of players table are correct", () => {
    expect(tablesVal[1].row[0].$.name).toBe("id");
    expect(tablesVal[1].row[1].$.name).toBe("player_id");
    expect(tablesVal[1].row[2].$.name).toBe("turn");
  });

  test("The types of each column of players table are correct", () => {
    expect(tablesVal[1].row[0].datatype[0]).toBe("INTEGER");
    expect(tablesVal[1].row[1].datatype[0]).toBe("INTEGER");
    expect(tablesVal[1].row[2].datatype[0]).toBe("BOOLEAN");
  });

  test("The foreign key is properly set between both tables", () => {
    expect(tablesVal[1].row[1].relation[0].$.table).toBe("players");
    expect(tablesVal[1].row[1].relation[0].$.row).toBe("id");
  });

  test("Testing name of third table", () => {
    expect(tablesVal[2].$.name).toBe("players");
  });

  test("players table should have 5 rows", () => {
    expect(tablesVal[2].row.length).toBe(5);
  });

  test("The names of each column of players table are correct", () => {
    expect(tablesVal[2].row[0].$.name).toBe("id");
    expect(tablesVal[2].row[1].$.name).toBe("total_victories");
    expect(tablesVal[2].row[2].$.name).toBe("total_losses");
    expect(tablesVal[2].row[3].$.name).toBe("total_draws");
    expect(tablesVal[2].row[4].$.name).toBe("total_games");
  });

  test("The types of each column of players table are correct", () => {
    expect(tablesVal[2].row[0].datatype[0]).toBe("INTEGER");
    expect(tablesVal[2].row[1].datatype[0]).toBe("INTEGER");
    expect(tablesVal[2].row[2].datatype[0]).toBe("INTEGER");
    expect(tablesVal[2].row[3].datatype[0]).toBe("INTEGER");
    expect(tablesVal[2].row[4].datatype[0]).toBe("INTEGER");
  });
});
