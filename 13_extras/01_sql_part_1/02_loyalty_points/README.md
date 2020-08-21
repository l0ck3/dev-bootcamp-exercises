<!-- 2. table point fidélités contenant nom client, prénom client, point fidélités, date dernier achat, nombre achat, date inscription) et de trouver les plus vieux clients, trouver les clients qui ont pas commandés depuis X temps mais ayant déjà commandés plus de Y fois, etc... -->

# Loyalty Points

We often have loyalty points when we go into shops.
These points are awarded when we buy things in this particular shop.
In this exercise, we will mock a databse that stores data about clients' purchases and loyalty accounts.

> We will do a simpler version where every two euro spent is a loyalty point earned.

## 1. Start by creating a database called `my_shop`

## 2. Create a table inside it

In it, create a table called `purchases` which will contain these fields:

- id (as an uuid).
- client_name.
- euros_spent.
- loyalty_points_earned.
- purchase_date.
- number_of_items.

## 3. Add some entries

Let's add some entries in our table. You will find a `data.csv` file the exercise repository for today.
You can open this file in a spreadsheet software and copy all lines except the first.
You then go to _postico_ on your table, in the `content` tab where you can paste the lines.

> If you don't have a spreadsheet software, you can use Google spreadsheet or GitHub.

## 4. And finally, here are the requests we want answered

- Find the three oldest client's name.
- Find all clients' name and the number of items purchased that were made before december.
- Find all clients' name and the number of items purchased that were made before december but are _big customer_ (have purchased more than 3 items in one purchase previously).
- Find the _best_ client's name (the one who spent the most money in one purchase).
- BONUS, find how much money our store made in the summer.
