const imageRootURLDev = 'https://firebasestorage.googleapis.com/v0/b/mydashboard-5f063.appspot.com/o'
const imageRootURLProd = 'https://firebasestorage.googleapis.com/v0/b/osac-a381e.appspot.com/o'

export const imageRootURL = process.env.NODE_ENV === 'production' ? imageRootURLProd : imageRootURLDev

export const cMNDImageURL = imageRootURL + '/cmnd'
export const hoaDonImageURL = imageRootURL + '/hoaDon'
