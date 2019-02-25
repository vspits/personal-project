UPDATE order_items
SET quantity = ${quantity}
WHERE item_id = ${item_id}
returning *;