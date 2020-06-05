import filterLinks from './filter-links';

describe('Filter links', () => {
  it('should return an empty array when arg not defined', () => {
    const expected = [];
    expect(filterLinks()).toEqual(expected);
  });

  it('should return links with both "text" and "link" values', () => {
    const links = [
      { text: 'link1', link: 'https://link1.com' },
      { text: 'link2', link: '' },
      { text: '', link: 'https://link3.com' },
      { text: 'link4', link: 'https://link4.com' },
    ];

    const expected = [
      { text: 'link1', link: 'https://link1.com' },
      { text: 'link4', link: 'https://link4.com' },
    ];
    expect(filterLinks(links)).toEqual(expected);
  });
});
