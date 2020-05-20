'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/product-controller');

/**
 * @swagger
 * /filme:
 *    get:
 *      description: Mostrar filme.
 *    
 *    responses:
 *      '200':
 *        description: Lista retornada com sucesso.
 */
router.get('/', (req,res) => {
    res.status(200).send({
        nome: "Tubarão"
    });
});
router.post('/', controller.post);
router.put('/:id', controller.put);
router.delete('/', controller.delete);

module.exports = router;