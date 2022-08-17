import { PageData } from '@caominhhung1991/components';

export const getTableData = <T extends any[]>(pageNum = 1, pageSize = 10, totalData: T) => {
  const total: number = totalData.length;
  const tableData: PageData<T[0]> = {
    data: [],
    pageNum,
    pageSize,
    total
  };
  if (pageSize >= total) {
    //pageSize lớn hơn hoặc bằng tổng độ dài dữ liệu, cho biết rằng chỉ có 1 trang dữ liệu hoặc không có dữ liệu
    tableData.data = totalData;
    tableData.pageNum = 1; //Lấy trang đầu tiên trực tiếp
  } else {
    //pageSize nhỏ hơn tổng độ dài dữ liệu, dữ liệu nhiều hơn 1 trang
    const num = pageSize * (pageNum - 1); //Tính tổng số tất cả dữ liệu trước trang hiện tại (không bao gồm)
    if (num < total) {
      //Nếu tổng số tất cả dữ liệu trước trang hiện tại nhỏ hơn (không bằng) tổng độ dài tập dữ liệu,
      // điều đó có nghĩa là số trang hiện tại không vượt quá số trang tối đa
      const startIndex = num; //Chỉ mục của dữ liệu đầu tiên trên trang hiện tại trong tổng tập dữ liệu
      const endIndex = num + pageSize - 1; //Chỉ mục của dữ liệu cuối cùng trên trang hiện tại
      tableData.data = totalData.filter((_, index) => index >= startIndex && index <= endIndex);
      //Khi số mục dữ liệu trên trang hiện tại ít hơn số mục tối đa trên mỗi trang,
      // dữ liệu cũng được lọc theo phạm vi của số mục tối đa
    } else {
      //Số trang hiện tại vượt quá số trang tối đa, trang cuối cùng thực tế được tính toán
      // và dữ liệu trang cuối cùng được trả về tự động
      const size = Math.ceil(total / pageSize); //取商
      const rest = total % pageSize; //取余数
      if (rest > 0) {
        //余数大于0，说明实际最后一页数据不足pageSize，应该取size+1为最后一条的页码
        tableData.pageNum = size + 1; //当前页码重置，取size+1
        tableData.data = totalData.filter((_, index) => index >= pageSize * size && index <= total);
      } else if (rest === 0) {
        //余数等于0，最后一页数据条数正好是pageSize
        tableData.pageNum = size; //当前页码重置，取size
        tableData.data = totalData.filter((_, index) => index >= pageSize * (size - 1) && index <= total);
      } //注：余数不可能小于0
    }
  }
  return tableData;
};
