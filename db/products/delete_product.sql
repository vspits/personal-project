
DELETE FROM order_items
where product_id = ${product_id};

DELETE FROM products
where product_id = ${product_id};