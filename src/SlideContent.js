export const slides = [
  {
    type: 'title',
    title: 'VIBE DESIGN - VIBE CODING',
    subtitle: 'TÁI ĐỊNH NGHĨA HAY SỰ TIẾN HÓA\nDÀNH CHO UI/UX DESIGNER',
    gradientTitle: true
  },
  {
    type: 'list',
    title: 'Nội dung',
    items: [
      '1. Giới thiệu Vibe Design và Vibe Coding',
      '2. Tái định nghĩa hay Sự tiến hóa ?',
      '3. Demo quy trình dành cho Vibe Design & Vibe Coding',
      '4. Hỏi đáp'
    ]
  },
  {
    type: 'section',
    title: 'VIBE DESIGN',
    subtitle: ''
  },
  {
    type: 'features',
    title: 'VIBE DESIGN LÀ GÌ ?',
    subtitle: 'một cách tiếp cận trong thiết kế giao diện (UI) và trải nghiệm người dùng (UX) tập trung vào việc tạo ra một "rung động" (vibe) cụ thể thay vì chỉ tuân theo các quy tắc lưới (grid) hay cấu trúc cứng nhắc',
    features: [
      { title: 'Nội dung', description: '' },
      { title: 'Hình ảnh', description: '' },
      { title: 'URLs', description: '' },
      { title: 'Sơ đồ', description: '' }
    ],
    outputs: [
      { id: 'mobile', title: 'Mobile' },
      { id: 'layout', title: 'Layout' },
      { id: 'window', title: 'Window' },
      { id: 'sitemap', title: 'Sitemap' },
      { id: 'image', title: 'Image' },
      { id: 'chart', title: 'Chart' }
    ]
  },
  {
    type: 'comparison',
    title: 'SO SÁNH VIBE DESIGN VÀ DESIGN TRUYỀN THỐNG',
    headers: ['', 'Vibe designing', 'Design truyền thống'],
    rows: [
      ['Đầu vào', 'Hình ảnh, prompts, URL, diagram', 'Tạo element, design system, thư viện component'],
      ['Độ hoàn thiện', 'High-fidelity', 'Pixel-perfect'],
      ['Khả năng tiếp cận', 'Tất cả mọi người', 'Designer-centric'],
      ['Tốc độ', 'Vài phút đến vài giờ.', 'Vài ngày đến vài tuần.']
    ]
  },
  {
    type: 'pro-cons',
    title: 'CÁC TRƯỜNG HỢP NÊN VÀ KHÔNG NÊN DÙNG VIBE DESIGN',
    pros: [
      'Giai đoạn Brainstorming & Ý tưởng sơ khai',
      'Thuyết phục khách hàng/Sếp',
      'Các vị trí không chuyên (Non-designers)',
      'Tìm kiếm phong cách mới'
    ],
    cons: [
      'Xây dựng Design System',
      'Giai đoạn bàn giao lập trình',
      'Dự án có logic phức tạp',
      'Bảo trì và mở rộng'
    ],
    footer: 'Kết hợp cả hai'
  },
  {
    type: 'section',
    title: 'VIBE CODING',
    subtitle: ''
  },
  {
    type: 'features',
    title: 'VIBE CODING LÀ GÌ ?',
    subtitle: 'một cách tiếp cận lập trình mà ở đó bạn không trực tiếp viết từng dòng code, thay vào đó, bạn đóng vai trò như một "nhạc trưởng" hoặc "đạo diễn".',
    isFlow: true,
    features: [
      { title: 'Mô tả (prompt)', description: '' },
      { title: 'Generate', description: '' },
      { title: 'Chỉnh sửa', description: '' },
      { title: 'Thực hiện', description: '' }
    ]
  },
  {
    type: 'comparison',
    title: 'SO SÁNH VIBE CODING VÀ CODING TRUYỀN THỐNG',
    headers: ['', 'Vibe coding', 'Coding truyền thống'],
    rows: [
      ['Đầu vào', 'Prompts', 'Các ngôn ngữ lập trình'],
      ['Khả năng tiếp cận', 'Tất cả mọi người', 'Đòi hỏi kiến thức kỹ thuật và kinh nghiệm'],
      ['Khả năng tùy biến', 'Hạn chế trong việc kiểm soát sâu các chi tiết kỹ thuật.', 'Kiểm soát toàn diện mọi thành phần của bộ mã nguồn'],
      ['Tốc độ', 'Nhanh', 'Chậm hơn']
    ]
  },
  {
    type: 'pro-cons',
    title: 'CÁC TRƯỜNG HỢP NÊN VÀ KHÔNG NÊN DÙNG VIBE CODING',
    pros: [
      'Sản phẩm khả thi tối thiểu (MVP)',
      'Công cụ nội bộ',
      'Prototype nhanh',
      'Ứng dụng giai đoạn đầu'
    ],
    cons: [
      'Các ứng dụng phức tạp',
      'Hệ thống yêu cầu hiệu năng cao',
      'Dự án có logic phức tạp',
      'Tùy biến chuyên sâu'
    ],
    footer: 'Vibe Coding giúp bạn hiện thực hóa ý tưởng nhanh chóng'
  },
  {
    type: 'section',
    title: 'VIBE CODING VS VIBE DESIGN',
    subtitle: ''
  },
  {
    type: 'comparison',
    title: 'SO SÁNH VIBE DESIGN VÀ VIBE CODING',
    headers: ['', 'CodingVibe', 'DesignVibe'],
    rows: [
      ['Trọng tâm', 'Tập trung tạo mã nguồn (code) có thể chạy được một cách nhanh chóng.', 'Tập trung tạo và tinh chỉnh giao diện người dùng (UI) & bản mẫu (prototype).'],
      ['Đầu vào', 'Các câu lệnh ngôn ngữ tự nhiên (prompts)', 'Văn bản, hình ảnh, đường dẫn URL (đa phương thức - multi-modal)'],
      ['Đầu ra', 'Mã nguồn có thể thực thi ngay.', 'Wireframes tương tác hoặc bản mẫu hoàn chỉnh.'],
      ['Mức độ kiểm soát', 'AI sẽ tự đưa ra các quyết định về kiến trúc hệ thống', 'Cho phép chỉnh sửa trực quan, sử dụng các thiết lập sẵn (presets) và biểu mẫu (templates)'],
      ['Mục tiêu', 'Các tính năng hoạt động thực tế', 'Giúp các bên liên quan thống nhất ý kiến, thử nghiệm ý tưởng nhanh hơn']
    ]
  },
  {
    type: 'section',
    title: 'TÁI ĐỊNH NGHĨA\nHAY\nSỰ TIẾN HÓA',
    subtitle: ''
  },
  {
    type: 'evolution',
    title: 'Sự tiến hóa về Công cụ',
    steps: [
      { name: ' Vẽ truyền thống', year: 'Giai đoạn 1', apps: [{name: 'Giấy', style: 'doc'}, {name: 'Bút', style: 'pen'}, {name: 'Thước', style: 'ruler'}] },
      { name: 'Phần mềm thiết kế', year: 'Giai đoạn 2', apps: [{name: 'Ps', style: 'ps'}, {name: 'Ai', style: 'ai'}, {name: 'Ae', style: 'ae'}] },
      { name: 'Cộng tác UI/UX', year: 'Giai đoạn 3', apps: [{name: 'Sketch', style: 'sketch'}, {name: 'Figma', style: 'figma'}, {name: 'XD', style: 'xd'}] },
      { name: 'Công cụ AI Design', year: 'Giai đoạn 4', apps: [{name: 'Nano Banana', style: 'ai-tool'}, {name: 'Stitch', style: 'ai-tool'}, {name: 'Midjourney', style: 'ai-tool'}] }
    ]
  },
  {
    type: 'role-shift',
    title: 'Tái định nghĩa về Vai trò',
    before: {
      label: 'Trước đây (Thợ thủ công)',
      items: [
        'Kỹ năng đánh giá bằng việc thành thạo công cụ',
        'Sản phẩm phụ thuộc nhiều yếu tố chủ quan/khách quan',
        'Phụ thuộc mạnh vào phần mềm đồ họa'
      ]
    },
    after: {
      label: 'Hiện tại & Tương lai (Nhạc trưởng)',
      items: [
        'Tập trung tối đa vào trải nghiệm người dùng (UX)',
        'Thiết kế "Gen" (DNA) hệ thống thay vì vẽ từng nút',
        'Làm chủ tư duy, AI làm thợ'
      ]
    }
  },
  {
    type: 'section',
    title: 'DEMO',
    subtitle: ''
  },
  {
    type: 'demo',
    title: 'VIBE DESIGN DEMO',
    app: 'Figma AI / Nano Banana',
    desc: 'Thiết kế giao diện, khởi tạo Wireframe và Prototype nhanh chóng.',
    samplePrompt: '"Tạo một trang Landing Page cho trường dạy lái xe ô tô The Drive. Giao diện Dark mode sang trọng, có phần Đăng ký thi thử, Lịch học, và tính năng Chatbot hỗ trợ học viên."',
    demoSteps: [
      { title: 'Bước 1: Lên ý tưởng (Prompting)', detail: 'Mô tả tóm tắt ứng dụng (vd: Driving School landing page).' },
      { title: 'Bước 2: AI Generate', detail: 'Figma AI / Nano Banana xử lý prompt và xuất ra các màn hình mẫu.' },
      { title: 'Bước 3: Tinh chỉnh (Refining)', detail: 'Sử dụng công cụ thiết kế để sửa chữa màu sắc, font chữ và layout.' },
      { title: 'Bước 4: Tạo tương tác (Prototype)', detail: 'Nối các màn hình tạo flow hoàn chỉnh, chuẩn bị giao cho Developer.' }
    ]
  },
  {
    type: 'demo',
    title: 'VIBE CODING DEMO',
    app: 'React + AI Assistant',
    desc: 'Hiện thực hóa Logic, Component và cấu trúc App từ các luồng Prompt.',
    samplePrompt: '"Khởi tạo một dự án React sử dụng Vite. Dựng Layout trang Landing Page trường dạy lái xe giống như bản thiết kế. Áp dụng hiệu ứng Glassmorphism, tích hợp animation và responsive cho mobile."',
    demoSteps: [
      { title: 'Bước 1: Khởi tạo (Set up)', detail: 'Tạo cấu trúc dự án (React/Next.js), cài đặt thư viện cần thiết.' },
      { title: 'Bước 2: Xây dựng UI (Components)', detail: 'Prompt AI đọc ảnh/thiết kế và render ra code giao diện tương ứng.' },
      { title: 'Bước 3: Xử lý Logic (State)', detail: 'Yêu cầu AI viết các logic xử lý sự kiện, fetch data, quản lý state.' },
      { title: 'Bước 4: Hoàn thiện (Deploy)', detail: 'Fix bug tự động qua AI và chạy build dự án thực tế.' }
    ]
  },
  {
    type: 'demo',
    title: 'CLAUDE CODE + FIGMA',
    app: 'Thiết kế UI bằng AI Prompt',
    desc: 'Hướng dẫn sử dụng Claude kết hợp Figma để tự động khởi tạo và thiết kế giao diện (UI) thông qua tương tác ngôn ngữ tự nhiên.',
    samplePrompt: '"Dùng Figma MCP tạo một Component \'Card Sản phẩm\' theo phong cách Dark Mode. Bao gồm: Ảnh ở trên, Tiêu đề font Inter, Giá tiền và một nút CTA \'Thêm vào giỏ\'. Căn chỉnh bằng Auto Layout chuẩn xác."',
    demoSteps: [
      { title: 'Bước 1: Kết nối Môi trường', detail: 'Tích hợp Model Context Protocol (MCP) của Figma để gắn kết Claude trực tiếp vào file thiết kế của bạn.' },
      { title: 'Bước 2: Giao tiếp Ngôn ngữ (Prompt)', detail: 'Mô tả chi tiết cấu trúc UI, phong cách (Dark/Light mode), và các layer thành phần mong muốn cho hệ thống AI.' },
      { title: 'Bước 3: AI Render UI', detail: 'Claude diễn dịch yêu cầu và thiết lập trực tiếp các Frame, Text, Shapes cùng cấu trúc Auto Layout vào thẳng bản vẽ Figma.' },
      { title: 'Bước 4: Tinh chỉnh Chi tiết', detail: 'Tiếp tục feedback qua chat để AI tinh chỉnh Padding, Margin, sửa mã màu hoặc đổi biến Typography (Design Tokens).' }
    ]
  },
  {
    type: 'section',
    title: 'HỎI ĐÁP',
    subtitle: ''
  }
];
