import { FlatCompat } from '@eslint/eslintrc'
import js from '@eslint/js'

// 导入 ESLint 推荐配置
const compat = new FlatCompat({
  // 添加 recommendedConfig
  recommendedConfig: js.configs.recommended,
})

export default function leedom(options = {
  pure: false,
  extends: [],
  rules: [],
}) {
  return [
    // 直接使用推荐配置
    js.configs.recommended,

    // 兼容旧版 extends 语法
    ...compat.extends(
      ...(!options.pure ? ['@leedomjs'] : []),
      ...(options.extends || []),
    ),

    // 自定义规则
    ...(options.rules || []),
  ]
}
