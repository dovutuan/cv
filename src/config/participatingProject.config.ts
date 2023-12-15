export const participatingProjects: any = {
    VI: [
        {
            nameProject: 'Scm-ai',
            position: 'Developer full-stack',
            description:
                '- Công nghệ Php sử dụng Framework Laravel + Vuejs + Python + Mysql + Mongodb + Docker + Aws + Swift + Kotlin.'
                + '\n' +
                '- Team size: 50MM.'
                + '\n' +
                '- Hệ thống đồng bộ các dự án bên hệ thống Scm và tạo lịch làm việc cho từng bảo vệ của công ty.'
                + '\n' +
                '- Hệ thống có xử lý AI để chọn bảo vệ phù hợp với dự án, phù hợp với calendar làm việc của bảo vệ.'
                + '\n' +
                '- Hệ thống được chia ra phần nhiều module nhỏ, mi module sẽ đảm nhiệm 1 task trong hệ thống bao gồm: module đồng bộ. module tạo lịch cho bảo vệ, module check bảo vệ rảnh để có thể assigned kịp thời, module đồng bộ data để AI học, module đánh giá bảo vệ.'
                + '\n' +
                '- Hệ thống có từng gói service để các công ty có thể lựa chọn một các phù hợp.'
                + '\n' +
                '- Hệ thống có các phần quản lý dự án, quản lý chấm công, quản lý bảo vệ, quản lý đánh giá, tính toán điểm cho từng đánh giá, phân bổ bảo vệ vào dự án...'
        },
        {
            nameProject: 'Som',
            position: 'Developer backend',
            description:
                '- Công nghệ Php sử dụng Framework Laravel + Reactjs + Postgresql + Docker + Aws.'
                + '\n' +
                '- Team size: 100MM.'
                + '\n' +
                '- Dự án B2B, hệ thống theo dõi lich trình của tàu thuyền trên toàn thế giới, có thể tracking theo tàu thuyền theo khu vực Nhật Bản.'
                + '\n' +
                '- Hệ thống sử dụng leaflet để hiển thị tàu thuyền một cách trực quan nhất để người dùng có thể thao tác một cách dễ dàng nhất.'
                + '\n' +
                '- Vẽ vùng để cảnh báo tàu thuyển ra vào vùng và push notify về web, mail. Người dùng có thể set point, line để quản lý khu vực một cách nhanh nhất.'
                + '\n' +
                '- Quản lý thông tin tàu thuyển, báo cáo lên xuống tàu, tracking lịch sử vào cảng của tàu thuyền. Quản lý thông tin thủy thủ và push notify cho admin về việc hết hạn visa, giấy khám sức khỏa, giấy tờ liên quan.'
                + '\n' +
                '- Hệ thống có chức năng quản lý công việc dàng riêng cho khách hàng để quản lý nhập và xuất hàng.'
                + '\n' +
                '- Có job chạy để xử lý data csv khi khách push lên Aws S3.'
                + '\n' +
                '- Infra auto scaling khi có lợng người dùng lớn hoặc có nhiều job cần xử lý tức thời.'
        },
        {
            nameProject: 'Scm',
            position: 'Developer full-stack',
            description:
                '- Công nghệ Php sử dụng Framework Laravel + Vuejs + Mysql + Docker + Aws + Firebase + Swift + Kotlin.'
                + '\n' +
                '- Team size: 17MM.'
                + '\n' +
                '- Dự án B2B, hệ thống tạo và nhận dự án bảo vệ, hệ thống phát triển trên web, app phát hành trên app store và play store.'
                + '\n' +
                '- Các công ty vào tạo và nhận dự án bảo vệ phù hợp với công ty. Các công ty có thể trao đổi thông tin với bằng hệ thống chat được tích hợp trong hệ thống.'
                + '\n' +
                '- Hệ thống bao gồm phần quản lý của admin: quản lý công ty, quản lý quảng cáo... và phần quản lý của các công ty: quản lý các admin, quản lý dự án, quản lý notify...'
        },
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
