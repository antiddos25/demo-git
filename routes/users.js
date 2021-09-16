var express = require('express');
var router = express.Router();
var pg_conn = require('../modles/pg_config');


/* GET users listing. */
router.get('/', async function(req, res) {
    var pg_conn = require('../modles/pg_config');
    var product_query = 'SELECT * FROM product';
    var data = await pg_conn.query(product_query);
    res.render('users_fe', {
        title: "Welcome to ATN shop Page",
        h1_title: "Welcome to DPCB DATA Page",
        h2_title: "data table",
        userData: data
    });

});
router.get('/edit/:name', function(req, res) {
    var prod_name = req.params.name;
    const edit_query = {
        text: `SELECT * FROM product WHERE idproduct=$1`,
        values: [prod_name]
    };
    pg_conn.query(edit_query, function(err, data) {
        if (err) throw err;
        res.render('edit_form', { title: "Edit page", edit_data: data.rows[0] });
    });
});
/* POST from the edit_form submision */
router.post('/edit/:name', function(req, res) {
    var prod_name = req.params.name;
    const update_query = {
        text: "UPDATE product SET product_name=$1, price=$2, anount=$3,shop_name = $4 WHERE idproduct=$5",
        values: [req.body.product_name, req.body.price, req.body.anount, req.body.shop_name, prod_name]
    };
    pg_conn.query(update_query, function(err, data) {
        if (err) {
            throw err;
            res.render('error', { message: "Insert got error", error: err })
        } else {
            var product_query = 'SELECT * FROM product';
            pg_conn.query(product_query, function(err, data) {
                /*  res.render('users_fe', {
                      title: "Welcome to ATN shop Page",
                      h1_title: "Welcome to DPCB shop Page",
                      h2_title: "Update query database successfully",
                      userData: data 
                  });*/
                res.redirect('/users')
            });
        };
    });
});
router.get('/insert', function(req, res) {
    res.render('insert_form', { title: "please Insert Data base " });
});
router.post('/insert', function(req, res) {
    const insert_query = {
        text: `INSERT INTO product VALUES ($1,$2,$3,$4,$5)`,
        values: [req.body.product_name, req.body.price, req.body.anount, req.body.shop_name,req.body.idproduct]
    };
    pg_conn.query(insert_query, function(err, data) {
        if (err) {
            throw err;
            res.render('error', { message: "Insert got error", error: err })
        } else {
            var product_query = 'SELECT * FROM product';
            pg_conn.query(product_query, function(err, data) {
                /*    res.render('users_fe', {
                        title: "Welcome to ATN shop Page",
                        h1_title: "Welcome to DPCB shop Page",
                        h2_title: "Insert query database successfully",
                        userData: data
                    }); */
                res.redirect('/users')
            });
        };
    });
});
router.get('/delete/:name', function(req, res) {
    var prod_name = req.params.name;
    const del_query = {
        text: `DELETE FROM product WHERE idproduct =$1`,
        values: [prod_name]
    };
    pg_conn.query(del_query, function(err, data) {
        if (err) {
            throw err;
            res.render('error', { message: "DELETE got error", error: err })
        } else {
            var product_query = 'SELECT * FROM product';
            pg_conn.query(product_query, function(err, data) {
                /*  res.render('users_fe', {
                      title: "Welcome to ATN shop Page",
                      h1_title: "Welcome to DPCB shop Page",
                      h2_title: "DELETE query database successfully",
                      userData: data
                  });*/
                res.redirect('/users')
            });
        };
    });
});
module.exports = router;