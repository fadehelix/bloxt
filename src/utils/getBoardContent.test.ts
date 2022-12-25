import { describe, expect } from 'vitest';
import getBoardContent, {
  asHtml,
  asMarkdown,
  asPlainText,
} from './getBoardContent';

let content: NodeListOf<Element>;
const defaultBoardHTML = `
<div class="Board">
  <div class="Block">
    <div class="BlockContent"><h2>First block content</h2></div>
  </div>
  <div class="Block">
    <div class="unexpected">it's a trap!</div>
    <div class="BlockContent"><p><strong>Second</strong> block content</p></div>
  </div>
</div>`;

const defaultContent = () => {
  document.body.innerHTML = defaultBoardHTML;
  content = document.querySelectorAll('.Board .BlockContent');
};

describe('Get Board Content', () => {
  beforeAll(() => {
    defaultContent();
  });
  afterEach(() => {
    defaultContent();
  });
  test('as HTML', () => {
    const result = asHtml(content);
    expect(result).toEqual(
      '<h2>First block content</h2><p><strong>Second</strong> block content</p>'
    );
  });
  test('as plain text', () => {
    const result = asPlainText(content);
    expect(result).toEqual('First block content\nSecond block content');
  });

  test('as Markdown', () => {
    const result = asMarkdown(content);
    expect(result).toEqual(
      '## First block content\n\n**Second** block content'
    );
  });
  test('only one block as HTML', () => {
    const defaultContent = document.body.innerHTML;
    document.body.innerHTML = `
      <div class="Board">
        <div class="Block">
          <div class="BlockContent"><h2>First block content</h2></div>
        </div>
      </div>`;
    content = document.querySelectorAll('.Board .BlockContent');
    const result = asHtml(content);
    expect(result).toEqual('<h2>First block content</h2>');
    document.body.innerHTML = defaultContent;
  });
  test('wtf with body content?', () => {
    const result = asPlainText(content);
    console.log(result);
  });
});
