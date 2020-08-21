# Create database

1. **Create** a database named `human_resource`
2. **Create** the following _tables_ and the necessary _columns_

---

> **please look at the csv files on camp2 exercises**:

- **region**
  - id
  - name
- **country**
  - id
  - name
  - region_id
- **location**
  - id
  - street_address
  - postal_code
  - city
  - state
  - country_id
- **job**
  - id
  - title
  - min_salary
  - max_salary
- **job_grade**
  - id
  - level
  - lowest_salary
  - highest_salary
- **job_history**
  - id
  - employee_id
  - start_date
  - end_date
  - job_id
  - department_id
- **department**
  - id
  - name
  - manager_id
  - location_id
- **employee**
  - id
  - first_name
  - last_name
  - email
  - phone_number
  - hire_date
  - job_id
  - salary
  - manager_id
  - department_id

3. Import data from CSV files given in your exercise repository.

_**Note** : To import data from the **csv files**, you can use the `Import CSV...` option in the `File` menu in **TablePlus**_.

# Sorting And Filtering

## Write the following SQL queries:

1. Display the **full name** (first and last name), and **salary** for those _**employees who earn below 6000**_.

2. Display the **full name**, **department number** and **salary** for those _**employees who earn more than 8000**_.

   - 2n1. Same query as the previous one, but now concatenate the value from `first_name` and `last_name` column in a single value as `full_name`.

3. Display the **full name**, and **department number** for **_all employees whose last name is "McEwen"_**.

4. Display **all the information** for _**all employees without any department number**_.

5. Display **all the information** about _**the Marketing department**_.

6. Display the **full name**, **hire date**, **salary**, and **department number** for _**employees whose first name does not contain the letter M and order the result set in ascending department number**_.

7. Display **all the information** of employees whose

   - salary is in the _**range 8000 to 12000**_.
   - department number has the _**value 4, 12 or 7**_.
   - they have been _**hired before June 5th, 1987**_.

8. Display the **full name**, the **phone number** and **email** (separated by hyphens), and **salary**, for _**employees whose salary is within the range of 9000 and 17000**_.

9. Display the **full name**, and **salary** for those employees _**whose first name is ending with the letter "m"**_.

10. Display the **full name**, and **salary**, for _**all employees whose salary is out of the range 7000 and 15000 and make the result set in ascending order by the full name**_.

11. Display the **full name**, **job id** and **date of hire** for those employees _**who were hired during November 5th, 2007 and July 5th, 2009**_.

12. Display the **full name** and **department number** for those employees _**who works either in department 7 or 9**_.

13. Display the **full name**, **salary**, and **manager number** for those employees _**who are working under a manager**_.

14. Display **all the information** from the _Employees table_ for those employees _**who were hired before June 21st, 2002**_.

---

### Bonus Exercises:

1. Display the **full name**, **email**, **salary** and **manager ID**, for those employees _**whose managers are holding the ID 4, 21 or 46**_.

2. Display **all the information** for _**all employees who have the letters D, S, or N in their first name**_ and also arrange the result in _**descending order by salary**_.

3. Display the **full name**, **hire date**, **email** and **telephone number separated by '-'**, and **salary** for those employees who earn the _**salary above 11000**_ or _**the seventh digit in their phone number equals 3**_ and make the result set in _**descending order by the first name**_.

4. Display the **full name** and **department number** for those employees _**who hold a letter "s" as a 3rd character in their first name**_.

5. Display the **employee ID**, **first name**, **job ID**, and **department number** for those employees **who are working except the departments 3, 5 and 8**.

6. Display the **ID** for those employees who did **two or more jobs in the past**.

7. Display **job ID**, **number of employees**, the **sum of salary**, and the difference between the **highest salary and the lowest salary** for a job.

8. Display **job ID** for those jobs that were done _**by two or more for more than 300 days**_.

9. Display the **country ID** and **number of cities** in that country we have.

10. Display the **manager ID** and the _**number of employees managed by the manager**_.

11. Display _**the details of jobs in descending sequence on the job title**_.

12. Display the **full name** and **date of joining** of the employees who are either **Sales Representative** or **Sales Man**.

13. Display _**those departments where any manager is managing 4 or more employees**_.

14. Display the **employee ID** and the _**date on which he ended his previous job**_.

15. Display the **job ID** for those jobs _**whose average salary is above 8000**_.

16. Display **job title**, the **difference between the minimum and maximum salaries** for those jobs with _**max salary within the range 12000 to 18000**_.
