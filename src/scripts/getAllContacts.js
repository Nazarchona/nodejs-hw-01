import * as fs from 'node:fs/promises';
import DetectFileEncodingAndLanguage from 'detect-file-encoding-and-language';
import { PATH_DB } from '../constants/contacts.js';


const getAllContacts = async () => {
    const { encoding } = await DetectFileEncodingAndLanguage(PATH_DB);
    const data = await fs.readFile(PATH_DB, encoding);
    return JSON.parse(data);
};

export default getAllContacts;



