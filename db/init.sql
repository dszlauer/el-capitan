drop table if exists items_el_capitan;
drop table if exists users_el_capitan;
drop table if exists checkout_el_capitan;

create table users_el_capitan
(
    user_id serial primary key
    ,
    auth0_id varchar not null 
    ,
    email varchar not null 
    ,
    profile_name text not null 
    ,
    picture text not null
);

create table items_el_capitan
(
    id serial primary key
    ,
    image text 
    ,
    name varchar(64)
    ,
    description text
    ,
    price decimal
);

-- DUMMY DATA
insert into items_el_capitan
    (image, name, description, price)
values('https://www.rei.com/media/52cfa6be-b375-4f3b-a89d-256044c46080?size=784x588', 'Osprey Aether AG 70 Pack', 'Lightweight suspended-mesh panel extends from the upper torso through the lumbar area to wrap your back in breathable comfort', 310.00 )
    ,
    ('https://www.rei.com/media/cad6abf8-a0dd-4c41-b84b-610454fc418f?size=784x588https://www.rei.com/media/cad6abf8-a0dd-4c41-b84b-610454fc418f?size=784x588', 'Gregory Baltoro 65 Pack', 'New for 2018 model: improved breathability in back panel; stronger 210-denier nylon; rain cover stows under top panel; harness and hip belt dry faster; front zippered pockets', 299.95)
    ,
    ('https://www.rei.com/media/0e8e99e2-9cb8-4f69-8980-1d5527ab69b0?size=784x588', 'Osprey Xenith 75 Pack', 'REI UpLift Compression technology pulls the pack load up and in, closer to your center of gravity, to improve your balance and stability', 350.00)
    ,
    ('https://www.rei.com/media/b84eb196-0ff9-4500-bba7-275cbc96e6c0?size=784x588', 'Osprey Atmos AG 65 Pack', 'Top-loading main compartment with padded 3D suspension contouring promotes ventilation and upper body mobility', 270.00)
    ,
    ('https://www.rei.com/media/8fc861de-4800-433b-b226-caa965df4ab4?size=784x588', 'MYSTERY RANCH Terraframe 80 Pack', 'Top-loading design has 2 zippers along the face for center-of-pack access to gear', 450.00)
    ,
    ('https://www.rei.com/media/bdfee6d6-6813-4f90-9055-a570d7ebb603?size=2000', 'Osprey
Stratos 50 Pack', 'Top and side panel zip access to main compartment; zippered sleeping bag compartment with bellowed divider', 141.73);

select *
from items_el_capitan;

select *
from users_el_capitan;

select *
from checkout_el_capitan;