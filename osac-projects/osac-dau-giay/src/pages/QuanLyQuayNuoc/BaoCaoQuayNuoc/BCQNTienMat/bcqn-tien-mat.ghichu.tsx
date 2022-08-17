import React from 'react'

export function BcqnTienMatGhichu(cell: any) {

  const ghiChus: any = React.useMemo(() => {
    if (!cell) return []

    return cell.split(';')
  }, [cell])

  return (
    <div>
      {
        ghiChus.map((ghiChuText: string, index: number) => {
          return <div key={index}>{ghiChuText}</div>
        })
      }
    </div>
  )
}

export default BcqnTienMatGhichu
