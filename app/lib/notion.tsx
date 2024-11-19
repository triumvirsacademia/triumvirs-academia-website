import { Client } from '@notionhq/client';

const notion = new Client({ auth: "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" });
const database_id: string = "14259840e7c18089b3c1d60ca8536f03";

export const addToDatabase = async (first_name: string, last_name: string, email: string, phone_number: string, school: string, year_level: number) => {
  try {

    const response = await notion.pages.create({
      parent: { 
        type: "database_id",
        database_id: database_id,
        },
      properties: {
        "first_name": {
          title: [
            {
              text: {
                content: first_name,
              },
            },
          ],
        },
        "last_name": {
            rich_text: [
                {
                  text: {
                    content: last_name,
                  },
                },
              ],
        },
        "email_address": {
          email: email,
        },
        "phone_number": {
            phone_number: phone_number,
        },
        "school": {
            rich_text: [
                {
                  text: {
                    content: school,
                  },
                },
              ],
        },
        "year_level": {
            number: year_level,
        }
      },
    });
    console.log('Notion API Response:', response);
    return response;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to add data to Notion');
  }
};