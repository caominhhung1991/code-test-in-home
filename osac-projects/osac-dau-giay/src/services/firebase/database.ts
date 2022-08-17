import {getTimestamp, replaceUndefinedToNull} from '@caominhhung1991/components'
import {equalTo, get, getDatabase, onValue, orderByChild, push, query, ref, set, update} from 'firebase/database'

export const listenerDB: any[] = []

// understood
export async function readData(refPath: string[]) {
  const db = getDatabase()

  const dbRef = ref(db, refPath.join('/'))

  const onSnapshot = await get(query(dbRef))

  return onSnapshot.val()
}

// check existed
export async function checkExisted(pathDatas: any[], key: any, value: any) {
  const db = getDatabase()
  const dbRef = ref(db, pathDatas.join('/'))

  const queryRef = query(dbRef, ...[orderByChild(key), equalTo(value)])

  return !!(await get(queryRef)).size
}

// Cực kì và cực kì cẩn thận khi sửa dụng chức năng này
export async function updateData(refPath: any[] | null, data: any) {
  const db = getDatabase()

  let dbRef = null
  if (refPath) {
    dbRef = ref(db, refPath.join('/'))
  } else {
    dbRef = ref(db)
  }

  const replacedData = replaceUndefinedToNull(data)

  return await update(dbRef, replacedData)
}

// Cực kì và cực kì cẩn thận khi sửa dụng chức năng này
export async function addData(refPath: string[] | null, data: any) {
  const db = getDatabase()

  if (refPath && data) {
    let dbRef = ref(db, refPath.join('/'))
    const newKey = push(dbRef).key

    const dataRef = ref(db, [...refPath, newKey].join('/'))

    const updateData = {
      ...data,
      id: newKey,
      active: true,
      ...getTimestamp()
    }

    const replacedData = replaceUndefinedToNull(updateData)
    await set(dataRef, replacedData)

    return updateData
  }
}

export async function getData(refPath: string[]) {
  const db = getDatabase()
  const dbRef = ref(db, refPath.join('/'))
  const dataRef = await get(dbRef)

  return dataRef.val() || {}
}

export const onValueDB = onValue

export function stopListen() {
  while (listenerDB.length) {
    const listen = listenerDB.pop()[1]
    listen?.()
  }
}

export function stopListenById(listenId: string) {
  const listenIndex = listenerDB.findIndex(([id, listener]) => {
    if (id === listenId) {
      listener?.()
    }

    return id === listenId
  })

  listenerDB.splice(listenIndex, 1)
}
