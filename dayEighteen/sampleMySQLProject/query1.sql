create database sample_app;
create table user (name varchar(20), email varchar(50), address varchar(40));

insert into user values("Mickey Mouse", "mickey@disneyland.com", "Disneyland");
select * from user;
SELECT *
        FROM USER
        WHERE name=amazing