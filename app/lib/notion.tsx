import { Client } from '@notionhq/client';

const notion = new Client({ auth: process.env.NOTION_API_TOKEN });
const database_id: string = process.env.NOTION_DATABASE_ID || "";

export const addToDatabase = async (first_name: string, last_name: string, email: string, phone_number: string, school: string, year_level: number, subjects: string[]) => {
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
        },
        "subjects": {
          multi_select: subjects.map((subject: string) => ({ name: subject })),
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