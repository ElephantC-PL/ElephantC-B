module.exports = (app) => {
  const color = require("../controllers/color.controller.js");

  var router = require("express").Router();

  /**
   * @swagger
   * components:
   *   schemas:
   *     Color:
   *       type: object
   *       properties:
   *         sectionId:
   *           type: integer
   *           description: ID of the section
   *           example: 1
   *         statusId:
   *           type: integer
   *           description: ID of the status
   *           example: 2
   *         variantId:
   *           type: integer
   *           description: ID of the variant
   *           example: 3
   *         locationId:
   *           type: integer
   *           description: ID of the location
   *           example: 4
   *         value:
   *           type: string
   *           description: Optional value of the color
   *           example: "#FF5733"
   */


 /**
   * @swagger
   * /color:
   *   post:
   *     summary: Find colors based on search criteria
   *     tags:
   *       - Colors
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               sectionId:
   *                 type: array
   *                 items:
   *                   type: integer
   *                 description: Array of section IDs to filter by
   *                 example: [2]
   *               statusId:
   *                 type: array
   *                 items:
   *                   type: integer
   *                 description: Array of status IDs to filter by
   *                 example: [2]
   *               variantId:
   *                 type: array
   *                 items:
   *                   type: integer
   *                 description: Array of variant IDs to filter by
   *                 example: [2]
   *               locationId:
   *                 type: array
   *                 items:
   *                   type: integer
   *                 description: Array of location IDs to filter by
   *                 example: [2]
   *     responses:
   *       200:
   *         description: A list of matching colors
   *         content:
   *           application/json:
   *             schema:
   *               type: array
   *               items:
   *                 $ref: '#/components/schemas/Color'
   */
  router.post("/", color.find);

 /**
   * @swagger
   * /color/create:
   *   post:
   *     summary: Create a new color entry
   *     tags:
   *       - Colors
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/Color'
   *     responses:
   *       201:
   *         description: Successfully created
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/Color'
   *       400:
   *         description: Validation error (missing required fields)
   *       500:
   *         description: Internal server error
   */
  router.post("/create", color.create);

  /**
   * @swagger
   * /color/{id}:
   *   put:
   *     summary: Update a color
   *     tags:
   *       - Colors
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         schema:
   *           type: integer
   *           example: 46
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               value:
   *                 type: string
   *                 example: "#FF5733"
   *     responses:
   *       200:
   *         description: A list of colors
   *         content:
   *           application/json:
   *             schema:
   *               type: array
   *               items:
   *                 $ref: '#/components/schemas/Color'
   */
  router.put("/:id", color.update);

  /**
   * @swagger
   * /color/{id}:
   *   delete:
   *     summary: Delete a color by ID
   *     tags:
   *       - Colors
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         schema:
   *           type: integer
   *           example: 46
   *         description: The ID of the color to delete
   *     responses:
   *       200:
   *         description: Successfully deleted
   *       404:
   *         description: Color not found
   *       500:
   *         description: Internal server error
   */
  router.delete("/:id", color.delete);

  app.use("/color", router);
};