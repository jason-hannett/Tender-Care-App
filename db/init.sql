create table users (
    user_id serial primary key,
	email varchar(250) not null,
	password text not null
);

create table posts (
    post_id serial primary key,
    time date not null default current_date,
    post varchar(500) not null,
    image text
);

create table primary_info(
    primary_id serial primary key,
    user_id int references users(user_id),
    first varchar(50),
    last varchar(50),
    phone int,
    relation varchar(50)
);

create table secondary_info(
    secondary_id serial primary key,
    user_id int references users(user_id),
    secondaryFirst varchar(50),
    secondaryLast varchar(50),
    secondaryPhone int,
    secondaryRelation varchar(50)
);

create table child_info(
    child_id serial primary key,
    user_id int references users(user_id),
    childFirst varchar(50),
    childLast varchar(50),
    childAge int
);

create table billing(
    bill_id serial primary key,
    user_id int references users(user_id),
    amount int,
    billdate date default current_date,
    paid boolean 
);