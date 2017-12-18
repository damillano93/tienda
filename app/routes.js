var Factura = require('./models/factura');
var Cliente = require('./models/cliente');
var Producto = require('./models/producto');
function getfacturas(res) {
    Factura.find(function (err, facturas) {

        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err) {
            res.send(err);
        }

        res.json(facturas); // return all facturas in JSON format
    });
};
function getclientes(res) {
    Cliente.find(function (err, clientes) {

        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err) {
            res.send(err);
        }

        res.json(clientes); // return all clientes in JSON format
    });
};
function getproductos(res) {
    Producto.find(function (err, productos) {

        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err) {
            res.send(err);
        }

        res.json(productos); // return all clientes in JSON format
    });
};
module.exports = function (app) {

    // api ---------------------------------------------------------------------
    // get all facturas
    app.get('/api/facturas', function (req, res) {
        // use mongoose to get all facturas in the database
        getfacturas(res);
    });
   // get one factura
   app.get('/api/facturas/:idfac', function (req, res) {
    // use mongoose to get all facturas in the database
    Factura.findById(req.params.idfac)
    .populate('Cliente', 'Nombre')
    .exec(function (err, factura) {
    if (err) {
        console.log(err);
    };
    res.json(factura);
});
});
    // create factura and send back all facturas after creation
    app.post('/api/facturas', function (req, res) {

        // create a factura, information comes from AJAX request from Angular
        Factura.create(req.body, function (err, factura) {
            if (err) {
                console.log(err);
            }
      
           console.log(factura)
            
            getfacturas(res);
          });

    });

    // delete a factura
    app.delete('/api/facturas/:factura_id', function (req, res) {
        Factura.remove({
            _id: req.params.factura_id
        }, function (err, factura) {
            if (err)
                res.send(err);

            getfacturas(res);
        });
    });

    // get all clientes
    app.get('/api/clientes', function (req, res) {
        // use mongoose to get all clientes in the database
        getclientes(res);
    });

    app.get('/api/clientes/:doc', function (req, res) {
        Cliente.findOne({ Documento : req.params.doc }, function(err, cliente) {
            console.log(cliente); 
            if (err) {
                res.send(err);
            }
            res.json(cliente);
          });
    });
    

    // create cliente and send back all clientes after creation
    app.post('/api/clientes', function (req, res) {

        // create a cliente, information comes from AJAX request from Angular
        Cliente.create(req.body, function (err, farm) {
            if (err) {
                console.log(err);
            }
      
            console.log(farm);
            
            getclientes(res);
          });

    });
    //update a cliente 
    app.put('/api/clientes/:cliente_id', function (req, res, next) {
        Cliente.findByIdAndUpdate(req.params.cliente_id, {
          $set: req.body
        }, {
          new: true
        }, function (err, cliente) {
          if (err) next(err);
    
          getclientes(res);
        });
      })
    // delete a cliente
    app.delete('/api/clientes/:cliente_id', function (req, res) {
        Cliente.remove({
            _id: req.params.cliente_id
        }, function (err, cliente) {
            if (err)
                res.send(err);

            getclientes(res);
        });
    });
    // get all productos
    app.get('/api/productos', function (req, res) {
        // use mongoose to get all productos in the database
        getproductos(res);
    });

    app.get('/api/productos/:doc', function (req, res) {
        Producto.findOne({ Plu : req.params.doc }, function(err, producto) {
            console.log(producto); 
            if (err) {
                res.send(err);
            }
            res.json(producto);
          });
    });
      //update a producto 
      app.put('/api/productos/:producto_id', function (req, res, next) {
        Producto.findByIdAndUpdate(req.params.producto_id, {
          $set: req.body
        }, {
          new: true
        }, function (err, producto) {
          if (err) next(err);
    
          getproductos(res);
        });
      })

    // create producto and send back all productos after creation
    app.post('/api/productos', function (req, res) {

        // create a producto, information comes from AJAX request from Angular
        Producto.create(req.body, function (err, farm) {
            if (err) {
                console.log(err);
            }
      
            console.log(farm);
            
            getproductos(res);
          });

    });

    // delete a producto
    app.delete('/api/productos/:producto_id', function (req, res) {
        Producto.remove({
            _id: req.params.producto_id
        }, function (err, producto) {
            if (err)
                res.send(err);

            getproductos(res);
        });
    });
    // application -------------------------------------------------------------
    app.get('*', function (req, res) {
        res.sendFile(__dirname + '/public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });
};
