import sortMarkdown from './sort-markdown';

describe('Sort markdown', () => {
  it('should not sort markdown array when no fields supplied', () => {
    const fields = [];
    const markdown = [
      { node: { frontmatter: { order: 2 } } },
      { node: { frontmatter: { order: 3 } } },
      { node: { frontmatter: { order: 1 } } },
    ];

    const expected = [
      { node: { frontmatter: { order: 2 } } },
      { node: { frontmatter: { order: 3 } } },
      { node: { frontmatter: { order: 1 } } },
    ];
    expect(sortMarkdown(markdown, fields)).toEqual(expected);
  });

  it('should sort markdown array by primary field alone', () => {
    const fields = ['order'];
    const markdown = [
      { node: { frontmatter: { order: 2 } } },
      { node: { frontmatter: { order: 3 } } },
      { node: { frontmatter: { order: 1 } } },
    ];

    const expected = [
      { node: { frontmatter: { order: 1 } } },
      { node: { frontmatter: { order: 2 } } },
      { node: { frontmatter: { order: 3 } } },
    ];
    expect(sortMarkdown(markdown, fields)).toEqual(expected);
  });

  it('should sort markdown array by primary and secondary fields', () => {
    const fields = ['order', 'title'];
    const markdown = [
      { node: { frontmatter: { order: 1, title: 'a' } } },
      { node: { frontmatter: { order: 3, title: 'c' } } },
      { node: { frontmatter: { order: 1, title: 'b' } } },
    ];

    const expected = [
      { node: { frontmatter: { order: 1, title: 'a' } } },
      { node: { frontmatter: { order: 1, title: 'b' } } },
      { node: { frontmatter: { order: 3, title: 'c' } } },
    ];
    expect(sortMarkdown(markdown, fields)).toEqual(expected);
  });
});
