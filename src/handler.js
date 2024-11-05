import { nanoid } from 'nanoid';
import notes from './notes.js';

const addNoteHandler = (req, h) => {
    const {title, tags, body} = req.payload;

    const id = nanoid(16);
    const creataAt = new Date().toISOString();
    const updateAt = creataAt;

    const newNote = {
        title, id, body, tags, creataAt, updateAt
    };

    notes.push(newNote);

    const isSuccess = notes.filter((note) => note.id === id).length > 0;

    if (isSuccess) {
        const response = h.response({
            status : 'success',
            message : 'catatan berhasil di tambahkan',
            data: {
                noteId : id,
            },
        });
        response.code(201);
        return response;
    }

    const response = h.response ({
        status : 'fail',
        message : 'Catatan gagal di tambahkan',
    });
    response.code (500);
    return response;
};

const getAllNotesHandler = () => ({
    status : 'success',
    data : {
        notes,
    },
});

const getNoteByIdHandler = (req, h) => {
    const { id } = req.params;
    const note = notes.filter((n) => n.id === id)[0];

    if (note != undefined) {
        return{
            status : 'success',
            data : {
                note,
            },
        };
    }

    const response = h.response({
        status : 'fail',
        message : 'Catatan tidak ditemukan',
    })
    response.code(404);
    return response;
};

export {addNoteHandler, getAllNotesHandler, getNoteByIdHandler};