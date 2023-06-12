// const TurndownService = require('turndown')
import TurndownService from "turndown"
export const htmlToMarkdown = (content) => {

  const turndownService = new TurndownService()
  const markdown = turndownService.turndown(content);
  console.log(markdown);
  return markdown;

};
