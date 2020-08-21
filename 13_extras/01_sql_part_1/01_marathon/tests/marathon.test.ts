import * as queries from "../src/index";
import * as path from "path";
import { Database } from "sqlite3";
const sqlite3 = require("sqlite3").verbose();

function query(db: any, query: string): Promise<object[]> {
  return new Promise((resolve, reject) => {
    db.all(query, [], (err: any, rows: any) => {
      if (err) {
        return reject(err);
      }
      resolve(rows);
    });
  });
}

describe("Sequentially testing queries :", () => {
  let db: Database;

  beforeAll(() => {
    return new Promise((resolve, reject) => {
      db = new sqlite3.Database(
        path.join(__dirname, "./data/marathon.db"),
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

  test("Testing query1 : ", async () => {
    let sql =
      "SELECT * FROM races WHERE race_name = 'New York City Marathon - Women' AND started_on = '2017-11-05';";
    const rows = await query(db, sql);
    const rows_ans = await query(db, sql);

    expect(rows_ans.length).toBeGreaterThan(0);
    expect(rows_ans.length).toBe(rows.length);
    expect(rows_ans[0]).toEqual(rows[0]);
    expect(rows_ans).toEqual(rows);
  });

  test("Testing query2 : ", async () => {
    let sql =
      "SELECT name FROM races WHERE race_name = 'New York City Marathon - Men' ORDER BY position ASC LIMIT 3;";
    const rows = await query(db, sql);
    const rows_ans = await query(db, queries.query2);

    expect(rows_ans.length).toBeGreaterThan(0);
    expect(rows_ans.length).toBe(rows.length);
    expect(rows_ans[0]).toEqual(rows[0]);
    expect(rows_ans).toEqual(rows);
  });

  test("Testing query3 : ", async () => {
    let sql =
      "SELECT * FROM races WHERE (overlap_time < ((2 * 60 * 60) + (15 * 60)) AND bib < '100') OR (overlap_time < ((2 * 60 * 60) + (30 * 60)) AND bib > 100) ORDER BY bib, overlap_time;";

    const rows = await query(db, sql);
    const rows_ans = await query(db, queries.query3);

    expect(rows_ans.length).toBe(0);
    expect(rows_ans.length).toBe(rows.length);
  });

  test("Testing query4 : ", async () => {
    let sql =
      "SELECT bib, name, position FROM races WHERE overlap_time < (SELECT overlap_time FROM races WHERE name = 'Koen Naert') ORDER BY overlap_time ASC;";

    const rows = await query(db, sql);
    const rows_ans = await query(db, queries.query4);

    expect(rows_ans.length).toBeGreaterThan(0);
    expect(rows_ans.length).toBe(rows.length);
    expect(rows_ans[0]).toEqual(rows[0]);
    expect(rows_ans).toEqual(rows);
  });
});
