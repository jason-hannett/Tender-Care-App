select * from users
join child_info on users.user_id = child_info.user_id
where users.user_id = $1;