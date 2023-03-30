select * from users;

select u.id , u.name  from users  as u
LEFT JOIN orders as o on ui.id = o.order_id