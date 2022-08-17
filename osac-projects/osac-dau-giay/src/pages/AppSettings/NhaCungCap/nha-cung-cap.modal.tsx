import React from 'react'
import {MyModal} from '@caominhhung1991/components'
import {useAppDispatch, useAppState} from 'stores'
import * as formActions from 'stores/form.store'
import {nhaCungCapConstants} from './nha-cung-cap.constants'
import {useActions} from 'hooks/useActions'
import {NhaCungCap} from './NhaCungCap'
import {modalConstants} from 'app-constants'
import {addSelectedId, onPending} from './nha-cung-cap.store'
import {convertMomentToString, getFormItemFields} from '@caominhhung1991/components'
// import nhaCungCapDatas from './nha-cung-cap-data.json'

const modalId = modalConstants.nhaCungCapModal

type ModalProps = {
  onAfterAddFinish?(id: string): void
}

const NhaCungCapModal = (props: ModalProps) => {
  const {onAfterAddFinish} = props

  const actions = useActions({Instance: NhaCungCap, onPending, addSelectedId})

  const dispatch = useAppDispatch()
  const {modal, datas} = useAppState(state => state.form)

  const visible = React.useMemo(() => {
    return !!modal?.[modalId]?.open
  }, [modal[modalId]])

  function onClose() {
    dispatch(formActions.closeModal({modalId}))
  }

  async function onOk(currentData: any, validatedValues: any) {
    let res: any = true

    const convertedData = convertMomentToString(nhaCungCapConstants.getInputFields(), validatedValues)

    if (validatedValues) {
      if (!currentData.id) { // ADD
        res = await dispatch(actions.onAddAsync({validatedValues: convertedData}))

        onAfterAddFinish?.(res?.id)
        res = Boolean(res)
      } else { // UPDATE
        res = Boolean(await dispatch(actions.onUpdateAsync({
          currentData, validatedValues: convertedData
        })))
      }
    }

    res && dispatch(formActions.closeModal({modalId}))
  }

  React.useEffect(() => {
    // console.log(nhaCungCapDatas, 'nhaCungCapDatas')
    // Object.entries(nhaCungCapDatas).forEach(([nhaCungCapId, nhaCungCapData]) => {
    //   const pickedData = {
    //     ...nhaCungCapData,
    //     tenNhaCungCap: nhaCungCapData.name,
    //     // @ts-ignore
    //     soDienThoai: nhaCungCapData?.phone || '',
    //     // @ts-ignore
    //     diaChiNhaCungCap: nhaCungCapData?.address || '',
    //     // @ts-ignore
    //     nguoiLienHe: nhaCungCapData?.contact || '',
    //     nganhNgheKinhDoanh: '',
    //   }
    //   // @ts-ignore
    //   delete pickedData.phone
    //   // @ts-ignore
    //   delete pickedData.address
    //   // @ts-ignore
    //   delete pickedData.searchName
    //   // @ts-ignore
    //   delete pickedData.status
    //   // @ts-ignore
    //   delete pickedData.contact
    //
    //   // dispatch(actions.onUpdateAsync({currentData: pickedData, validatedValues: pickedData}))
    // })
  }, [])

  return (
    <MyModal<any>
      form
      title='NhaCungCap'
      visible={visible}
      onClose={onClose}
      onOkModal={onOk}
      formOptions={getFormItemFields(nhaCungCapConstants.getInputFields())}
      formProps={{
        labelCol: {span: 8},
        wrapperCol: {span: 16}
      }}
      width={700}
      modalId={modalId}
      datas={datas}
    >
    </MyModal>
  )
}

export default NhaCungCapModal
