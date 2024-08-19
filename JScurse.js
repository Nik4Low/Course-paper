const http = require('http');
const fs = require('fs');
const express = require('express');
const mysql = require('mysql2');
const bodyParser =require('body-parser');


const app = express();
const PORT = 5252;
const HOST = '127.0.0.1';


const connection = mysql.createConnection({
    host: 'mysql-5.7',
    user: 'root',
    password: '',
    database: 'BDlab',
    port: 3306
})
connection.connect((err) => {
    if (err) {
        console.error('Ошибка подключения к базе данных: ', err.stack);
        return;
    }
    console.log('Успешно подключено к базе данных с ID ', connection.threadId);
});

module.exports = connection;

app.set('view engine', 'ejs');
app.listen(PORT, HOST, () => {
    console.log(`Сервер запущен: http://${HOST}:${PORT}`)
})


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('Static'));
//Показ таблиц
app.get('/get-SHOP', (req, res) => {
    const query = `SELECT * FROM Shop ` ;
    connection.query(query, (err, results) => {
        if (err) {
            return res.status(500).send('Ошибка при выполнении запроса');
        }
        res.json(results);
    });
});
app.get('/get-SUPP', (req, res) => {
    const query = `SELECT * FROM Supplier ` ;
    connection.query(query, (err, results) => {
        if (err) {
            return res.status(500).send('Ошибка при выполнении запроса');
        }
        res.json(results);
    });
});
app.get('/get-SHIP', (req, res) => {
    const query = `SELECT * FROM shipment ` ;
    connection.query(query, (err, results) => {
        if (err) {
            return res.status(500).send('Ошибка при выполнении запроса');
        }
        res.json(results);
    });
});
app.get('/get-PROD', (req, res) => {
    const query = `SELECT * FROM product ` ;
    connection.query(query, (err, results) => {
        if (err) {
            return res.status(500).send('Ошибка при выполнении запроса');
        }
        res.json(results);
    });
});

app.get('/get-FORM', (req, res) => {
    
    const query =`
        SELECT
            Shop.shop_id,
            Shop.ShopName,
            Supplier.SuppName,
            Shipment.weight,
            Shipment.quantity,
            Shipment.date,
            Product.unit_name,
            Product.unit_price,
            Shop.City AS ShopCity,
            Supplier.City AS SupplierCity
        FROM
            Shop
        JOIN
            Supplier ON Shop.Supp_id = Supplier.Supp_id
        JOIN
            Shipment ON Supplier.ship_id = Shipment.ship_id
        JOIN
            Product ON Shipment.product_id = Product.product_id
        `;
    connection.query(query, (err, results) => {
        if (err) {
            return res.status(500).send('Ошибка при выполнении запроса');
        }
        res.json(results);
    });
       
    
        
    
});
//Добавление/удаление записей

app.post('/add-record', (req, res) => {
    const data = req.body;

    console.log('Получены данные:', data);

    if (data.shop_id && data.City && data.Address && data.ShopName && data.Contacts && data.Supp_id) {
        const query = `INSERT INTO Shop (shop_id, City, Address, ShopName, Contacts, Supp_id) VALUES (?, ?, ?, ?, ?, ?)`;
        connection.query(query, [data.shop_id, data.City, data.Address, data.ShopName, data.Contacts, data.Supp_id], (err, result) => {
            if (err) {
                console.error('Ошибка при выполнении запроса:', err);
                res.status(500).json({ success: false, message: 'Ошибка при добавлении записи' });
            } else {
                res.json({ success: true, message: 'Запись успешно добавлена в таблицу Магазины' });
            }
        });
    } else if (data.Supp_id && data.City && data.SuppName && data.Contacts && data.ship_id) {
        const query = `INSERT INTO Supplier (Supp_id, City, SuppName, Contacts, ship_id) VALUES (?, ?, ?, ?, ?)`;
        connection.query(query, [data.Supp_id, data.City, data.SuppName, data.Contacts, data.ship_id], (err, result) => {
            if (err) {
                console.error('Ошибка при выполнении запроса:', err);
                res.status(500).json({ success: false, message: 'Ошибка при добавлении записи' });
            } else {
                res.json({ success: true, message: 'Запись успешно добавлена в таблицу Поставщики' });
            }
        });
    } else if (data.ship_id && data.quantity && data.date && data.product_id) {
        const query = `INSERT INTO shipment (ship_id, quantity, date, product_id) VALUES (?, ?, ?, ?)`;
        connection.query(query, [data.ship_id, data.quantity, data.date, data.product_id], (err, result) => {
            if (err) {
                console.error('Ошибка при выполнении запроса:', err);
                res.status(500).json({ success: false, message: 'Ошибка при добавлении записи' });
            } else {
                res.json({ success: true, message: 'Запись успешно добавлена в таблицу Отгрузки' });
            }
        });
    } else if (data.product_id && data.unit_price && data.unit_name) {
        const query = `INSERT INTO product (product_id, unit_price, unit_name) VALUES (?, ?, ?)`;
        connection.query(query, [data.product_id, data.unit_price, data.unit_name], (err, result) => {
            if (err) {
                console.error('Ошибка при выполнении запроса:', err);
                res.status(500).json({ success: false, message: 'Ошибка при добавлении записи' });
            } else {
                res.json({ success: true, message: 'Запись успешно добавлена в таблицу Продукты' });
            }
        });
    } else {
        res.status(400).json({ success: false, message: 'Не все обязательные поля заполнены' });
    }
});

app.delete('/api/delete/:table/:idField/:id', (req, res) => {
    const tableName = req.params.table;
    const idField = req.params.idField;
    const recordId = req.params.id;
    const query = `DELETE FROM ${tableName} WHERE ${tableName}.${idField} = ?`;
  
    connection.query(query, [recordId], (error, results) => {
      if (error) {
        return res.status(500).json({ error });
      }
      res.json({ success: true });
    });
  });

//добавление/удаление связей 
// Маршрут для добавления связей
app.post('/add-relations', (req, res) => {
    const queries = [
        `ALTER TABLE Shop ADD CONSTRAINT fk_shop_supplier FOREIGN KEY (Supp_id) REFERENCES Supplier(Supp_id)`,
        `ALTER TABLE Supplier ADD CONSTRAINT fk_supplier_shipment FOREIGN KEY (ship_id) REFERENCES shipment(ship_id)`,
        `ALTER TABLE shipment ADD CONSTRAINT fk_shipment_product FOREIGN KEY (product_id) REFERENCES product(product_id)`
    ];

    let success = true;
    let errorMessage = '';

    queries.forEach(query => {
        connection.query(query, (err, result) => {
            if (err) {
                success = false;
                errorMessage = err.message;
            }
        });
    });

    if (success) {
        res.json({ success: true, message: 'Связи успешно добавлены' });
    } else {
        res.status(500).json({ success: false, message: errorMessage });
    }
});

// Маршрут для удаления связей
app.post('/remove-relations', (req, res) => {
    const queries = [
        `ALTER TABLE Shop DROP FOREIGN KEY fk_shop_supplier`,
        `ALTER TABLE Supplier DROP FOREIGN KEY fk_supplier_shipment`,
        `ALTER TABLE shipment DROP FOREIGN KEY fk_shipment_product`
    ];

    let success = true;
    let errorMessage = '';

    queries.forEach(query => {
        connection.query(query, (err, result) => {
            if (err) {
                success = false;
                errorMessage = err.message;
            }
        });
    });

    if (success) {
        res.json({ success: true, message: 'Связи успешно удалены' });
    } else {
        res.status(500).json({ success: false, message: errorMessage });
    }
});
//Страницы
app.get('/', (req, res) => {
    res.render('My_DataBaseJS')

})
app.get('/about', (req, res) => {
    res.render('about')

})
app.get('/Web-app', (req, res) => {
    res.render('Web-app')

})
app.get('/aboutSQL', (req, res) => {
    res.render('aboutSQL')

})
app.get('/aboutNode', (req, res) => {
    res.render('aboutNode')

})


