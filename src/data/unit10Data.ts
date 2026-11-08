import { EnglishUnitData } from './englishUnitData';

export const ENGLISH_UNIT_10_DATA: EnglishUnitData = {
  id: 'ch_tienganh_10',
  unitNumber: 10,
  title: 'Unit 10: Communication in the Future',
  topic: 'Communication Technology, Prepositions of place & time, Possessive pronouns',
  description: 'Từ vựng công nghệ giao tiếp tương lai, giới từ chỉ nơi chốn & thời gian, cùng đại từ sở hữu theo SGK Tiếng Anh 8 Global Success.',

  // ==================== TAB 1: 10 TỪ VỰNG TRỌNG TÂM ====================
  // Đánh số thứ tự từ 1 đến 10, chỉ hiển thị từ tiếng Anh và nghĩa tiếng Việt
  vocabularyList: [
    {
      id: 'u10_v1',
      word: 'smartphone',
      partOfSpeech: '',
      meaning: 'điện thoại thông minh'
    },
    {
      id: 'u10_v2',
      word: 'social network',
      partOfSpeech: '',
      meaning: 'mạng xã hội'
    },
    {
      id: 'u10_v3',
      word: 'voice message',
      partOfSpeech: '',
      meaning: 'tin nhắn thoại'
    },
    {
      id: 'u10_v4',
      word: 'group call',
      partOfSpeech: '',
      meaning: 'cuộc gọi nhóm'
    },
    {
      id: 'u10_v5',
      word: 'emoji',
      partOfSpeech: '',
      meaning: 'biểu tượng cảm xúc'
    },
    {
      id: 'u10_v6',
      word: 'video conference',
      partOfSpeech: '',
      meaning: 'hội nghị truyền hình qua video'
    },
    {
      id: 'u10_v7',
      word: 'Internet connection',
      partOfSpeech: '',
      meaning: 'kết nối Internet'
    },
    {
      id: 'u10_v8',
      word: 'webcam',
      partOfSpeech: '',
      meaning: 'thiết bị ghi hình (kết nối máy tính)'
    },
    {
      id: 'u10_v9',
      word: 'holography',
      partOfSpeech: '',
      meaning: 'công nghệ hình ảnh ba chiều'
    },
    {
      id: 'u10_v10',
      word: 'translation',
      partOfSpeech: '',
      meaning: 'sự dịch thuật, bản dịch'
    }
  ],

  // ==================== TAB 1: CÂU HỎI CỦNG CỐ TỪ VỰNG ====================
  // 5 câu trắc nghiệm điền từ vào chỗ trống (______), 4 phương án A/B/C/D
  vocabQuestions: [
    {
      id: 'u10_vq1',
      question: 'She left a quick ______ on my phone because she didn\'t have time to type a text message.',
      options: [
        'voice message',
        'webcam',
        'group call',
        'holography'
      ],
      correctIndex: 0,
      explanation: '"voice message" có nghĩa là tin nhắn thoại (lời nhắn được ghi âm). Vì người gửi bận không có thời gian gõ văn bản ("didn\'t have time to type a text message") nên đã để lại một tin nhắn thoại.',
      hint: 'Người gửi không kịp gõ chữ nên đã ghi âm lại một lời nhắn ngắn bằng giọng nói qua điện thoại.',
      knowledgeTopic: 'Từ vựng: Communication Technology',
      wrongFeedbacks: {
        1: {
          error: '"webcam" là thiết bị ghi hình gắn máy tính, không phải tin nhắn ghi âm.',
          hint: 'Hãy chọn danh từ chỉ tin nhắn được truyền đạt bằng giọng nói.'
        },
        2: {
          error: '"group call" là cuộc gọi kết nối nhiều người đồng thời, không phù hợp với việc để lại lời nhắn khi bận.',
          hint: 'Xem xét hình thức để lại lời nhắn ngắn bằng giọng nói.'
        },
        3: {
          error: '"holography" là công nghệ hình ảnh không gian ba chiều, không liên quan đến việc để lại lời nhắn thoại.',
          hint: 'Tập trung vào cách giao tiếp bằng âm thanh ghi âm gửi qua điện thoại.'
        }
      }
    },
    {
      id: 'u10_vq2',
      question: 'Our family had a lively ______ last Sunday to talk with grandparents in Da Nang and cousins in Hue at the same time.',
      options: [
        'smartphone',
        'group call',
        'translation',
        'emoji'
      ],
      correctIndex: 1,
      explanation: '"group call" là cuộc gọi nhóm (kết nối thoại hoặc video nhiều người cùng lúc). Cụm từ "at the same time" (cùng lúc) với người thân ở nhiều nơi khác nhau chỉ rõ cuộc gọi nhóm.',
      hint: 'Hoạt động kết nối âm thanh hoặc hình ảnh đồng thời giữa nhiều thành viên ở các địa điểm khác nhau.',
      knowledgeTopic: 'Từ vựng: Communication Technology',
      wrongFeedbacks: {
        0: {
          error: '"smartphone" là chiếc điện thoại thông minh (thiết bị phần cứng), không phải sự kiện cuộc gọi diễn ra.',
          hint: 'Cần một danh từ chỉ hành động hoặc phiên đàm thoại kết nối nhiều người.'
        },
        2: {
          error: '"translation" là sự dịch thuật ngôn ngữ, không mang nghĩa cuộc đàm thoại gia đình.',
          hint: 'Chọn thuật ngữ chỉ việc gọi điện thoại cùng lúc cho nhiều người.'
        },
        3: {
          error: '"emoji" là biểu tượng cảm xúc dạng hình vẽ nhỏ, không phải cuộc gọi liên lạc.',
          hint: 'Tìm cụm từ chỉ cuộc trò chuyện đa bên qua mạng viễn thông.'
        }
      }
    },
    {
      id: 'u10_vq3',
      question: 'We couldn\'t join the online meeting because our ______ was too weak and kept disconnecting.',
      options: [
        'holography',
        'voice message',
        'Internet connection',
        'translation'
      ],
      correctIndex: 2,
      explanation: '"Internet connection" có nghĩa là kết nối Internet hay đường truyền mạng. Khi đường truyền mạng quá yếu và liên tục ngắt kết nối ("too weak and kept disconnecting"), người dùng không thể tham gia họp trực tuyến.',
      hint: 'Hãy tìm thuật ngữ chỉ đường truyền mạng cần thiết để các thiết bị truy cập và duy trì kết nối trực tuyến.',
      knowledgeTopic: 'Từ vựng: Communication Technology',
      wrongFeedbacks: {
        0: {
          error: '"holography" là công nghệ ảnh ba chiều, không phải đường truyền tín hiệu mạng.',
          hint: 'Chú ý tính từ "weak" (yếu) và "disconnecting" (mất kết nối mạng).'
        },
        1: {
          error: '"voice message" là bản tin nhắn thoại gửi đi, không phải là kết nối mạng.',
          hint: 'Cần danh từ chỉ đường truyền liên mạng kỹ thuật số.'
        },
        3: {
          error: '"translation" là sự dịch thuật ngôn ngữ, không liên quan đến việc bị mất tín hiệu kết nối máy tính.',
          hint: 'Tìm từ chỉ kết nối mạng toàn cầu.'
        }
      }
    },
    {
      id: 'u10_vq4',
      question: 'In the future, people may communicate through ______, displaying 3D life-sized images of their friends right in the living room.',
      options: [
        'social network',
        'smartphone',
        'webcam',
        'holography'
      ],
      correctIndex: 3,
      explanation: '"holography" là công nghệ hình ảnh ba chiều (kỹ thuật quang học tạo ảnh không gian 3 chiều sống động). Chi tiết "displaying 3D life-sized images" (hiển thị hình ảnh 3 chiều kích thước thật) mô tả chính xác công nghệ holography.',
      hint: 'Chú ý cụm từ "3D life-sized images" - đây là công nghệ tạo hình ảnh ba chiều lơ lửng trong không gian sống động.',
      knowledgeTopic: 'Từ vựng: Communication Technology',
      wrongFeedbacks: {
        0: {
          error: '"social network" là mạng xã hội trực tuyến dạng nền tảng website/ứng dụng, không phải công nghệ trình chiếu ảnh 3D.',
          hint: 'Tập trung vào công nghệ quang học chiếu hình 3 chiều thực tế ảo.'
        },
        1: {
          error: '"smartphone" là điện thoại di động thông minh chỉ có màn hình phẳng 2D thông thường.',
          hint: 'Hãy tìm từ vựng chỉ kỹ thuật tái tạo hình ảnh không gian 3 chiều.'
        },
        2: {
          error: '"webcam" chỉ là camera thu nhận tín hiệu hình ảnh phẳng 2D cho máy tính.',
          hint: 'Nhận diện công nghệ tương lai hiển thị hình ảnh 3D kích thước như người thật.'
        }
      }
    },
    {
      id: 'u10_vq5',
      question: 'Many international companies use a ______ so that directors from different countries can discuss projects face-to-face on screen without travelling.',
      options: [
        'video conference',
        'voice message',
        'emoji',
        'webcam'
      ],
      correctIndex: 0,
      explanation: '"video conference" là hội nghị truyền hình qua video (cuộc họp từ xa kết nối hình ảnh và âm thanh trực tiếp giữa nhiều bên). Cụm từ "discuss projects face-to-face on screen without travelling" là ngữ cảnh điển hình của hội nghị truyền hình.',
      hint: 'Cuộc họp thảo luận quy mô công việc giữa các địa điểm khác nhau qua màn hình video trực tuyến.',
      knowledgeTopic: 'Từ vựng: Communication Technology',
      wrongFeedbacks: {
        1: {
          error: '"voice message" là tin nhắn âm thanh ghi âm sẵn, không có hình ảnh mặt đối mặt trên màn hình.',
          hint: 'Cần danh từ chỉ cuộc họp truyền hình có hình ảnh tương tác trực tiếp.'
        },
        2: {
          error: '"emoji" là biểu tượng cảm xúc đồ họa trong tin nhắn, không thể dùng để thảo luận công việc thay cho cuộc họp.',
          hint: 'Chọn cụm từ chỉ hội nghị truyền hình trực tuyến.'
        },
        3: {
          error: '"webcam" chỉ là thiết bị phần cứng hỗ trợ ghi hình, không phải toàn bộ phiên hội nghị giữa các giám đốc.',
          hint: 'Cần cụm từ chỉ cuộc họp trực tuyến có hình ảnh giữa nhiều bên.'
        }
      }
    }
  ],

  // ==================== TAB 2: NGỮ PHÁP ====================
  // Trình bày theo từng dòng riêng biệt, ví dụ minh họa rõ ràng
  grammarTopic: 'Prepositions of Place and Time & Possessive Pronouns',
  grammarPoints: [
    {
      id: 'u10_gp1',
      title: '1. PREPOSITIONS OF PLACE (Giới từ chỉ nơi chốn)',
      formula: 'Vị trí: Giới từ + Cụm danh từ chỉ địa điểm/vị trí',
      rule: `Trong Tiếng Anh 8 (Global Success), các giới từ chỉ nơi chốn thường gặp gồm:

• at (ở tại): Dùng cho điểm cụ thể, địa chỉ nhà có số, địa điểm học tập/làm việc/sự kiện
  - at home (ở nhà), at school (ở trường), at the bus stop (tại trạm xe buýt)
  - at 24 Le Loi Street (tại số 24 đường Lê Lợi)
  - at the meeting (tại cuộc họp), at a party (tại bữa tiệc)

• in (trong, ở trong): Dùng cho không gian kín, phòng, tòa nhà, thành phố, quốc gia, lục địa
  - in the room (trong phòng), in the box (trong hộp)
  - in Ha Noi (ở Hà Nội), in Viet Nam (ở Việt Nam)
  - in the sky (trên bầu trời), in the world (trên thế giới)

• on (trên, ở trên): Dùng cho bề mặt, tầng nhà, đường phố (không có số nhà), phương tiện công cộng lớn
  - on the table (trên bàn), on the wall (trên tường)
  - on the second floor (ở tầng hai)
  - on Tran Phu Street (trên đường Trần Phú)
  - on the bus / train / plane (trên xe buýt / tàu hỏa / máy bay)

• in front of (ở phía trước):
  - in front of the building (ở phía trước tòa nhà), in front of the screen (trước màn hình)

• opposite (đối diện):
  - opposite the cinema (đối diện rạp chiếu phim), sitting opposite me (ngồi đối diện tôi)

• under (ở dưới, bên dưới):
  - under the desk (dưới gầm bàn), under the tree (dưới bóng cây)`,
      example: {
        english: 'He is sitting in front of his computer, waiting for the video conference at 3 p.m.',
        vietnamese: 'Anh ấy đang ngồi trước máy tính của mình, chờ đợi hội nghị truyền hình lúc 3 giờ chiều.'
      }
    },
    {
      id: 'u10_gp2',
      title: '2. PREPOSITIONS OF TIME (Giới từ chỉ thời gian)',
      formula: 'Vị trí: Giới từ + Cụm từ/mốc thời gian',
      rule: `Quy tắc sử dụng các giới từ chỉ thời gian trọng tâm:

• at: Dùng cho mốc giờ cụ thể và các thời điểm ngắn trong ngày
  - at 7 o'clock (lúc 7 giờ), at 8:30 a.m.
  - at noon (vào buổi trưa), at night (vào ban đêm), at midnight (lúc nửa đêm)
  - at the weekend (vào cuối tuần), at Tet (vào dịp Tết - không có từ "Day")

• on: Dùng cho các ngày trong tuần, ngày tháng cụ thể, dịp lễ có chữ "Day"
  - on Monday (vào thứ Hai), on Fridays (vào các ngày thứ Sáu)
  - on 20th November (vào ngày 20 tháng 11), on my birthday (vào ngày sinh nhật tôi)
  - on Christmas Day (vào ngày Giáng sinh), on New Year's Eve (vào đêm giao thừa)

• in: Dùng cho tháng, năm, mùa, thế kỷ, các buổi trong ngày
  - in July (vào tháng Bảy), in 2026 (vào năm 2026)
  - in spring / summer / autumn / winter (vào mùa xuân/hạ/thu/đông)
  - in the morning / afternoon / evening (vào buổi sáng/chiều/tối)
  - in the 21st century (trong thế kỷ 21)

• for: Dùng để chỉ khoảng thời gian kéo dài của một hành động
  - for two hours (trong 2 tiếng), for three days (trong 3 ngày), for a long time (trong thời gian dài)

• by: Dùng với nghĩa "trước hoặc không muộn hơn một mốc thời gian"
  - by 5 p.m. (trước hoặc muộn nhất là 5 giờ chiều)
  - by Friday (trước thứ Sáu), by next month (trước tháng sau)`,
      example: {
        english: 'We usually hold group calls on Sunday evenings and finish our discussions by 9 p.m.',
        vietnamese: 'Chúng tôi thường thực hiện các cuộc gọi nhóm vào tối Chủ nhật và kết thúc thảo luận trước 9 giờ tối.'
      }
    },
    {
      id: 'u10_gp3',
      title: '3. POSSESSIVE PRONOUNS (Đại từ sở hữu)',
      formula: 'Đại từ sở hữu = Tính từ sở hữu + Danh từ (Đứng độc lập, không có danh từ theo sau)',
      rule: `Đại từ sở hữu dùng để thay thế cho cụm [tính từ sở hữu + danh từ] nhằm tránh lặp lại danh từ đã được nhắc tới:

• Danh sách các đại từ sở hữu:
  - mine = my + danh từ (của tôi)
  - yours = your + danh từ (của bạn / của các bạn)
  - his = his + danh từ (của anh ấy)
  - hers = her + danh từ (của cô ấy)
  - ours = our + danh từ (của chúng tôi / của chúng ta)
  - theirs = their + danh từ (của họ / của chúng nó)

• Phân biệt Tính từ sở hữu và Đại từ sở hữu:
  - Tính từ sở hữu (my, your, his, her, our, their): Bắt buộc PHẢI có danh từ theo sau.
    Ví dụ: This is my smartphone.
  - Đại từ sở hữu (mine, yours, his, hers, ours, theirs): Đứng ĐỘC LẬP làm chủ ngữ hoặc tân ngữ, KHÔNG có danh từ theo sau.
    Ví dụ: This smartphone is mine. (mine = my smartphone)

• Lưu ý quan trọng:
  - "its" thường chỉ dùng như tính từ sở hữu (kèm danh từ), hầu như không dùng độc lập như đại từ sở hữu.
  - Phân biệt "its" (tính từ sở hữu, ví dụ: its screen) với "it's" (dạng viết tắt của it is hoặc it has).
  - Đại từ sở hữu có thể làm chủ ngữ: Your tablet is fast, but mine is slow. (mine = my tablet)`,
      example: {
        english: 'Your video camera has a clearer picture than hers.',
        vietnamese: 'Máy quay video của bạn có hình ảnh sắc nét hơn máy quay của cô ấy.'
      }
    }
  ],

  // ==================== TAB 2: CÂU HỎI CỦNG CỐ NGỮ PHÁP ====================
  // 5 câu trắc nghiệm điền từ vào chỗ trống (______), 4 phương án A/B/C/D
  grammarQuestions: [
    {
      id: 'u10_gq1',
      question: 'The online technology workshop will officially begin ______ 8:30 a.m. tomorrow morning.',
      options: [
        'in',
        'at',
        'on',
        'by'
      ],
      correctIndex: 1,
      explanation: 'Ta dùng giới từ "at" trước mốc giờ cụ thể trong ngày (at 8:30 a.m.). "in" dùng cho tháng/năm/buổi; "on" dùng cho ngày trong tuần hoặc ngày tháng cụ thể.',
      hint: 'Đối với mốc thời gian chỉ giờ giấc cụ thể (ví dụ: 8 giờ 30 phút), ta dùng giới từ thời gian nào?',
      knowledgeTopic: 'Ngữ pháp: Prepositions of Time',
      wrongFeedbacks: {
        0: {
          error: 'Giới từ "in" đi với tháng, năm, mùa hoặc các buổi lớn (in the morning), không đứng trực tiếp trước mốc giờ.',
          hint: 'Xác định giới từ chuẩn xác đi cùng số giờ cụ thể.'
        },
        2: {
          error: 'Giới từ "on" đi với ngày trong tuần hoặc ngày kèm tháng (on Monday, on October 5th), không dùng cho mốc giờ.',
          hint: 'Nhớ lại quy tắc: giờ dùng giới từ nào?'
        },
        3: {
          error: '"by" mang nghĩa là trước một mốc thời hạn, trong khi câu này diễn đạt thời điểm bắt đầu chính xác.',
          hint: 'Chọn giới từ chỉ thời điểm bắt đầu chuẩn xác theo giờ.'
        }
      }
    },
    {
      id: 'u10_gq2',
      question: 'Her modern smartphone has a huge memory, but ______ only has 32 gigabytes.',
      options: [
        'my',
        'me',
        'mine',
        'I'
      ],
      correctIndex: 2,
      explanation: 'Vị trí này là chủ ngữ của mệnh đề thứ hai và đứng độc lập không có danh từ theo sau, nên ta dùng đại từ sở hữu "mine" (= my smartphone) để thay thế cho chiếc điện thoại của tôi, tránh lặp lại từ.',
      hint: 'Vị trí này cần một đại từ sở hữu đứng độc lập làm chủ ngữ để thay cho "chiếc điện thoại của tôi", không kèm danh từ phía sau.',
      knowledgeTopic: 'Ngữ pháp: Possessive Pronouns',
      wrongFeedbacks: {
        0: {
          error: '"my" là tính từ sở hữu, bắt buộc phải có danh từ đi kèm phía sau (ví dụ: my phone).',
          hint: 'Hãy chọn hình thức đại từ sở hữu có thể đứng một mình làm chủ ngữ.'
        },
        1: {
          error: '"me" là đại từ tân ngữ (đứng sau động từ hoặc giới từ), không làm chủ ngữ chỉ quyền sở hữu.',
          hint: 'Cần một đại từ mang ý nghĩa "cái của tôi".'
        },
        3: {
          error: '"I" là đại từ nhân xưng chỉ người, không thể so sánh người với điện thoại ("I only has 32 gigabytes" là sai ngữ pháp).',
          hint: 'Chủ thể sở hữu dung lượng 32GB là đồ vật (chiếc điện thoại của tôi).'
        }
      }
    },
    {
      id: 'u10_gq3',
      question: 'We have prepared the presentation slides, and the project manager needs us to finish the online report ______ 5 p.m. this Friday.',
      options: [
        'in',
        'on',
        'under',
        'by'
      ],
      correctIndex: 3,
      explanation: 'Giới từ "by" được dùng với mốc thời gian để chỉ hạn chót: "trước hoặc không muộn hơn một thời điểm nhất định" (by 5 p.m. this Friday = trước hoặc muộn nhất là 5 giờ chiều thứ Sáu này).',
      hint: 'Giới từ chỉ thời hạn chót, mang ý nghĩa là "trước hoặc muộn nhất vào thời điểm..."',
      knowledgeTopic: 'Ngữ pháp: Prepositions of Time',
      wrongFeedbacks: {
        0: {
          error: '"in" không dùng cho mốc giờ cụ thể mang tính hạn chót.',
          hint: 'Tìm giới từ diễn tả hạn hoàn thành công việc trước thời điểm quy định.'
        },
        1: {
          error: '"on" thường đi với ngày (on Friday), nhưng ở đây có mốc giờ hạn chót "5 p.m." mang ý nghĩa hoàn thành trước thời gian đó.',
          hint: 'Chú ý sắc thái hoàn thành trước hoặc không muộn hơn một thời điểm.'
        },
        2: {
          error: '"under" là giới từ chỉ vị trí (dưới vật khác), không dùng chỉ thời gian hạn nộp báo cáo.',
          hint: 'Cần giới từ chỉ mốc thời hạn chót.'
        }
      }
    },
    {
      id: 'u10_gq4',
      question: 'The technician placed the new external webcam right ______ top of the computer monitor so that it could capture the whole room.',
      options: [
        'on',
        'at',
        'in',
        'opposite'
      ],
      correctIndex: 0,
      explanation: 'Cụm cố định "on top of" có nghĩa là ở trên đỉnh / trên nóc của một vật (đặt webcam tiếp xúc trên đỉnh màn hình máy tính).',
      hint: 'Cụm từ cố định chỉ vị trí tiếp xúc trên bề mặt phía trên là "... top of".',
      knowledgeTopic: 'Ngữ pháp: Prepositions of Place',
      wrongFeedbacks: {
        1: {
          error: 'Không dùng "at top of"; cụm chuẩn xác chỉ vị trí bên trên bề mặt là "on top of".',
          hint: 'Nhớ lại cụm từ cố định: on top of something.'
        },
        2: {
          error: '"in" chỉ vị trí bên trong không gian kín, không tạo thành cụm vị trí bên trên với "top of".',
          hint: 'Chọn giới từ tiếp xúc trên bề mặt.'
        },
        3: {
          error: '"opposite" có nghĩa là đối diện, không kết hợp với "top of".',
          hint: 'Tập trung vào cụm giới từ chỉ vị trí đặt ngay bên trên đỉnh màn hình.'
        }
      }
    },
    {
      id: 'u10_gq5',
      question: 'Our school will celebrate Vietnam Teachers\' Day ______ November 20th with an interactive virtual concert.',
      options: [
        'in',
        'on',
        'at',
        'for'
      ],
      correctIndex: 1,
      explanation: 'Ta dùng giới từ "on" trước ngày cụ thể trong tháng (on November 20th). Giới từ "in" chỉ dùng cho tháng đứng một mình (in November), còn "at" dùng cho mốc giờ.',
      hint: 'Khi mốc thời gian có ngày cụ thể kèm theo tháng (ngày 20 tháng 11), giới từ thích hợp là gì?',
      knowledgeTopic: 'Ngữ pháp: Prepositions of Time',
      wrongFeedbacks: {
        0: {
          error: '"in" chỉ đi với tháng đứng một mình (ví dụ: in November). Khi có ngày cụ thể (November 20th), ta phải dùng giới từ khác.',
          hint: 'Cần giới từ dùng cho ngày cụ thể trong lịch.'
        },
        2: {
          error: '"at" dùng cho mốc giờ cụ thể hoặc các dịp lễ không có từ Day (at Tet), không dùng cho ngày tháng.',
          hint: 'Quy tắc: ngày trong tháng đi kèm giới từ nào?'
        },
        3: {
          error: '"for" dùng để chỉ một khoảng thời gian kéo dài (for two weeks), không dùng để chỉ một ngày diễn ra sự kiện.',
          hint: 'Chọn giới từ xác định ngày tổ chức sự kiện.'
        }
      }
    }
  ],

  // ==================== TAB 3: LUYỆN TẬP ====================
  // 10 câu trắc nghiệm điền từ vào chỗ trống (______), 4 phương án A/B/C/D
  // Không trùng lặp câu hỏi ở Tab 1 và Tab 2
  // Cân bằng đáp án toàn bộ Unit 10: 5 A, 5 B, 5 C, 5 D
  practiceQuestions: [
    {
      id: 'u10_pq1',
      question: 'When you send a message to a friend, you can add a smiling ______ to show your happiness or friendliness.',
      options: [
        'webcam',
        'translation',
        'emoji',
        'holography'
      ],
      correctIndex: 2,
      explanation: '"emoji" là biểu tượng cảm xúc (hình ảnh biểu tượng nhỏ dùng trong tin nhắn kỹ thuật số). Một "smiling emoji" (biểu tượng cảm xúc mặt cười) giúp thể hiện niềm vui và sự thân thiện.',
      hint: 'Biểu tượng hình ảnh nhỏ dùng trong tin nhắn kỹ thuật số để biểu lộ cảm xúc hoặc thái độ.',
      knowledgeTopic: 'Tổng hợp: Communication Technology',
      wrongFeedbacks: {
        0: {
          error: '"webcam" là camera gắn máy tính, không phải hình ảnh biểu cảm trong tin nhắn văn bản.',
          hint: 'Tìm từ chỉ biểu tượng cảm xúc dạng ký tự hình ảnh.'
        },
        1: {
          error: '"translation" là bản dịch ngôn ngữ, không phải hình vẽ mặt cười.',
          hint: 'Chú ý chi tiết biểu tượng mặt cười thể hiện cảm xúc.'
        },
        3: {
          error: '"holography" là công nghệ hình ảnh không gian 3D, không phải biểu tượng cảm xúc trong tin nhắn.',
          hint: 'Cần danh từ chỉ các biểu tượng mặt cười quen thuộc trong ứng dụng chat.'
        }
      }
    },
    {
      id: 'u10_pq2',
      question: 'The students have practiced with this video conferencing software for three weeks, so the success of the webinar is entirely ______.',
      options: [
        'their',
        'they',
        'them',
        'theirs'
      ],
      correctIndex: 3,
      explanation: 'Ở vị trí sau liên động từ "is", ta cần một đại từ sở hữu "theirs" (= their success) để chỉ "thành công của họ", đứng độc lập không có danh từ theo sau. "their" là tính từ sở hữu nên bắt buộc phải có danh từ đi kèm.',
      hint: 'Cần một đại từ sở hữu đứng độc lập ở cuối câu để thay thế cho cụm "thành công của các bạn học sinh đó".',
      knowledgeTopic: 'Tổng hợp: Possessive Pronouns',
      wrongFeedbacks: {
        0: {
          error: '"their" là tính từ sở hữu, không thể đứng đơn độc ở cuối câu mà không có danh từ theo sau.',
          hint: 'Chọn hình thức đại từ sở hữu kết thúc bằng chữ "s".'
        },
        1: {
          error: '"they" là đại từ chủ ngữ, không đứng sau động từ to be để thể hiện quyền sở hữu.',
          hint: 'Cần từ biểu thị sự sở hữu của họ.'
        },
        2: {
          error: '"them" là đại từ tân ngữ (chỉ người), không biểu đạt ý nghĩa sở hữu "của họ".',
          hint: 'Hãy dùng đại từ sở hữu tương ứng với ngôi "they".'
        }
      }
    },
    {
      id: 'u10_pq3',
      question: 'In case our Japanese friends speak quickly during the call, we can turn on real-time ______ software to understand their words instantly.',
      options: [
        'translation',
        'voice message',
        'group call',
        'smartphone'
      ],
      correctIndex: 0,
      explanation: '"translation" có nghĩa là sự dịch thuật. Cụm từ "real-time translation software" chỉ phần mềm dịch thuật trực tiếp theo thời gian thực, giúp người dùng hiểu ngay ngôn ngữ tiếng nước ngoài khi đang gọi điện.',
      hint: 'Quá trình chuyển đổi từ ngôn ngữ này sang ngôn ngữ khác để người nghe hiểu nội dung trò chuyện.',
      knowledgeTopic: 'Tổng hợp: Communication Technology',
      wrongFeedbacks: {
        1: {
          error: '"voice message" là bản tin nhắn thoại ghi âm, không có chức năng chuyển đổi ngôn ngữ.',
          hint: 'Cần thuật ngữ chỉ việc chuyển ngữ để hiểu lời nói tiếng Nhật.'
        },
        2: {
          error: '"group call" là cuộc gọi nhiều người, không phải công cụ dịch ngôn ngữ.',
          hint: 'Tìm từ vựng liên quan đến chuyển dịch ngôn ngữ.'
        },
        3: {
          error: '"smartphone" là thiết bị điện thoại, không phải cụm danh từ chỉ tính năng chuyển ngữ trực tiếp.',
          hint: 'Chú ý động từ "understand their words" - cần phần mềm dịch thuật.'
        }
      }
    },
    {
      id: 'u10_pq4',
      question: 'Many teenagers spend too much time scrolling through news feeds on a popular ______ instead of doing outdoor exercise.',
      options: [
        'webcam',
        'social network',
        'holography',
        'translation'
      ],
      correctIndex: 1,
      explanation: '"social network" có nghĩa là mạng xã hội. Hành động "scrolling through news feeds" (lướt xem bảng tin) là hoạt động đặc trưng trên các mạng xã hội như Facebook, TikTok, Instagram.',
      hint: 'Nền tảng trực tuyến cho phép người dùng chia sẻ tin tức, kết nối bạn bè và xem bảng tin (news feed).',
      knowledgeTopic: 'Tổng hợp: Communication Technology',
      wrongFeedbacks: {
        0: {
          error: '"webcam" là camera kết nối máy tính, không có bảng tin (news feed) để lướt xem.',
          hint: 'Cần thuật ngữ chỉ các nền tảng mạng xã hội kết nối trực tuyến.'
        },
        2: {
          error: '"holography" là công nghệ chiếu ảnh 3 chiều, không phải nền tảng mạng đăng tải tin tức bài viết.',
          hint: 'Tập trung vào nền tảng mạng xã hội phổ biến trong giới trẻ.'
        },
        3: {
          error: '"translation" là sự dịch thuật ngôn ngữ, không chứa bảng tin giải trí.',
          hint: 'Chọn cụm từ chỉ mạng xã hội kết nối cộng đồng.'
        }
      }
    },
    {
      id: 'u10_pq5',
      question: 'You should position your chair directly ______ the webcam so your face is clearly visible during the interview.',
      options: [
        'under',
        'on',
        'in front of',
        'at'
      ],
      correctIndex: 2,
      explanation: 'Cụm giới từ "in front of" có nghĩa là ở phía trước. Đặt ghế ngồi ngay phía trước webcam ("in front of the webcam") giúp camera thu được hình ảnh khuôn mặt rõ nét trong buổi phỏng vấn.',
      hint: 'Vị trí đối diện ngay phía trước một thiết bị ghi hình để máy thu được góc nhìn thẳng.',
      knowledgeTopic: 'Tổng hợp: Prepositions of Place',
      wrongFeedbacks: {
        0: {
          error: '"under" có nghĩa là ở dưới / gầm máy, sẽ làm camera không quay được mặt.',
          hint: 'Cần vị trí ngồi đối diện ngay phía trước ống kính.'
        },
        1: {
          error: '"on" có nghĩa là ở trên bề mặt, không thể ngồi đè lên chiếc webcam.',
          hint: 'Hãy chọn giới từ chỉ khoảng cách ở phía trước mặt.'
        },
        3: {
          error: '"at" thường chỉ địa điểm chung chung, không miêu tả góc ngồi đối diện phía trước ống kính webcam.',
          hint: 'Dùng cụm giới từ chỉ vị trí "ở phía trước".'
        }
      }
    },
    {
      id: 'u10_pq6',
      question: 'The internet provider announced that the technical maintenance would take place ______ midnight on Sunday.',
      options: [
        'in',
        'on',
        'for',
        'at'
      ],
      correctIndex: 3,
      explanation: 'Ta dùng giới từ "at" trước mốc thời gian "midnight" (at midnight = lúc nửa đêm), tương tự như "at noon", "at night".',
      hint: 'Hãy nhớ giới từ đi kèm với các thời điểm đặc biệt trong ngày như "noon" (buổi trưa) và "midnight" (nửa đêm).',
      knowledgeTopic: 'Tổng hợp: Prepositions of Time',
      wrongFeedbacks: {
        0: {
          error: '"in" không đi với mốc thời điểm "midnight" (chỉ đi với in the morning/afternoon/evening).',
          hint: 'Thời điểm lúc 12 giờ đêm dùng giới từ chỉ giờ cụ thể.'
        },
        1: {
          error: '"on" đi với ngày trong tuần (on Sunday), nhưng ở vị trí sát "midnight" ta phải dùng giới từ phù hợp với mốc giờ này.',
          hint: 'Chọn giới từ thường đi liền với từ "midnight".'
        },
        2: {
          error: '"for" dùng để chỉ một khoảng thời gian kéo dài, không dùng cho mốc thời điểm nửa đêm.',
          hint: 'Quy tắc: lúc nửa đêm dùng giới từ nào?'
        }
      }
    },
    {
      id: 'u10_pq7',
      question: 'Is this tablet yours, Nam? - No, it is not ______. My sister gave it to our cousin yesterday.',
      options: [
        'mine',
        'my',
        'me',
        'myself'
      ],
      correctIndex: 0,
      explanation: 'Ở vị trí sau động từ to be và đứng độc lập không có danh từ theo sau, ta dùng đại từ sở hữu "mine" (= my tablet) để thay thế cho chiếc máy tính bảng của tôi. "my" là tính từ sở hữu nên bắt buộc phải có danh từ sau nó.',
      hint: 'Đại từ sở hữu thay thế cho cụm "chiếc máy tính bảng của tôi" khi đứng độc lập mà không có danh từ đi sau.',
      knowledgeTopic: 'Tổng hợp: Possessive Pronouns',
      wrongFeedbacks: {
        1: {
          error: '"my" là tính từ sở hữu, không thể đứng đơn độc ở cuối câu mà không có danh từ theo sau.',
          hint: 'Chọn hình thức đại từ sở hữu thay thế cho "my tablet".'
        },
        2: {
          error: '"me" là đại từ tân ngữ chỉ người, không mang ý nghĩa quyền sở hữu chiếc máy tính bảng.',
          hint: 'Cần từ mang nghĩa "cái của tôi".'
        },
        3: {
          error: '"myself" là đại từ phản thân, không dùng làm bổ ngữ chỉ sự sở hữu đồ vật sau to be trong ngữ cảnh này.',
          hint: 'Tìm đại từ sở hữu tương ứng với ngôi "I".'
        }
      }
    },
    {
      id: 'u10_pq8',
      question: 'The scientific team has been researching 3D holographic communication technology ______ more than ten years.',
      options: [
        'at',
        'for',
        'in',
        'on'
      ],
      correctIndex: 1,
      explanation: 'Ta dùng giới từ "for" trước một khoảng thời gian kéo dài (for more than ten years = trong hơn mười năm qua) để diễn tả khoảng thời gian thực hiện nghiên cứu.',
      hint: 'Giới từ chỉ một khoảng thời gian kéo dài liên tục từ quá khứ đến hiện tại.',
      knowledgeTopic: 'Tổng hợp: Prepositions of Time',
      wrongFeedbacks: {
        0: {
          error: '"at" chỉ mốc thời điểm cụ thể (giờ, đêm), không dùng cho khoảng thời gian kéo dài nhiều năm.',
          hint: 'Cần giới từ chỉ độ dài thời gian "trong suốt...".'
        },
        2: {
          error: '"in" đi với một năm cụ thể (in 2020), không dùng cho khoảng thời gian có số đếm "more than ten years" trong thì hoàn thành.',
          hint: 'Dùng giới từ quen thuộc đi với khoảng thời gian trong thì hoàn thành.'
        },
        3: {
          error: '"on" đi với ngày trong tuần hoặc ngày cụ thể, không đi với khoảng thời gian mười năm.',
          hint: 'Chọn giới từ mang nghĩa "trong khoảng thời gian".'
        }
      }
    },
    {
      id: 'u10_pq9',
      question: 'Our family members live far apart, but we frequently connect with each other through a ______ to see everyone laughing together.',
      options: [
        'translation',
        'emoji',
        'group call',
        'holography'
      ],
      correctIndex: 2,
      explanation: '"group call" (cuộc gọi nhóm có hình ảnh/âm thanh) cho phép nhiều thành viên gia đình ở xa kết nối đồng thời với nhau để nhìn thấy mọi người cùng vui cười ("see everyone laughing together").',
      hint: 'Hình thức liên lạc đồng thời giữa nhiều người ở các nơi khác nhau bằng thoại hoặc hình ảnh trực tiếp.',
      knowledgeTopic: 'Tổng hợp: Communication Technology',
      wrongFeedbacks: {
        0: {
          error: '"translation" là bản dịch ngôn ngữ, không phải hình thức liên lạc gặp gỡ người thân.',
          hint: 'Chọn cụm từ chỉ cuộc gọi điện thoại nhiều người tham gia cùng lúc.'
        },
        1: {
          error: '"emoji" là biểu tượng cảm xúc, không thể dùng để nhìn thấy tất cả thành viên gia đình đang cười.',
          hint: 'Tập trung vào cuộc gọi nhóm có tính năng truyền tải hình ảnh.'
        },
        3: {
          error: '"holography" là công nghệ ảnh 3D cao cấp, ít phổ biến cho cuộc trò chuyện gia đình thông thường hiện nay so với group call.',
          hint: 'Cụm từ quen thuộc chỉ cuộc gọi chung cho nhiều người thân.'
        }
      }
    },
    {
      id: 'u10_pq10',
      question: 'The international tech conference will take place ______ Singapore from May 12th to May 15th.',
      options: [
        'at',
        'on',
        'under',
        'in'
      ],
      correctIndex: 3,
      explanation: 'Ta dùng giới từ "in" trước tên thành phố, quốc gia hoặc vùng lãnh thổ rộng lớn (in Singapore, in Viet Nam, in London).',
      hint: 'Giới từ chỉ nơi chốn đứng trước tên một quốc gia hoặc thành phố lớn.',
      knowledgeTopic: 'Tổng hợp: Prepositions of Place',
      wrongFeedbacks: {
        0: {
          error: '"at" thường dùng cho điểm địa chỉ cụ thể hoặc tòa nhà, không đứng trước tên quốc gia rộng lớn.',
          hint: 'Quy tắc: tên quốc gia, thành phố dùng giới từ nào?'
        },
        1: {
          error: '"on" dùng cho bề mặt hoặc tên đường phố, không dùng cho tên một quốc gia.',
          hint: 'Chọn giới từ chỉ vị trí địa lý bên trong một đất nước.'
        },
        2: {
          error: '"under" có nghĩa là ở dưới lòng đất hoặc dưới vật thể, hoàn toàn sai ngữ nghĩa.',
          hint: 'Cần giới từ chỉ nơi chốn thông dụng đi cùng tên quốc gia.'
        }
      }
    }
  ]
};
