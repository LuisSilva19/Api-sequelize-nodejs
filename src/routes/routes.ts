import express from "express";
import { validate } from "../middleware/validate";
import {
  createNoteController,
  deleteNoteController,
  findAllNotesController,
  findNoteController,
  updateNoteController,
} from "../controllers/noteController";
import { createNoteSchema, updateNoteSchema } from "../validate/noteValidate";

const router = express.Router();

router
  .route("/")
  .get(findAllNotesController)
  .post(validate(createNoteSchema), createNoteController);

router
  .route("/:noteId")
  .get(findNoteController)
  .patch(validate(updateNoteSchema), updateNoteController)
  .delete(deleteNoteController);

export default router;