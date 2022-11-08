# BookStore
Website quản lý mua bán sách online ứng dụng của môn `An Toàn Hệ Thống Thông Tin`

# Mô tả chung
- Mô hình: `MVC`
- Ngôn ngữ: `Python`, `Javascript (Jquery)`, `HTML`, `CSS`
- Framework, API, Library, Service: `Flask`, `SQLAlchemy`, `Bootstrap 4`, `Cloudinary`, `ChartJs`, `JsPDF`,  `Twillio`, `Province-Open`, `smtplib`,  `Sweet Alert`
- Database: `Mysql`
- Thuật toán mã hóa demo (`Vigenere`-> Tự xây dựng, `md5`-> Sử dụng thư viện có sẵn)
- Nền tảng deploy: `PythonAnywhere`
- Nền tảng thanh toán online: `Momo`
- IDE, Công cụ: `Pycharm`, `Vscode`, `MySQL Workbench`,`Git/GitHub`, `Trello`, `Diagrams.net`

# Chức năng (Có phân quyền người dùng)
- Quản trị viên
   + Đăng nhập
   + Đăng xuất
   + Xem thông tin cá nhân
   + Đổi mật khẩu tài khoản
   + Quản lý khách hàng: Xem, sắp xếp, tìm kiếm thông tin
   + Quản lý sách, loại sách, nhà xuất bản, bản xem trước, bản đính kèm sách, giảm giá, điểm, vai trò tài khoản: Thêm, sửa, xóa, xem, sắp xếp, tìm kiếm thông tin
   + Quản lý giỏ hàng của khách: Tìm kiếm, sắp xếp tăng, giảm theo giá trị đơn hàng
   + Thống kê doanh thu, tần suất bán sách theo tên sách: Thống kê theo tháng, quý, năm, giữa 2 tháng, giữa 2 quý, giữa 2 năm. Hiển thị dữ liệu thống kê ra biểu đồ và xuất ra pdf
   + Xem thông tin chung của website
   + Thống kê doanh thu ngày hiện tại so với ngày trước đó
   + Thống kê số lượng khách hàng trong tháng hiện tại
   + Thống kê top 15 loại sách bán chạy nhất
   + Báo cáo doanh thu, báo cáo tần suất bán sách: Báo cáo theo tháng, quý, năm. Xuất dữ liêu báo cáo ra pdf
- Khách hàng
   + Đăng nhập
   + Đăng xuất
   + Đăng ký tài khoản (Xác thực bằng gửi mã xác nhận qua email)
   + Đổi mật khẩu
   + Xem thông tin cá nhân
   + Xem thông tin các giỏ hàng đã thanh toán, chưa thanh toán
   + Xem thông tin các các loại sách, sách mới, sách bán chạy, sách đề xuất, combo sách, ...
   + Xem chi tiết sách
   + Quản lý lịch sử thông tin những sách đã xem qua
   + Quản lý giỏ hàng cá nhân
   + Đặt hàng (Xác thực bằng gửi mã OTP đến điện thoại, thanh toán qua momo)
   
# Tóm tắt các ứng dụng của bảo mật: 
   - Xác thực và phân quyền người dùng
   - Mã hóa dữ liệu bằng thuật toán tự xây dựng (Vigenere)
   - Xác thực bằng email
   - Xác thực bằng số điện thoại
# Hướng dẫn cài đặt:
   - Clone project về máy 
     ``` shell 
     git clone https://github.com/nguyentrungkien01/BookStore.git
     ```
   - Mở project bằng `IDE` hoặc `Editor` bạn muốn (Ở đây mình sẽ hướng dẫn chạy bằng `Pycharm Community - JetBrains`)
   - Tạo venv: `File` -> `Setting` -> `Project: BookStore` -> `Python Interpreter` -> `Show All` -> `+` -> `New Enviroment` -> `Ok` <br>
     ![config](https://res.cloudinary.com/attt92bookstore/image/upload/v1647954679/config/Screenshot_from_2022-03-22_20-11-05_bdqpfd.png) <br>
   - Nếu dùng `Window` thì cần active venv: Mở `Terminal` trong Pycharm và nhập lệnh: <br>
     ``` shell
     venv\scripts\activate
     ```
   - Cài đặt các thư viện cần thiết: vô tab `Terminal` trong Pycharm nhập lệnh sau: <br>
     ``` shell
     pip install -r requirements.txt
     ```
     ![config](https://res.cloudinary.com/attt92bookstore/image/upload/v1647954921/config/Screenshot_from_2022-03-22_20-15-05_loy94x.png) <br><br>
   - Thiết lập cấu hình database: Chọn file `BookStore/BookStoreApp/__init__.py`, tìm đoạn code cấu hình database như bên dưới: <br>
     ![config](https://res.cloudinary.com/attt92bookstore/image/upload/v1647955042/config/Screenshot_from_2022-03-22_20-16-23_yqot9b.png) <br>
     Sau đó thay đổi các thông tin của `USERNAME_DB` (username của server database), `PASSWORD_DB` (password của server database) thành các thông tin        database của bạn <br><br>
   - Vì tính năng gửi mã OTP qua số điện thoại khi mua hàng trong project này đang sử dụng `trial account` của `Twillio` nên `authentication token` sẽ bị reset liên tục. Do đó nếu bạn muốn sử dụng tính năng này thì sẽ phải tạo tài khoản mới và làm theo các bước sau: <br> <br>
         + Tạo 1 tài khoản Twilio và nhận thông tin các token của tài khoản <br> <br>
         + Mở file `BookStore/BookStoreApp/__init__.py`, tìm đoạn code cấu hình Twillio như bên dưới và sau đó thay đổi các thông tin của `account_sid` (account sid của tài khoản), `auth_token` (authentication token của tài khoản) thành các thông tin tương ứng trong tài khoản của bạn <br>
         ![config](https://res.cloudinary.com/attt92bookstore/image/upload/v1647955522/config/Screenshot_from_2022-03-22_20-25-04_uemee9.png) <br> <br>
         + Mở file `BookStore/BookStoreApp/controller/utils/utils.controller.py`, tìm đoạn code gửi tin nhắn như bên dưới và sau đó thay đổi các thông tin của `from=...` (Thông tin số điện thoại của Twillio cấp), `to=...` (Thông tin số điện thoại muốn gửi đến) thành các thông tin tương ứng trong tài khoản của bạn <br>
         ![config](https://res.cloudinary.com/attt92bookstore/image/upload/v1647955685/config/Screenshot_from_2022-03-22_20-27-52_zvykhx.png) <br>
         => Lưu ý: `Trial account` chỉ có thể gửi đến 1 số điện thoại đã dùng để đăng kí tài khoản <br>
   - Import script dữ liệu test bằng cách dùng `MySQL Workbench` (Script dữ liệu test đã được đính kèm chung với project `BookStore/BookStore.sql`)<br>
   - Quay lại `Pycharm` và mở và run file `BookStore/BookStoreApp/main.py` để chạy chương trình.<br>
# Link website: [BookStore website](http://attt92bookstore.pythonanywhere.com)
# Link video demo: [BookStore demo video](https://youtu.be/TujjD5DU_9k)

