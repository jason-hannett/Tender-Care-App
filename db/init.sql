create table users (
    user_id serial primary key,
	email varchar(250) not null,
	password text not null
);

create table posts (
    post_id serial primary key,
    time date not null default current_timestamp,
    post varchar(500) not null,
    image text
);