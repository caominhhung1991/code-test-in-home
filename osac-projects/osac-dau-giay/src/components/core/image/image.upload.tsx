import React from 'react'
import {useAppDispatch} from 'stores'
import {PlusOutlined} from '@ant-design/icons'
import {Modal, Upload} from 'antd'
import {UploadFile} from 'antd/lib/upload/interface'
import {UploadRequestOption} from 'rc-upload/lib/interface'
import {useStates} from 'utils'
import {beforeUpload, getBase64} from '@caominhhung1991/components'
import {addImage} from './image.store'

type ImageUploadProps = {
  buttonText?: string
  path?: string[]
}

function ImageUpload(props: ImageUploadProps) {
  const {buttonText, path} = props

  const dispatch = useAppDispatch()

  const [state, setState] = useStates({
    previewVisible: false,
    previewImage: '',
    previewTitle: '',
    fileList: []
  })

  const {previewVisible, previewImage, fileList, previewTitle} = state

  function handleCancel() {
    setState({previewVisible: false})
  }

  async function handlePreview(file: UploadFile) {
    if (!file.url && !file.preview && file.originFileObj) {
      file.preview = await getBase64(file.originFileObj)
    }

    setState({
      previewImage: file.url || file.preview,
      previewVisible: true,
      previewTitle: file.name || file.url?.substring(file.url.lastIndexOf('/') + 1)
    })
  }

  function handleChange({fileList}: any) {
    setState({fileList})
  }

  const buttonElement = <div>
    <PlusOutlined/>
    <div style={{marginTop: 8}}>{buttonText ? buttonText : 'Upload'}</div>
  </div>

  return <>
    <Upload
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      listType="picture-card"
      // @ts-ignore
      fileList={fileList}
      onPreview={handlePreview}
      onChange={handleChange}
      accept='.png,.jpg'
      customRequest={(res: UploadRequestOption) => {
        const {onSuccess, onError, file} = res
        const isOkToUpload = typeof file !== 'string' && beforeUpload(file)

        const checkInfo = () => {
          setTimeout(async () => {
            if (isOkToUpload) {
              //@ts-ignore
              await dispatch(addImage({file, path}))
              //@ts-ignore
              onSuccess?.(null, file)
            } else {
              //@ts-ignore
              onError?.()
            }
          }, 100)
        }

        checkInfo()
      }}
    >
      {fileList.length >= 1 ? null : buttonElement}
    </Upload>

    <Modal
      visible={previewVisible}
      title={previewTitle}
      footer={null}
      onCancel={handleCancel}
    >
      <img alt="example" style={{width: '100%'}} src={previewImage}/>
    </Modal>
  </>
}

export default ImageUpload
