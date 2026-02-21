const messageService = require('../services/message.service');

/* ======================================================
   ✅ GET /messages
   ====================================================== */
exports.getMessages = async (req, res) => {
  try {
    const messages = await messageService.Get_Messages(req.query);

    res.status(200).json({
      data: messages,
      totalRecords: messages[0]?.TotalRecords ?? 0
    });
  } catch (error) {
    console.error('getMessages error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

/* ======================================================
   ✅ GET /messages/:messageId
   ====================================================== */
exports.Get_MessageByID = async (req, res) => {
  try {
    const { messageId } = req.params;

    const result = await messageService.Get_MessageByID({
      Msg_ID: messageId
    });

    res.status(200).json(result);
  } catch (error) {
    console.error('Get_MessageByID error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

/* ======================================================
   ✅ GET /messages/user/:userId
   ====================================================== */
exports.Get_MessageByUserID = async (req, res) => {
  try {
    const { userId } = req.params;

    const result = await messageService.Get_MessageByUserID({
      Msg_Receiver: userId,
      ...req.query
    });

    res.status(200).json(result);
  } catch (error) {
    console.error('Get_MessageByUserID error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

/* ======================================================
   ✅ GET /messages/room/:roomId
   ====================================================== */
exports.Get_MessageByRoomID = async (req, res) => {
  try {
    const { roomId } = req.params;

    const result = await messageService.Get_MessageByRoomID({
      RoomID: roomId,
      ...req.query
    });

    res.status(200).json(result);
  } catch (error) {
    console.error('Get_MessageByRoomID error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

/* ======================================================
   ✅ GET /messages/:messageId/recipients
   ====================================================== */
exports.Get_MessageRecepients = async (req, res) => {
  try {
    const { messageId } = req.params;

    const result = await messageService.Get_MessageRecepients(messageId);

    res.status(200).json(result);
  } catch (error) {
    console.error('Get_MessageRecepients error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

/* ======================================================
   ✅ POST /messages
   ====================================================== */
exports.Post_Message = async (req, res) => {
  try {
    const result = await messageService.Post_Message(req.body);

    return res.status(201).json({
      success: true,
      data: result
    });

  } catch (err) {
    console.error(err);
    return res.status(500).json({
      success: false,
      message: err.message
    });
  }
};



/* ======================================================
   ✅ POST /messages/recipients
   ====================================================== */
exports.Post_MessageRecepients = async (req, res) => {
  try {
    const result = await messageService.Post_MessageRecepients(req.body);

    res.status(201).json({
      message: 'Recipients added successfully',
      data: result
    });
  } catch (error) {
    console.error('Post_MessageRecepients error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

/* ======================================================
   ✅ DELETE /messages/Delete_Message/:messageId
   ====================================================== */
exports.Delete_Message = async (req, res) => {
  try {
    const { messageId } = req.params;

    const result = await messageService.Delete_Message(messageId);

    res.status(200).json({
      success: true,
      message: 'Message deleted successfully',
      data: result
    });
  } catch (error) {
    console.error('Delete_Message error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
};


/* ======================================================
   ✅ DELETE /messages/recipients/:recipientId
   ====================================================== */
exports.Delete_MessageRecepients = async (req, res) => {
  try {
    const { recipientId } = req.params;

    await messageService.Delete_MessageRecepients(recipientId);

    res.status(200).json({
      message: 'Recipient deleted successfully'
    });
  } catch (error) {
    console.error('Delete_MessageRecepients error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
