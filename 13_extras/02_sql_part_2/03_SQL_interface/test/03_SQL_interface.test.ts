import * as path from "path";
import { Database } from "sqlite3";
import { listEmployees } from "../src/index";
const sqlite3 = require("sqlite3").verbose();

function query(db: any, query: string): Promise<unknown[]> {
  return new Promise((resolve, reject) => {
    db.all(query, [], (err: any, rows: any) => {
      if (err) {
        return reject(err);
      }
      resolve(rows);
    });
  });
}

describe("Testing all Joins queries sequentially", () => {
  let db: Database;
  beforeAll(() => {
    return new Promise((resolve, reject) => {
      db = new sqlite3.Database(
        path.join(__dirname, "./data/human_ressources.db"),
        sqlite3.OPEN_READWRITE,
        (err: any) => {
          if (err) {
            console.error(err.message);
            return reject(err);
          } else {
            resolve();
            console.log("Connected to the HR database.");
          }
        }
      );
    });
  });

  // Example of a test with sqlite3

  // test("Testing query1 : ", async () => {
  //   let sql =
  //     "SELECT E.first_name, E.last_name, E.department_id, D.name FROM employee E JOIN department D ON E.department_id = D.id;";
  //   const rows = await query(db, sql);
  //   const rows_ans = await query(db, queries.query1);

  //   expect(rows_ans.length).toBeGreaterThan(0);
  //   expect(rows_ans.length).toBe(rows.length);
  //   expect(rows_ans[0]).toEqual(rows[0]);
  //   expect(rows_ans).toEqual(rows);
  // });

  // Fix test

  test("Fix test", () => {
    expect(listEmployees).not.toBe(undefined);
  });
});
