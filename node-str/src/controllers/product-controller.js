'use strict';


/**
 * @swagger
 * /filme:
 *    post:
 *      description: Adicionar filme.
 *    parameters:
 *      - name: nome
 *        in: query
 *        description: modificar lista
 *        required: true
 *        schema:
 *          type: string
 *          format: string
 *    responses:
 *      '201':
 *        description: Filme adicionado com sucesso.
 */
exports.post = (req,res) => {
    res.status(201).send(req.body);
    };

    /**
 * @swagger
 * /filme:2:
 *    put:
 *      description: Adicionar id para filme
 *    parameters:
 *      - name: id
 *        in: query
 *        description: modificar filme da lista
 *        required: true
 *        schema:
 *          type: string
 *          format: string
 *    responses:
 *      '201':
 *        description: ID do filme adicionado com sucesso.
 */
exports.put = (req,res) => {
    const id = req.params.id;
      res.status(201).send({
          id: id, 
          item: req.body,
      });
};

/**
 * @swagger
 * /filme:
 *  delete:
 *    description: Deletar filme
 *    
 *    responses:
 *      '200':
 *        description: Remoção realizada com sucesso.
 */
exports.delete = (req,res) => {
    res.status(200).send(req.body);
};