import { title } from "process";

const { Client } = require("@notionhq/client")

// Initializing a client
const notion = new Client({
  auth: process.env.NOTION_TOKEN,
})

export const getAllPosts = async () => {
    const posts = await notion.databases.query({
        database_id: process.env.NOTION_DATABASE_ID,
        page_size: 100,
    });

    const allPosts = posts.results;

    // Todo Nameが未定義なら無視する
    return allPosts.map((post: any) => {
      return getPageMetaData(post);
    });
}

const getPageMetaData = (post: any) => {
  let title: string;
  try {
  title = post.properties.Name.title[0].plain_text;
  } catch(error) {
    return null;
  }
  return {
    Name: title
  }
}