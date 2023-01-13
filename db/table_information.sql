create table information(
id int not null auto_increment primary key,
ip varchar(100) not null,
userDate date not null,
artistName varchar(100) not null,
createdAt timestamp default now(),
updatedAt timestamp default now()
);