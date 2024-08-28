import fs from 'fs/promises';
import createFakeContact from '../utils/createFakeContact.js';
import { PATH_DB } from '../constants/contacts.js';

export const addOneContact = async () => {
  try {
    let contacts = [];

    try {
      const data = await fs.readFile(PATH_DB, 'utf8');
      contacts = JSON.parse(data);
    } catch (error) {
      if (error.code === 'ENOENT') {
        await fs.writeFile(PATH_DB, JSON.stringify([]));
      } else {
        throw error;
      }
    }

    contacts.push(createFakeContact());
    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
    console.log('Added one contact.');
  } catch (error) {
    console.error('Error adding one contact:', error.message);
  }
};

