/**
 * commitlint commit提交规范
 * @type build | chore | ci | docs | feat | fix | perf | refactor | revert | style | test
 * @commit type(SCOPE): commit message
 * @tip 可使用 https://gitmoji.dev/ 表情丰富提交内容
 */
export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // type 类型定义，表示 git 提交的 type 必须在以下类型范围内
    'type-enum': [
      2,
      'always',
      [
        'test', // 增加测试
        'style', // 代码格式(不影响代码运行的变动)
        'revert', // 回退
        'refactor', // 重构(既不增加新功能，也不是修复bug)
        'perf', // 性能优化
        'fix', // 修复 bug
        'feat', // 新功能 feature
        'docs', // 文档注释
        'ci', // 自动化
        'chore', // 构建过程或辅助工具的变动
        'build', // 打包
      ],
    ],
    'body-max-line-length': [0, 'always', Infinity],
  },
}
