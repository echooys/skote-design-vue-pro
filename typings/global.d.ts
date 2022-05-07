declare type Recordable<T = any> = Record<string, T>

declare type __APP_INFO__ = {
  pkg: {
    name: string
    version: string
    dependencies: Recordable<string>
    devDependencies: Recordable<string>
  }
  lastBuildTime: string
}

declare interface ImportMetaEnv {
  SKOTE_PORT: number
  SKOTE_USE_PWA: boolean
  SKOTE_PUBLIC_PATH: string
  SKOTE_PROXY: [string, string][]
  SKOTE_GLOB_APP_TITLE: string
  SKOTE_GLOB_APP_SHORT_NAME: string
  SKOTE_USE_CDN: boolean
  SKOTE_DROP_CONSOLE: boolean
  SKOTE_BUILD_COMPRESS: 'gzip' | 'brotli' | 'none'
  SKOTE_BUILD_COMPRESS_DELETE_ORIGIN_FILE: boolean
  SKOTE_LEGACY: boolean
  SKOTE_USE_IMAGEMIN: boolean
  SKOTE_GENERATE_UI: string
}
