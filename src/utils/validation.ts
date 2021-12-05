export const isBlockContentEmpty = (content: string) => {
  const parser = new DOMParser();
  return !parser.parseFromString(content, 'text/html').documentElement
    .textContent;
};
