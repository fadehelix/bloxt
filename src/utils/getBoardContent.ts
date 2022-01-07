import TurndownService from 'turndown';

interface IStrategy {
  (strategy: NodeListOf<Element>): string;
}

export const asHtml: IStrategy = (blocks) => {
  const html = Array.from(blocks)
    .map((block) => block.innerHTML)
    .join('');

  return html;
};

export const asPlainText: IStrategy = (blocks) =>
  Array.from(blocks)
    .map((block) => block.textContent)
    .join('\n');

export const asMarkdown: IStrategy = (blocks) => {
  const turndownService = new TurndownService({ headingStyle: 'atx' });
  const markdown = turndownService.turndown(asHtml(blocks));
  return markdown;
};

const getBoardContent = (type: IStrategy) => {
  const blocks = document.querySelectorAll('.Board .BlockContent');
  return type(blocks);
};

export default getBoardContent;
