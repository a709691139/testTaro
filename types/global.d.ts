/// <reference types="amap-js-api-typings" />

declare module '*.png';
declare module '*.gif';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg';
declare module '*.css';
declare module '*.less';
declare module '*.scss';
declare module '*.sass';
declare module '*.styl';
declare module '@tarojs/mobx';
declare module 'qs';

/**
 * wx
 */
declare var wx: any;

declare module 'zrender';
declare module 'zrender/dist/zrender.min.js';

// type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

// type Overwrite<T, U> = Omit<T, Extract<keyof T, keyof U>> & U

type PartialWith<T, K extends keyof T> = Partial<Pick<T, K>> & Pick<T, Exclude<keyof T, K>>;

type RequiredWith<T, K extends keyof T> = Required<Pick<T, K>> & Pick<T, Exclude<keyof T, K>>;

/**
 * 对页面配置的补充
 */
interface PageConfigExt {
  backgroundColorTop?: string;
  backgroundColorBottom?: string;
}

/**
 * 全局配置的补充
 */
interface AppConfigExt {
  window: PageConfigExt;
}

/**
 *  第三方组件
 */
declare namespace JSX {
  interface IntrinsicElements {
    'ff-canvas': any;
    F2Canvas: any;
  }
}

declare module '@antv/f2';
declare module 'taro-f2' {
  import * as React from 'react';
  export interface IProps {
    onCanvasInit: any;
  }
  export class F2Canvas extends React.Component<IProps, any> {
    static fixF2(F2: any) {}
  }
}

interface Window {
  plus: any;
}
