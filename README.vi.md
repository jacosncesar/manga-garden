<div align="center">

[Português (Brasil)](README.md) | [Español](README.es.md) | [简体中文](README.zh-CN.md) | [Tiếng Việt](README.vi.md) | [日本語](README.ja.md)

# 🪁 Manga Garden

### Đọc Mọi Bộ Manga Bằng Ngôn Ngữ Của Bạn. Trực Tiếp Trên Trình Duyệt.
**Không cần Python • Không cần máy chủ riêng • Dịch bằng AI ngay trong trình duyệt**

🌐 **[Truy cập trang web Manga Garden](https://manga-garden-translator.pages.dev/)**

<br/>

[![Manga Garden Hero Banner](./README_images/Gemini_Generated_Image_f7lh52f7lh52f7lh.jpeg)](./README_images/Gemini_Generated_Image_f7lh52f7lh52f7lh.jpeg)

</div>

<div align="center">
  <p><strong>Cảm ơn đặc biệt dự án <a href="https://github.com/Unheat/Kites">Kites</a>, nhóm <a href="https://github.com/Unheat">Unheat</a> và các cộng tác viên.</strong><br />Mã nguồn mở của Kites là nền tảng cho Manga Garden; đây là lời tri ân đến nguồn cảm hứng và đóng góp của dự án gốc.</p>
</div>

---

## 💡 Tại sao lại chọn Manga Garden?

Các công cụ dịch manga truyền thống thường đòi hỏi cài đặt môi trường Python phức tạp, hàng gigabyte gói CUDA nặng nề, hoặc bắt buộc phải tải toàn bộ lịch sử đọc truyện riêng tư của bạn lên máy chủ đám mây của bên thứ ba.

**Manga Garden thay đổi hoàn toàn điều đó.** Đây là một tiện ích mở rộng (extension) Chrome siêu nhẹ, vận hành các mô hình thị giác và ngôn ngữ AI tiên tiến nhất **trực tiếp trên card đồ họa của bạn thông qua WebGPU**.

- ⚡ **Cài đặt đơn giản:** Cài tiện ích và bắt đầu đọc. Để chạy dự án từ mã nguồn, hãy làm theo hướng dẫn cài đặt bên dưới.
- 🔒 **Xử lý cục bộ khi có thể:** OCR và xóa nền được thực hiện trên thiết bị. Hình ảnh không được gửi đến nhà cung cấp dịch thuật; văn bản đã nhận dạng có thể được gửi đến dịch vụ dịch bạn chọn.
- 🎨 **Khôi phục nền thông minh:** Inpainting bằng AI xóa chữ gốc trong khi vẫn giữ nét vẽ, screentone và kết cấu.
- ✍️ **Dàn chữ tự nhiên:** Đo khung thoại, cân bằng ngắt dòng, điều chỉnh cỡ chữ và màu sắc.
- 🗨️ **Tối ưu khung thoại:** Heuristic và YOLO neural mở rộng vùng đọc hẹp để tránh chữ quá nhỏ.
- 📜 **Hỗ trợ webtoon dài:** Dịch các dải dài hơn 14.000 px bằng cách chia thành các khối trong bộ nhớ, không giảm độ phân giải gốc.
- 🛠️ **Studio tích hợp:** Sửa bản dịch, thay đổi kích thước khung thoại và điều chỉnh kiểu chữ.

---

## 🖼️ Trải nghiệm thực tế

### Tiếng Nhật → Tiếng Bồ Đào Nha
> *Nguồn: [Minh họa trên Pixiv #144884723](https://www.pixiv.net/en/artworks/144884723)*

<div align="center">
<table>
  <tr>
    <th width="50%" align="center">Bản gốc tiếng Nhật</th>
    <th width="50%" align="center">Được Manga Garden dịch</th>
  </tr>
  <tr>
    <td align="center"><img src="./site/assets/demo8-imput.png" alt="Manga gốc tiếng Nhật" width="100%" /></td>
    <td align="center"><img src="./site/assets/demo8-thumb.png" alt="Bản dịch tiếng Bồ Đào Nha của Manga Garden" width="100%" /></td>
  </tr>
</table>
</div>

### Tiếng Nhật → Tiếng Anh (Japanese → English)
> *Tác phẩm: 佐藤さんは知っていた của [@09ra_19ra](https://x.com/09ra_19ra)*

<div align="center">
<table>
  <tr>
    <th width="50%" align="center">Bản gốc tiếng Nhật (Original Japanese)</th>
    <th width="50%" align="center">Manga Garden đã dịch (Manga Garden Translated)</th>
  </tr>
  <tr>
    <td align="center">
      <img src="./README_images/input/demo2.jpeg" alt="Original Japanese Manga" width="100%" />
    </td>
    <td align="center">
      <img src="./README_images/result/demo2_result.png" alt="Manga Garden English Translation" width="100%" />
    </td>
  </tr>
</table>
</div>

### Tiếng Nhật → Tiếng Việt (Japanese → Vietnamese)
> *Nguồn: [Pixiv Artwork #145272482](https://www.pixiv.net/en/artworks/145272482)*

<div align="center">
<table>
  <tr>
    <th width="50%" align="center">Bản gốc tiếng Nhật (Original Japanese)</th>
    <th width="50%" align="center">Manga Garden đã dịch (Manga Garden Translated)</th>
  </tr>
  <tr>
    <td align="center">
      <img src="./README_images/input/demo7.jpg" alt="Original Japanese Manga" width="100%" />
    </td>
    <td align="center">
      <img src="./README_images/result/demo7_result.png" alt="Manga Garden Vietnamese Translation" width="100%" />
    </td>
  </tr>
</table>
</div>

---

## 🖱️ Dịch tức thì trên trang

Di chuột qua bất kỳ hình ảnh truyện tranh nào trên Twitter/X, Pixiv hoặc các trang manga. Một nút kín đáo xuất hiện cạnh ảnh; nhấp vào để dịch lời thoại trực tiếp trên trang mà không cần sao chép và dán.

<div align="center">
  <img src="./README_images/UI-feature/hover-inplace-preview.png" alt="Manga Garden In-Page Hover Translation Button" width="620px" />
</div>

- 🖱️ **Rê chuột (Hover):** Dịch tức thì bằng cách rê chuột lên khung truyện.
- 📌 **Ghim cố định (Persistent):** Giữ huy hiệu dịch luôn hiển thị trên tất cả hình ảnh truyện.
- 🚀 **Tự động dịch (Auto-Translate):** Tự động phát hiện và dịch các khung tranh mới khi bạn cuộn trang xuống.
- ✂️ **Chụp vùng chọn màn hình (Screen Crop):** Dịch các phần tử canvas được bảo vệ, web game WebGL hoặc vùng chọn tùy ý qua menu chuột phải hoặc phím tắt `Ctrl/Alt + Shift + X`.
- ⚡ **Phím tắt tiện lợi:** Nhấn `F` để xem nhanh ảnh gốc (raw), nhấn `Ctrl/Alt + Shift + Z` để dịch khung ảnh đang rê chuột, và `Ctrl/Alt + Shift + M` để mở trình đọc chương.
- 🎯 **Chuột phải:** Dịch bất kỳ hình ảnh nào trên web thông qua menu ngữ cảnh của trình duyệt.

---

## 📖 Trình đọc chương & Quét nhanh

Đọc trọn vẹn cả chương manga hoặc webtoon trong một giao diện tập trung, không phân tâm với tính năng tự động quét hàng loạt, chế độ cuộn dọc webtoon liền mạch, dịch nhiều trang song song và xuất file ZIP offline:

[![Manga Garden Chapter Reader](./README_images/UI-feature/reader.jpg)](./README_images/UI-feature/reader.png)

- **Quét nhanh (Fast Scan):** Tự động cuộn trang và thu thập toàn bộ các khung truyện được tải trễ (lazy-loaded) trong chương vào hàng đợi dịch.
- **Đa dạng chế độ đọc:** Chuyển đổi linh hoạt giữa chế độ Webtoon cuộn dọc liên tục, Trang đơn (Single page), và Trang đôi (Double spread).
- **Dịch cả chương hàng loạt:** Dịch toàn bộ chương chỉ với một cú nhấp, kèm thanh tiến trình trực quan và cơ chế lưu trữ offline.
- **Xuất ZIP cả chương 1-click:** Đóng gói tất cả các trang đã dịch thành file lưu trữ ZIP đánh số ngăn nắp để đọc offline và lưu trữ, hoàn toàn không cần tải ảnh lên máy chủ.

---

## 🛠️ Trình biên tập Manga Garden Studio tích hợp

Cần trau chuốt lại bản dịch hoặc chỉnh lại font chữ? Mở ngay **Manga Garden Studio** toàn màn hình trực tiếp từ tiện ích mở rộng.

[![Manga Garden Studio](./README_images/UI-feature/kite_studio_editing.jpg)](./README_images/UI-feature/studio-editor.png)

- **Chỉnh sửa trực tiếp tại chỗ:** Nhấp đúp vào bất kỳ bong bóng thoại nào để sửa lời thoại trực tiếp, hỗ trợ căn giữa dọc subpixel và tự động dàn trang (reflow) tức thì.
- **Canvas tương tác linh hoạt:** Kéo thả và thay đổi kích thước khung thoại với 8 điểm neo điều khiển.
- **Cọ xóa AI cục bộ (Inpaint Brush):** Tẩy xóa khuyết điểm, bóng thoại hoặc hiệu ứng âm thanh (SFX) chưa dịch với độ chính xác cao theo nét cọ.
- **So sánh trực quan song song:** So sánh giữa bản gốc, ảnh đã xóa chữ (cleaned) và ảnh đã typeset chỉ với 1 cú click.
- **Kiểm soát typography:** Tuỳ chỉnh kích thước font chữ, màu sắc, căn lề và độ giãn dòng trực tiếp.
- **Xuất ảnh 1-click:** Tải về trang truyện đã dịch sạch sẽ ở đúng độ phân giải gốc.

---

## 🎛️ Tuỳ chỉnh & Cài đặt tiện ích

Tuỳ biến ngôn ngữ đích, mô hình AI OCR và thuật toán xóa chữ từ popup giao diện trực quan:

<div align="center">
<table>
  <tr>
    <th width="33%" align="center">Bảng điều khiển nhanh (Quick Control)</th>
    <th width="33%" align="center">Trình đọc chương &amp; Quét (Reader)</th>
    <th width="34%" align="center">Cài đặt động cơ &amp; Mô hình (Settings)</th>
  </tr>
  <tr>
    <td align="center">
      <img src="./README_images/UI-feature/main-panel.jpg" alt="Manga Garden Main Popup" width="95%" />
    </td>
    <td align="center">
      <img src="./README_images/UI-feature/reader-panel.jpg" alt="Manga Garden Chapter Reader and Scanner Panel" width="95%" />
    </td>
    <td align="center">
      <img src="./README_images/UI-feature/setting-panel.jpg" alt="Manga Garden Settings Panel" width="95%" />
    </td>
  </tr>
</table>
</div>

- **Bảng thuật ngữ tùy chỉnh (Custom Glossary):** Định nghĩa tên nhân vật, đại từ xưng hô và thuật ngữ riêng để hướng dẫn kết quả dịch của mô hình LLM.
- **Quy tắc theo tên miền:** Bật, tắt hoặc gán bộ chọn CSS tùy chỉnh cho từng trang web cụ thể.

---

## 🧠 Vận hành bởi AI hiện đại

| Thành phần | Tuỳ chọn | Mô tả chi tiết |
| :--- | :--- | :--- |
| **Dịch thuật** | **WebLLM** *(WebGPU cục bộ)*<br/>**Pool dùng chung trên đám mây** *(100/ngày)*<br/>**Google Translate**<br/>**API tùy chỉnh** *(OpenAI, Claude, Gemini)* | Chạy mô hình cục bộ (Qwen 3.5, Qwen 3, Gemma 3, Llama 3.2), dùng Google Translate, truy cập pool dùng chung hoặc kết nối khóa API riêng. |
| **Xóa thoại & Khôi phục nền (Inpainting)** | **LaMa Manga** *(Neural)*<br/>**AOT-GAN** *(Fast Neural)*<br/>**Telea Diffusion** *(Tức thì)*<br/>**Simple Fill** | Xóa chữ chuẩn xác trong ranh giới ký tự để bảo toàn tối đa nét vẽ gốc của truyện. |
| **OCR** | **PaddleOCR v3 – v6** | Phát hiện và nhận dạng văn bản đa ngôn ngữ, bao gồm cả các dải webtoon dài. |
| **Điều chỉnh khung thoại** | **YOLO neural** *(WebGPU)*<br/>**Heuristic** *(tức thì)*<br/>**MST cổ điển** | Mở rộng không gian lời thoại trong khung để tránh cỡ chữ quá nhỏ. |

---

### Tùy chọn 2: Tệp ZIP

1. Tải tệp ZIP từ [trang phát hành của kho mã nguồn](https://github.com/jacosncesar/manga-garden/releases/latest) khi có phiên bản Manga Garden được phát hành.
2. Giải nén `.zip` và tải thư mục lên Chrome tại `chrome://extensions/` > **Chế độ nhà phát triển** > **Tải tiện ích đã giải nén**.

### Tùy chọn 3: Biên dịch từ mã nguồn

```bash
# 1. Clone repository
git clone https://github.com/jacosncesar/MangaLumeTwo.git manga-garden
cd manga-garden

# 2. Cài đặt thư viện phụ thuộc và build tiện ích
npm ci
npm run build
```

1. Trong Chrome, mở đường dẫn `chrome://extensions/`.
2. Bật công tắc **Chế độ dành cho nhà phát triển (Developer mode)**.
3. Nhấp **Tải tiện ích đã giải nén (Load unpacked)** và chọn thư mục `dist/` vừa được tạo ra.
4. Ghim **Manga Garden** lên thanh công cụ và bắt đầu trải nghiệm!

---

## 🤝 Đóng góp & Tài liệu phát triển

Chúng tôi rất hoan nghênh sự đóng góp từ các lập trình viên, dịch giả và những người đam mê truyện tranh!

- 📖 **[Trung tâm tài liệu](docs/README.md)** — Sơ đồ kiến trúc, đặc tả pipeline và các ràng buộc hệ thống.
- 📐 **[Bản đồ pipeline tương tác](docs/workflow.html)** — Mô phỏng trực quan thuật toán phát hiện, xóa chữ và dàn trang của Manga Garden.
- 🛠️ **[Hướng dẫn đóng góp](CONTRIBUTING.md)** — Cách thiết lập môi trường phát triển, chạy kiểm thử và gửi PR.

---

## 📜 Giấy phép và lời cảm ơn

Manga Garden được phân phối theo **[GNU General Public License phiên bản 3 hoặc bất kỳ phiên bản nào sau đó](LICENSE)**.

Manga Garden là một dự án độc lập đã chỉnh sửa, dựa trên [Kites](https://github.com/Unheat/Kites), dự án do [Unheat](https://github.com/Unheat) phát triển. Manga Garden không liên kết, được tài trợ hay chứng thực bởi Unheat. Tên gọi, nhận diện hình ảnh, giao diện và các sửa đổi của dự án khác biệt với dự án gốc.

**Thông báo sửa đổi:** lịch sử phát triển công khai của Manga Garden được ghi nhận từ **2026-07-08**. Các thay đổi của từng phiên bản được lưu trong lịch sử kho mã nguồn và các tag tương ứng.

**Mã nguồn các phiên bản đã phát hành:**
- [v1.2.4 — mã nguồn tương ứng](https://github.com/jacosncesar/manga-garden/tree/v1.2.4) (phát hành ngày 2026-11-12 UTC). ZIP của phiên bản này có `LICENSE` và `NOTICE.txt` nhưng chưa có `THIRD_PARTY_NOTICES.md`; việc bổ sung đã được sửa trong gói tiếp theo, chưa phát hành.
- [v1.2.3 — mã nguồn tương ứng](https://github.com/jacosncesar/manga-garden/tree/v1.2.3) (phát hành ngày 2026-11-11). ZIP của phiên bản này được phát hành trước khi thêm `LICENSE` và `NOTICE.txt`; phiên bản này đã được thay thế.

Các tag ở trên cho phép xem và tải mã nguồn tương ứng với các phiên bản đó. Phiên bản mới cần được phát hành kèm tag mã nguồn và các thông báo giấy phép liên quan trong ZIP.

Dự án cảm ơn các sáng kiến mã nguồn mở đã góp phần giúp dự án ra đời:
- **[manga-image-translator (Cotrans)](https://github.com/zyddnys/manga-image-translator):** thuật toán nhóm văn bản theo không gian và dàn chữ.
- **[xianscan-rust](https://github.com/ArbenApura/xianscan-rust):** kiến trúc inpainting theo khối động và bộ lọc nhiễu OCR.
- **[PaddleOCR](https://github.com/PaddlePaddle/PaddleOCR):** mô hình phát hiện văn bản tốc độ cao.
- **[@mlc-ai/web-llm](https://github.com/mlc-ai/web-llm):** môi trường WebGPU gốc của trình duyệt cho mô hình ngôn ngữ lớn.
- Đặc biệt cảm ơn [**Unheat** và An Dang](https://github.com/Unheat).

---

<div align="center">
  <sub>Được tạo bằng ❤️ dành cho những người yêu thích manga và truyện tranh.</sub>
</div>
