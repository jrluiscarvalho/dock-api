/**
 * @swagger
 * /person/:
 *   post:
 *     tags:
 *       - Person
 *     summary: Person
 *     consumes:
 *       - application/json
 *     parameters:
 *       - in: body
 *         name: external
 *         schema:
 *          properties:
 *            name:
 *              type: string
 *            cpf:
 *              type: string
 *            birthDate:
 *              type: string
 *     responses:
 *       201:
 *         description: response object
 *       404:
 *         description: Bad Request
 *       400:
 *         description: Bad Request
 *
 */
