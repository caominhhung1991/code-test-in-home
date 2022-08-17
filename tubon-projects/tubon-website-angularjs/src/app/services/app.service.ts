import {Injectable} from '@angular/core';

@Injectable()
export class AppService {
  result: any;
  tuyendungs: any = [
    {
      id: 1,
      chucdanh: 'Quản lý',
      bophan: 'Quản lý',
      soluong: '5',
      diadiem: 'Tp.HCM, Bình Dương, Đồng Nai',
      ngayhethan: '',
      mota: {
        bangcap: 'Tốt nghiệp Trung cấp, Cao Đẳng - Đại học ngành công nghệ thực phẩm, Kỹ thuật nữ công hoặc quản trị nhà hàng khách sạn.',
        kinhnghiem: 'Có 1 năm kinh nghiệm làm vị trí quản lý trở lên, ưu tiên ứng viên có kinh nghiệm trong lĩnh vực suất ăn công nghiệp.',
        kynang: [
          'Có kỹ năng tổ chức lãnh đạo, quản lý nhân viên, giao tiếp tốt với khách hàng.',
          'Nhanh nhẹn, trung thực, nhiệt tình.',
          'Có kiến thức về vệ sinh an toàn thực phẩm, biết cách lập thực đơn, oder, báo cáo chi phí.'
        ]
      }
    },
    {
      id: 2,
      chucdanh: 'Đầu bếp',
      soluong: '10',
      bophan: 'Nhà bếp',
      diadiem: 'Tp.HCM, Bình Dương, Đồng Nai',
      ngayhethan: '',
      mota: {
        bangcap: 'Có chứng chỉ nấu ăn.',
        kinhnghiem: 'Có ít nhất 03 năm trong ngành suất ăn công nghiệp',
        kynang: [
          'Biết chế biến các món ăn phù hợp khẩu vị theo vùng miền.',
          'Có khả năng lên thực đơn, nấu các món nước như: bún, phở, bánh canh….',
          'Nhanh nhẹn, chăm chỉ, chấp nhận sự điều động của công ty.'
        ]
      }
    },
    {
      id: 3,
      chucdanh: 'Phụ bếp',
      soluong: '10',
      bophan: 'Nhà bếp',
      diadiem: 'Tp.HCM, Bình Dương, Đồng Nai',
      ngayhethan: '',
      mota: {
        bangcap: 'Không yêu cầu',
        kinhnghiem: 'Không yêu cầu',
        kynang: [
          'Có khả năng nấu ăn.',
          'Có sức khỏe, chăm chỉ, nhiệt tình.',
          'Ưu tiên người địa phương'
        ]
      }
    },
    {
      id: 4,
      chucdanh: 'Lao động phổ thông',
      soluong: '15',
      bophan: 'Quầy phục vụ',
      diadiem: 'Tp.HCM, Bình Dương, Đồng Nai',
      ngayhethan: '',
      mota: {
        bangcap: 'Không yêu cầu',
        kinhnghiem: 'Không yêu cầu',
        kynang: [
          'Khỏe mạnh, nhanh nhẹn, chăm chỉ.',
          'Ưu tiên người địa phương'
        ]
      }
    }

  ];

  getTuyenDungs() {
    return this.tuyendungs;
  }

  getTuyenDung(id: any) {
    return this.tuyendungs.find(td => td.id === id);
  }
}
