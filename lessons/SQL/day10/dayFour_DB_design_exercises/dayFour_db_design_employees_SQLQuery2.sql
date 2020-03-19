/*

1 emp info - id, name, email, phone, addy, d id, r id
2 dept -  id, name
3 project - id, location
4 role - id, name
5 emp skills - id, skill name, (?) d id, r id, e name
6 emp personal -- (optional)

*/

create table dept (
	deptId int primary key,
	deptName char(10) constraint dname_cnstrnt check (deptName is not null)
);

create table role (
	roleId int primary key,
	roleName char(10) constraint rname_cnstrnt check (roleName is not null)
);

create table project (
	projectId int primary key,
	projectLocation char(10) constraint plocation_cnstrnt check (projectLocation is not null)
);

create table empSkills (
	empSkillsId int primary key,
	empSkillName char(10) constraint eskname_cnstrnt check (empSkillName is not null)--,
--	deptId int foreign key references dept(deptId),
--	roleId int foreign key references role(roleId),
--	empName char(20) constraint esnname_cnstrnt check (empName is not null)
);

create table empInfo (
	empId int primary key,  -- 1
	empName char(20) constraint ename_cnstrnt check(empName is not null), 
	email varchar(20), 
	phone varchar(10), 
	address varchar(20),
	deptId int foreign key references dept(deptId), 
	roleId int foreign key references role(roleId),
	projectId int foreign key references project(projectId),
	empSkillsId int foreign key references empSkills(empSkillsId)
);

-- drop table empInfo

create procedure proc_dept
	@deptId int, @deptName char(10)
	as
	begin	
		insert into dept values (@deptId, @deptName)
	end

create procedure proc_role
	@roleId int, @roleName char(10)
	as
	begin
		insert into role values (@roleId, @roleName)
	end

create procedure proc_project
	@projectId int, @projectLocation char(10)
	as
	begin
		insert into project values(@projectId, @projectLocation)
	end

create procedure proc_empSkills
	@empSkillsId int, @empSkillName char(10)
	as  
	begin
		insert into empSkills values (@empSkillsId, @empSkillName)
	end

create procedure proc_empInfo
	@empId int, @empName char(20), @email varchar(20), @phone varchar(10), @address varchar(20), @deptId int, @roleId int, @projectId int, @empSkillsId int
	as 
	begin
		insert into empInfo values (@empId, @empName, @email, @phone, @address, @deptId, @roleId, @projectId, @empSkillsId)
	end


execute proc_dept 1, 'Sales'
execute proc_dept 2, 'Marketing'
execute proc_dept 3, 'HR'
execute proc_dept 4, 'Networks'
execute proc_dept 5, 'Design'

execute proc_role 1, 'Associate'
execute proc_role 2, 'Manager'
execute proc_role 3, 'VP'
execute proc_role 4, 'Director'
execute proc_role 5, 'Executive'

execute proc_project 1, 'Disneyland'
execute proc_project 2, 'England'
execute proc_project 3, 'Antarctica'
execute proc_project 4, 'Bali'
execute proc_project 5, 'Dubai'

execute proc_empSkills 1, 'Planning'
execute proc_empSkills 2, 'Presentor'
execute proc_empSkills 3, 'Research'
execute proc_empSkills 4, 'Analysis'
execute proc_empSkills 5, 'Implement'

execute proc_empInfo 1, 'John Smith', 'js@email.com', '111-1111', '123 road ave', 1, 1, 1, 1
execute proc_empInfo 2, 'Jane Doe', 'jd@email.com', '222-2222', '123 road ave', 2, 4, 2, 5
execute proc_empInfo 3, 'Bambi Deer', 'bd@email.com', '333-3333', 'Disneyland', 5, 2, 4, 3
execute proc_empInfo 4, 'Juliette Romeo', 'jr@email.com', '444-4444', '1 shakespeare ave', 4, 1, 3, 5
execute proc_empInfo 5, 'Alice Wonder', 'aw@email.com', '555-5555', 'Disneyland', 4, 2, 1, 3
execute proc_empInfo 6, 'Max Ride', 'mr@email.com', '666-6666', 'Sky', 3, 3, 2, 1
execute proc_empInfo 7, 'Mickey Mouse', 'mickey@mouse.com', '101-1010', 'Disneyland', 3, 3, 2, 5
execute proc_empInfo 8, 'Harry Potter', 'harry@hogwarts.com', null, 'Hogwarts', 4, 5, 3, 5
execute proc_empInfo 9, 'Hermione Granger', 'hermione@hogwarts.com', null, 'Hogwarts', 5, 5, 3, 4
execute proc_empInfo 10, 'Draco Malfoy', 'draco@hogwarts.com', null, 'Hogwarts', 4, 2, 1, 3




--select * from empInfo inner join dept on empInfo.deptId = dept.deptId


select * from empInfo
select * from empSkills
select * from dept
select * from role
select * from project

-- ---------------- QUERIES ---------------------

-- emp name and dept name
select empName, deptName
from empInfo e inner join dept d
on e.deptId = d.deptId

-- emp name and role name
select empName, roleName
from empInfo e inner join role r
on e.roleId = r.roleId

-- emp name and project location 
select empName, projectLocation
from empInfo e inner join project p
on e.projectId = p.projectId

-- emp name and emp skill name
select empName, empSkillName
from empInfo e inner join empSkills es
on e.empSkillsId = es.empSkillsId


-- everything :O
select e.empId, e.empName, e.email, e.phone, e.address, d.deptName, r.roleName, p.projectLocation, es.empSkillName
from (
	(
		(
			(empInfo e inner join dept d on e.deptId = d.deptId) 
			inner join role r on e.roleId = r.roleId
		)
		inner join project p on e.projectId = p.projectId
	)
	inner join empSkills es on e.empSkillsId = es.empSkillsId
);
--select * from empInfo

-- aggregate functions practice
select deptName, count(*) as "Number of employees"
from empInfo inner join dept on empInfo.deptId = dept.deptId
group by deptName

select projectLocation, count(*) as "Employees at this location"
from empInfo inner join project on empInfo.projectId = project.projectId
where projectLocation = 'Disneyland'
group by projectLocation