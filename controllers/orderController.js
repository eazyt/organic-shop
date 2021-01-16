const express = require('express');
const mongoose = require('mongoose');
// const Order = mongoose.model('Order');
const Order = require('../models/orderModel')

const router = express.Router();

mongoose.set('useFindAndModify', false);

router.get('/', (req, res) => { 
  res.render('main/menu')
})

router.get('/cart', (req, res) => { 
  res.render('main/cart')
})

router.get('/order', (req, res) => { 
  res.render('main/orders')
})
router.get('/salads', (req, res) => { 
  res.render('main/salads')
})
router.get('/fruits', (req, res) => { 
  res.render('main/fruits')
})
router.get('/juices', (req, res) => { 
  res.render('main/juices')
})

router.get('/admin', (req, res) => { 
  Order.find((err, docs) => { 
    if (!err) {
      res.render('accounts/admin', {
        orders: docs
      })
    } else { 
      console.log('Error in Order: ' + err)
    }
  })
  // res.render('main/menu')
})

router.get('/order/:id', (req, res) => { 
  Order.findById(req.params.id, (err, doc) => { 
    if (!err) {
      res.render('main/orders', {
        order: doc
      })
    } else { 
      console.log('Error in findById: ' + err)
    }
  })
})

router.get('/order/delete/:id', (req, res) => { 
  Order.findByIdAndRemove(req.params.id, (err, doc) => {
    if (!err) {
      res.redirect('/admin')
    } else {
      console.log('Error in Delete: ' + err)
    }
  })
})

router.post('/cart', (req, res) => { 
  var d = new Date();
  var t = d.getTime();
  var counter = t;
  counter += t;
  var order = new Order();
  order.total = req.body.total;
  order.order = counter;
  order.save((err, doc) => {
    console.log(doc)
    if (!err) {
      console.log('order: ' + order)
      res.redirect('/admin')
    } else {
      console.log('Error insertOrder: ' + err)
    }
  })
  // console.log('PASS 1')
  // insertOrder(req, res);
})
router.post('/order', (req, res) => {
  Order.findOneAndUpdate({ _id: req.body._id }, req.body, { new: true }, (err, doc) => { 
    if (!err) {
      res.redirect('/admin')
    } else {
      console.log('Update error ' + err)
    }
  })
  // console.log(req.body._id)
  // updateOrder(req.res);
})

// function updateOrder(req, res) { 
//   Order.findOneAndUpdate({ _id: req.body._id }, req.body, { new: true }, (err, doc) => { 
//     if (!err) {
//       res.redirect('/admin')
//     } else {
//       console.log('Update error ' + err)
//     }
//   })
// }

// function insertOrder(req, res) { 
//   var d = new Date();
//   var t = d.getTime();
//   var counter = t;
//   counter += t;
//   var order = new Order();
//   order.total = req.body.total;
//   order.order = counter;
//   order.save((err, doc) => { 
//     console.log(doc)
//     if (!err) {
//       console.log('order: ' + order)
//       res.redirect('/admin')
//     } else {
//       console.log('Error insertOrder: ' + err)
//     }
//   })
// }

module.exports = router;