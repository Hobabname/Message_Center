// src/routes/room.routes.js

const express = require('express');
const router = express.Router();
const roomController = require('../controllers/room.controller');

/**
 * @swagger
 * tags:
 *   name: Rooms
 *   description: Room related APIs
 */

/**
 * @swagger
 * /rooms/Get_RoomsOfCustomer/{customerId}:
 *   get:
 *     summary: Get rooms of a customer
 *     tags: [Rooms]
 *     parameters:
 *       - in: path
 *         name: customerId
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: List of customer rooms
 */
router.get(
  '/Get_RoomsOfCustomer/:customerId',
  roomController.Get_RoomsOfCustomer
);

/**
 * @swagger
 * /rooms/Get_RoomsOfUser/{userId}:
 *   get:
 *     summary: Get rooms of a user
 *     tags: [Rooms]
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: List of user rooms
 */
router.get(
  '/Get_RoomsOfUser/:userId',
  roomController.Get_RoomsOfUser
);

/**
 * @swagger
 * /rooms/Post_Room:
 *   post:
 *     summary: Create a new room
 *     tags: [Rooms]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               roomName:
 *                 type: string
 *               customerId:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Room created successfully
 */
router.post('/Post_Room', roomController.Post_Room);

/**
 * @swagger
 * /rooms/Post_RoomMembers:
 *   post:
 *     summary: Add members to a room
 *     tags: [Rooms]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               roomId:
 *                 type: integer
 *               userId:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Room member added
 */
router.post('/Post_RoomMembers', roomController.Post_RoomMembers);

/**
 * @swagger
 * /rooms/Delete_Room/{roomId}:
 *   delete:
 *     summary: Delete a room
 *     tags: [Rooms]
 *     parameters:
 *       - in: path
 *         name: roomId
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Room deleted
 */
router.delete(
  '/Delete_Room/:roomId',
  roomController.Delete_Room
);

/**
 * @swagger
 * /rooms/Delete_RoomMember/{roomMemberId}:
 *   delete:
 *     summary: Remove a member from room
 *     tags: [Rooms]
 *     parameters:
 *       - in: path
 *         name: roomMemberId
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Room member removed
 */
router.delete(
  '/Delete_RoomMember/:roomMemberId',
  roomController.Delete_RoomMember
);

module.exports = router;
