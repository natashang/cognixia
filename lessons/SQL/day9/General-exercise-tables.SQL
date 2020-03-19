--***********************************************************
--File Name: sql_plsql_tables.sql
--***********************************************************
--Creates the tables and inserts records for sql excercise
--***********************************************************

SET TERMOUT OFF

--***********************************************************
--Table Name: department
--***********************************************************

drop table department cascade constraints;

create table department (
	dept_code varchar (4),
	dept_name varchar (20) not null /*,
	constraint dept_pk primary key (dept_code)*/
);

insert into department values ('MKTG', 'Marketing');
insert into department values ('GEN', 'General Management');
insert into department values ('FIN', 'Finance');
insert into department values ('SOFT', 'Software');
insert into department values ('TRNG', 'Training');
insert into department values ('HRD', 'Human Resources Mgmt');
insert into department values ('COMM', 'Commercial');
insert into department values ('SECY', 'Secretarial');
insert into department values ('LEGL', 'Legal');

--***********************************************************
--Table Name: employee
--***********************************************************

drop table employee cascade constraints;

create table employee (
	emp_code float not null,
	emp_name varchar (25) not null,
	dept_code varchar (4) FOREIGN KEY REFERENCES DEPARTMENT(DEPT_CODE),
	grade varchar (2),
	age float,
	date_join date,
	sex varchar (1),
	salary float,
	married varchar (1),
	reports_to float /*,
	constraint employee_pk primary key (emp_code),
	constraint employee_fk01 foreign key (dept_code) references
		department (dept_code)*/
);

insert into employee values (1, 'Rajiv Jain', 'GEN', 'M1', 35, 
	'01-jan-95', 'M', 16000, 'Y', 0);
insert into employee values (2, 'Ashit Kothari', 'SOFT', 'M3', 27, 
	'01-mar-95', 'M', 6000, 'N', 1);
insert into employee values (3, 'Bimal Mehta', 'SECY', 'S2', 39, 
	'24-jul-96', 'M', 4800, 'Y', 1);
insert into employee values (4, 'Deepak Deo', 'SOFT', 'E2', 39, 
	'11-aug-82', 'M', 8000, 'Y', 2);
insert into employee values (5, 'V V Nath', 'SOFT', 'E2', 49, 
	'03-mar-82', 'M', 8000, 'N', 2);
insert into employee values (6, 'Jayesh Shah', 'SOFT', 'S6', 26,
	'05-NOV-93', 'M', 5500, 'N', 5);
insert into employee values (7, 'Rama Kini', 'SOFT', 'S5', 30, 
	'24-dec-94', 'F', 4600, 'Y', 5);
insert into employee values (8, 'Anay Kamat', 'SOFT', 'S5', 33, 
	'12-jan-90', 'M', 5200, 'Y', 5);
insert into employee values (9, 'Gangadhar Kini', 'SOFT', 'M2', 39,
	'11-jan-91', 'M', 8200, 'Y', 1);
insert into employee values (10, 'Sudha Ganesan', 'MKTG', 'M2', 32,
	'01-jan-96', 'F', 12500, 'Y', 1);
insert into employee values (11, 'R Srinivasan', 'MKTG', 'M4', 29, 
	'01-may-93', 'M', 4900, 'N', 10);
insert into employee values (12, 'S Kannan', 'MKTG', 'E3', 35,
	'01-feb-88', 'M', 6400, 'Y', 11);
insert into employee values (13, 'Neeta Gopinath', 'MKTG', 'M4', 28,
	'01-feb-97', 'F', 5400, 'Y', 10);
insert into employee values (14, 'Manorama Gupta', 'MKTG', 'M5', 27,
	'01-feb-97', 'F', 3100, 'N', 10);
insert into employee values (15, 'Udai Kotecha', 'MKTG', 'M5', 39,
	'01-oct-84', 'M', 6200, 'Y', 10);
insert into employee values (16, 'Anuradha Gadkari', 'FIN', 'M2', 40,
	'01-aug-89', 'F', 10000, 'Y', 1);
insert into employee values (17, 'Santosh Khot', 'FIN', 'M5', 32,
	'01-dec-94', 'M', 3800, 'Y', 16);
insert into employee values (18, 'Ragini Mazumdar', 'FIN', 'M5', 25,
	'01-nov-96', 'F', 3600, 'N', 16);
insert into employee values (19, 'Shivanand Joshi', 'HRD', 'M2', 42,
	'01-oct-92', 'M', 11500, 'Y', 1);
insert into employee values (20, 'Sanjeev Achar', 'HRD', 'S3', 23, 
	'01-may-97', 'M', 2400, 'N', 19);
insert into employee values (21, 'Neerja Girdhar', 'HRD', 'E2', 24,
	'01-mar-96', 'F', 4200, 'N', 19);
insert into employee values (22, 'Madhusoodan Adiga', 'COMM', 'M4', 36,
	'01-may-91', 'M', 6000, 'Y', 2);

--***********************************************************
--Table Name: product
--***********************************************************

drop table product cascade constraints;

create table product (
	prod_code float,
	prod_name varchar (40),
	prodgr_code float,
	sale_price float,
	target float,
	direct_sales float,
	indirect_sales float,
	profit_margin float /*,
	constraint product_pk primary key (prod_code),
	constraint product_fk01 foreign key 
		(prodgr_code) references prodgrp (prodgr_code)*/
);

insert into product values (1, 'Dharamsala Tea', 
	1, 36, 2000, 250, 750, 12.50);
insert into product values (2, 'Tibetan Barley Beer',
	1, 62, 1500, 460, 570, 11.25);
insert into product values (3, 'Licorice Syrup',
	2, 89, 1200, 800, 600, 9.00);
insert into product values (4, 'Canjun Seasoning',
	2, 40, 500, 100, 350, 20.00);
insert into product values (5, 'Gumbo Mix',
	3, 120, 600, 300, 400, 15.25);
insert into product values (6, 'Boysenberry Spread', 
	2, 25, 1500, 150, 260, 10.50);
insert into product values (7, 'Organic Dried Pears',
	7, 60, 4000, 1200, 2800, 12.25);
insert into product values (8, 'Cranberry Sauce',
	2, 120, 500, 300, 240, 9.25);
insert into product values (9, 'Kobe Beef',
	6, 96, 2000, 1200, 800, 10.00);
insert into product values (10, 'Cabrales Cheese', 
	4, 210, 300, 170, 150, 8.30);
insert into product values (12, 'La Pastora Cheese',
	4, 230, 200, 120, 160, 5.25);
insert into product values (13, 'Bean Curd',
	7, 25, 1600, 400, 1200, 9.75);
insert into product values (14, 'Lite Sodium Soy Sauce',
	2, 58, 800, 300, 400, 15.00);
insert into product values (16, 'Meringue Dessert',
	3, 130, 290, 100, 180, 21.00);
insert into product values (17, 'Alice Springs Lamb',
	6, 139, 1000, 200, 600, 5.25);
insert into product values (18, 'Teatime Chocoloate Biscuits',
	3, 29, 3000, 2000, 1400, 7.75);

--***********************************************************
--Table Name: prodgrp  (Product Group)
--***********************************************************

drop table prodgrp cascade constraints;

create table prodgrp (
	prodgr_code float,
	prodgr_name varchar (20) not null /*,
	constraint prodgrp_pk primary key (prodgr_code)*/
);

insert into prodgrp values (1, 'Beverages');
insert into prodgrp values (2, 'Condiments');
insert into prodgrp values (3, 'Confections');
insert into prodgrp values (4, 'Dairy products');
insert into prodgrp values (5, 'Grains / Cereals');
insert into prodgrp values (6, 'Meat / Poultry');
insert into prodgrp values (7, 'Seafood');

--***********************************************************
--Table Name: old_products
--***********************************************************

drop table old_products cascade constraints;

create table old_products (
	prod_code float,
	prod_name varchar (40) );

insert into old_products values (201, 'Goat Cheese');
insert into old_products values (202, 'Pickeled Herring');
insert into old_products values (203, 'Gravad Lox');

--***********************************************************
--Table Name: import_products
--***********************************************************

drop table import_product cascade constraints;

create table import_product (
	prod_code float,
	prod_name varchar (40),
	prodgr_code float,
	sale_price float,
	target float,
	direct_sales float,
	indirect_sales float,
	profit_margin float );

insert into import_product values (101, 'Boston Crab Meat',
	2, 199, 400, 190, 220, 11.00);
insert into import_product values (102, 'Singapore Noodles',
	5, 24, 2000, 1500, 400, 12.50);
insert into import_product values (14, 'Lite Sodium Soy Sauce',
	2, 58, 800, 300, 400, 15.00);
insert into import_product values (16, 'Meringue Dessert',
	3, 130, 290, 100, 180, 21.00);

--***********************************************************
--Table Name: state
--***********************************************************

drop table state cascade constraints;

create table state (
	state_code varchar (4),
	state_name varchar (20) not null /*,
	constraint state_pk primary key (state_code)*/
);

insert into state values ('RAJ', 'Rajasthan');
insert into state values ('MAH', 'Maharashtra');
insert into state values ('GUJ', 'Gujarat');

--***********************************************************
--Table Name: city
--***********************************************************

drop table city cascade constraints;

create table city (
	city_code varchar (4),
	city_name varchar (20) not null,
	state_code varchar (4) /*,
	constraint city_pk primary key (city_code),
	constraint city_fk01 foreign key
		(state_code) references state (state_code)*/
);

insert into city values ('MUMB', 'Mumbai', 'MAH');
insert into city values ('PUNE', 'Pune', 'MAH');
insert into city values ('NASH', 'Nashik', 'MAH');
insert into city values ('AJMR', 'Ajmer', 'RAJ');
insert into city values ('JAIP', 'Jaipur', 'RAJ');
insert into city values ('UDAI', 'Udaipur', 'RAJ');
insert into city values ('AHMD', 'Ahmedabad', 'GUJ');
insert into city values ('GDHN', 'Gandhinagar', 'GUJ');
insert into city values ('SURT', 'Surat', 'GUJ');

--***********************************************************
--Table Name: salesman
--***********************************************************

drop table salesman cascade constraints; 

create table salesman (
	emp_code float,
	emp_name varchar (25) not null,
	age float,
	date_join date,
	sex varchar (1),
	salary float,
	married varchar (1),
	reports_to float /*,
	constraint salesman_pk primary key (emp_code)*/
);

insert into salesman values (1, 'Rajiv Jain', 35, 
	'01-jan-95', 'M', 16000, 'Y', 0);
insert into salesman values (2, 'Ashit Kothari', 27, 
	'01-mar-95', 'M', 6000, 'N', 1);
insert into salesman values (3, 'Bimal Mehta', 39, 
	'24-jul-96', 'M', 4800, 'Y', 1);
insert into salesman values (4, 'Deepak Deo', 39, 
	'11-aug-82', 'M', 8000, 'Y', 2);
insert into salesman values (5, 'V V Nath', 49, 
	'03-mar-82', 'M', 8000, 'N', 2);

--***********************************************************
--Table Name: customer
--***********************************************************

drop table customer cascade constraints;

create table customer (
	cust_code float,
	cust_name varchar (25) not null,
	city_code varchar (4),
	credit_rating varchar (1) /*,
	constraint customer_pk primary key (cust_code),
	constraint customer_fk01 foreign key
		(city_code) references city (city_code)*/
);

insert into customer values (1, 'ABC Limited', 'PUNE', 'A');
insert into customer values (2, 'DEF Limited', 'JAIP', 'A');
insert into customer values (3, 'GHI Limited', 'AHMD', 'C');
insert into customer values (4, 'JKL Limited', 'SURT', 'B');
insert into customer values (5, 'MNO Limited', 'AJMR', 'A');
insert into customer values (6, 'PQR Limited', 'MUMB', 'C');
insert into customer values (7, 'STU Limited', 'MUMB', 'B');
insert into customer values (8, 'VWX Limited', 'PUNE', 'C');
insert into customer values (9, 'YZA Limited', 'MUMB', 'A');
insert into customer values (10, 'AAA Limited', 'PUNE', 'B');

--***********************************************************
--Table Name: orders
--***********************************************************

drop table orders cascade constraints;

create table orders (
	order_number float,
	order_date date not null,
	cust_code float,
	emp_code float /*,
	constraint orders_pk primary key (order_number),
	constraint orders_fk01 foreign key
		(cust_code) references customer (cust_code),
	constraint orders_fk02 foreign key
		(emp_code) references salesman (emp_code)*/
);

insert into orders values (1, '01-jan-97', 6, 5);
insert into orders values (2, '02-jan-97', 4, 5);
insert into orders values (3, '03-feb-97', 1, 1);
insert into orders values (4, '04-feb-97', 6, 3);
insert into orders values (5, '05-mar-97', 3, 3);
insert into orders values (6, '06-mar-97', 8, 5);
insert into orders values (7, '07-apr-97', 4, 5);
insert into orders values (8, '08-apr-97', 10, 5);
insert into orders values (9, '09-may-97', 3, 1);
insert into orders values (10, '10-may-97', 9, 5);

--***********************************************************
--Table Name: order_details
--***********************************************************

drop table order_detail cascade constraints;

create table order_detail (
	order_number float,
	prod_code float,
	quantity float not null /*,
	constraint order_detail_pk primary key (order_number, prod_code),
	constraint order_detail_fk01 foreign key
		(order_number) references orders (order_number),
	constraint order_detail_fk02 foreign key
		(prod_code) references product (prod_code)*/
);

insert into order_detail values (1, 10, 20);
insert into order_detail values (1, 6, 16);
insert into order_detail values (1, 4, 25);
insert into order_detail values (2, 6, 30);
insert into order_detail values (2, 5, 50);
insert into order_detail values (2, 3, 30);
insert into order_detail values (3, 3, 24);
insert into order_detail values (3, 2, 50);
insert into order_detail values (3, 6, 15);
insert into order_detail values (4, 5, 40);
insert into order_detail values (4, 7, 40);
insert into order_detail values (5, 4, 20);
insert into order_detail values (5, 10, 20);
insert into order_detail values (5, 8, 20);
insert into order_detail values (5, 2, 20);
insert into order_detail values (6, 6, 60);
insert into order_detail values (6, 4, 60);
insert into order_detail values (7, 2, 20);
insert into order_detail values (7, 9, 20);
insert into order_detail values (7, 4, 20);
insert into order_detail values (7, 1, 20);
insert into order_detail values (8, 9, 90);
insert into order_detail values (8, 6, 90);
insert into order_detail values (8, 2, 90);
insert into order_detail values (8, 8, 90);
insert into order_detail values (9, 5, 50);
insert into order_detail values (9, 1, 50);
insert into order_detail values (9, 6, 50);
insert into order_detail values (9, 3, 50);
insert into order_detail values (10, 4, 40);

--***********************************************************
--Table Name: prof_tax
--***********************************************************

drop table prof_tax;
create table prof_tax (
	emp_code float,
	salary float,
	tax float );

/*
-- ------------------ X ------- X ------------------
--Tables for merge
drop table product_info;
CREATE TABLE PRODUCT_INFO(
PRODUCT_ID varchar(5),
 CATEGORY_ID CHAR(1),
 LIST_PRICE NUMBER(6),
 MIN_PRICE NUMBER(6)
);


INSERT INTO PRODUCT_INFO VALUES ('P1001','B',150,125);
INSERT INTO PRODUCT_INFO VALUES ('P1002','A',200,190);
INSERT INTO PRODUCT_INFO VALUES ('P1003','V',300,275);
INSERT INTO PRODUCT_INFO VALUES ('P1004','A',75,70);
INSERT INTO PRODUCT_INFO VALUES ('P1005','B',150,140);

drop table new_price;
CREATE TABLE NEW_PRICE
(PRODUCT_ID varchar(5),
 LIST_PRICE NUMBER(6),
 MIN_PRICE NUMBER(6));

INSERT INTO NEW_PRICE VALUES ('P1001',150,140);
INSERT INTO NEW_PRICE VALUES ('P1002',200,190);
INSERT INTO NEW_PRICE VALUES ('P1003',300,290);
INSERT INTO NEW_PRICE VALUES ('P1006',500,475);
-- ------------------ X ------- X ------------------

--Table for cursor example

drop table BSE_PRICES;
CREATE TABLE BSE_PRICES (
	DATEKEY DATE,
	SCRIPTID number(6),
	OPENPRICE number(6),
	CLOSEPRICE number(6)
);

drop table nse_prices;
Create table NSE_PRICES
as
SELECT * FROM BSE_PRICES WHERE 1 = 2;

INSERT INTO BSE_PRICES VALUES ('01-MAY-2003', 1, 100, 102);
INSERT INTO BSE_PRICES VALUES ('01-MAY-2003', 2, 95,92);
INSERT INTO BSE_PRICES VALUES ('01-MAY-2003', 3, 2000, 2080);
INSERT INTO BSE_PRICES VALUES ('01-MAY-2003', 5, 686, 704);
INSERT INTO BSE_PRICES VALUES ('01-MAY-2003', 6, 20,16);
INSERT INTO BSE_PRICES VALUES ('01-MAY-2003', 7, 50,50);
INSERT INTO BSE_PRICES VALUES ('01-MAY-2003', 8, 80, 88);
INSERT INTO BSE_PRICES VALUES ('01-MAY-2003', 11, 160, 145);
INSERT INTO BSE_PRICES VALUES ('01-MAY-2003', 12, 100, 101);
INSERT INTO BSE_PRICES VALUES ('01-MAY-2003', 15, 10, 12);

INSERT INTO NSE_PRICES VALUES ('01-MAY-2003', 1, 100, 103);
INSERT INTO NSE_PRICES VALUES ('01-MAY-2003', 2, 95,96);
INSERT INTO NSE_PRICES VALUES ('01-MAY-2003', 3, 2000, 2070);
INSERT INTO NSE_PRICES VALUES ('01-MAY-2003', 5, 686, 724);
INSERT INTO NSE_PRICES VALUES ('01-MAY-2003', 8, 80, 87);
INSERT INTO NSE_PRICES VALUES ('01-MAY-2003', 10, 50, 55);
INSERT INTO NSE_PRICES VALUES ('01-MAY-2003', 12, 100, 95);
INSERT INTO NSE_PRICES VALUES ('01-MAY-2003', 14, 160, 145);
INSERT INTO NSE_PRICES VALUES ('01-MAY-2003', 16, 100, 101);
-- ------------------ X ------- X ------------------

--table used for triggers

drop table inventory;
create table inventory(
	part_no varchar(4),
	qty_on_hand number(4),
	reorder_qty number(5),
	reorder_level number(4));
	
drop table pending_orders;
create  table pending_orders(
	part_no varchar(4),
	reorder_qty number(5),
	reorder_level number(4));
	

-- ------------------ X ------- X ------------------
-- tables for multi table inserts
-- unconditional inserts
-- ---------------------------------------------------
--@ c:\oracle\ora90\sqlplus\demo\demobld.sql (emp, dept tables)

drop table extern_pay_amount ;
create table extern_pay_amount (
	employee_id  number(5),	
	pre_tax_ded number(5),
	tax_ded number(5),
	gross_pay number(10),
	net_pay number(5)
);
insert into extern_pay_amount (employee_id,gross_pay,net_pay,pre_tax_ded,tax_ded) 
			(select empno, sal, sal*0.9, sal*0.03, sal*0.07 
				from emp where deptno=30);

drop table salary_deduction;
create table salary_deduction(
	employee_id number(5),
	ename varchar(30),			
	pre_tax_ded number(5),
	tax_ded number(5)
);
drop table salary_pay;
create table salary_pay(
	employee_id number(5),
	ename varchar(30),			
	gross_pay number(10),
	net_pay number(5)
);

-- Pivoting inserts
-- ----------------

drop table monthwise_paycheck_report ;
create table monthwise_paycheck_report (
 emp_id 	number(4),
 net_pay_jan	number(10),
 net_pay_feb	number(10),
 net_pay_mar	number(10),
 net_pay_apr	number(10),
 net_pay_may	number(10),
 net_pay_jun	number(10)
);
insert into monthwise_paycheck_report values (1001,3400,3450,3300,3400,3500,3000);
insert into monthwise_paycheck_report values (1002,4300,4500,4200,4500,4400,4500);
insert into monthwise_paycheck_report values (1003,5400,5300,5500,5500,5300,5200);
insert into monthwise_paycheck_report values (1004,5300,5300,5300,5400,5300,5300);
insert into monthwise_paycheck_report values (1005,5000,4900,4950,4000,4500,4000);
insert into monthwise_paycheck_report values (1006,4600,4600,4500,4400,4600,4600);
insert into monthwise_paycheck_report values (1007,3500,3900,3900,3800,3800,3800);


drop table all_paycheck ;
create table all_paycheck (
 emp_id	       number(4),  	
 month		varchar(15),
 net_pay 	number(10)
);


-- Conditional insert all
-- ---------------------- 
drop table manger_pay;
create table manager_pay(
 emp_id		number(4),
 gross_pay	number(10),
 net_pay 	number(10)
);

drop table worker_pay;
create table worker_pay(
 emp_id		number(4),
 gross_pay	number(10),
 net_pay 	number(10)
);

drop table all_pay;
create table all_pay(
 emp_id		number(4),
 gross_pay	number(10),
 net_pay 	number(10)
);

-- Conditional insert first
-- ------------------------
drop table 7000_7500_pay;
create table 7000_7500_pay(
 employee_id	number(4),
 gross_pay 	number(10),
 net_pay 	number(10)
);

drop table 7500_7800_pay;
create table 7500_7800_pay(
 employee_id	number(4),
 gross_pay 	number(10),
 net_pay 	number(10)
);

drop table 7800_8000_pay;
create table 7800_8000_pay(
 employee_id	number(4),
 gross_pay 	number(10),
 net_pay 	number(10)
);

*/
SET TERMOUT ON

