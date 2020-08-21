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

  test("Testing query1 : ", async () => {
    let sql =
      "SELECT first_name, last_name, salary FROM employee WHERE salary < 6000;";
    const rows = await query(db, sql);
    const rows_ans = await query(db, queries.query1);

    expect(rows_ans.length).toBeGreaterThan(0);
    expect(rows_ans.length).toBe(rows.length);
    expect(rows_ans[0]).toEqual(rows[0]);
    expect(rows_ans).toEqual(rows);
  });

  test("Testing query2 : ", async () => {
    let sql =
      "SELECT first_name,last_name, department_id, salary FROM employee WHERE salary > 8000;";
    const rows = await query(db, sql);
    const rows_ans = await query(db, queries.query2);

    expect(rows_ans.length).toBeGreaterThan(0);
    expect(rows_ans.length).toBe(rows.length);
    expect(rows_ans[0]).toEqual(rows[0]);
    expect(rows_ans).toEqual(rows);
  });

  test("Testing query2n1 : ", async () => {
    let sql =
      "SELECT first_name || ' ' || last_name as full_name, department_id, salary FROM employee WHERE salary > 8000";
    const rows = await query(db, sql);
    const rows_ans = await query(db, queries.query2n1);

    expect(rows_ans.length).toBeGreaterThan(0);
    expect(rows_ans.length).toBe(rows.length);
    expect(rows_ans[0]).toEqual(rows[0]);
    expect(rows_ans).toEqual(rows);
  });

  test("Testing query3 : ", async () => {
    let sql =
      "SELECT first_name, last_name, department_id FROM employee WHERE last_name = 'McEwen';";
    const rows = await query(db, sql);
    const rows_ans = await query(db, queries.query3);

    expect(rows_ans.length).toBeGreaterThan(0);
    expect(rows_ans.length).toBe(rows.length);
    expect(rows_ans[0]).toEqual(rows[0]);
    expect(rows_ans).toEqual(rows);
  });

  test("Testing query4 : ", async () => {
    let sql = "SELECT * FROM employee WHERE department_id IS NULL;";
    const rows = await query(db, sql);
    const rows_ans = await query(db, queries.query4);

    expect(rows_ans.length).toBe(0);
    expect(rows_ans.length).toBe(rows.length);
  });

  test("Testing query5 : ", async () => {
    let sql = "SELECT * FROM  department WHERE name = 'Marketing';";
    const rows = await query(db, sql);
    const rows_ans = await query(db, queries.query5);

    expect(rows_ans.length).toBeGreaterThan(0);
    expect(rows_ans.length).toBe(rows.length);
    expect(rows_ans[0]).toEqual(rows[0]);
    expect(rows_ans).toEqual(rows);
  });

  test("Testing query6 : ", async () => {
    let sql =
      "SELECT first_name, last_name, hire_date, salary,  department_id FROM employee WHERE first_name NOT LIKE '%M%' ORDER BY department_id;";
    const rows = await query(db, sql);
    const rows_ans = await query(db, queries.query6);

    expect(rows_ans.length).toBeGreaterThan(0);
    expect(rows_ans.length).toBe(rows.length);
    expect(rows_ans[0]).toEqual(rows[0]);
    expect(rows_ans).toEqual(rows);
  });

  test("Testing query7 : ", async () => {
    let sql =
      "SELECT * FROM employee WHERE salary BETWEEN 8000 AND 12000 OR department_id NOT IN (4 , 12 , 7) AND   hire_date < '1987-06-05'";
    const rows = await query(db, sql);
    const rows_ans = await query(db, queries.query7);

    expect(rows_ans.length).toBeGreaterThan(0);
    expect(rows_ans.length).toBe(rows.length);
    expect(rows_ans[0]).toEqual(rows[0]);
    expect(rows_ans).toEqual(rows);
  });

  test("Testing query8 : ", async () => {
    let sql =
      "SELECT first_name, last_name, phone_number ||' - '|| email AS Contact_Details, salary AS Remuneration FROM employee WHERE salary BETWEEN 9000 AND 17000;";
    const rows = await query(db, sql);
    const rows_ans = await query(db, queries.query8);

    expect(rows_ans.length).toBeGreaterThan(0);
    expect(rows_ans.length).toBe(rows.length);
    expect(rows_ans[0]).toEqual(rows[0]);
    expect(rows_ans).toEqual(rows);
  });

  test("Testing query9 : ", async () => {
    let sql =
      "SELECT first_name, last_name, salary FROM employee WHERE first_name LIKE '%m'";
    const rows = await query(db, sql);
    const rows_ans = await query(db, queries.query9);

    expect(rows_ans.length).toBeGreaterThan(0);
    expect(rows_ans.length).toBe(rows.length);
    expect(rows_ans[0]).toEqual(rows[0]);
    expect(rows_ans).toEqual(rows);
  });

  test("Testing query10 : ", async () => {
    let sql =
      "SELECT first_name, last_name, salary FROM  employee WHERE salary NOT BETWEEN 7000 AND 15000 ORDER BY first_name || ' ' || last_name";
    const rows = await query(db, sql);
    const rows_ans = await query(db, queries.query10);

    expect(rows_ans.length).toBeGreaterThan(0);
    expect(rows_ans.length).toBe(rows.length);
    expect(rows_ans[0]).toEqual(rows[0]);
    expect(rows_ans).toEqual(rows);
  });

  test("Testing query11 : ", async () => {
    let sql =
      "SELECT first_name, last_name, job_id, hire_date FROM employee WHERE hire_date BETWEEN '2007-11-05' AND '2009-07-05'";
    const rows = await query(db, sql);
    const rows_ans = await query(db, queries.query11);

    expect(rows_ans.length).toBeGreaterThan(0);
    expect(rows_ans.length).toBe(rows.length);
    expect(rows_ans[0]).toEqual(rows[0]);
    expect(rows_ans).toEqual(rows);
  });

  test("Testing query12 : ", async () => {
    let sql =
      "SELECT first_name, last_name, department_id FROM employee WHERE department_id = 7 OR department_id = 9";
    const rows = await query(db, sql);
    const rows_ans = await query(db, queries.query12);

    expect(rows_ans.length).toBeGreaterThan(0);
    expect(rows_ans.length).toBe(rows.length);
    expect(rows_ans[0]).toEqual(rows[0]);
    expect(rows_ans).toEqual(rows);
  });

  test("Testing query13 : ", async () => {
    let sql =
      "SELECT first_name, last_name, salary, manager_id FROM employee WHERE manager_id IS NOT NULL";
    const rows = await query(db, sql);
    const rows_ans = await query(db, queries.query13);

    expect(rows_ans.length).toBeGreaterThan(0);
    expect(rows_ans.length).toBe(rows.length);
    expect(rows_ans[0]).toEqual(rows[0]);
    expect(rows_ans).toEqual(rows);
  });

  test("Testing query14 : ", async () => {
    let sql = "SELECT * FROM employee WHERE hire_date < '2002-06-21'";
    const rows = await query(db, sql);
    const rows_ans = await query(db, queries.query14);

    expect(rows_ans.length).toBeGreaterThan(0);
    expect(rows_ans.length).toBe(rows.length);
    expect(rows_ans[0]).toEqual(rows[0]);
    expect(rows_ans).toEqual(rows);
  });
});
