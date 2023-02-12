const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.render('index',{ title: 'Inicio'});
  });

router.get('/acerca', (req, res) => {
    res.render('acerca', {title: 'Acerca de'});
  });

router.get('/contacto', (req, res) => {
    res.render('contacto', {title: 'Contacto'});
  });


module.exports = router;