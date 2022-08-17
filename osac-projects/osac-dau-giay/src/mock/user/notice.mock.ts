import {Notice} from '@caominhhung1991/components'
import {intercepter, mock} from '../config'

const mockNoticeList: Notice<'all'>[] = [
  {
    id: '000000001',
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png',
    title: 'Bạn đã nhận được 14 báo cáo hàng tuần mới',
    datetime: '2017-08-09',
    type: 'notification'
  },
  {
    id: '000000002',
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png',
    title: 'Tenni bạn khuyên bạn nên vượt qua vòng phỏng vấn thứ ba',
    datetime: '2017-08-08',
    type: 'notification'
  },
  {
    id: '000000003',
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/kISTdvpyTAhtGxpovNWd.png',
    title: 'Mẫu này có thể phân biệt nhiều loại thông báo',
    datetime: '2017-08-07',
    read: true,
    type: 'notification'
  },
  {
    id: '000000004',
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png',
    title: 'Biểu tượng bên trái để phân biệt các loại khác nhau',
    datetime: '2017-08-07',
    type: 'notification'
  },
  {
    id: '000000005',
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png',
    title: 'Không vượt quá cả hai dòng từ, tự động cắt ngắn',
    datetime: '2017-08-07',
    type: 'notification'
  },
  {
    id: '000000006',
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
    title: 'Jusi Li nhận xét về bạn',
    description: 'Mô tả Thông tin Mô tả Thông tin Thông tin',
    datetime: '2017-08-07',
    type: 'message',
    clickClose: true
  },
  {
    id: '000000007',
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
    title: 'Zhu Xiang trả lời bạn',
    description: 'Mẫu này được sử dụng để nhắc nhở bạn tương tác với bạn, hãy đặt "ai" ở phía bên trái',
    datetime: '2017-08-07',
    type: 'message',
    clickClose: true
  },
  {
    id: '000000008',
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
    title: 'chức vụ',
    description: 'Mẫu này được sử dụng để nhắc nhở bạn tương tác với bạn, hãy đặt "ai" ở phía bên trái',
    datetime: '2017-08-07',
    type: 'message',
    clickClose: true
  },
  {
    id: '000000009',
    title: 'Tên nhiệm vụ.',
    description: 'Nhiệm vụ cần phải bắt đầu trước 2017-01-12 20:00',
    extra: 'Chưa bắt đầu',
    status: 'todo',
    type: 'event'
  },
  {
    id: '000000010',
    title: 'Thay đổi mã khẩn cấp của bên thứ ba',
    description: 'Guan Lin được gửi đến 2017-01-06, bạn cần hoàn thành nhiệm vụ thay đổi mã trước năm 2017-01-07',
    extra: 'Ngay lập tức hết hạn',
    status: 'urgent',
    type: 'event'
  },
  {
    id: '000000011',
    title: 'Kiểm tra bảo mật thông tin',
    description: 'Đề cập đến việc hoàn thành việc gia hạn và phát hành Zambale trước 2017-01-09',
    extra: 'Đã 8 ngày',
    status: 'doing',
    type: 'event'
  },
  {
    id: '000000012',
    title: 'ABCD Phiên bản phát hành.',
    description: 'Guan Lin được gửi đến 2017-01-06, bạn cần hoàn thành nhiệm vụ thay đổi mã trước năm 2017-01-07',
    extra: 'Trong tiến trình',
    status: 'processing',
    type: 'event'
  }
]

mock.mock('/user/notice', 'get', intercepter(mockNoticeList))
