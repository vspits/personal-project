insert into orders (
    user_id,
    total_price
) values (
    ${user_id},
    0
)
returning order_id;