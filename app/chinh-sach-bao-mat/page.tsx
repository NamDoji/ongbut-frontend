import type { Metadata } from "next";
import { PageHeader } from "@/components/common/PageHeader";

export const metadata: Metadata = {
  title: "Chính sách bảo mật",
  description: "Chính sách bảo mật thông tin của Ông Bụt AI Education.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHeader title="Chính sách bảo mật" />
      <section className="py-12 lg:py-16 bg-[#F8F9FC]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 brand-shadow prose prose-sm max-w-none">
            <p className="text-[#6B7280] text-sm mb-6">
              Cập nhật lần cuối: 01/01/2025
            </p>

            <h2 className="text-lg font-bold text-[#2B4FFF]">
              1. Thu thập thông tin
            </h2>
            <p className="text-[#6B7280] leading-relaxed">
              Chúng tôi thu thập thông tin cá nhân (họ tên, email, số điện
              thoại) khi bạn đăng ký tư vấn hoặc sử dụng dịch vụ của chúng
              tôi. Thông tin này được sử dụng để liên hệ và cung cấp dịch vụ
              tốt nhất cho bạn.
            </p>

            <h2 className="text-lg font-bold text-[#2B4FFF] mt-6">
              2. Sử dụng thông tin
            </h2>
            <p className="text-[#6B7280] leading-relaxed">
              Thông tin của bạn chỉ được sử dụng để cung cấp dịch vụ giáo dục,
              gửi thông báo liên quan đến khóa học và cải thiện chất lượng dịch
              vụ. Chúng tôi cam kết không bán hoặc chia sẻ thông tin cá nhân
              với bên thứ ba mà không có sự đồng ý của bạn.
            </p>

            <h2 className="text-lg font-bold text-[#2B4FFF] mt-6">
              3. Bảo mật thông tin
            </h2>
            <p className="text-[#6B7280] leading-relaxed">
              Chúng tôi áp dụng các biện pháp bảo mật tiêu chuẩn công nghiệp
              để bảo vệ thông tin cá nhân của bạn khỏi truy cập, tiết lộ, thay
              đổi hoặc phá hủy trái phép.
            </p>

            <h2 className="text-lg font-bold text-[#2B4FFF] mt-6">
              4. Cookie
            </h2>
            <p className="text-[#6B7280] leading-relaxed">
              Website của chúng tôi sử dụng cookie để cải thiện trải nghiệm
              người dùng. Bạn có thể tắt cookie trong cài đặt trình duyệt, tuy
              nhiên điều này có thể ảnh hưởng đến một số tính năng của trang.
            </p>

            <h2 className="text-lg font-bold text-[#2B4FFF] mt-6">
              5. Liên hệ
            </h2>
            <p className="text-[#6B7280] leading-relaxed">
              Nếu bạn có câu hỏi về chính sách bảo mật, vui lòng liên hệ:{" "}
              <a
                href="mailto:info@ongbut.edu.vn"
                className="text-[#2B4FFF] hover:underline"
              >
                info@ongbut.edu.vn
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
