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
        path.join(__dirname, "./data/my_shop.db"),
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
      "SELECT client_name FROM purchases ORDER BY purchase_date ASC LIMIT 3;";
    const rows = await query(db, sql);
    const rows_ans = await query(db, queries.query1);

    expect(rows_ans.length).toBe(3);
    expect(rows_ans[0]).toEqual(rows[0]);
    expect(rows_ans).toEqual(rows);
  });

  test("Testing query2 : ", async () => {
    let sql =
      "SELECT client_name, purchase_date FROM purchases WHERE purchase_date <= '2017-12';";
    const rows = await query(db, sql);
    const rows_ans = await query(db, queries.query2);

    expect(rows_ans.length).toBeGreaterThan(0);
    expect(rows_ans.length).toBe(rows.length);
    expect(rows_ans[0]).toEqual(rows[0]);
    expect(rows_ans).toEqual(rows);
  });

  test("Testing query3 : ", async () => {
    let sql =
      "SELECT client_name, purchase_date FROM purchases WHERE purchase_date <= '2017-12'AND number_of_items > 3;";

    const rows = await query(db, sql);
    const rows_ans = await query(db, queries.query3);

    expect(rows_ans.length).toBeGreaterThan(0);
    expect(rows_ans.length).toBe(rows.length);
    expect(rows_ans[0]).toEqual(rows[0]);
    expect(rows_ans).toEqual(rows);
  });

  test("Testing query4 : ", async () => {
    let sql =
      "SELECT client_name FROM purchases ORDER BY euros_spent DESC LIMIT 1;";

    const rows = await query(db, sql);
    const rows_ans = await query(db, queries.query4);

    expect(rows_ans.length).toBe(1);
    expect(rows_ans).toEqual(rows);
  });

  test("Testing query5 : ", async () => {
    let sql =
      "SELECT SUM(euros_spent) FROM purchases WHERE purchase_date >= '2017-06-21' AND purchase_date <= '2017-09-23';";

    const rows = await query(db, sql);
    const rows_ans = await query(db, queries.query5);

    expect(rows_ans.length).toBe(1);
    expect(rows_ans).toEqual(rows);
  });
});
