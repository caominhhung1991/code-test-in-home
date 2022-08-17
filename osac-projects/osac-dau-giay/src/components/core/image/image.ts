import {RcFile} from 'antd/lib/upload/interface'

export namespace NImage {
  export type PayloadProps = {
    file?: RcFile
    path?: string[]
  }

  export type ImageState = {
    loading: boolean
  }
}
