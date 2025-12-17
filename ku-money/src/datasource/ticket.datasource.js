// import Ticket from '../models/Ticket.model.js';

// /**
//  * Create new Ticket
//  */
// export const createTicket = async (TicketData) => {
//   return await Ticket.create(TicketData);
// };

// /**
//  * Find Ticket by ID
//  */
// export const findTicketById = async (TicketId) => {
//   return await Ticket.findById(TicketId);
// };

// /**
//  * Find Ticket by ID and user ID
//  */
// export const findTicketByIdAndUserId = async (TicketId, userId) => {
//   return await Ticket.findOne({
//     _id: TicketId,
//     'createdBy._id': userId,
//   });
// };

// /**
//  * Find all categories by user ID
//  */
// export const findCategoriesByUserId = async (userId, filters = {}) => {
//   const query = { 'createdBy._id': userId };
  
//   if (filters.type) {
//     query.type = filters.type;
//   }

//   return await Ticket.find(query).sort({ createdAt: -1 });
// };

// /**
//  * Count categories by user ID
//  */
// export const countCategoriesByUserId = async (userId, type = null) => {
//   const query = { 'createdBy._id': userId };
  
//   if (type) {
//     query.type = type;
//   }

//   return await Ticket.countDocuments(query);
// };

// /**
//  * Update Ticket by ID
//  */
// export const updateTicketById = async (TicketId, userId, updateData) => {
//   return await Ticket.findOneAndUpdate(
//     { _id: TicketId, 'createdBy._id': userId },
//     updateData,
//     { new: true }
//   );
// };

// /**
//  * Delete Ticket by ID
//  */
// export const deleteTicketById = async (TicketId, userId) => {
//   return await Ticket.findOneAndDelete({
//     _id: TicketId,
//     'createdBy._id': userId,
//   });
// };

