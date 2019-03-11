insert into items_el_capitan
    (image, name, description, price)
values($1, $2, $3, $4)
returning *;