/*
	Column Constraints
*/

--	1.	Drop the dept and employee tables.
DROP TABLE DEPARTMENT
DROP TABLE EMPLOYEE

-- 2.	Re-create the dept table structure, with the following additional constraint:
-- none of the fields can be null.
--		Make this a named column constraint. Write this command in a text file and execute through that.
	DROP TABLE DEPARTMENT
	CREATE TABLE DEPARTMENT (
		DEPT_CODE VARCHAR (4) NOT NULL,
		DEPT_NAME VARCHAR (20) NOT NULL
	);

	/*
-- 3.	Re-create the employee table structure, with the following additional constraints:
		emp_code, emp_name and dept_code fields cannot be null,
		sex should be 'M' or 'F' only,
		age should not be less than 18 or more than 60.
		Make these named column constraints. Write this command in a text file and execute through that.
		*/
		CREATE TABLE EMPLOYEE (
			EMP_CODE FLOAT NOT NULL,
			EMP_NAME VARCHAR (25) not null,
			DEPT_CODE VARCHAR (4) NOT NULL,
			SEX VARCHAR (1) CONSTRAINT SEX_CNSTRNT CHECK (SEX IN ('M', 'F')),
			AGE INT CONSTRAINT AGE_CNSTRNT CHECK (18 <= AGE AND AGE <= 60)
		);
	
	/*
-- 4.	Re-create the prodgrp table structure, with the following as named column constraint:
		gr_code should not be null.
		Write this command in a text file and execute it.
		*/
		CREATE TABLE PRODGRP(
			GR_CODE FLOAT NOT NULL
		);	
	
	/*
--	5.	Re-create the product table structure, with the following as named column constraints:
		prod_code, prod_name, gr_code should not be null,
		target, direct_sales, indirect_sales should not be less than zero,
		profit_margin should be greater than zero.
		Write this command in a text file and execute it.
		*/
		DROP TABLE PRODUCT
	CREATE TABLE PRODUCT (
		PROD_CODE FLOAT NOT NULL,
		PROD_NAME VARCHAR (40) NOT NULL,
		GR_CODE FLOAT NOT NULL,
		TARGET FLOAT CONSTRAINT T_CNSTRNT CHECK (TARGET >= 0),
		DIRECT_SALES FLOAT CONSTRAINT DS_CNSTRNT CHECK (DIRECT_SALES >= 0),
		INDIRECT_SALES FLOAT CONSTRAINT IS_CNSTRNT CHECK (INDIRECT_SALES >= 0),
		PROFIT_MARGIN FLOAT CONSTRAINT PM_CNSTRNT CHECK (PROFIT_MARGIN >= 0)
	);
	
--	6.	Drop all these constraints with the ALTER TABLE command.
	ALTER TABLE PRODUCT DROP "T_CNSTRNT"
	ALTER TABLE PRODUCT DROP "DS_CNSTRNT"
	ALTER TABLE PRODUCT DROP "IS_CNSTRNT"
	ALTER TABLE PRODUCT DROP "PM_CNSTRNT"

	ALTER TABLE EMPLOYEE DROP "SEX_CNSTRNT"
	ALTER TABLE EMPLOYEE DROP "AGE_CNSTRNT"
	
--	7.	Restore the original dept and employee tables, by executing the TRAINING.SQL text file.
		DROP TABLE EMPLOYEE;
	
	/*
--	8.	Add the above-mentioned constraints to the existing dept, employee, prodgrup and product tables with the 
				  ALTER TABLE command.
*/	
	
	ALTER TABLE EMPLOYEE ADD CONSTRAINT S_CNSTRNT CHECK(SEX IN ('M', 'F'))
	ALTER TABLE EMPLOYEE ADD CONSTRAINT A_CNSTRNT CHECK (18 <= AGE AND AGE <= 60)

	ALTER TABLE PRODUCT ADD CONSTRAINT T_CNSTRNT CHECK (TARGET >= 0)
	ALTER TABLE PRODUCT ADD CONSTRAINT DS_CNSTRNT CHECK (DIRECT_SALES >= 0)
	ALTER TABLE PRODUCT ADD CONSTRAINT IS_CNSTRNT CHECK (INDIRECT_SALES >= 0)
	ALTER TABLE PRODUCT ADD CONSTRAINT PM_CNSTRNT CHECK (PROFIT_MARGIN >= 0)

	/*
-- 9.	Modify the text file for creating the dept table, to introduce the following as a named table constraint:
		dept_code should be the primary key.
		Execute the text file.
		*/
	ALTER TABLE DEPARTMENT ADD CONSTRAINT MyPrimaryKey PRIMARY KEY(DEPT_CODE)

	/*
-- 10.	Modify the text file for creating the employee table, to introduce the following as named table constraints:
		emp_code should be the primary key,
		dept_code should be found in the dept table.
		Execute the text file.
		*/
		-------- drop table add foreign ref in training.sql
		ALTER TABLE EMPLOYEE ADD CONSTRAINT MyPrimaryEmpKey PRIMARY KEY (EMP_CODE)
		--ALTER TABLE EMPLOYEE ADD CONSTRAINT DEPT_CODE VARCHAR (4) FOREIGN KEY REFERENCES DEPT(DEPT_CODE)

		/*
-- 11.	Modify the text file for creating the prodgrp table, to introduce the following as named table constraints:
		gr_code should be the primary key.
		Execute the text file.
		*/
		ALTER TABLE PRODGRP ADD CONSTRAINT MyPrimaryPGrpKey PRIMARY KEY (GR_CODE)

		/*
-- 12.	Modify the text file for creating the product table, to introduce the following as named table constraints:
		prod_code should be the primary key,
		gr_code should be found in the prodgrup table.
		Execute the text file.
		*/
		ALTER TABLE PRODUCT ADD CONSTRAINT MyPrimaryProdKey PRIMARY KEY (PROD_CODE)