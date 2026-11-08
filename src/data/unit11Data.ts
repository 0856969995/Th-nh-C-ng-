import { EnglishUnitData } from './englishUnitData';

export const ENGLISH_UNIT_11_DATA: EnglishUnitData = {
  id: 'ch_tienganh_11',
  unitNumber: 11,
  title: 'Unit 11: Science and Technology',
  topic: 'Science & Technology, Reported speech (Statements)',
  description: 'Từ vựng chủ đề khoa học và công nghệ, cấu trúc câu tường thuật dạng câu kể (Reported Speech - Statements) theo SGK Tiếng Anh 8 Global Success.',

  // ==================== TAB 1: 10 TỪ VỰNG TRỌNG TÂM ====================
  // Chỉ hiển thị từ tiếng Anh và nghĩa tiếng Việt
  vocabularyList: [
    {
      id: 'u11_v1',
      word: 'online class',
      partOfSpeech: '',
      meaning: 'lớp học trực tuyến'
    },
    {
      id: 'u11_v2',
      word: 'face-to-face class',
      partOfSpeech: '',
      meaning: 'lớp học trực tiếp'
    },
    {
      id: 'u11_v3',
      word: 'video conferencing',
      partOfSpeech: '',
      meaning: 'hội nghị truyền hình'
    },
    {
      id: 'u11_v4',
      word: 'Internet connection',
      partOfSpeech: '',
      meaning: 'kết nối Internet'
    },
    {
      id: 'u11_v5',
      word: 'computer screen',
      partOfSpeech: '',
      meaning: 'màn hình máy tính'
    },
    {
      id: 'u11_v6',
      word: 'robot teacher',
      partOfSpeech: '',
      meaning: 'giáo viên robot'
    },
    {
      id: 'u11_v7',
      word: 'experiment',
      partOfSpeech: '',
      meaning: 'thí nghiệm'
    },
    {
      id: 'u11_v8',
      word: 'fingerprint scanner',
      partOfSpeech: '',
      meaning: 'máy quét dấu vân tay'
    },
    {
      id: 'u11_v9',
      word: 'invent',
      partOfSpeech: '',
      meaning: 'phát minh'
    },
    {
      id: 'u11_v10',
      word: 'discover',
      partOfSpeech: '',
      meaning: 'khám phá, phát hiện'
    }
  ],

  // ==================== TAB 1: CÂU HỎI CỦNG CỐ TỪ VỰNG ====================
  // 5 câu trắc nghiệm điền từ vào chỗ trống (______), 4 phương án A/B/C/D
  vocabQuestions: [
    {
      id: 'u11_vq1',
      question: 'Students put their index fingers on the ______ to verify their identity before entering the computer room.',
      options: [
        'computer screen',
        'fingerprint scanner',
        'online class',
        'robot teacher'
      ],
      correctIndex: 1,
      explanation: '"fingerprint scanner" là máy quét dấu vân tay (thiết bị sinh trắc học quét vân tay để kiểm tra danh tính). Ngữ cảnh đặt ngón tay trỏ ("put their index fingers") để xác nhận danh tính ("verify their identity") chỉ thiết bị này.',
      hint: 'Em hãy chú ý chi tiết đặt ngón tay lên thiết bị để xác thực danh tính sinh trắc học trước khi vào phòng.',
      knowledgeTopic: 'Từ vựng: Khoa học công nghệ – Thiết bị nhận diện',
      wrongFeedbacks: {
        0: {
          error: '"computer screen" là màn hình hiển thị hình ảnh của máy tính, không dùng để quét nhận dạng vân tay mở cửa.',
          hint: 'Hãy tìm thiết bị công nghệ chuyên dụng để nhận diện ngón tay.'
        },
        2: {
          error: '"online class" là lớp học trực tuyến qua mạng, không phải là một thiết bị vật lý đặt ở cửa ra vào.',
          hint: 'Xem xét thiết bị phần cứng hỗ trợ kiểm tra dấu vân tay.'
        },
        3: {
          error: '"robot teacher" là người máy giảng dạy, không phải máy quét nhận dạng đặt tại cửa phòng.',
          hint: 'Chọn danh từ chỉ thiết bị quét kiểm tra vân tay bảo mật.'
        }
      }
    },
    {
      id: 'u11_vq2',
      question: 'Thomas Edison managed to ______ the first practical incandescent light bulb after many years of research.',
      options: [
        'invent',
        'discover',
        'connect',
        'attend'
      ],
      correctIndex: 0,
      explanation: '"invent" nghĩa là phát minh (chế tạo, sáng chế ra một thiết bị hay sản phẩm kỹ thuật hoàn toàn mới chưa từng có trước đó). Edison đã phát minh ra bóng đèn dây tóc thực tiễn đầu tiên.',
      hint: 'Hãy phân biệt giữa việc tạo ra một thiết bị mới chưa từng tồn tại với việc tìm ra một thứ đã có sẵn trong tự nhiên.',
      knowledgeTopic: 'Từ vựng: Động từ khoa học – Phát minh',
      wrongFeedbacks: {
        1: {
          error: '"discover" nghĩa là khám phá hoặc phát hiện ra một thứ đã có sẵn trong tự nhiên (như tìm ra châu lục mới, nguyên tố mới), không dùng cho chế tạo đồ vật mới.',
          hint: 'Bóng đèn là sản phẩm con người chế tạo mới, động từ nào chỉ việc tạo ra phát minh mới?'
        },
        2: {
          error: '"connect" nghĩa là kết nối hoặc nối các vật lại với nhau, không mang nghĩa chế tạo thành công một phát minh khoa học.',
          hint: 'Cần động từ mang nghĩa sáng chế ra công nghệ mới.'
        },
        3: {
          error: '"attend" nghĩa là tham dự hoặc tham gia (ví dụ: attend a meeting), không phù hợp với tân ngữ bóng đèn dây tóc.',
          hint: 'Chọn động từ thể hiện hành động sáng chế kỹ thuật.'
        }
      }
    },
    {
      id: 'u11_vq3',
      question: 'Because of heavy snowfall, the school was closed and pupils attended an ______ from their homes.',
      options: [
        'experiment',
        'face-to-face class',
        'online class',
        'computer screen'
      ],
      correctIndex: 2,
      explanation: '"online class" là lớp học trực tuyến (buổi học diễn ra qua mạng máy tính từ xa). Vì trường đóng cửa do bão tuyết nên học sinh tham gia học tập từ nhà ("from their homes").',
      hint: 'Chú ý ngữ cảnh trường học bị đóng cửa và học sinh phải ngồi học tại nhà qua mạng Internet.',
      knowledgeTopic: 'Từ vựng: Hình thức học tập thời đại số',
      wrongFeedbacks: {
        0: {
          error: '"experiment" là cuộc thí nghiệm khoa học, không dùng với động từ "attend" để chỉ buổi học văn hóa chung thay cho trường đóng cửa.',
          hint: 'Cần cụm danh từ chỉ hình thức học tập trên không gian mạng.'
        },
        1: {
          error: '"face-to-face class" là lớp học trực tiếp gặp mặt trên lớp, trái ngược với ngữ cảnh trường học bị đóng cửa vì bão tuyết.',
          hint: 'Khi ở nhà mà vẫn học được bài thì đó là hình thức học tập trực tuyến.'
        },
        3: {
          error: '"computer screen" là màn hình máy vi tính, không đi với cụm từ "attended an..." để chỉ buổi học.',
          hint: 'Tìm cụm từ chỉ buổi học diễn ra qua nền tảng Internet.'
        }
      }
    },
    {
      id: 'u11_vq4',
      question: 'Our chemistry teacher advised us to wear protective glasses before doing any dangerous ______ in the laboratory.',
      options: [
        'video conferencing',
        'fingerprint scanner',
        'Internet connection',
        'experiment'
      ],
      correctIndex: 3,
      explanation: '"experiment" là thí nghiệm (hoạt động khoa học tiến hành trong phòng thí nghiệm để kiểm chứng phản ứng hóa học hoặc định luật vật lý). Cụm từ "doing an experiment in the laboratory" là cách kết hợp từ rất phổ biến.',
      hint: 'Hãy chú ý cụm từ "doing any dangerous..." trong phòng thí nghiệm ("in the laboratory") cần đeo kính bảo hộ.',
      knowledgeTopic: 'Từ vựng: Hoạt động nghiên cứu thực nghiệm',
      wrongFeedbacks: {
        0: {
          error: '"video conferencing" là hội nghị truyền hình qua video, không phải hoạt động nghiên cứu hóa học nguy hiểm cần kính bảo hộ.',
          hint: 'Cần từ chỉ cuộc thử nghiệm khoa học với hóa chất.'
        },
        1: {
          error: '"fingerprint scanner" là máy quét dấu vân tay, không kết hợp với động từ "doing" trong phòng thí nghiệm hóa.',
          hint: 'Tìm danh từ đi với động từ "do" chỉ việc tiến hành thử nghiệm khoa học.'
        },
        2: {
          error: '"Internet connection" là đường truyền mạng Internet, không liên quan đến việc đeo kính bảo hộ an toàn hóa chất.',
          hint: 'Tập trung vào danh từ chỉ thử nghiệm khoa học.'
        }
      }
    },
    {
      id: 'u11_vq5',
      question: 'Looking continuously at the bright ______ without taking a break can make your eyes tired.',
      options: [
        'online class',
        'computer screen',
        'robot teacher',
        'video conferencing'
      ],
      correctIndex: 1,
      explanation: '"computer screen" là màn hình máy tính. Nhìn liên tục vào màn hình sáng ("bright computer screen") trong nhiều giờ liền sẽ gây mỏi mắt ("make your eyes tired").',
      hint: 'Em hãy tìm bộ phận phát sáng của máy tính mà mắt nhìn trực tiếp vào gây căng thẳng và mỏi mắt.',
      knowledgeTopic: 'Từ vựng: Thiết bị công nghệ – Bộ phận hiển thị',
      wrongFeedbacks: {
        0: {
          error: '"online class" là buổi học trực tuyến, không phải là một bề mặt phát quang chiếu sáng trước mắt.',
          hint: 'Tìm danh từ chỉ bộ phận hiển thị hình ảnh của máy tính.'
        },
        2: {
          error: '"robot teacher" là người máy dạy học, không phải bề mặt phát sáng gây mỏi mắt trực tiếp.',
          hint: 'Chú ý danh từ chỉ bề mặt kính/tấm nền màn hình điện tử.'
        },
        3: {
          error: '"video conferencing" là hình thức họp trực tuyến, không diễn đạt bề mặt phát sáng chiếu vào mắt.',
          hint: 'Cần cụm từ chỉ màn hình vi tính.'
        }
      }
    }
  ],

  // ==================== TAB 2: NGỮ PHÁP ====================
  // Chủ điểm: REPORTED SPEECH (STATEMENTS) – CÂU TƯỜNG THUẬT DẠNG CÂU KỂ
  // Trình bày từng dòng riêng biệt, rõ ràng, dễ hiểu cho học sinh lớp 8
  grammarTopic: 'REPORTED SPEECH (STATEMENTS) – CÂU TƯỜNG THUẬT DẠNG CÂU KỂ',
  grammarPoints: [
    {
      id: 'u11_gp1',
      title: '1. Cấu trúc cơ bản của câu tường thuật dạng câu kể',
      formula: `S + said (that) + S + V (lùi thì)

S + told + O + (that) + S + V (lùi thì)

Giải thích:
- Dùng câu tường thuật để thuật lại lời nói của người khác.
- Sau "said" có thể có hoặc không có "that".
- Sau "told" bắt buộc phải có tân ngữ chỉ người nghe (me, him, her, us, them, Nam,...).`,
      rule: 'Câu tường thuật dùng để thuật lại lời nói của người khác. Phân biệt: said (that)... và told + tân ngữ + (that)...',
      example: {
        english: 'Minh said, "I love science." -> Minh said that he loved science. / Mary told me that she was busy.',
        vietnamese: 'Minh nói rằng bạn ấy yêu thích khoa học. / Mary nói với tôi rằng bạn ấy đang bận.'
      }
    },
    {
      id: 'u11_gp2',
      title: '2. Quy tắc lùi thì thường gặp (Tense Changes)',
      formula: `Khi động từ tường thuật ở quá khứ (said, told), động từ trong câu trực tiếp phải lùi một thì:

• Present simple (Hiện tại đơn) → Past simple (Quá khứ đơn)
  V(s/es) / am / is / are → V2/ed / was / were

• Present continuous (Hiện tại tiếp diễn) → Past continuous (Quá khứ tiếp diễn)
  am / is / are + V-ing → was / were + V-ing

• Future simple (Tương lai đơn với Will) → Would + V (nguyên mẫu)
  will + V → would + V

• Modal verbs (Động từ khiếm khuyết):
  can → could
  must → had to`,
      rule: 'Khi chuyển sang câu tường thuật với said/told, động từ lùi về quá khứ tương ứng: hiện tại đơn thành quá khứ đơn, hiện tại tiếp diễn thành quá khứ tiếp diễn, will thành would, can thành could.',
      example: {
        english: 'Ann said, "I am learning English." -> Ann said that she was learning English.',
        vietnamese: 'Ann nói rằng bạn ấy đang học tiếng Anh.'
      }
    },
    {
      id: 'u11_gp3',
      title: '3. Thay đổi đại từ, từ chỉ thời gian và nơi chốn',
      formula: `• Thay đổi đại từ nhân xưng và tính từ sở hữu theo người nói:
  - I → he / she
  - we → they
  - you → I / we / they
  - my → his / her
  - our → their

• Thay đổi từ chỉ thời gian:
  - now → then
  - today → that day
  - tomorrow → the next day / the following day
  - yesterday → the day before / the previous day

• Thay đổi từ chỉ nơi chốn và chỉ định:
  - here → there
  - this → that
  - these → those`,
      rule: 'Phải chuyển đổi đại từ nhân xưng, tính từ sở hữu, trạng từ thời gian và nơi chốn cho phù hợp với ngữ cảnh gián tiếp.',
      example: {
        english: 'Tom said, "I will buy a new computer tomorrow." -> Tom said that he would buy a new computer the next day.',
        vietnamese: 'Tom nói rằng bạn ấy sẽ mua một chiếc máy tính mới vào ngày hôm sau.'
      }
    }
  ],

  // ==================== TAB 2: CÂU HỎI CỦNG CỐ NGỮ PHÁP ====================
  // 5 câu trắc nghiệm dạng điền từ còn thiếu vào câu tường thuật
  grammarQuestions: [
    {
      id: 'u11_gq1',
      question: 'Lan said that she ______ English very much because it helped her read science books.',
      options: [
        'likes',
        'like',
        'liked',
        'liking'
      ],
      correctIndex: 2,
      explanation: 'Khi động từ tường thuật ở quá khứ ("Lan said that"), động từ chỉ sở thích "like" ở thì hiện tại đơn phải lùi về thì quá khứ đơn: liked.',
      hint: 'Em hãy chú ý động từ tường thuật "said". Khi chuyển lời nói trực tiếp sang câu tường thuật, động từ ở thì hiện tại đơn cần lùi về thì nào?',
      knowledgeTopic: 'Ngữ pháp: Lùi thì từ Hiện tại đơn sang Quá khứ đơn',
      wrongFeedbacks: {
        0: {
          error: '"likes" là thì hiện tại đơn chưa được lùi thì theo động từ tường thuật "said".',
          hint: 'Mệnh đề có động từ tường thuật trong quá khứ cần lùi động từ chính về quá khứ đơn.'
        },
        1: {
          error: '"like" là dạng nguyên mẫu không chia, không phù hợp sau chủ ngữ "she" và chưa lùi thì.',
          hint: 'Hãy chia động từ ở dạng quá khứ có quy tắc (-ed).'
        },
        3: {
          error: '"liking" là dạng V-ing không thể đứng một mình làm vị ngữ chính cho câu.',
          hint: 'Cần một động từ chia thì quá khứ đơn hoàn chỉnh.'
        }
      }
    },
    {
      id: 'u11_gq2',
      question: 'The technician told ______ that the new computer software would be installed that afternoon.',
      options: [
        'us',
        'we',
        'our',
        'that'
      ],
      correctIndex: 0,
      explanation: 'Theo cấu trúc câu tường thuật: S + told + O (tân ngữ chỉ người nghe) + (that)... Đại từ nhân xưng đóng vai trò tân ngữ chỉ người nghe ở đây là "us".',
      hint: 'Hãy nhớ lại công thức với động từ "told": Sau "told" bắt buộc phải có một từ đóng vai trò tân ngữ chỉ người tiếp nhận lời nói.',
      knowledgeTopic: 'Ngữ pháp: Cấu trúc told + tân ngữ (told + O)',
      wrongFeedbacks: {
        1: {
          error: '"we" là đại từ nhân xưng làm chủ ngữ, không thể đứng làm tân ngữ trực tiếp sau động từ "told".',
          hint: 'Cần dạng tân ngữ tương ứng của đại từ nhân xưng chỉ "chúng tôi".'
        },
        2: {
          error: '"our" là tính từ sở hữu, bắt buộc phải có danh từ đi kèm phía sau chứ không đứng độc lập làm tân ngữ.',
          hint: 'Tìm đại từ tân ngữ để đứng sau động từ "told".'
        },
        3: {
          error: 'Sau động từ "told" không dùng liên từ "that" ngay lập tức mà phải có tân ngữ chỉ người nghe trước.',
          hint: 'Khác với "said that", cấu trúc "told" luôn yêu cầu một tân ngữ chỉ người nghe đứng giữa.'
        }
      }
    },
    {
      id: 'u11_gq3',
      question: 'Minh said that he ______ a presentation on modern communication tools the next day.',
      options: [
        'will give',
        'gives',
        'is giving',
        'would give'
      ],
      correctIndex: 3,
      explanation: 'Cụm trạng từ "the next day" là dạng chuyển đổi của "tomorrow" trong câu tường thuật. Động từ khiếm khuyết tương lai "will" phải lùi thì thành "would": would give.',
      hint: 'Em hãy quan sát trạng từ "the next day" chỉ thời điểm tương lai được tường thuật lại. Động từ khiếm khuyết chỉ tương lai "will" phải chuyển thành từ nào?',
      knowledgeTopic: 'Ngữ pháp: Lùi thì tương lai với Will -> Would',
      wrongFeedbacks: {
        0: {
          error: '"will give" giữ nguyên thì tương lai đơn, chưa thực hiện quy tắc lùi thì sau động từ "said".',
          hint: 'Khi tường thuật lại hành động tương lai, từ "will" cần được biến đổi lùi thì như thế nào?'
        },
        1: {
          error: '"gives" là thì hiện tại đơn, không thể hiện hành động sẽ diễn ra vào "the next day".',
          hint: 'Cần dạng quá khứ của trợ động từ chỉ tương lai.'
        },
        2: {
          error: '"is giving" vẫn đang ở thì hiện tại tiếp diễn, chưa lùi thì theo mệnh đề chính "said".',
          hint: 'Hãy tìm dạng lùi thì quá khứ của will.'
        }
      }
    },
    {
      id: 'u11_gq4',
      question: 'Nam said, "I am testing a new robot now." \n-> Nam said that he ______ a new robot then.',
      options: [
        'is testing',
        'was testing',
        'tests',
        'will test'
      ],
      correctIndex: 1,
      explanation: 'Câu trực tiếp dùng thì hiện tại tiếp diễn ("am testing"). Khi chuyển sang câu tường thuật với "said", thì hiện tại tiếp diễn lùi thành thì quá khứ tiếp diễn ("was testing" đi với chủ ngữ số ít "he").',
      hint: 'Hãy quan sát thì của động từ trong ngoặc kép "am testing". Khi lùi thì sang quá khứ tương ứng và đi với chủ ngữ "he", động từ to be biến đổi ra sao?',
      knowledgeTopic: 'Ngữ pháp: Lùi thì Hiện tại tiếp diễn -> Quá khứ tiếp diễn',
      wrongFeedbacks: {
        0: {
          error: '"is testing" vẫn giữ ở thì hiện tại, chưa thực hiện lùi thì sang quá khứ.',
          hint: 'Đổi to be từ hiện tại sang dạng quá khứ tương ứng với chủ ngữ "he".'
        },
        2: {
          error: '"tests" là thì hiện tại đơn, không bảo toàn bản chất tiếp diễn của động từ câu gốc.',
          hint: 'Hành động đang diễn ra trong câu trực tiếp phải được lùi về thì quá khứ tiếp diễn.'
        },
        3: {
          error: '"will test" là thì tương lai đơn, không đúng với ý nghĩa đang thử nghiệm của câu trực tiếp.',
          hint: 'Giữ nguyên dạng tiếp diễn V-ing và lùi to be về quá khứ.'
        }
      }
    },
    {
      id: 'u11_gq5',
      question: 'Mary said that she had visited the national science exhibition ______.',
      options: [
        'tomorrow',
        'today',
        'the day before',
        'yesterday'
      ],
      correctIndex: 2,
      explanation: 'Trong câu tường thuật gián tiếp, trạng từ chỉ thời gian trong quá khứ "yesterday" được chuyển đổi thành "the day before" (hoặc "the previous day").',
      hint: 'Em hãy xem xét quy tắc biến đổi trạng ngữ thời gian: Trong câu tường thuật, từ "yesterday" (hôm qua) được đổi thành cụm từ nào?',
      knowledgeTopic: 'Ngữ pháp: Chuyển đổi trạng từ thời gian (Yesterday -> The day before)',
      wrongFeedbacks: {
        0: {
          error: '"tomorrow" là trạng từ chỉ tương lai ở câu trực tiếp, không dùng cho hành động đã hoàn tất trong quá khứ.',
          hint: 'Xem lại bảng chuyển đổi các từ chỉ thời gian trong quá khứ của câu tường thuật.'
        },
        1: {
          error: '"today" là trạng từ chưa được chuyển đổi (câu tường thuật phải đổi thành "that day").',
          hint: 'Tìm trạng từ chỉ ngày hôm trước đã được biến đổi gián tiếp.'
        },
        3: {
          error: '"yesterday" là từ dùng trong câu trực tiếp, trong câu tường thuật bắt buộc phải chuyển đổi gián tiếp.',
          hint: 'Trong câu tường thuật, "yesterday" được thay thế bằng cụm từ nào mang nghĩa ngày hôm trước?'
        }
      }
    }
  ],

  // ==================== TAB 3: LUYỆN TẬP ====================
  // 10 câu hỏi vận dụng mới hoàn toàn, ưu tiên điền vào chỗ trống
  // Cân bằng đáp án: 3 A, 2 B, 2 C, 3 D (Tổng cả bài 20 câu: 5 A, 5 B, 5 C, 5 D)
  practiceQuestions: [
    {
      id: 'u11_pq1',
      question: 'Ann said that she ______ an online class the day before.',
      options: [
        'attended',
        'attends',
        'attending',
        'attend'
      ],
      correctIndex: 0,
      explanation: 'Dấu hiệu "said that" và trạng từ thời gian "the day before" (ngày hôm trước) yêu cầu động từ lùi về thì quá khứ đơn: attended.',
      hint: 'Hãy quan sát động từ tường thuật "said" và trạng từ "the day before". Động từ chính cần được chia ở thì quá khứ như thế nào?',
      knowledgeTopic: 'Luyện tập: Lùi thì quá khứ đơn trong câu tường thuật',
      wrongFeedbacks: {
        1: {
          error: '"attends" là thì hiện tại đơn, không phù hợp với thời điểm "the day before" và động từ tường thuật "said".',
          hint: 'Hành động xảy ra ngày hôm trước cần chia ở thì quá khứ.'
        },
        2: {
          error: '"attending" là dạng V-ing đứng một mình, không thể làm động từ vị ngữ mà không có trợ động từ.',
          hint: 'Cần một động từ chia thì quá khứ hoàn chỉnh có đuôi -ed.'
        },
        3: {
          error: '"attend" là dạng nguyên mẫu, chưa được chia thì quá khứ.',
          hint: 'Hãy chọn dạng quá khứ của động từ attend.'
        }
      }
    },
    {
      id: 'u11_pq2',
      question: 'My teacher said that we ______ a new experiment the next day.',
      options: [
        'do',
        'did',
        'would do',
        'doing'
      ],
      correctIndex: 2,
      explanation: 'Trạng từ "the next day" chuyển từ "tomorrow", thể hiện hành động tương lai trong quá khứ. Cấu trúc lùi thì tương lai: will do -> would do.',
      hint: 'Em hãy chú ý cụm từ "the next day" xuất phát từ "tomorrow" trong câu trực tiếp. Khi lùi thì từ tương lai đơn, ta dùng cấu trúc gì?',
      knowledgeTopic: 'Luyện tập: Hành động tương lai trong câu gián tiếp (would + V)',
      wrongFeedbacks: {
        0: {
          error: '"do" là hiện tại nguyên mẫu, chưa thể hiện ý định tương lai được lùi thì.',
          hint: 'Xem xét cách lùi thì của trợ động từ chỉ tương lai will.'
        },
        1: {
          error: '"did" là thì quá khứ đơn, không phù hợp để diễn đạt hành động sẽ xảy ra vào ngày hôm sau ("the next day").',
          hint: 'Hành động sẽ diễn ra vào ngày hôm sau cần có trợ động từ quá khứ chỉ tương lai.'
        },
        3: {
          error: '"doing" là dạng V-ing không đứng độc lập làm động từ chính mang nghĩa tương lai.',
          hint: 'Chọn cấu trúc gồm trợ động từ khiếm khuyết đi kèm động từ nguyên mẫu.'
        }
      }
    },
    {
      id: 'u11_pq3',
      question: 'Minh said, "I use a computer every day." \n-> Minh said that he ______ a computer every day.',
      options: [
        'uses',
        'used',
        'use',
        'using'
      ],
      correctIndex: 1,
      explanation: 'Câu trực tiếp dùng thì hiện tại đơn "use". Khi tường thuật lại với "Minh said that", động từ "use" được lùi về thì quá khứ đơn: used.',
      hint: 'Câu gốc dùng động từ ở thì hiện tại đơn. Khi chuyển sang câu tường thuật bắt đầu bằng "Minh said that", động từ cần được lùi về thì nào?',
      knowledgeTopic: 'Luyện tập: Chuyển đổi câu trực tiếp sang gián tiếp',
      wrongFeedbacks: {
        0: {
          error: '"uses" vẫn ở thì hiện tại đơn, chưa tuân thủ quy tắc lùi thì.',
          hint: 'Động từ trong câu tường thuật cần được chuyển về thì quá khứ đơn.'
        },
        2: {
          error: '"use" là dạng nguyên mẫu không lùi thì và cũng không hòa hợp với chủ ngữ "he".',
          hint: 'Lùi động từ "use" sang dạng quá khứ có quy tắc.'
        },
        3: {
          error: '"using" là dạng V-ing, không thể thay thế cho vị ngữ thì quá khứ đơn.',
          hint: 'Cần dạng quá khứ đơn của động từ use.'
        }
      }
    },
    {
      id: 'u11_pq4',
      question: 'The teacher told us that we ______ look at the computer screen for too long without resting.',
      options: [
        'are',
        'does',
        'shouldn\'t',
        'shouldn\'t to'
      ],
      correctIndex: 2,
      explanation: 'Cấu trúc khuyên ngăn: shouldn\'t + V (nguyên mẫu). Lời giáo viên khuyên học sinh không nên ("shouldn\'t") nhìn màn hình máy tính quá lâu để tránh hại mắt.',
      hint: 'Hãy tìm động từ khiếm khuyết mang nghĩa khuyên bảo học sinh không nên làm điều gì đó có hại cho mắt.',
      knowledgeTopic: 'Luyện tập: Động từ khiếm khuyết đưa ra lời khuyên trong câu tường thuật',
      wrongFeedbacks: {
        0: {
          error: '"are" là động từ to be, không đi kèm trực tiếp với động từ thường nguyên mẫu "look".',
          hint: 'Cần một động từ khiếm khuyết mang tính chất lời khuyên bảo.'
        },
        1: {
          error: '"does" là trợ động từ số ít, không hòa hợp với chủ ngữ "we" và không tạo thành lời khuyên.',
          hint: 'Tìm từ thể hiện lời khuyên răn không nên làm gì.'
        },
        3: {
          error: 'Sau động từ khiếm khuyết "should / shouldn\'t" đi trực tiếp với động từ nguyên mẫu không có "to".',
          hint: 'Động từ khiếm khuyết kết hợp trực tiếp với V nguyên thể, không thêm "to".'
        }
      }
    },
    {
      id: 'u11_pq5',
      question: 'Tom said that his robot teacher ______ very helpful during his science homework.',
      options: [
        'is',
        'are',
        'be',
        'was'
      ],
      correctIndex: 3,
      explanation: 'Mệnh đề bắt đầu bằng "Tom said that". Động từ to be ở hiện tại "is" đi với chủ ngữ số ít "his robot teacher" phải được lùi thì về quá khứ đơn thành "was".',
      hint: 'Chủ ngữ "his robot teacher" là danh từ số ít. Khi động từ tường thuật ở quá khứ ("said that"), động từ to be ở hiện tại cần lùi về dạng quá khứ nào?',
      knowledgeTopic: 'Luyện tập: Lùi thì to be với chủ ngữ số ít',
      wrongFeedbacks: {
        0: {
          error: '"is" là thì hiện tại đơn, chưa lùi thì theo mệnh đề "Tom said that".',
          hint: 'Chuyển to be "is" về thì quá khứ đơn.'
        },
        1: {
          error: '"are" là to be hiện tại số nhiều, vừa sai thì vừa không hòa hợp với chủ ngữ số ít.',
          hint: 'Chủ ngữ là số ít và cần dạng to be quá khứ.'
        },
        2: {
          error: '"be" là dạng nguyên thể, không thể đứng làm vị ngữ trực tiếp mà không có trợ động từ.',
          hint: 'Cần dạng quá khứ đơn đã chia của to be.'
        }
      }
    },
    {
      id: 'u11_pq6',
      question: 'Dr. Nelson ______ that scientists would invent more intelligent machines in the 21st century.',
      options: [
        'said',
        'told',
        'spoke',
        'talked'
      ],
      correctIndex: 0,
      explanation: 'Sau chỗ trống có liên từ "that" và mệnh đề tường thuật, không có tân ngữ chỉ người nghe. Ta dùng cấu trúc "said that". Nếu dùng "told" thì bắt buộc phải có tân ngữ (told someone that).',
      hint: 'Hãy quan sát phía sau chỗ trống: Có từ nối "that" nhưng không có người nghe cụ thể (như me, us, him). Động từ tường thuật nào kết hợp trực tiếp với (that)?',
      knowledgeTopic: 'Luyện tập: Phân biệt động từ tường thuật Said và Told',
      wrongFeedbacks: {
        1: {
          error: '"told" bắt buộc phải đi kèm một tân ngữ chỉ người nghe (ví dụ: told us that), không đứng ngay trước "that".',
          hint: 'Khi không có tân ngữ chỉ người nghe đứng giữa, ta dùng "said that" chứ không dùng "told that".'
        },
        2: {
          error: '"spoke" thường đi với giới từ "to" hoặc "with", không dùng trong cấu trúc tường thuật trực tiếp với "that".',
          hint: 'Chọn động từ tường thuật thông dụng nhất đi với "that".'
        },
        3: {
          error: '"talked" thường đi với "to/about", không đi trực tiếp với mệnh đề "that" trong câu tường thuật.',
          hint: 'Động từ nào dùng để thuật lại lời phát biểu đi trực tiếp với that?'
        }
      }
    },
    {
      id: 'u11_pq7',
      question: 'Hoa told her classmates that ______ couldn\'t join the video conferencing because of a weak Internet connection.',
      options: [
        'she',
        'her',
        'hers',
        'herself'
      ],
      correctIndex: 0,
      explanation: 'Chỗ trống đứng ở vị trí chủ ngữ của mệnh đề phụ (trước động từ "couldn\'t join") và thay thế cho "Hoa" (giới tính nữ), nên cần dùng đại từ nhân xưng chủ ngữ: she.',
      hint: 'Chỗ trống đứng trước động từ "couldn\'t join" để làm chủ ngữ của mệnh đề, thay thế cho bạn Hoa. Em cần đại từ nhân xưng làm chủ ngữ nào?',
      knowledgeTopic: 'Luyện tập: Chuyển đổi đại từ nhân xưng làm chủ ngữ',
      wrongFeedbacks: {
        1: {
          error: '"her" là đại từ tân ngữ hoặc tính từ sở hữu, không đứng làm chủ ngữ của mệnh đề.',
          hint: 'Tìm dạng đại từ nhân xưng giữ vai trò chủ ngữ.'
        },
        2: {
          error: '"hers" là đại từ sở hữu, mang nghĩa "của cô ấy", không thể làm chủ ngữ thực hiện hành động tham gia cuộc họp.',
          hint: 'Cần đại từ nhân xưng chủ ngữ thay cho một bạn nữ.'
        },
        3: {
          error: '"herself" là đại từ phản thân, không dùng làm chủ ngữ chính của mệnh đề.',
          hint: 'Chọn đại từ nhân xưng cơ bản đứng trước động từ.'
        }
      }
    },
    {
      id: 'u11_pq8',
      question: 'The professor told ______ students that they would explore space travel in their next lesson.',
      options: [
        'himself',
        'his',
        'him',
        'he'
      ],
      correctIndex: 1,
      explanation: 'Chỗ trống đứng trước danh từ "students" để bổ nghĩa chỉ quyền sở hữu của vị giáo sư ("The professor" - nam giới), do đó cần tính từ sở hữu: his.',
      hint: 'Chỗ trống đứng ngay trước danh từ "students" để chỉ "học sinh của ông ấy". Em cần một tính từ sở hữu thích hợp cho nam giới.',
      knowledgeTopic: 'Luyện tập: Tính từ sở hữu trước danh từ',
      wrongFeedbacks: {
        0: {
          error: '"himself" là đại từ phản thân, không đứng trước danh từ để chỉ sự sở hữu.',
          hint: 'Cần tính từ sở hữu đứng trước danh từ chỉ người.'
        },
        2: {
          error: '"him" là đại từ tân ngữ, không bổ nghĩa trực tiếp đứng trước danh từ "students".',
          hint: 'Tìm dạng sở hữu tương ứng của đại từ he.'
        },
        3: {
          error: '"he" là đại từ nhân xưng làm chủ ngữ, không đứng trước danh từ.',
          hint: 'Dùng từ chỉ sự sở hữu đi kèm với danh từ.'
        }
      }
    },
    {
      id: 'u11_pq9',
      question: 'Phong said that he was doing a physics experiment in the laboratory ______.',
      options: [
        'now',
        'tomorrow',
        'today',
        'then'
      ],
      correctIndex: 3,
      explanation: 'Trong câu tường thuật gián tiếp sử dụng thì quá khứ tiếp diễn ("was doing"), trạng từ chỉ thời điểm tức thời "now" trong câu trực tiếp được chuyển đổi thành "then".',
      hint: 'Trong câu trực tiếp diễn tả hành động đang xảy ra dùng từ "now" (bây giờ). Khi chuyển sang câu tường thuật, từ "now" được đổi thành từ nào?',
      knowledgeTopic: 'Luyện tập: Biến đổi trạng từ thời gian (now -> then)',
      wrongFeedbacks: {
        0: {
          error: '"now" là trạng từ của câu trực tiếp, chưa được chuyển đổi trong câu tường thuật.',
          hint: 'Quy tắc gián tiếp: từ "now" chuyển thành một trạng từ mang nghĩa "lúc bấy giờ".'
        },
        1: {
          error: '"tomorrow" chỉ tương lai, không ăn khớp với hành động đang diễn ra trong quá khứ ("was doing").',
          hint: 'Hành động đang tiếp diễn ở quá khứ lùi thì từ trạng từ "now".'
        },
        2: {
          error: '"today" là từ chưa chuyển đổi (nếu chuyển phải thành "that day"), và không đi với hành động tức thời.',
          hint: 'Xem lại cách biến đổi của trạng từ "now".'
        }
      }
    },
    {
      id: 'u11_pq10',
      question: 'The school principal announced that students would return to ______ classes instead of online learning next semester.',
      options: [
        'computer screen',
        'fingerprint scanner',
        'experiment',
        'face-to-face'
      ],
      correctIndex: 3,
      explanation: '"face-to-face classes" là các lớp học trực tiếp (học sinh và giáo viên cùng có mặt tại lớp). Chi tiết "instead of online learning" (thay vì học trực tuyến) đối lập rõ rệt với hình thức học trực tiếp.',
      hint: 'Hãy tìm tính từ/cụm từ chỉ hình thức học trực tiếp tại lớp học, mang ý nghĩa đối lập với hình thức học qua mạng ("online learning").',
      knowledgeTopic: 'Luyện tập: Từ vựng Unit 11 – Hình thức học trực tiếp',
      wrongFeedbacks: {
        0: {
          error: '"computer screen" là màn hình máy tính, không dùng làm tính từ bổ nghĩa cho "classes" mang nghĩa đối lập với học trực tuyến.',
          hint: 'Tìm cụm từ chỉ việc gặp mặt trực tiếp mặt-đối-mặt tại trường.'
        },
        1: {
          error: '"fingerprint scanner" là máy quét dấu vân tay, không bổ nghĩa cho từ lớp học.',
          hint: 'Cần từ chỉ mô hình lớp học trực tiếp truyền thống.'
        },
        2: {
          error: '"experiment" là cuộc thí nghiệm, không phải cụm từ chỉ hình thức học tập đối lập với "online learning".',
          hint: 'Hãy chọn cụm từ có nghĩa là trực tiếp, gặp mặt nhau ngoài đời thực.'
        }
      }
    }
  ]
};
