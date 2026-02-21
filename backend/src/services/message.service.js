// src/services/message.service.js
const { poolPromise, sql } = require('../config/db');

// ✅ Get all messages (with filters & pagination)
exports.Get_Messages = async (filters = {}) => {
  const pool = await poolPromise;

  const result = await pool.request()
    .input('Msg_ID', sql.BigInt, filters.Msg_ID ?? 0)
    .input('Msg_SystemID', sql.Int, filters.Msg_SystemID ?? 0)
    .input('Msg_CustomerID', sql.Int, filters.Msg_CustomerID ?? 0)
    .input('Msg_Sender', sql.BigInt, filters.Msg_Sender ?? 0)
    .input('Msg_Receiver', sql.BigInt, filters.Msg_Receiver ?? 0)
    .input('Msg_Creator', sql.BigInt, filters.Msg_Creator ?? 0)    
    .input('Msg_isArchive', sql.Bit, filters.Msg_isArchive ?? 0)
    .input('Msg_DateTime1', sql.NVarChar(23), filters.Msg_DateTime1 ?? '')
    .input('Msg_DateTime2', sql.NVarChar(23), filters.Msg_DateTime2 ?? '')
    .input('Msg_SearchText', sql.NVarChar(sql.MAX), filters.Msg_SearchText ?? '')
    .input('Msg_ArchiveID', sql.BigInt, filters.MsgArchiveID ?? 0)
    .input('PageNumber', sql.Int, filters.PageNumber ?? 1)
    .input('PageSize', sql.Int, filters.PageSize ?? 20)
    .execute('Get_Messages');

  return result.recordset;
};

// // ✅ Get message by ID
// exports.Get_MessageByID = async (messageId) => {
//   const pool = await poolPromise;
//   const result = await pool.request()
//     .input('MessageID', sql.Int, messageId)
//     .execute('Get_MessageByID');

//   return result.recordset;
// };

// // ✅ Get messages by User ID
// exports.Get_MessageByUserID = async (userId) => {
//   const pool = await poolPromise;
//   const result = await pool.request()
//     .input('UserID', sql.Int, userId)
//     .execute('Get_MessageByUserID');

//   return result.recordset;
// };

// ✅ Get messages by Room ID
// exports.Get_MessageByRoomID = async (roomId) => {
//   const pool = await poolPromise;
//   const result = await pool.request()
//     .input('RoomID', sql.Int, roomId)
//     .execute('Get_MessageByRoomID');

//   return result.recordset;
// };

// ✅ Get message recipients
exports.Get_MessageRecepients = async (messageId) => {
  const pool = await poolPromise;
  const result = await pool.request()
    .input('MessageID', sql.Int, messageId)
    .execute('Get_MessageRecepients');

  return result.recordset;
};

// ✅ Post new message (FINAL & CORRECT)
exports.Post_Message = async (data) => {
  const pool = await poolPromise; // ✅ فقط همین

  const result = await pool.request()
    .input('CreatorUserID', sql.Int, data.CreatorUserID)
    .input('SenderID', sql.Int, data.SenderID) 
    .input('MessageTypeID', sql.Int, data.MessageTypeID)
    .input('SystemID', sql.Int, data.SystemID)
    .input('CustomerID', sql.Int, data.CustomerID)
    .input('Subject', sql.NVarChar(500), data.Subject)
    .input('Body', sql.NVarChar(sql.MAX), data.Body)
    .input('ParentMessageID', sql.Int, data.ParentMessageID)
    .input('TargetEmails', sql.NVarChar(sql.MAX), data.TargetEmails)
    .input('FileStorageID', sql.Int, data.FileStorage) 
    .input('BPMSID', sql.Int, data.BPMSID)
    .input('RoomID', sql.Int, data.RoomID)
    .execute('Post_Message');

  return result.recordset;
};



// ✅ Post message recipients
exports.Post_MessageRecepients = async (data) => {
  const pool = await poolPromise;
  const result = await pool.request()
    .input('MessageID', sql.Int, data.MessageID)
    .input('UserID', sql.Int, data.UserID)
    .execute('Post_MessageRecepients');

  return result.recordset;
};

// ✅ Delete message (FINAL)
exports.Delete_Message = async (messageId) => {
  const pool = await poolPromise;

  const result = await pool.request()
    .input('Msg_ID', sql.BigInt, messageId) // ✅ نام + نوع درست
    .execute('Delete_Message');

  return result.recordset;
};


// ✅ Delete message recipient
exports.Delete_MessageRecepients = async (recipientId) => {
  const pool = await poolPromise;
  const result = await pool.request()
    .input('RecipientID', sql.Int, recipientId)
    .execute('Delete_MessageRecepients');

  return result.recordset;
};
