// import express from 'express';
// import {
//   createTickets,
//   getTickets,
//   getTicketsById,
//   updateTickets,
//   deleteTickets,
// } from '../controllers/Tickets/Tickets.controller.js';

// // Middleware imports
// import { authMiddleware } from '../middlewares/auth/auth.middleware.js';
// import { checkTicketsLimit } from '../middlewares/checkTicketsLimit.middleware.js';
// import { validate } from '../middlewares/validator.middleware.js';

// // DTO imports
// import { createTicketsDto, updateTicketsDto } from '../dto/Tickets.dto.js';

// const router = express.Router();

// // All routes require authentication
// router.use(authMiddleware);

// // Create Tickets (with limit check)
// router.post('/', checkTicketsLimit, validate(createTicketsDto), createTickets);

// // Get all categories
// router.get('/', getCategories);

// // Get Tickets by ID
// router.get('/:id', getTicketsById);

// // Update Tickets by ID
// router.put('/:id', validate(updateTicketsDto), updateTickets);

// // Delete Tickets by ID
// router.delete('/:id', deleteTickets);

// export default router;

