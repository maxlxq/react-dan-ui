import { defineConfig } from 'dumi';

const repo = 'react-dan-ui';
const repo_url = 'https://github.com/maxlxq/react-dan-ui';

export default defineConfig({
  title: repo,
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  mode: 'site',
  hash: true,
  // Because of using GitHub Pages
  base: `/${repo}/`,
  publicPath: `/${repo}/`,
  fastRefresh: {},
  resolve: {
    includes: ['docs', 'src/components'],
  },
  navs: {
    'en-US': [
      null,
      {
        title: 'Test',
        children: [
          { title: 'one', path: `${repo_url}` },
          { title: 'two', path: `${repo_url}` },
          { title: 'three', path: `${repo_url}` },
        ],
      },
      {
        title: 'GitHub',
        path: 'https://github.com/maxlxq/react-dan-ui',
      },
    ],
    'zh-CN': [
      null,
      {
        title: '测试',
        children: [
          { title: '一', path: `${repo_url}` },
          { title: '二', path: `${repo_url}` },
          { title: '三', path: `${repo_url}` },
        ],
      },
      {
        title: 'GitHub',
        path: 'https://github.com/maxlxq/react-dan-ui',
      },
    ],
  },
  // more config: https://d.umijs.org/config
});
