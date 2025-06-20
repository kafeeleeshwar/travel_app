CREATE TABLE flights (
     id SERIAL PRIMARY KEY,
     flight_number VARCHAR(10),
     origin VARCHAR(50),
     destination VARCHAR(50),
     date DATE,
     price DECIMAL(10, 2)
   );

   INSERT INTO flights (flight_number, origin, destination, date, price)
   VALUES
     ('AI101', 'Delhi', 'Mumbai', '2025-07-01', 150.00),
     ('SG202', 'Mumbai', 'Delhi', '2025-07-01', 170.00),
     ('6E303', 'Delhi', 'Bangalore', '2025-07-02', 200.00);