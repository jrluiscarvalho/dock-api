/**
 * @swagger
 * /transaction/:
 *   post:
 *     tags:
 *       - Transaction
 *     summary: Transaction
 *     consumes:
 *       - application/json
 *     parameters:
 *       - in: body
 *         name: external
 *         schema:
 *          properties:
 *            idAccount:
 *              type: number
 *            value:
 *              type: number
 *     responses:
 *       201:
 *         description: response object
 *       404:
 *         description: Bad Request
 *       400:
 *         description: Bad Request
 *
 *
 *
 * /transaction/{idAccount}/{startDate}/{endDate}/:
 *   get:
 *     tags:
 *       - Transactions By Date
 *     summary: Transactions
 *     consumes:
 *       - application/json
 *     parameters:
 *       - name: idAccount
 *         in: path
 *         type: string
 *         required: true
 *       - name: startDate
 *         in: path
 *         type: string
 *         required: true
 *       - name: endDate
 *         in: path
 *         type: string
 *         required: true
 *     responses:
 *       200:
 *         description: response object
 *       404:
 *         description: Bad Request
 *       400:
 *         description: Bad Request
 *
 *
 *
 * /transaction/{idAccount}/:
 *   get:
 *     tags:
 *       - Transactions By Date
 *     summary: Transactions
 *     consumes:
 *       - application/json
 *     parameters:
 *       - name: idAccount
 *         in: path
 *         type: string
 *         required: true
 *     responses:
 *       200:
 *         description: response object
 *       404:
 *         description: Bad Request
 *       400:
 *         description: Bad Request
 *
 */
