import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';



export const getAllContacts = async () => {
    const contacts = await fs.readFile(PATH_DB, "utf-8");
    if (!contacts) {
        return null;
    }
    return JSON.parse(contacts);
};



console.log(await getAllContacts());



