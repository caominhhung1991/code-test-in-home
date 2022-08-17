export function formatSearch(se: string) {
  se = decodeURIComponent(se);
  se = se.substr(1); //Trích xuất số ký tự được chỉ định trong chuỗi từ số chỉ mục bắt đầu
  let arr = se.split('&'), //Tách chuỗi thành mảng chuỗi
    obj: Record<string, string> = {},
    newarr = [];
  arr.forEach((v, i) => {
    // Truyền qua mảng
    newarr = v.split('=');
    if (typeof obj[newarr[0]] === 'undefined') {
      obj[newarr[0]] = newarr[1];
    }
  });
  return obj;
}
