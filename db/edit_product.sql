update items_el_capitan
set image = $1, name = $2, description = $3, price = $4 
where id = $5
returning *;