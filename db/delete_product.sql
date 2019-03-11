delete from items_el_capitan 
where id = $1
returning *;