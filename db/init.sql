create table users (
    user_id serial primary key,
	email varchar(250) not null,
	password text not null
);