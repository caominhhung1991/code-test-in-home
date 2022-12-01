import React from 'react'
import {useAppDispatch, useAppState} from 'stores'
import {Button} from 'antd'
import {selectCanThayTheId} from './can-thay-the.store'

type Props = {
  label?: string
  name?: string
  onAfterSelect?(id: any): any
}

function CanThayTheSelectButtons(props: Props) {
  const {onAfterSelect} = props

  const dispatch = useAppDispatch()
  const {canThayThes, selectedCanThayTheId} = useAppState(state => state.canThayThe)

  function onSelectCanThayTheId(canThayTheId: any) {
    dispatch(selectCanThayTheId(canThayTheId))
    onAfterSelect?.(canThayTheId)
  }

  const canThayThesArray = React.useMemo(() => {
    let datasArray = Object.values(canThayThes || {})
    return datasArray
  }, [canThayThes])

  return <>
    {canThayThesArray.map((canThayTheData) => {
      return <Button
        size={'small'}
        key={canThayTheData.id}
        type={selectedCanThayTheId === canThayTheData.id ? 'primary' : undefined}
        onClick={() => onSelectCanThayTheId(canThayTheData.id)}
      >{canThayTheData.tenCanThayThe}</Button>
    })}
  </>
}

export default CanThayTheSelectButtons
