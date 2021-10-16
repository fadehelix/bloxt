import faker from 'faker';

const randomSentence = (): string => faker.hacker.phrase();

export { randomSentence };
