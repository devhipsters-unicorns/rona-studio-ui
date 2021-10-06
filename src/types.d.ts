import { Emitter } from 'mitt'

export type TvoidFunctionEvent = (event: any) => Promise<void>
export type TvoidFunctionItem = (item: any) => Promise<void>
export type TfunctionHtml = (target: HTMLElement) => Promise<HTMLElement>
export type TvoidFunction = () => Promise<void>
export type TFunction = (event: any) => void
export type TFunctionString = (item: any) => string

export interface iEmitter extends Emitter<any> {}
