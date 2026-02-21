// src/routes/message.routes.js

const express = require('express');
const router = express.Router();
const messageController = require('../controllers/message.controller');

/**
 * @swagger
 * tags:
 *   name: Messages
 *   description: Message related APIs
 */

/**
 * @swagger
 * /messages:
 *   get:
 *     summary: Get all messages
 *     tags: [Messages]
 *     parameters:
 *       - in: query
 *         name: Msg_ID
 *         schema:
 *           type: integer
 *         example: 0
 *
*       - in: query
 *         name: Msg_Receiver
 *         schema:
 *           type: integer
 *         example: 0
 *
 *       - in: query
 *         name: Msg_Sender
 *         schema:
 *           type: integer
 *         example: 0
 *       - in: query
 *         name: Msg_Creator
 *         schema:
 *           type: integer
 *         example: 0 
 *
 *       - in: query
 *         name: Msg_RoomID
 *         schema:
 *           type: integer
 *         example: 0
 *
 *       - in: query
 *         name: Msg_IsRead
 *         schema:
 *           type: boolean
 *         example: false
 *
 *       - in: query
 *         name: Msg_SearchText
 *         schema:
 *           type: string
 *         example: 
 *
 *       - in: query
 *         name: PageNumber
 *         schema:
 *           type: integer
 *         example: 1
 *
 *       - in: query
 *         name: PageSize
 *         schema:
 *           type: integer
 *         example: 20
 *
 *     responses:
 *       200:
 *         description: List of messages
 */

 

router.get('/', messageController.getMessages);

/**
 * @swagger
 * /messages/Get_MessageByID/{messageId}:
 *   get:
 *     summary: Get message by ID
 *     tags: [Messages]
 *     parameters:
 *       - in: path
 *         name: messageId
 *         required: true
 *         schema:
 *           type: integer
 *         example: 100
 *     responses:
 *       200:
 *         description: Message detail
 */
router.get('/Get_MessageByID/:messageId', messageController.Get_MessageByID);

/**
 * @swagger
 * /messages/Get_MessageByUserID/{userId}:
 *   get:
 *     summary: Get messages by user ID
 *     tags: [Messages]
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: integer
 *         example: 101
 *     responses:
 *       200:
 *         description: User messages
 */
router.get('/Get_MessageByUserID/:userId', messageController.Get_MessageByUserID);

/**
 * @swagger
 * /messages/Get_MessageByRoomID/{roomId}:
 *   get:
 *     summary: Get messages by room ID
 *     tags: [Messages]
 *     parameters:
 *       - in: path
 *         name: roomId
 *         required: true
 *         schema:
 *           type: integer
 *         example: 5
 *     responses:
 *       200:
 *         description: Room messages
 */
router.get('/Get_MessageByRoomID/:roomId', messageController.Get_MessageByRoomID);

/**
 * @swagger
 * /messages/Get_MessageRecepients/{messageId}:
 *   get:
 *     summary: Get message recipients
 *     tags: [Messages]
 *     parameters:
 *       - in: path
 *         name: messageId
 *         required: true
 *         schema:
 *           type: integer
 *         example: 100
 *     responses:
 *       200:
 *         description: Message recipients
 */
router.get(
  '/Get_MessageRecepients/:messageId',
  messageController.Get_MessageRecepients
);

/**
 * @swagger
 * components:
 *   schemas:
 *     PostMessageRequest:
 *       type: object
 *       required:
 *         - CreatorUserID
 *         - SenderID
 *         - MessageTypeID
 *         - Subject
 *         - Body
 *       properties:
 *         CreatorUserID:
 *           type: integer
 *           example: 101
 *         SenderID:
 *           type: integer
 *           example: 101
 *         MessageTypeID:
 *           type: integer
 *           example: 1
 *         SystemID:
 *           type: integer
 *           nullable: true
 *           example: 2
 *         CustomerID:
 *           type: integer
 *           nullable: true
 *           example: 55
 *         Subject:
 *           type: string
 *           maxLength: 500
 *           example: تست پیام
 *         Body:
 *           type: string
 *           example: متن پیام
 *         ParentMessageID:
 *           type: integer
 *           nullable: true
 *         TargetEmails:
 *           type: string
 *           nullable: true
 *           example: test@example.com;info@example.com
 *         FileStorageID:
 *           type: integer
 *           nullable: true
 *         BPMSID:
 *           type: integer
 *           nullable: true
 *         RoomID:
 *           type: integer
 *           nullable: true
 */
/**
 * @swagger
 * /messages/Post_Message:
 *   post:
 *     summary: Create a new message
 *     tags: [Messages]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/PostMessageRequest'
 *     responses:
 *       201:
 *         description: Message created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 MessageID:
 *                   type: integer
 *                   example: 123
 */
 
router.post('/Post_Message', messageController.Post_Message);


/**
 * @swagger
 * /messages/Post_MessageRecepients:
 *   post:
 *     summary: Add message recipients
 *     tags: [Messages]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               MessageID:
 *                 type: integer
 *                 example: 100
 *               ReceiverUserID:
 *                 type: integer
 *                 example: 102
 *     responses:
 *       201:
 *         description: Recipient added
 */
router.post(
  '/Post_MessageRecepients',
  messageController.Post_MessageRecepients
);

/**
 * @swagger
 * /messages/Delete_Message/{messageId}:
 *   delete:
 *     summary: Delete message
 *     tags: [Messages]
 *     parameters:
 *       - in: path
 *         name: messageId
 *         required: true
 *         schema:
 *           type: integer
 *           format: int64
 *         example: 100
 *     responses:
 *       200:
 *         description: Message deleted successfully
 *       500:
 *         description: Internal server error
 */

router.delete('/Delete_Message/:messageId', messageController.Delete_Message);


/**
 * @swagger
 * /messages/Delete_MessageRecepients/{recipientId}:
 *   delete:
 *     summary: Delete message recipient
 *     tags: [Messages]
 *     parameters:
 *       - in: path
 *         name: recipientId
 *         required: true
 *         schema:
 *           type: integer
 *         example: 200
 *     responses:
 *       200:
 *         description: Recipient deleted
 */
router.delete(
  '/Delete_MessageRecepients/:recipientId',
  messageController.Delete_MessageRecepients
);

module.exports = router;
