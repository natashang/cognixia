/* Grouping with Aggregate functions */

select * from employee

-- single column grouping
select dept_code, count(*) AS "number of employees"
from employee 
group by dept_code

select dept_code, sum(salary) "Sum of Dept Employee Salaries"
from employee
group by dept_code

select dept_code, max(salary) "Highest Dept Salary"
from employee
group by dept_code

select dept_code, avg(salary) "Average Dept Salary"
from employee
group by dept_code


-- multiple column grouping
select dept_code, count(*) "total emp", age 
from employee 
group by dept_code, age
--where age  betweeen 20 and 40 -- desn't work

/*
	select job, count(*) totalemp, deptno from emp group by job, deptno

	select job, count(*) totalemp from emp group by job having count(*)>2

	select job, sum(salary)empsalary form emp group by job having sum(salary) > 1000
*/

-- don't think this is right
select dept_code, count(*) "total emp", sex, count(*) 
from employee
group by dept_code, sex

	select job, count(*) totalemp from emp group by job having count(*)>2
select dept_code, count(*) totalemp
from employee 
group by job