import { EnglishUnitData } from './englishUnitData';

export const ENGLISH_UNIT_9_DATA: EnglishUnitData = {
  id: 'ch_tienganh_9',
  unitNumber: 9,
  title: 'Unit 9: Natural Disasters',
  topic: 'Natural disasters, The past continuous tense',
  description: 'Từ vựng các thảm họa thiên nhiên và thì quá khứ tiếp diễn (The past continuous) theo SGK Tiếng Anh 8 Global Success.',

  // ==================== TAB 1: 10 TỪ VỰNG TRỌNG TÂM ====================
  // Đánh số thứ tự từ 1 đến 10, chỉ hiển thị từ tiếng Anh và nghĩa tiếng Việt
  vocabularyList: [
    {
      id: 'u9_v1',
      word: 'earthquake',
      partOfSpeech: '',
      meaning: 'động đất'
    },
    {
      id: 'u9_v2',
      word: 'volcanic eruption',
      partOfSpeech: '',
      meaning: 'sự phun trào núi lửa'
    },
    {
      id: 'u9_v3',
      word: 'storm',
      partOfSpeech: '',
      meaning: 'bão'
    },
    {
      id: 'u9_v4',
      word: 'tornado',
      partOfSpeech: '',
      meaning: 'lốc xoáy'
    },
    {
      id: 'u9_v5',
      word: 'flood',
      partOfSpeech: '',
      meaning: 'lũ lụt'
    },
    {
      id: 'u9_v6',
      word: 'landslide',
      partOfSpeech: '',
      meaning: 'sạt lở đất'
    },
    {
      id: 'u9_v7',
      word: 'damage',
      partOfSpeech: '',
      meaning: 'sự thiệt hại; làm hư hại'
    },
    {
      id: 'u9_v8',
      word: 'destroy',
      partOfSpeech: '',
      meaning: 'phá hủy'
    },
    {
      id: 'u9_v9',
      word: 'predict',
      partOfSpeech: '',
      meaning: 'dự đoán'
    },
    {
      id: 'u9_v10',
      word: 'emergency kit',
      partOfSpeech: '',
      meaning: 'bộ dụng cụ khẩn cấp'
    }
  ],

  // 5 CÂU HỎI CỦNG CỐ TỪ VỰNG UNIT 9 (Điền từ vào chỗ trống)
  vocabQuestions: [
    {
      id: 'u9_vq1',
      question: 'A sudden violent shaking of the ground caused by movement of the earth\'s crust is called an ______.',
      options: [
        'landslide',
        'earthquake',
        'tornado',
        'flood'
      ],
      correctIndex: 1,
      explanation: '"earthquake" là trận động đất, hiện tượng rung chuyển dữ dội đột ngột của mặt đất do sự dịch chuyển của các mảng kiến tạo vỏ Trái Đất.',
      hint: 'Em hãy chú ý cụm từ "violent shaking of the ground" (sự rung chuyển dữ dội của mặt đất) để chọn hiện tượng thiên tai tương ứng.',
      knowledgeTopic: 'Từ vựng Unit 9 – Động đất',
      wrongFeedbacks: {
        0: {
          error: 'Landslide là hiện tượng sạt lở đất đá từ trên đồi núi xuống, không phải rung chuyển mặt đất.',
          hint: 'Hãy tìm từ chỉ sự rung chuyển dữ dội của lớp vỏ Trái Đất.'
        },
        2: {
          error: 'Tornado là lốc xoáy (cột gió xoay tròn hình phễu), không phải sự rung chuyển mặt đất.',
          hint: 'Hiện tượng địa chất làm mặt đất rung lắc dữ dội có tên gọi là gì?'
        },
        3: {
          error: 'Flood là hiện tượng lũ lụt do nước ngập dâng cao.',
          hint: 'Hãy chọn danh từ chỉ cơn địa chấn làm rung chuyển nền đất.'
        }
      }
    },
    {
      id: 'u9_vq2',
      question: 'Before the storm arrived, every family in the village prepared an ______ with a flashlight, bandages, bottled water, and canned food.',
      options: [
        'volcanic eruption',
        'tornado',
        'earthquake',
        'emergency kit'
      ],
      correctIndex: 3,
      explanation: '"emergency kit" là bộ dụng cụ khẩn cấp, bao gồm các vật dụng thiết yếu như đèn pin, băng gạc y tế, nước uống và đồ ăn hộp để ứng phó khi thiên tai xảy ra.',
      hint: 'Em hãy chú ý các vật dụng được chuẩn bị như đèn pin, bông băng, nước đóng chai và đồ hộp để nhận biết vật dụng cần chuẩn bị.',
      knowledgeTopic: 'Từ vựng Unit 9 – Bộ dụng cụ khẩn cấp',
      wrongFeedbacks: {
        0: {
          error: 'Volcanic eruption là sự phun trào núi lửa, đây là một thảm họa chứ không phải đồ vật chuẩn bị.',
          hint: 'Câu này cần một danh từ chỉ túi hoặc hộp chứa các dụng cụ cứu trợ khẩn cấp.'
        },
        1: {
          error: 'Tornado là cơn lốc xoáy nguy hiểm.',
          hint: 'Hãy tìm cụm từ chỉ bộ vật dụng chuẩn bị trước khi thiên tai ập đến.'
        },
        2: {
          error: 'Earthquake là trận động đất.',
          hint: 'Em hãy chọn cụm từ mang nghĩa bộ dụng cụ cứu hộ khẩn cấp.'
        }
      }
    },
    {
      id: 'u9_vq3',
      question: 'A ______ is a violent storm with very strong winds that blow in a circle forming a tall funnel shape.',
      options: [
        'tornado',
        'flood',
        'landslide',
        'damage'
      ],
      correctIndex: 0,
      explanation: '"tornado" là lốc xoáy, cơn bão dữ dội với các luồng gió xoáy cực mạnh tạo thành hình phễu khổng lồ.',
      hint: 'Em hãy để ý cụm từ "winds that blow in a circle" (gió thổi xoáy tròn) và "funnel shape" (hình phễu).',
      knowledgeTopic: 'Từ vựng Unit 9 – Lốc xoáy',
      wrongFeedbacks: {
        1: {
          error: 'Flood là lũ lụt, liên quan đến lượng nước dâng ngập chứ không phải luồng gió xoáy hình phễu.',
          hint: 'Hãy chú ý đến đặc điểm gió xoáy tròn tạo thành hình phễu cao vút.'
        },
        2: {
          error: 'Landslide là sạt lở đất đá từ trên sườn dốc.',
          hint: 'Hãy tìm danh từ chỉ cơn lốc xoáy gió cực mạnh.'
        },
        3: {
          error: 'Damage là sự thiệt hại hoặc làm hư hỏng, không phải tên gọi một hiện tượng bão xoáy.',
          hint: 'Em hãy chọn từ vựng chỉ luồng gió xoáy hình phễu.'
        }
      }
    },
    {
      id: 'u9_vq4',
      question: 'Heavy rain for several days caused a massive ______ on the hill, burying the roadway under tons of mud and rocks.',
      options: [
        'earthquake',
        'storm',
        'landslide',
        'volcanic eruption'
      ],
      correctIndex: 2,
      explanation: '"landslide" là hiện tượng sạt lở đất, đất đá và bùn lầy từ sườn núi sạt trượt xuống chôn vùi mặt đường.',
      hint: 'Em hãy để ý các từ khóa "on the hill" (trên đồi) và "mud and rocks" (bùn và đá sạt lở trượt xuống).',
      knowledgeTopic: 'Từ vựng Unit 9 – Sạt lở đất',
      wrongFeedbacks: {
        0: {
          error: 'Earthquake là động đất từ sâu trong lòng đất, không bắt nguồn từ mưa lớn kéo dài làm sạt bùn đá trên đồi.',
          hint: 'Hiện tượng đất đá trên đồi sạt lở sau mưa bão gọi là gì?'
        },
        1: {
          error: 'Storm là cơn bão, không mang nghĩa khối bùn đá chôn vùi con đường.',
          hint: 'Hãy tìm từ chỉ sự trượt lở đất đá từ trên dốc cao.'
        },
        3: {
          error: 'Volcanic eruption là sự phun trào núi lửa chứa dòng dung nham nóng.',
          hint: 'Hãy chọn danh từ chỉ hiện tượng sạt lở đất trên sườn đồi.'
        }
      }
    },
    {
      id: 'u9_vq5',
      question: 'Meteorologists use modern satellites and radar systems to ______ when and where a storm will make landfall.',
      options: [
        'destroy',
        'predict',
        'damage',
        'flood'
      ],
      correctIndex: 1,
      explanation: '"predict" là động từ có nghĩa là dự đoán, dự báo trước thời điểm và vị trí cơn bão sẽ đổ bộ.',
      hint: 'Em hãy chú ý ngữ cảnh các chuyên gia khí tượng sử dụng vệ tinh và radar để làm gì trước khi bão đổ bộ.',
      knowledgeTopic: 'Từ vựng Unit 9 – Dự đoán bão',
      wrongFeedbacks: {
        0: {
          error: 'Destroy nghĩa là phá hủy, các nhà khí tượng học không dùng vệ tinh để phá hủy bão.',
          hint: 'Mục đích của việc quan sát bằng radar là để dự báo trước hướng đi của thiên tai.'
        },
        2: {
          error: 'Damage nghĩa là làm hư hại, không phù hợp với ngữ cảnh nghiên cứu khí tượng.',
          hint: 'Hãy chọn động từ mang nghĩa tiên đoán hoặc dự báo trước.'
        },
        3: {
          error: 'Flood nghĩa là tràn ngập hoặc gây lũ, không phù hợp đứng sau "to" làm mục đích của vệ tinh khí tượng.',
          hint: 'Em hãy chọn động từ chỉ hành động đưa ra phán đoán trước về thời tiết.'
        }
      }
    }
  ],

  // ==================== TAB 2: NGỮ PHÁP (GRAMMAR) ====================
  grammarTopic: 'THE PAST CONTINUOUS (Thì quá khứ tiếp diễn)',
  grammarPoints: [
    {
      id: 'u9_gp1',
      title: 'Chủ điểm 1: Cách dùng thì quá khứ tiếp diễn (The Past Continuous)',
      formula: '• Diễn tả một hành động đang diễn ra tại một thời điểm xác định trong quá khứ:\n  Ví dụ: At 8 p.m. yesterday, we were preparing an emergency kit.\n\n• Diễn tả một hành động đang diễn ra thì một hành động khác xen vào:\n  - Hành động đang diễn ra kéo dài chia ở thì quá khứ tiếp diễn (Past Continuous).\n  - Hành động bất ngờ xen ngang chia ở thì quá khứ đơn (Past Simple).\n  Ví dụ: When the earthquake struck, we were sleeping.\n\n• Diễn tả hai hay nhiều hành động diễn ra đồng thời cùng một lúc trong quá khứ:\n  Ví dụ: While my father was listening to the weather forecast, my mother was packing essential food.',
      rule: 'Thì quá khứ tiếp diễn diễn tả hành động đang xảy ra tại một thời điểm cụ thể trong quá khứ, hoặc đang diễn ra thì có hành động khác xen vào, hoặc hai hành động diễn ra song song cùng lúc.',
      example: {
        english: 'At 7 p.m. yesterday, our family was listening to the flood alert on the radio.',
        vietnamese: 'Lúc 7 giờ tối hôm qua, gia đình chúng tôi đang lắng nghe cảnh báo lũ lụt trên đài phát thanh.'
      }
    },
    {
      id: 'u9_gp2',
      title: 'Chủ điểm 2: Công thức thì quá khứ tiếp diễn (Forms)',
      formula: 'Cấu trúc câu được trình bày thành từng dòng riêng biệt:\n\nKhẳng định:\nS + was / were + V-ing + ...\n\nPhủ định:\nS + was / were not (wasn\'t / weren\'t) + V-ing + ...\n\nNghi vấn (Câu hỏi Yes/No):\nWas / Were + S + V-ing + ...?\n-> Trả lời: Yes, S + was/were. / No, S + wasn\'t/weren\'t.\n\nCâu hỏi có từ để hỏi (Wh-questions):\nWh-word + was / were + S + V-ing + ...?',
      rule: 'Cấu trúc thì quá khứ tiếp diễn gồm trợ động từ to be ở quá khứ (was/were) đi kèm động từ thêm đuôi -ing (V-ing).',
      example: {
        english: 'They were evacuating the damaged building when the rescue team arrived. / She wasn\'t sleeping when the storm started.',
        vietnamese: 'Họ đang sơ tán khỏi tòa nhà bị hư hại khi đội cứu hộ đến. / Cô ấy không đang ngủ khi cơn bão bắt đầu.'
      }
    },
    {
      id: 'u9_gp3',
      title: 'Chủ điểm 3: Cách dùng WHEN và WHILE',
      formula: '• WHEN (Khi / Khi mà):\n  - Thường đi với mệnh đề thì quá khứ đơn chỉ hành động ngắn, bất ngờ xen vào một hành động khác đang xảy ra.\n  Cấu trúc: When + S + V(quá khứ đơn), S + was / were + V-ing\n  Hoặc: S + was / were + V-ing + when + S + V(quá khứ đơn)\n  Ví dụ: When the storm hit, we were staying in the community shelter.\n\n• WHILE (Trong khi):\n  - Thường đi với mệnh đề thì quá khứ tiếp diễn chỉ hành động kéo dài.\n  Cấu trúc: While + S + was / were + V-ing, S + V(quá khứ đơn)\n  Hoặc: While + S + was / were + V-ing, S + was / were + V-ing (hai hành động song song)\n  Ví dụ: While the rain was pouring heavily, the wind was blowing fiercely.',
      rule: 'WHEN thường đi với hành động ngắn chen ngang (quá khứ đơn); WHILE thường đi với hành động kéo dài (quá khứ tiếp diễn).',
      example: {
        english: 'The lights went out while we were having dinner. / When the siren rang, we were packing our bags.',
        vietnamese: 'Đèn vụt tắt trong khi chúng tôi đang ăn tối. / Khi tiếng còi vang lên, chúng tôi đang thu dọn đồ đạc.'
      }
    },
    {
      id: 'u9_gp4',
      title: 'Chủ điểm 4: Lưu ý – Phân chia Was/Were & Quy tắc thêm đuôi -ing',
      formula: '• Phân chia chủ ngữ với Was / Were:\n  - Dùng WAS với chủ ngữ: I, he, she, it, danh từ số ít (the storm, a tree), danh từ không đếm được (water, rain).\n  - Dùng WERE với chủ ngữ: you, we, they, danh từ số nhiều (the villagers, buildings, volunteers).\n\n• Quy tắc thêm đuôi -ing vào động từ:\n  - Động từ thông thường: thêm trực tiếp đuôi -ing (watch -> watching, blow -> blowing, rain -> raining).\n  - Động từ tận cùng bằng một chữ "e": bỏ "e" rồi thêm -ing (evacuate -> evacuating, shake -> shaking, strike -> striking).\n  - Động từ có 1 âm tiết, tận cùng là 1 nguyên âm + 1 phụ âm: gấp đôi phụ âm cuối (run -> running, sit -> sitting).\n  - Động từ tận cùng bằng "ie": đổi "ie" thành "y" rồi thêm -ing (lie -> lying, die -> dying).',
      rule: 'Chủ ngữ số ít đi với WAS, chủ ngữ số nhiều đi với WERE. Chú ý quy tắc bỏ "e" và gấp đôi phụ âm cuối khi thêm -ing.',
      example: {
        english: 'The heavy rain was falling and the river was rising rapidly.',
        vietnamese: 'Cơn mưa lớn đang trút xuống và nước sông đang dâng lên nhanh chóng.'
      }
    }
  ],

  // 5 CÂU HỎI CỦNG CỐ NGỮ PHÁP UNIT 9 (Điền từ vào chỗ trống)
  grammarQuestions: [
    {
      id: 'u9_gq1',
      question: 'At 8 o\'clock yesterday evening, my brother ______ the news on television about the approaching storm.',
      options: [
        'watches',
        'is watching',
        'was watching',
        'watched'
      ],
      correctIndex: 2,
      explanation: 'Tại thời điểm xác định trong quá khứ ("At 8 o\'clock yesterday evening"), ta dùng thì quá khứ tiếp diễn. Chủ ngữ số ít "my brother" đi với "was watching".',
      hint: 'Em hãy chú ý dấu hiệu thời gian: "At + giờ cụ thể + mốc quá khứ" diễn tả hành động đang diễn ra tại thời điểm đó.',
      knowledgeTopic: 'Quá khứ tiếp diễn – Thời điểm xác định trong quá khứ',
      wrongFeedbacks: {
        0: {
          error: 'Watches là thì hiện tại đơn chỉ thói quen, không phù hợp với mốc thời gian tối hôm qua.',
          hint: 'Câu diễn tả hành động đang diễn ra tại một giờ cụ thể trong quá khứ.'
        },
        1: {
          error: 'Is watching là thì hiện tại tiếp diễn diễn tả hành động ngay lúc nói.',
          hint: 'Mốc thời gian "yesterday evening" yêu cầu động từ to be ở dạng quá khứ.'
        },
        3: {
          error: 'Watched là thì quá khứ đơn, chỉ dùng khi hành động đã hoàn tất hoặc không nhấn mạnh tính tiếp diễn tại giờ cụ thể.',
          hint: 'Tại thời điểm 8 giờ tối hôm qua, hành động đang diễn ra cần cấu trúc was/were + V-ing.'
        }
      }
    },
    {
      id: 'u9_gq2',
      question: 'While the rescue workers ______ through the flooded streets, they found three stranded villagers on a roof.',
      options: [
        'were searching',
        'are searching',
        'was searching',
        'searched'
      ],
      correctIndex: 0,
      explanation: 'Mệnh đề đi sau "While" diễn tả hành động đang xảy ra kéo dài trong quá khứ nên dùng thì quá khứ tiếp diễn. Chủ ngữ số nhiều "the rescue workers" đi với "were searching".',
      hint: 'Em hãy để ý liên từ "While" và chủ ngữ số nhiều để chọn dạng quá khứ tiếp diễn tương ứng.',
      knowledgeTopic: 'Quá khứ tiếp diễn đi với While',
      wrongFeedbacks: {
        1: {
          error: 'Are searching là hiện tại tiếp diễn, trong khi vế sau "they found" đã ở quá khứ.',
          hint: 'Toàn bộ sự việc diễn ra trong quá khứ nên trợ động từ to be phải ở thì quá khứ.'
        },
        2: {
          error: 'Was searching dùng cho chủ ngữ số ít, còn chủ ngữ ở đây là danh từ số nhiều.',
          hint: 'Chủ ngữ "the rescue workers" là số nhiều, cần dùng was hay were?'
        },
        3: {
          error: 'Searched là quá khứ đơn, không diễn tả được hành động kéo dài đang diễn ra sau liên từ While.',
          hint: 'Sau While thường là hành động đang tiếp diễn kéo dài.'
        }
      }
    },
    {
      id: 'u9_gq3',
      question: 'What ______ you doing when the earthquake struck the coastal area yesterday?',
      options: [
        'did',
        'was',
        'are',
        'were'
      ],
      correctIndex: 3,
      explanation: 'Cấu trúc câu hỏi quá khứ tiếp diễn với chủ ngữ "you": Wh-word + were + you + V-ing...? Mệnh đề "when the earthquake struck" chỉ hành động ngắn xen vào ở quá khứ đơn.',
      hint: 'Em hãy quan sát động từ "doing" có đuôi -ing và chủ ngữ "you" để chọn trợ động từ to be quá khứ thích hợp.',
      knowledgeTopic: 'Câu hỏi thì quá khứ tiếp diễn',
      wrongFeedbacks: {
        0: {
          error: 'Trợ động từ "did" đi với động từ nguyên mẫu, không kết hợp với V-ing "doing".',
          hint: 'Khi động từ chính có đuôi -ing, câu hỏi cần trợ động từ to be ở quá khứ.'
        },
        1: {
          error: 'Was chỉ dùng cho chủ ngữ số ít như I, he, she, it.',
          hint: 'Chủ ngữ "you" đi với trợ động từ to be nào trong quá khứ?'
        },
        2: {
          error: 'Are là to be ở hiện tại, trong khi câu hỏi có mốc thời gian "yesterday".',
          hint: 'Sự việc xảy ra vào ngày hôm qua nên to be phải chia ở quá khứ.'
        }
      }
    },
    {
      id: 'u9_gq4',
      question: 'The children ______ outside in the garden when the storm began because it was too dangerous.',
      options: [
        'weren\'t play',
        'weren\'t playing',
        'wasn\'t playing',
        'didn\'t playing'
      ],
      correctIndex: 1,
      explanation: 'Thể phủ định của thì quá khứ tiếp diễn với chủ ngữ số nhiều "The children": were not (weren\'t) + V-ing.',
      hint: 'Chủ ngữ "The children" là số nhiều, thể phủ định của thì quá khứ tiếp diễn có dạng to be nào đi cùng động từ đuôi -ing?',
      knowledgeTopic: 'Thể phủ định thì quá khứ tiếp diễn',
      wrongFeedbacks: {
        0: {
          error: 'Weren\'t không thể đi với động từ nguyên mẫu "play".',
          hint: 'Thì tiếp diễn bắt buộc động từ chính phải thêm đuôi -ing.'
        },
        2: {
          error: 'Wasn\'t dùng cho chủ ngữ số ít, trong khi "The children" là danh từ số nhiều.',
          hint: 'Hãy chú ý danh từ số nhiều "children" để chọn was hay were.'
        },
        3: {
          error: 'Trợ động từ "didn\'t" không bao giờ đi kèm trực tiếp với động từ thêm đuôi -ing.',
          hint: 'Thể phủ định thì quá khứ tiếp diễn dùng wasn\'t hoặc weren\'t cộng với V-ing.'
        }
      }
    },
    {
      id: 'u9_gq5',
      question: 'She was packing some bottled water and medicines ______ her husband was checking the battery of the radio.',
      options: [
        'when',
        'so',
        'while',
        'because'
      ],
      correctIndex: 2,
      explanation: 'Hai hành động diễn ra song song cùng lúc trong quá khứ ("was packing" và "was checking") được nối với nhau bằng liên từ "while" (trong khi).',
      hint: 'Cả hai vế câu đều chia ở thì quá khứ tiếp diễn diễn tả hai hành động diễn ra đồng thời. Liên từ nào dùng để nối hai hành động này?',
      knowledgeTopic: 'Liên từ While nối hai hành động song song',
      wrongFeedbacks: {
        0: {
          error: 'When thường dùng trước mệnh đề chỉ hành động ngắn chen ngang (quá khứ đơn).',
          hint: 'Khi hai hành động cùng đang tiếp diễn song song, ta dùng liên từ mang nghĩa "trong khi".'
        },
        1: {
          error: 'So là liên từ chỉ kết quả (vì vậy), không dùng để diễn tả hai hành động đồng thời.',
          hint: 'Hãy tìm liên từ chỉ thời gian đồng thời diễn ra.'
        },
        3: {
          error: 'Because là liên từ chỉ nguyên nhân (bởi vì).',
          hint: 'Em hãy chọn liên từ chỉ thời gian mang nghĩa "trong khi".'
        }
      }
    }
  ],

  // ==================== TAB 3: LUYỆN TẬP (PRACTICE) ====================
  // 10 câu hỏi vận dụng tổng hợp Unit 9: Từ vựng thiên tai, thì quá khứ tiếp diễn, when/while, câu hỏi và phủ định
  practiceQuestions: [
    {
      id: 'u9_pq1',
      question: 'The powerful earthquake ______ several old houses and bridges in the town centre yesterday.',
      options: [
        'destroyed',
        'predicted',
        'erupted',
        'warned'
      ],
      correctIndex: 0,
      explanation: '"destroyed" là quá khứ của "destroy" (phá hủy). Cơn động đất dữ dội đã phá hủy nhiều ngôi nhà cổ và cầu cống ở trung tâm thị trấn.',
      hint: 'Em hãy suy luận: Một trận động đất mạnh (powerful earthquake) gây ra hậu quả gì cho các cây cầu và nhà cửa cổ kính?',
      knowledgeTopic: 'Tổng hợp Unit 9 – Hậu quả của động đất',
      wrongFeedbacks: {
        1: {
          error: 'Predicted nghĩa là đã dự đoán, động đất không tự dự đoán nhà cửa.',
          hint: 'Thiên tai gây sập đổ nhà cửa thì dùng động từ nào mang nghĩa tàn phá?'
        },
        2: {
          error: 'Erupted nghĩa là đã phun trào, từ này dùng cho núi lửa.',
          hint: 'Hãy tìm động từ chỉ hành động làm sập, phá hủy công trình.'
        },
        3: {
          error: 'Warned nghĩa là đã cảnh báo.',
          hint: 'Em hãy chọn động từ chỉ tác động phá hủy vật lý của động đất.'
        }
      }
    },
    {
      id: 'u9_pq2',
      question: 'The smoke and ash from the ______ covered the sky and forced nearby residents to evacuate immediately.',
      options: [
        'drought',
        'tornado',
        'emergency kit',
        'volcanic eruption'
      ],
      correctIndex: 3,
      explanation: '"volcanic eruption" là sự phun trào núi lửa, tạo ra lượng lớn khói bụi và tro tàn (smoke and ash) bao phủ bầu trời.',
      hint: 'Em hãy để ý từ khóa "smoke and ash" (khói bụi và tro tàn) để nhận diện thảm họa thiên nhiên này.',
      knowledgeTopic: 'Tổng hợp Unit 9 – Phun trào núi lửa',
      wrongFeedbacks: {
        0: {
          error: 'Drought là hạn hán, đặc trưng bởi thiếu nước chứ không tạo ra khói tro bốc lên bầu trời.',
          hint: 'Hiện tượng nào phun ra tro bụi và khói mù mịt từ miệng núi?'
        },
        1: {
          error: 'Tornado là lốc xoáy gió mạnh.',
          hint: 'Hãy tìm thiên tai phun trào tro bụi và dòng nham thạch.'
        },
        2: {
          error: 'Emergency kit là túi đồ cứu nạn khẩn cấp.',
          hint: 'Đề bài đang nhắc tới một hiện tượng thiên nhiên phun ra khói và tro.'
        }
      }
    },
    {
      id: 'u9_pq3',
      question: 'At 10 a.m. yesterday, Mr. Long ______ sandbags along the river bank to prevent floodwater from entering his house.',
      options: [
        'is placing',
        'was placing',
        'were placing',
        'placed'
      ],
      correctIndex: 1,
      explanation: 'Thời điểm cụ thể trong quá khứ ("At 10 a.m. yesterday") yêu cầu chia thì quá khứ tiếp diễn. Chủ ngữ số ít "Mr. Long" đi với "was placing".',
      hint: 'Em hãy nhận biết mốc giờ cụ thể trong quá khứ và chú ý chủ ngữ số ít để chọn trợ động từ to be phù hợp.',
      knowledgeTopic: 'Tổng hợp Unit 9 – Quá khứ tiếp diễn thời điểm cụ thể',
      wrongFeedbacks: {
        0: {
          error: 'Is placing là thì hiện tại tiếp diễn, không phù hợp với mốc thời gian "yesterday".',
          hint: 'Hành động xảy ra hôm qua cần to be ở thì quá khứ.'
        },
        2: {
          error: 'Were placing dùng cho chủ ngữ số nhiều, còn "Mr. Long" là danh từ số ít.',
          hint: 'Chủ ngữ ngôi thứ ba số ít dùng was hay were?'
        },
        3: {
          error: 'Placed là quá khứ đơn, không diễn đạt được hành động đang diễn ra tại mốc 10 giờ sáng.',
          hint: 'Tại thời điểm xác định trong quá khứ, ta dùng thì quá khứ tiếp diễn.'
        }
      }
    },
    {
      id: 'u9_pq4',
      question: 'The family was having dinner when the siren ______ loudly to warn everyone of the impending flood.',
      options: [
        'sound',
        'was sounding',
        'sounded',
        'is sounding'
      ],
      correctIndex: 2,
      explanation: 'Hành động đang diễn ra kéo dài chia ở quá khứ tiếp diễn ("was having dinner"), hành động ngắn chen ngang chia ở thì quá khứ đơn ("sounded").',
      hint: 'Mệnh đề sau "when" diễn tả hành động ngắn bất ngờ xen ngang vào một hành động đang tiếp diễn thì chia ở thì nào?',
      knowledgeTopic: 'Tổng hợp Unit 9 – Phối hợp thì với When',
      wrongFeedbacks: {
        0: {
          error: 'Sound là dạng nguyên mẫu hiện tại.',
          hint: 'Sự việc đã xảy ra trong quá khứ, hành động chen ngang cần chia ở thì quá khứ đơn.'
        },
        1: {
          error: 'Tiếng còi báo động bất thình lình vang lên là hành động ngắn chen ngang, không chia tiếp diễn.',
          hint: 'Hành động bất ngờ chen ngang chia ở thì quá khứ đơn (thêm đuôi -ed).'
        },
        3: {
          error: 'Is sounding là thì hiện tại tiếp diễn.',
          hint: 'Toàn bộ chuỗi sự việc đều xảy ra trong quá khứ.'
        }
      }
    },
    {
      id: 'u9_pq5',
      question: 'The storm caused extensive ______ to the fishing boats anchored in the harbour.',
      options: [
        'damage',
        'prediction',
        'emergency kit',
        'tornado'
      ],
      correctIndex: 0,
      explanation: 'Cụm từ "cause extensive damage to..." có nghĩa là gây ra thiệt hại, tổn thất nặng nề trên diện rộng.',
      hint: 'Cơn bão gây ra điều gì nghiêm trọng cho các thuyền đánh cá? Em hãy tìm danh từ mang nghĩa sự thiệt hại.',
      knowledgeTopic: 'Tổng hợp Unit 9 – Từ vựng thiệt hại do bão',
      wrongFeedbacks: {
        1: {
          error: 'Prediction nghĩa là lời dự đoán, bão không gây ra lời dự đoán cho tàu thuyền.',
          hint: 'Hãy tìm từ chỉ sự tổn thất, hư hỏng vật chất do thiên tai.'
        },
        2: {
          error: 'Emergency kit là túi đồ cứu trợ khẩn cấp.',
          hint: 'Cụm từ đi với động từ "cause" (gây ra) thường là tổn thất hoặc thiệt hại.'
        },
        3: {
          error: 'Tornado là cơn lốc xoáy, không đi sau cụm "cause extensive ... to".',
          hint: 'Em hãy chọn danh từ có nghĩa là sự tàn phá, hư hại.'
        }
      }
    },
    {
      id: 'u9_pq6',
      question: 'While we were fixing the roof, the heavy rain ______ pouring down again.',
      options: [
        'starts',
        'was starting',
        'is starting',
        'started'
      ],
      correctIndex: 3,
      explanation: 'Hành động đang diễn ra ("were fixing") thì có hành động ngắn khác bất chợt xảy ra chen ngang ("started pouring"). Động từ chen ngang chia ở thì quá khứ đơn.',
      hint: 'Em hãy chú ý: Cơn mưa bất ngờ ập xuống là hành động chen ngang vào công việc sửa mái nhà đang diễn ra. Hành động xen vào chia thì gì?',
      knowledgeTopic: 'Tổng hợp Unit 9 – Hành động xen ngang trong quá khứ',
      wrongFeedbacks: {
        0: {
          error: 'Starts là thì hiện tại đơn, không phù hợp với ngữ cảnh quá khứ.',
          hint: 'Cả mệnh đề đều kể lại sự việc trong quá khứ.'
        },
        1: {
          error: 'Start là động từ chỉ khoảnh khắc bắt đầu xen ngang, thường chia ở quá khứ đơn.',
          hint: 'Hành động ngắn chen ngang vào hành động đang tiếp diễn được chia ở thì quá khứ đơn.'
        },
        2: {
          error: 'Is starting là thì hiện tại tiếp diễn.',
          hint: 'Hãy chia động từ theo thì quá khứ đơn có quy tắc (thêm -ed).'
        }
      }
    },
    {
      id: 'u9_pq7',
      question: 'The students ______ posters about disaster safety when the teacher entered the classroom.',
      options: [
        'drew',
        'was drawing',
        'were drawing',
        'are drawing'
      ],
      correctIndex: 2,
      explanation: 'Hành động đang diễn ra kéo dài khi cô giáo bước vào lớp được chia ở thì quá khứ tiếp diễn. Chủ ngữ số nhiều "The students" đi với "were drawing".',
      hint: 'Các học sinh đang vẽ tranh thì cô giáo bước vào. Với chủ ngữ số nhiều "The students", cấu trúc quá khứ tiếp diễn là gì?',
      knowledgeTopic: 'Tổng hợp Unit 9 – Hành động đang diễn ra có hành động khác xen vào',
      wrongFeedbacks: {
        0: {
          error: 'Drew là quá khứ đơn, không diễn tả được tính chất đang diễn ra của hành động khi cô giáo vào.',
          hint: 'Cần dùng thì quá khứ tiếp diễn để nhấn mạnh quá trình đang vẽ tranh.'
        },
        1: {
          error: 'Was drawing dùng cho chủ ngữ số ít, trong khi "The students" là danh từ số nhiều.',
          hint: 'Danh từ số nhiều có đuôi -s cần đi với were hay was?'
        },
        3: {
          error: 'Are drawing là thì hiện tại tiếp diễn, trong khi vế sau "entered" đã ở quá khứ.',
          hint: 'Hãy chọn to be ở thì quá khứ phù hợp với chủ ngữ số nhiều.'
        }
      }
    },
    {
      id: 'u9_pq8',
      question: '______ your parents watching the news about the hurricane at 7 p.m. yesterday?',
      options: [
        'Did',
        'Were',
        'Was',
        'Are'
      ],
      correctIndex: 1,
      explanation: 'Cấu trúc câu hỏi nghi vấn thì quá khứ tiếp diễn với chủ ngữ số nhiều "your parents": Were + S (số nhiều) + V-ing...?',
      hint: 'Động từ chính phía sau có đuôi -ing ("watching"), chủ ngữ "your parents" là số nhiều, ở quá khứ cần trợ động từ nào đứng đầu câu?',
      knowledgeTopic: 'Tổng hợp Unit 9 – Thể nghi vấn quá khứ tiếp diễn',
      wrongFeedbacks: {
        0: {
          error: 'Did là trợ động từ của quá khứ đơn, đi kèm động từ nguyên mẫu chứ không đi với "watching".',
          hint: 'Khi động từ chính có đuôi -ing, câu hỏi cần trợ động từ to be ở quá khứ.'
        },
        2: {
          error: 'Was chỉ dùng cho chủ ngữ số ít, trong khi "your parents" là bố mẹ (số nhiều).',
          hint: 'Chủ ngữ hai người (số nhiều) cần trợ động từ was hay were?'
        },
        3: {
          error: 'Are là hiện tại, trong khi mốc thời gian là 7 giờ tối hôm qua.',
          hint: 'Sự việc ở ngày hôm qua nên trợ động từ phải ở thì quá khứ.'
        }
      }
    },
    {
      id: 'u9_pq9',
      question: 'Rising river levels after nonstop rains often cause serious ______ in the low-lying farming areas.',
      options: [
        'floods',
        'earthquakes',
        'tornadoes',
        'volcanic eruptions'
      ],
      correctIndex: 0,
      explanation: 'Mực nước sông dâng cao do mưa lớn không dứt thường gây ra lũ lụt nghiêm trọng (floods) ở các vùng canh tác trũng thấp.',
      hint: 'Mực nước sông dâng cao do mưa rào (rising river levels) là nguyên nhân trực tiếp dẫn tới hiện tượng thiên tai nào?',
      knowledgeTopic: 'Tổng hợp Unit 9 – Lũ lụt do nước sông dâng',
      wrongFeedbacks: {
        1: {
          error: 'Earthquakes là các trận động đất do dịch chuyển địa tầng, không do nước sông dâng gây nên.',
          hint: 'Nước dâng ngập vùng trũng sau mưa lớn tạo thành thiên tai gì?'
        },
        2: {
          error: 'Tornadoes là các cơn lốc xoáy trên không trung.',
          hint: 'Hãy tìm danh từ chỉ hiện tượng nước dâng ngập tràn diện rộng.'
        },
        3: {
          error: 'Volcanic eruptions là sự phun trào núi lửa chứa mắc-ma và tro than.',
          hint: 'Em hãy chọn từ vựng chỉ thảm họa lũ lụt ngập nước.'
        }
      }
    },
    {
      id: 'u9_pq10',
      question: 'Nam ______ attention to the disaster emergency broadcast, so he didn\'t know the evacuation route.',
      options: [
        'wasn\'t pay',
        'weren\'t paying',
        'didn\'t paying',
        'wasn\'t paying'
      ],
      correctIndex: 3,
      explanation: 'Cấu trúc phủ định thì quá khứ tiếp diễn với chủ ngữ số ít "Nam": was not (wasn\'t) + V-ing ("wasn\'t paying"). Cụm từ: pay attention to (chú ý tới).',
      hint: 'Chủ ngữ "Nam" là số ít, dạng phủ định của thì quá khứ tiếp diễn kết hợp trợ động từ to be "wasn\'t" với động từ thêm đuôi gì?',
      knowledgeTopic: 'Tổng hợp Unit 9 – Phủ định quá khứ tiếp diễn với chủ ngữ số ít',
      wrongFeedbacks: {
        0: {
          error: 'Wasn\'t không thể đi trực tiếp với động từ nguyên mẫu "pay".',
          hint: 'Thì tiếp diễn bắt buộc động từ phải thêm đuôi -ing.'
        },
        1: {
          error: 'Weren\'t chỉ dùng cho chủ ngữ số nhiều, còn "Nam" là chủ ngữ số ít.',
          hint: 'Chủ ngữ số ít đi với trợ động từ wasn\'t hay weren\'t?'
        },
        2: {
          error: 'Didn\'t đi với động từ nguyên mẫu, không kết hợp với V-ing "paying".',
          hint: 'Cấu trúc phủ định thì tiếp diễn dùng to be (wasn\'t/weren\'t) cộng với V-ing.'
        }
      }
    }
  ]
};
