SELECT * FROM order_items
JOIN orders
ON orders.order_id = order_items.order_id
join products
on products.product_id = order_items.product_id
where user_id = ${user_id};