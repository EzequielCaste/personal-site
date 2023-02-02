import unified from 'unified';
import parse from 'remark-parse';
import gfm from 'remark-gfm';
import remark2rehype from 'remark-rehype';
import stringify from 'rehype-stringify';

export default async function markdownToHtml(markdownData: string) {
  const result = await unified()
    .use(parse)
    .use(gfm)
    .use(remark2rehype)
    .use(stringify)
    .process(markdownData);

  return result.toString();
}
