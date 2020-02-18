/**
 * @swagger
 * /account/:
 *   post:
 *     tags:
 *       - Account
 *     summary: Account
 *     consumes:
 *       - application/json
 *     parameters:
 *       - in: body
 *         name: external
 *         schema:
 *          properties:
 *            idPerson:
 *              type: number
 *            dailyLimit:
 *              type: number
 *            balance:
 *              type: number
 *            isActive:
 *              type: boolean
 *            accountType:
 *              type: number
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
 * /account/draft/:
 *   put:
 *     tags:
 *       - Draft
 *     summary: Account
 *     consumes:
 *       - application/json
 *     parameters:
 *       - in: body
 *         name: value
 *         schema:
 *           properties:
 *             idAccount:
 *              type: number
 *             value:
 *              type: number
 *     responses:
 *       200:
 *         description: Response object
 *       404:
 *         description: Bad Request
 *       400:
 *         description: Bad Request
 *
 *
 *
 * /account/deposit/:
 *   put:
 *     tags:
 *       - Deposit
 *     summary: Account
 *     consumes:
 *       - application/json
 *     parameters:
 *       - in: body
 *         name: value
 *         schema:
 *           properties:
 *             idAccount:
 *              type: number
 *             value:
 *              type: number
 *     responses:
 *       200:
 *         description: Response object
 *       404:
 *         description: Bad Request
 *       400:
 *         description: Bad Request
 *
 *
 *
 *
 * /account/status/:
 *   put:
 *     tags:
 *       - Status
 *     summary: Account
 *     consumes:
 *       - application/json
 *     parameters:
 *       - in: body
 *         name: value
 *         schema:
 *           properties:
 *             idAccount:
 *              type: number
 *             isActive:
 *              type: boolean
 *     responses:
 *       200:
 *         description: Response object
 *       404:
 *         description: Bad Request
 *       400:
 *         description: Bad Request
 *
 *
 * /account/balance/{idAccount}:
 *   get:
 *     tags:
 *       - Balance
 *     summary: Account
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
 *         schema:
 *           properties:
 *            balance:
 *              type: "object"
 *              example: {
 *                "balance": "string",
 *              }
 *       404:
 *         description: Bad Request
 *       400:
 *         description: Bad Request
 */
