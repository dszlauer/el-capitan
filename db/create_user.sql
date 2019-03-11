insert into users_el_capitan
    (auth0_id, email, profile_name, picture)
values($1, $2, $3, $4)
returning *;