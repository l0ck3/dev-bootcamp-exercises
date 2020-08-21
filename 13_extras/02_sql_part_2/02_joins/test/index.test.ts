import * as queries from "../src/index";
import * as path from "path";
import { Database } from "sqlite3";
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

  test("Testing query1 : ", async () => {
    let sql =
      "SELECT E.first_name, E.last_name, E.department_id, D.name FROM employee E JOIN department D ON E.department_id = D.id;";
    const rows = await query(db, sql);
    const rows_ans = await query(db, queries.query1);

    expect(rows_ans.length).toBeGreaterThan(0);
    expect(rows_ans.length).toBe(rows.length);
    expect(rows_ans[0]).toEqual(rows[0]);
    expect(rows_ans).toEqual(rows);
  });

  test("Testing query2 : ", async () => {
    let sql =
      "SELECT E.first_name,E.last_name, D.name, L.city, L.state_province FROM employee E JOIN department D ON E.department_id = D.id JOIN location L ON D.location_id = L.id;";
    const rows = await query(db, sql);
    const rows_ans = await query(db, queries.query2);

    expect(rows_ans.length).toBeGreaterThan(0);
    expect(rows_ans.length).toBe(rows.length);
    expect(rows_ans[0]).toEqual(rows[0]);
    expect(rows_ans).toEqual(rows);
  });

  test("Testing query3 : ", async () => {
    let sql =
      "SELECT E.first_name, E.last_name, E.salary, J.level FROM employee E JOIN job_grade J ON E.salary BETWEEN J.lowest_salary AND J.highest_salary;";
    const rows = await query(db, sql);
    const rows_ans = await query(db, queries.query3);

    expect(rows_ans.length).toBeGreaterThan(0);
    expect(rows_ans.length).toBe(rows.length);
    expect(rows_ans[0]).toEqual(rows[0]);
    expect(rows_ans).toEqual(rows);
  });

  test("Testing query4 : ", async () => {
    let sql =
      "SELECT E.first_name , E.last_name ,E.department_id ,  D.name FROM employee E JOIN department D ON E.department_id = D.id AND E.department_id IN (8 , 4) ORDER BY E.last_name;";
    const rows = await query(db, sql);
    const rows_ans = await query(db, queries.query4);

    expect(rows_ans.length).toBeGreaterThan(0);
    expect(rows_ans.length).toBe(rows.length);
    expect(rows_ans[0]).toEqual(rows[0]);
    expect(rows_ans).toEqual(rows);
  });

  test("Testing query5 : ", async () => {
    let sql =
      "SELECT E.first_name,E.last_name, D.name, L.city, L.state_province FROM employee E JOIN department D ON E.department_id = D.id JOIN location L ON D.location_id = L.id WHERE E.first_name LIKE  '%z%';";
    const rows = await query(db, sql);
    const rows_ans = await query(db, queries.query5);

    expect(rows_ans.length).toBeGreaterThan(0);
    expect(rows_ans.length).toBe(rows.length);
    expect(rows_ans[0]).toEqual(rows[0]);
    expect(rows_ans).toEqual(rows);
  });

  test("Testing query6 : ", async () => {
    let sql =
      "SELECT E.first_name, E.last_name, E.salary FROM employee E JOIN employee S ON E.salary < S.salary AND S.id = 83;";
    const rows = await query(db, sql);
    const rows_ans = await query(db, queries.query6);

    expect(rows_ans.length).toBeGreaterThan(0);
    expect(rows_ans.length).toBe(rows.length);
    expect(rows_ans[0]).toEqual(rows[0]);
    expect(rows_ans).toEqual(rows);
  });

  test("Testing query7 : ", async () => {
    let sql =
      "SELECT E.first_name AS 'Employee Name', M.first_name AS 'Manager' FROM employee E JOIN employee M ON E.manager_id = M.id;";
    const rows = await query(db, sql);
    const rows_ans = await query(db, queries.query7);

    expect(rows_ans.length).toBeGreaterThan(0);
    expect(rows_ans.length).toBe(rows.length);
    expect(rows_ans[0]).toEqual(rows[0]);
    expect(rows_ans).toEqual(rows);
  });

  test("Testing query8 : ", async () => {
    let sql =
      "SELECT D.name , L.city , L.state_province FROM  department D JOIN location L ON  D.location_id = L.id;";
    const rows = await query(db, sql);
    const rows_ans = await query(db, queries.query8);

    expect(rows_ans.length).toBeGreaterThan(0);
    expect(rows_ans.length).toBe(rows.length);
    expect(rows_ans[0]).toEqual(rows[0]);
    expect(rows_ans).toEqual(rows);
  });

  test("Testing query9 : ", async () => {
    let sql =
      "SELECT E.first_name, E.last_name, E.department_id, D.name FROM employee E LEFT OUTER JOIN department D ON E.department_id = D.id;";
    const rows = await query(db, sql);
    const rows_ans = await query(db, queries.query9);

    expect(rows_ans.length).toBeGreaterThan(0);
    expect(rows_ans.length).toBe(rows.length);
    expect(rows_ans[0]).toEqual(rows[0]);
    expect(rows_ans).toEqual(rows);
  });

  test("Testing query10 : ", async () => {
    let sql =
      "SELECT E.first_name AS 'Employee Name',M.first_name AS 'Manager' FROM employee E LEFT OUTER JOIN employee M ON E.manager_id = M.id;";
    const rows = await query(db, sql);
    const rows_ans = await query(db, queries.query10);

    expect(rows_ans.length).toBeGreaterThan(0);
    expect(rows_ans.length).toBe(rows.length);
    expect(rows_ans[0]).toEqual(rows[0]);
    expect(rows_ans).toEqual(rows);
  });

  test("Testing query11 : ", async () => {
    let sql =
      "SELECT E.first_name , E.last_name , E.department_id FROM employee E JOIN employee S ON E.department_id = S.department_id AND S.last_name = 'Taylor';";
    const rows = await query(db, sql);
    const rows_ans = await query(db, queries.query11);

    expect(rows_ans.length).toBeGreaterThan(0);
    expect(rows_ans.length).toBe(rows.length);
    expect(rows_ans[0]).toEqual(rows[0]);
    expect(rows_ans).toEqual(rows);
  });

  test("Testing query12 : ", async () => {
    let sql =
      "SELECT title, name, first_name || ' ' || last_name AS Employee_name, start_date FROM job_history JOIN job USING (id) JOIN department USING (id) JOIN  employee USING (id) WHERE start_date>='1993-01-01' AND start_date<='1997-08-31';";
    const rows = await query(db, sql);
    const rows_ans = await query(db, queries.query12);

    expect(rows_ans.length).toBeGreaterThan(0);
    expect(rows_ans.length).toBe(rows.length);
    expect(rows_ans[0]).toEqual(rows[0]);
    expect(rows_ans).toEqual(rows);
  });

  test("Testing query13 : ", async () => {
    let sql =
      "SELECT title, first_name || ' ' || last_name AS Employee_name, max_salary-salary AS salary_difference FROM employee E LEFT JOIN job J ON J.id = E.job_id;";
    const rows = await query(db, sql);
    const rows_ans = await query(db, queries.query13);

    expect(rows_ans.length).toBeGreaterThan(0);
    expect(rows_ans.length).toBe(rows.length);
    expect(rows_ans[0]).toEqual(rows[0]);
    expect(rows_ans).toEqual(rows);
  });

  test("Testing query14 : ", async () => {
    let sql =
      "SELECT employee_id, title, end_date-start_date DAYS FROM job_history NATURAL JOIN job";
    const rows = await query(db, sql);
    const rows_ans = await query(db, queries.query14);

    expect(rows_ans.length).toBeGreaterThan(0);
    expect(rows_ans.length).toBe(rows.length);
    expect(rows_ans[0]).toEqual(rows[0]);
    expect(rows_ans).toEqual(rows);
  });
});
