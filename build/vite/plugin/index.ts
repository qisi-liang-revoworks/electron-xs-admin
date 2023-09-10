import vue from '@vitejs/plugin-vue';

import vueJsx from '@vitejs/plugin-vue-jsx';

import type { Plugin, ConfigEnv } from 'vite';

// 检查插件状态
import Inspect from 'vite-plugin-inspect';
// 按需加载样式配置
import { configStylePlugin } from './style';
// svg配置
import { configSvgPlugin } from './svg';
// 压缩
import { configCompressPlugin } from './compress';
// mock
import { configMockPlugin } from './mock';
// pwd
import { configPwaPlugin } from './pwa';
// 性能分析工具
import { configVisualizerPlugin } from './visualizer';
// 图片压缩
import { configImageminPlugin } from './imagemin';
// vue-i18n
import { configVueI18nPlugin } from './i18n';
// element
import { configAutoElementStylePlugin } from './element';

// 自定义插件 问候语，打包检测用时、大小
import viteBuildOuteInfo from './buildOuteInfo';

// electron ts装换
import electronConfig from './electronConfig';

// eslint
// import { configEsLinterPlugin } from './eslinter'

export function createVitePlugins(isBuild = false, _configEnv: ConfigEnv) {
  const vitePlugins: (Plugin | Plugin[])[] = [
    // vue({
    //   reactivityTransform: true,
    // }),
  ];

  vitePlugins.push(
    vue(),
    vueJsx(), // if needed
  );

  vitePlugins.push(configStylePlugin());

  vitePlugins.push(configSvgPlugin());

  vitePlugins.push(configCompressPlugin('gzip', true));

  vitePlugins.push(configMockPlugin(isBuild));

  vitePlugins.push(configPwaPlugin());

  vitePlugins.push(configVisualizerPlugin());

  vitePlugins.push(configImageminPlugin());

  vitePlugins.push(viteBuildOuteInfo());

  vitePlugins.push(electronConfig(['electron/main.ts', 'electron/preload.ts']));

  vitePlugins.push(configVueI18nPlugin());

  vitePlugins.push(Inspect());

  vitePlugins.push(configAutoElementStylePlugin());

  // 使用此插件会导致vite启动变慢 100ms左右
  // vitePlugins.push(configEsLinterPlugin(configEnv))

  return vitePlugins;
}
