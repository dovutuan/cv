export const participatingProjects: any = {
  VI: [
    {
      nameProject: 'Vstream',
      position: 'Developer full-stack',
      description:
        '- Công nghệ Php sử dụng Framework Laravel + Vuejs + Mysql + Docker + Aws.'
        + '\n' +
        '- Team size: 6MM.'
        + '\n' +
        '- Là dự án maintain của khách hàng.'
        + '\n' +
        '- Dự án hỗ trợ quảng cáo sản phẩm cho công ty. Cho phép các công ty tải lên video quảng cáo sản phẩm cho công ty của mình.'
        + '\n' +
        '- Tìm kiếm từ khóa bằng giọng nói sử dụng Amivoice của Advanced Media.'
        + '\n' +
        '- Tạo mã scrpit cho phép nhúng và hiển thị nội dung trên các website khác nhau.'
        + '\n' +
        '- Code được auto build lên EC2 bằng workflows của github. Các video, log được quản lý trên S3 của AWS. Hằng ngày sẽ chạy để lấy log lưu lại vào database.'
    },
    {
      nameProject: 'Kks',
      position: 'Team leader frontend',
      description:
        '- Công nghệ Angular + login AzureAD.'
        + '\n' +
        '- Team size: 35MM.'
        + '\n' +
        '- Dự án quản lý thông tin sản phẩm, kho hàng, quản lý nhập xuất sản phẩm cho công ty điện tử.'
        + '\n' +
        '- Login bằng tài khoản microsoft dựa trên AzureAD.'
        + '\n' +
        '- Hiện thị tree sản phẩm theo các cấp gồm: sản phẩm thành phẩm, processors, linh kiện.'
        + '\n' +
        '- Tính toán lượng sản phẩm lỗi, tồn kho, thiếu hàng, được sản xuất dựa trên số liệu nhập thực tế hằng ngày.'
        + '\n' +
        '- Quét mã QR code để quản lý nhập xuất kho đơn hàng sản phẩm. Gửi thông báo tới người quản lý và người thuộc kho về xuất nhập kho của đơn hàng.'
        + '\n' +
        '- Dự án phân quyền cho từng action trên màn hình và check timeout sau 20 phút không sử dụng.'
    },
    {
      nameProject: 'Dcc',
      position: 'Developer backend',
      description:
        '- Công nghệ Php sử dụng Framework Laravel + Angular + Mysql + Postgresql.'
        + '\n' +
        '- Team size: 20MM.'
        + '\n' +
        '- Dự án bệnh viện mắt Nhật Bản gồm 2 server và đều được quản lý nghiêm ngặt. Do thông tin cơ sở dữ liệu đều được quản lý private nên để có thể get được data cần phải thông qua odbc_exec.'
        + '\n' +
        '- Server 1 chạy mạng local có nhiệm vụ lấy dữ liệu từ database Postgresql và insert vào database với dạng mã hóa xorCipher.'
        + '\n' +
        '- Hằng ngày auto run command để lấy dữ liệu mới nhất nếu mỗi lần gặp lỗi phải lưu lại log trên database. Mỗi lần insert thành công phải lưu log theo ngày vào file trên server.'
        + '\n' +
        '- Cung cấp các command để khách hàng có thể check data mã hóa xorCipher.'
        + '\n' +
        '- Server 2 có nhiệm vụ quản lý master data, quản lý bệnh viện, mẫu báo cáo và quản lý người dùng.'
    },
    {
      nameProject: 'Medichart',
      position: 'Developer backend',
      description:
        '- Công nghệ Php sử dụng Framework Laravel + Angular + Mysql + Chartjs.'
        + '\n' +
        '- Team size: 10MM.'
        + '\n' +
        '- Dự án local của khách hàng bảo hiểm Nhật Bản. Hỗ trợ khách hàng setup hệ thống, setup project để có thể chạy trên mạng local của khách.'
        + '\n' +
        '- Xây dựng database đáp ứng được sức chứa nhiều data.'
        + '\n' +
        '- Dự án import data kết quả khám chữa bệnh cho người mua bảo hiểm theo từng tháng.'
        + '\n' +
        '- Hỗ trợ cache lại dữ liệu để có performance tốt nhất.'
        + '\n' +
        '- Chuyển đổi dữ liệu thành biểu đồ sức khỏe theo từng chỉ số như: Sbp, Dbp, Bs, Hb1ac, Ldl, Bmi... của người mua bảo hiểm. Tìm kiếm dữ liệu khách hàng theo từng tháng và từng năm. Đưa ra các câu support tình trạng sức khỏe của người mua bảo hiểm theo các câu đã được setup.'
    },
    {
      nameProject: 'Crm',
      position: 'Developer full-stack',
      description:
        '- Công nghê Php sử dụng Framework Laravel + Vuejs + Mysql.'
        + '\n' +
        '- Team size: 15MM.'
        + '\n' +
        '- Dự án product làm về Customer relationship management (CRM) cho công ty. Dự án quản lý nhân sự, lên lịch trình cho khách hàng sang thăm công ty và quản lý dự án của khách hàng.'
        + '\n' +
        '- Dự án đang được sử dụng trong công ty.'
    },
    {
      nameProject: '2018050201_lem',
      position: 'Intern',
      description:
        '- Công nghê Php sử dụng Framework Laravel.'
        + '\n' +
        '- Team size: 10MM.'
        + '\n' +
        '- Xây dựng website ecommerce cho khách hàng. Dự án cho phép người dùng có thể tự tạo gian hàng và bán mặc mặt hàng của mình.'
    },
  ],
}
