const { poolPromise, sql } = require('../config/db');

exports.Get_RoomsOfCustomer = async (customerId) => {
  const pool = await poolPromise;
  const result = await pool.request()
    .input('CustomerID', sql.Int, customerId)
    .execute('Get_RoomsOfCustomer');

  return result.recordset;
};

exports.Get_RoomsOfUser = async (userId) => {
  const pool = await poolPromise;
  const result = await pool.request()
    .input('UserID', sql.Int, userId)
    .execute('Get_RoomsOfUser');

  return result.recordset;
};

exports.Post_Room = async ({ RoomName, CustomerID }) => {
  const pool = await poolPromise;
  return pool.request()
    .input('RoomName', sql.NVarChar, RoomName)
    .input('CustomerID', sql.Int, CustomerID)
    .execute('Post_Room');
};

exports.Post_RoomMembers = async ({ RoomID, UserID, IsGuest }) => {
  const pool = await poolPromise;
  return pool.request()
    .input('RoomID', sql.Int, RoomID)
    .input('UserID', sql.Int, UserID)
    .input('IsGuest', sql.Bit, IsGuest)
    .execute('Post_RoomMembers');
};

exports.Delete_Room = async (roomId) => {
  const pool = await poolPromise;
  return pool.request()
    .input('RoomID', sql.Int, roomId)
    .execute('Delete_Room');
};

exports.Delete_RoomMember = async (roomMemberId) => {
  const pool = await poolPromise;
  return pool.request()
    .input('RoomMemberID', sql.Int, roomMemberId)
    .execute('Delete_RoomMember');
};
