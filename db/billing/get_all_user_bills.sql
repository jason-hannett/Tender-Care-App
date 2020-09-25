select * from users
join billing on users.user_id = billing.user_id
where users.user_id = $1;