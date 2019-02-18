SELECT * FROM order_items
JOIN orders
ON orders.order_id = order_items.order_id;