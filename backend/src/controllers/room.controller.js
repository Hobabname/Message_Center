const roomService = require('../services/room.service');
const response = require('../utils/response');

exports.Get_RoomsOfCustomer = async (req, res, next) => {
  try {
    const result = await roomService.Get_RoomsOfCustomer(req.params.customerId);
    response.success(res, result);
  } catch (err) {
    next(err);
  }
};

exports.Get_RoomsOfUser = async (req, res, next) => {
  try {
    const result = await roomService.Get_RoomsOfUser(req.params.userId);
    response.success(res, result);
  } catch (err) {
    next(err);
  }
};

exports.Post_Room = async (req, res, next) => {
  try {
    const result = await roomService.Post_Room(req.body);
    response.success(res, result);
  } catch (err) {
    next(err);
  }
};

exports.Post_RoomMembers = async (req, res, next) => {
  try {
    const result = await roomService.Post_RoomMembers(req.body);
    response.success(res, result);
  } catch (err) {
    next(err);
  }
};

exports.Delete_Room = async (req, res, next) => {
  try {
    const result = await roomService.Delete_Room(req.params.roomId);
    response.success(res, result);
  } catch (err) {
    next(err);
  }
};

exports.Delete_RoomMember = async (req, res, next) => {
  try {
    const result = await roomService.Delete_RoomMember(req.params.roomMemberId);
    response.success(res, result);
  } catch (err) {
    next(err);
  }
};
