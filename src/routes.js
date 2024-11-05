import { addNoteHandler, getAllNotesHandler, getNoteByIdHandler } from "./handler.js";

const routes = [
  {
    method: "POST",
    path: "/notes",
    handler: addNoteHandler,
  },

  {
    method: "GET",
    path: "/notes",
    handler: getAllNotesHandler,
  },

  {
    method: "GET",
    path: "/notes/{id}",
    handler : getNoteByIdHandler
  },
];

export default routes;
