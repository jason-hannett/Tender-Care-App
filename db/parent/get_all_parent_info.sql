select * from users
join primary_info on users.user_id = primary_info.user_id
join secondary_info on users.user_id = secondary_info.user_id
where users.user_id = $1;