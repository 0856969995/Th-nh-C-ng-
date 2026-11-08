import { EnglishUnitData } from './englishUnitData';

export const ENGLISH_UNIT_12_DATA: EnglishUnitData = {
  id: 'ch_tienganh_12',
  unitNumber: 12,
  title: 'UNIT 12 – LIFE ON OTHER PLANETS',
  vietnameseTitle: 'CUỘC SỐNG TRÊN CÁC HÀNH TINH KHÁC',
  topic: 'Life on Other Planets & Reported Speech (Questions)',
  description: 'Từ vựng chủ đề các hành tinh, vũ trụ và cấu trúc câu tường thuật dạng câu hỏi (Reported Speech - Questions) theo SGK Tiếng Anh 8 Global Success.',

  // ==================== TAB 1: 10 TỪ VỰNG TRỌNG TÂM ====================
  // Đúng 10 từ vựng theo bảng SGK, chỉ gồm Từ vựng và Nghĩa tiếng Việt (không ví dụ, không từ loại)
  vocabularyList: [
    {
      id: 'u12_v1',
      word: 'Earth',
      partOfSpeech: '',
      meaning: 'Trái Đất'
    },
    {
      id: 'u12_v2',
      word: 'Mars',
      partOfSpeech: '',
      meaning: 'Sao Hỏa'
    },
    {
      id: 'u12_v3',
      word: 'Jupiter',
      partOfSpeech: '',
      meaning: 'Sao Mộc'
    },
    {
      id: 'u12_v4',
      word: 'Saturn',
      partOfSpeech: '',
      meaning: 'Sao Thổ'
    },
    {
      id: 'u12_v5',
      word: 'telescope',
      partOfSpeech: '',
      meaning: 'Kính thiên văn'
    },
    {
      id: 'u12_v6',
      word: 'UFO',
      partOfSpeech: '',
      meaning: 'Vật thể bay không xác định'
    },
    {
      id: 'u12_v7',
      word: 'rocket',
      partOfSpeech: '',
      meaning: 'Tên lửa'
    },
    {
      id: 'u12_v8',
      word: 'galaxy',
      partOfSpeech: '',
      meaning: 'Thiên hà'
    },
    {
      id: 'u12_v9',
      word: 'aliens',
      partOfSpeech: '',
      meaning: 'Người ngoài hành tinh'
    },
    {
      id: 'u12_v10',
      word: 'possibility',
      partOfSpeech: '',
      meaning: 'Khả năng'
    }
  ],

  // ==================== TAB 1: 5 CÂU HỎI CỦNG CỐ TỪ VỰNG ====================
  vocabQuestions: [
    {
      id: 'u12_vq1',
      question: 'We live on planet ______, the third planet from the Sun in our solar system.',
      options: [
        'Earth',
        'Mars',
        'Jupiter',
        'Saturn'
      ],
      correctIndex: 0,
      explanation: '“Earth” có nghĩa là "Trái Đất" – hành tinh nơi loài người sinh sống và là hành tinh thứ ba tính từ Mặt Trời.',
      hint: 'Hãy nhớ lại tên hành tinh quê hương của chúng ta trong tiếng Anh.',
      knowledgeTopic: 'Từ vựng Unit 12: Tên các hành tinh (Earth)',
      wrongFeedbacks: {
        1: {
          error: 'Mars là Sao Hỏa (hành tinh thứ tư tính từ Mặt Trời).',
          hint: 'Sao Hỏa là Mars, còn Trái Đất là Earth.'
        },
        2: {
          error: 'Jupiter là Sao Mộc (hành tinh lớn nhất hệ Mặt Trời).',
          hint: 'Sao Mộc là Jupiter, không phải Trái Đất.'
        },
        3: {
          error: 'Saturn là Sao Thổ (hành tinh có vành đai nổi tiếng).',
          hint: 'Sao Thổ là Saturn.'
        }
      }
    },
    {
      id: 'u12_vq2',
      question: 'Scientists look through a ______ to observe distant stars and planets in space.',
      options: [
        'rocket',
        'telescope',
        'UFO',
        'galaxy'
      ],
      correctIndex: 1,
      explanation: '“telescope” (kính thiên văn) là dụng cụ quang học giúp quan sát các ngôi sao, hành tinh và thiên thể xa xôi trong vũ trụ.',
      hint: 'Dụng cụ phóng đại quang học mà các nhà thiên văn dùng để nhìn ngắm các vì sao là gì?',
      knowledgeTopic: 'Từ vựng Unit 12: Dụng cụ thiên văn (telescope)',
      wrongFeedbacks: {
        0: {
          error: 'Rocket là tên lửa (phương tiện bay vào không gian).',
          hint: 'Tên lửa không phải dụng cụ để nhìn ngắm sao.'
        },
        2: {
          error: 'UFO là vật thể bay không xác định.',
          hint: 'UFO là vật thể bay lạ, không phải thiết bị quan sát.'
        },
        3: {
          error: 'Galaxy là thiên hà khổng lồ chứa hàng tỷ ngôi sao.',
          hint: 'Thiên hà là vùng không gian vũ trụ, không phải dụng cụ quan sát.'
        }
      }
    },
    {
      id: 'u12_vq3',
      question: 'The Milky Way is a huge ______ that contains billions of stars.',
      options: [
        'planet',
        'rocket',
        'galaxy',
        'possibility'
      ],
      correctIndex: 2,
      explanation: '“galaxy” nghĩa là "thiên hà". Dải Ngân Hà (the Milky Way) chính là thiên hà chứa hệ Mặt Trời của chúng ta.',
      hint: 'Dải Ngân Hà là một tập hợp khổng lồ hàng tỷ ngôi sao, tiếng Anh gọi là gì?',
      knowledgeTopic: 'Từ vựng Unit 12: Thiên hà (galaxy)',
      wrongFeedbacks: {
        0: {
          error: 'Planet là hành tinh (như Trái Đất, Sao Hỏa).',
          hint: 'Milky Way gồm hàng tỷ ngôi sao, lớn hơn một hành tinh rất nhiều.'
        },
        1: {
          error: 'Rocket là tên lửa.',
          hint: 'Tên lửa là phương tiện di chuyển trong vũ trụ.'
        },
        3: {
          error: 'Possibility nghĩa là khả năng, triển vọng.',
          hint: 'Possibility là danh từ trừu tượng chỉ khả năng.'
        }
      }
    },
    {
      id: 'u12_vq4',
      question: 'Some movies tell stories about mysterious ______ from outer space visiting Earth.',
      options: [
        'telescopes',
        'rockets',
        'galaxies',
        'aliens'
      ],
      correctIndex: 3,
      explanation: '“aliens” là danh từ có nghĩa là "người ngoài hành tinh" (những sinh vật thông minh đến từ các thế giới khác ngoài Trái Đất).',
      hint: 'Từ nào chỉ những cư dân ngoài Trái Đất thường xuất hiện trong phim khoa học viễn tưởng?',
      knowledgeTopic: 'Từ vựng Unit 12: Người ngoài hành tinh (aliens)',
      wrongFeedbacks: {
        0: {
          error: 'Telescopes là kính thiên văn.',
          hint: 'Kính thiên văn là dụng cụ, không phải nhân vật đến thăm Trái Đất.'
        },
        1: {
          error: 'Rockets là tên lửa.',
          hint: 'Rockets là phương tiện vận chuyển.'
        },
        2: {
          error: 'Galaxies là các thiên hà.',
          hint: 'Galaxies là các hệ sao lớn trong vũ trụ.'
        }
      }
    },
    {
      id: 'u12_vq5',
      question: 'A powerful ______ is used to travel and transport astronauts into space.',
      options: [
        'UFO',
        'rocket',
        'Jupiter',
        'possibility'
      ],
      correctIndex: 1,
      explanation: '“rocket” nghĩa là "tên lửa", phương tiện đẩy phản lực chuyên chở phi hành gia và vệ tinh bay vào không gian.',
      hint: 'Phương tiện bay phóng thẳng đứng lên vũ trụ mang theo phi hành gia là gì?',
      knowledgeTopic: 'Từ vựng Unit 12: Tên lửa (rocket)',
      wrongFeedbacks: {
        0: {
          error: 'UFO là vật thể bay không xác định bí ẩn.',
          hint: 'Con người dùng tên lửa chế tạo chính thức để đưa phi hành gia lên vũ trụ.'
        },
        2: {
          error: 'Jupiter là Sao Mộc (tên một hành tinh khí khổng lồ).',
          hint: 'Sao Mộc là địa điểm thiên thể, không phải phương tiện.'
        },
        3: {
          error: 'Possibility nghĩa là khả năng.',
          hint: 'Possibility không phải phương tiện vận chuyển.'
        }
      }
    }
  ],

  // ==================== TAB 2: NGỮ PHÁP (GRAMMAR) ====================
  grammarTopic: 'REPORTED SPEECH (QUESTIONS) – CÂU HỎI TƯỜNG THUẬT',
  grammarPoints: [
    {
      id: 'u12_gp1',
      title: '1. Cách dùng & Động từ tường thuật thường gặp',
      rule: 'Dùng để thuật lại câu hỏi của người khác mà không trích dẫn nguyên văn.',
      formula: `• CÁCH DÙNG:
  Dùng để thuật lại câu hỏi của người khác mà không trích dẫn nguyên văn câu nói gốc.

• ĐỘNG TỪ TƯỜNG THUẬT THƯỜNG GẶP:
  - ask: hỏi
  - wonder: tự hỏi, băn khoăn
  - want to know: muốn biết`,
      example: {
        english: 'He asked, "Where do you live?" ➔ He asked me where I lived.',
        vietnamese: 'Anh ấy hỏi tôi sống ở đâu (bỏ trợ động từ do, lùi động từ live ➔ lived).'
      }
    },
    {
      id: 'u12_gp2',
      title: '2. Cách chuyển câu hỏi trực tiếp sang câu hỏi tường thuật',
      rule: 'Chia thành 2 dạng: Wh-questions (giữ từ để hỏi) và Yes/No questions (dùng if/whether), trật tự luôn là S + V.',
      formula: `a. Câu hỏi có từ để hỏi (Wh-questions):
   CÔNG THỨC:  S + asked + (O) + Wh-word + S + V.
   (Giữ nguyên từ để hỏi như: what, where, when, why, how...)

b. Câu hỏi Yes/No (Yes/No questions):
   CÔNG THỨC:  S + asked + (O) + if / whether + S + V.
   (Sử dụng "if" hoặc "whether" để nối câu)

LƯU Ý QUAN TRỌNG:
• Luôn đưa câu về trật tự câu trần thuật: S + V (không đảo trợ động từ lên trước chủ ngữ!).
• Thay dấu hỏi chấm (?) bằng dấu chấm (.).`,
      example: {
        english: 'Lan asked Tom, "What are you doing?" ➔ Lan asked Tom what he was doing.',
        vietnamese: 'Lan hỏi Tom cậu ấy đang làm gì (what + he + was doing, không đảo was lên trước he).'
      }
    },
    {
      id: 'u12_gp3',
      title: '3. Bảng ghi nhớ chuyển đổi lùi thì và trạng từ',
      rule: 'Lùi thì động từ về quá khứ và biến đổi trạng từ thời gian, chỉ định tương ứng.',
      formula: `• am / is ➔ was  |  are ➔ were
• can ➔ could    |  will ➔ would
• do / does ➔ did (hoặc bỏ trợ động từ và lùi về Quá khứ đơn: V2/ed)
• now ➔ then     |  here ➔ there`,
      example: {
        english: 'He asked, "Can you see Mars?" ➔ He asked me if I could see Mars.',
        vietnamese: 'Anh ấy hỏi tôi có thể nhìn thấy Sao Hỏa hay không.'
      }
    }
  ],

  // ==================== TAB 2: 5 CÂU HỎI CỦNG CỐ NGỮ PHÁP ====================
  grammarQuestions: [
    {
      id: 'u12_gq1',
      question: 'She asked me, “Where do you live?”',
      options: [
        'She asked me where did I live.',
        'She asked me where do I live.',
        'She asked me where I lived.',
        'She asked me where was I live.'
      ],
      correctIndex: 2,
      explanation: 'Khi tường thuật câu hỏi có từ để hỏi ở thì Hiện tại đơn, ta bỏ trợ động từ "do" và lùi động từ chính "live" về Quá khứ đơn "lived": "where I lived."',
      hint: 'Hãy nhớ: Bỏ trợ động từ do/does, giữ từ để hỏi "where" rồi đến chủ ngữ "I" và động từ lùi thì.',
      knowledgeTopic: 'Ngữ pháp: Tường thuật câu hỏi Wh-question với Hiện tại đơn',
      wrongFeedbacks: {
        0: {
          error: '"where did I live" bị sai vì vẫn giữ trợ động từ "did".',
          hint: 'Trong câu tường thuật trần thuật, không dùng trợ động từ did.'
        },
        1: {
          error: '"where do I live" chưa lùi thì và vẫn giữ trợ động từ "do".',
          hint: 'Động từ tường thuật "asked" yêu cầu mệnh đề sau phải lùi thì.'
        },
        3: {
          error: '"where was I live" sai ngữ pháp cấu trúc động từ.',
          hint: 'Động từ thường "live" ở quá khứ đơn chỉ cần thêm -d thành "lived".'
        }
      }
    },
    {
      id: 'u12_gq2',
      question: 'Lan asked Tom, “What are you doing?”',
      options: [
        'Lan asked Tom what was he doing.',
        'Lan asked Tom what he was doing.',
        'Lan asked Tom what is he doing.',
        'Lan asked Tom what he doing.'
      ],
      correctIndex: 1,
      explanation: 'Trong câu hỏi tường thuật, trật tự là "Wh-word + S + V" (what he was doing). Tuyệt đối không đảo trợ động từ "was" lên trước chủ ngữ "he".',
      hint: 'Nhớ nguyên tắc trật tự trần thuật: Chủ ngữ "he" phải đứng trước trợ động từ "was".',
      knowledgeTopic: 'Ngữ pháp: Trật tự từ trong câu hỏi tường thuật Wh-question',
      wrongFeedbacks: {
        0: {
          error: '"what was he doing" vẫn đảo trợ động từ "was" lên trước "he".',
          hint: 'Câu gián tiếp không đảo ngữ, chủ ngữ phải đứng trước động từ.'
        },
        2: {
          error: '"what is he doing" chưa lùi thì và vẫn đảo ngữ.',
          hint: 'Cần lùi thì sang quá khứ tiếp diễn và đưa chủ ngữ lên trước.'
        },
        3: {
          error: '"what he doing" thiếu trợ động từ to be "was".',
          hint: 'Thì tiếp diễn cần có dạng was/were + V-ing.'
        }
      }
    },
    {
      id: 'u12_gq3',
      question: 'He asked me, “Do you like science fiction films?”',
      options: [
        'He asked me if I liked science fiction films.',
        'He asked me did I like science fiction films.',
        'He asked me whether do I like science fiction films.',
        'He asked me if I like science fiction films.'
      ],
      correctIndex: 0,
      explanation: 'Với câu hỏi Yes/No, công thức là: S + asked + (O) + if/whether + S + V. Bỏ trợ động từ "do", đại từ "you" đổi thành "I", động từ "like" lùi thì thành "liked".',
      hint: 'Câu hỏi Yes/No cần dùng liên từ "if" hoặc "whether", sau đó là S + V lùi thì (liked).',
      knowledgeTopic: 'Ngữ pháp: Câu hỏi Yes/No với if/whether',
      wrongFeedbacks: {
        1: {
          error: '"did I like" bị sai vì không dùng từ nối if/whether và vẫn đảo trợ động từ did.',
          hint: 'Cần có if/whether và bỏ trợ động từ did.'
        },
        2: {
          error: '"whether do I like" chưa lùi thì và vẫn giữ trợ động từ "do".',
          hint: 'Bỏ "do" và lùi động từ "like" về quá khứ "liked".'
        },
        3: {
          error: '"if I like" chưa lùi thì động từ "like".',
          hint: 'Động từ "like" phải lùi một thì thành "liked".'
        }
      }
    },
    {
      id: 'u12_gq4',
      question: 'The boy asked his sister, “Can you see the telescope?”',
      options: [
        'The boy asked his sister could she see the telescope.',
        'The boy asked his sister if can she see the telescope.',
        'The boy asked his sister whether she can see the telescope.',
        'The boy asked his sister if she could see the telescope.'
      ],
      correctIndex: 3,
      explanation: 'Câu hỏi Yes/No với modal verb: Dùng "if/whether" + S (she) + could see. Modal verb "can" lùi thì thành "could" và đứng sau chủ ngữ "she".',
      hint: 'Dùng từ nối "if", lùi "can" thành "could" và đặt sau chủ ngữ "she".',
      knowledgeTopic: 'Ngữ pháp: Câu hỏi Yes/No với Modal Verb (can ➔ could)',
      wrongFeedbacks: {
        0: {
          error: '"could she see" thiếu từ nối if/whether và bị đảo ngữ.',
          hint: 'Cần có từ nối if/whether và chủ ngữ "she" phải đứng trước "could".'
        },
        1: {
          error: '"if can she see" chưa lùi thì "can" và bị đảo ngữ.',
          hint: '"can" phải lùi thành "could" và đặt sau "she".'
        },
        2: {
          error: '"whether she can see" chưa lùi thì động từ "can".',
          hint: '"can" phải chuyển thành "could".'
        }
      }
    },
    {
      id: 'u12_gq5',
      question: 'Mark wondered where the astronaut ______.',
      options: [
        'was going',
        'is going',
        'was he going',
        'does he go'
      ],
      correctIndex: 0,
      explanation: 'Sau động từ tường thuật "wondered" và từ để hỏi "where", mệnh đề theo sau phải có trật tự khẳng định S + V và lùi thì: the astronaut (S) + was going (V).',
      hint: 'Chủ ngữ "the astronaut" đã có sẵn, ta cần động từ lùi thì ở quá khứ mà không đảo ngữ.',
      knowledgeTopic: 'Ngữ pháp: Động từ tường thuật wonder & trật tự câu gián tiếp',
      wrongFeedbacks: {
        1: {
          error: '"is going" chưa lùi thì về quá khứ.',
          hint: 'Động từ "wondered" ở quá khứ đòi hỏi mệnh đề sau phải lùi thì thành "was going".'
        },
        2: {
          error: '"was he going" bị thừa đại từ "he" và đảo ngữ trợ động từ "was".',
          hint: 'Chủ ngữ "the astronaut" đã có sẵn trong đề bài.'
        },
        3: {
          error: '"does he go" dùng trợ động từ thì hiện tại đơn là sai.',
          hint: 'Không dùng trợ động từ câu hỏi trong mệnh đề gián tiếp.'
        }
      }
    }
  ],

  // ==================== TAB 3: 10 CÂU HỎI LUYỆN TẬP VẬN DỤNG MỚI (PRACTICE) ====================
  // 10 câu hỏi vận dụng mới, không sao chép nguyên xi 5 câu từ vựng và 5 câu ngữ pháp ở hai tab trước
  practiceQuestions: [
    {
      id: 'u12_pq1',
      question: 'Known as the Red Planet, ______ is the fourth planet from the Sun.',
      options: [
        'Saturn',
        'Mars',
        'Jupiter',
        'Earth'
      ],
      correctIndex: 1,
      explanation: '“Mars” (Sao Hỏa) thường được gọi là "Hành tinh Đỏ" (the Red Planet) do bề mặt có nhiều oxit sắt, và là hành tinh thứ tư tính từ Mặt Trời.',
      hint: 'Hành tinh nào trong hệ Mặt Trời được mệnh danh là "Hành tinh Đỏ"?',
      knowledgeTopic: 'Luyện tập: Từ vựng các hành tinh (Mars - Sao Hỏa)',
      wrongFeedbacks: {
        0: {
          error: 'Saturn là Sao Thổ, nổi tiếng với vành đai bao quanh.',
          hint: 'Sao Thổ là Saturn, không phải Hành tinh Đỏ.'
        },
        2: {
          error: 'Jupiter là Sao Mộc, hành tinh lớn nhất hệ Mặt Trời.',
          hint: 'Sao Mộc là Jupiter.'
        },
        3: {
          error: 'Earth là Trái Đất (Hành tinh Xanh), hành tinh thứ ba.',
          hint: 'Trái Đất là Earth.'
        }
      }
    },
    {
      id: 'u12_pq2',
      question: 'My brother asked me ______ there was water on Mars.',
      options: [
        'if',
        'what',
        'where',
        'who'
      ],
      correctIndex: 0,
      explanation: 'Đây là câu hỏi tường thuật dạng Yes/No ("Is there water on Mars?"), nên cần dùng liên từ "if" (hoặc "whether") để nối câu.',
      hint: 'Câu hỏi Yes/No khi chuyển sang câu gián tiếp cần dùng từ nối nào (có nghĩa là "liệu/nếu có hay không")?',
      knowledgeTopic: 'Luyện tập: Liên từ if trong câu hỏi Yes/No gián tiếp',
      wrongFeedbacks: {
        1: {
          error: '"what" là từ để hỏi về cái gì, không phù hợp với cấu trúc "there was water".',
          hint: 'Mệnh đề đã có đầy đủ chủ ngữ giả và danh từ, đây là câu hỏi dạng Yes/No.'
        },
        2: {
          error: '"where" là từ để hỏi nơi chốn, trong câu đã có cụm "on Mars".',
          hint: 'Địa điểm "on Mars" đã có sẵn, câu cần từ nối Yes/No.'
        },
        3: {
          error: '"who" là từ để hỏi người.',
          hint: '"who" dùng cho người, không dùng ở đây.'
        }
      }
    },
    {
      id: 'u12_pq3',
      question: '______ is the largest planet in our solar system.',
      options: [
        'Mars',
        'Earth',
        'Jupiter',
        'Saturn'
      ],
      correctIndex: 2,
      explanation: '“Jupiter” (Sao Mộc) là hành tinh có kích thước và khối lượng lớn nhất trong hệ Mặt Trời của chúng ta.',
      hint: 'Hành tinh nào có kích thước khổng lồ lớn nhất trong hệ Mặt Trời?',
      knowledgeTopic: 'Luyện tập: Từ vựng hành tinh (Jupiter - Sao Mộc)',
      wrongFeedbacks: {
        0: {
          error: 'Mars (Sao Hỏa) là hành tinh nhỏ hơn Trái Đất.',
          hint: 'Sao Hỏa không phải hành tinh lớn nhất.'
        },
        1: {
          error: 'Earth (Trái Đất) chỉ đứng thứ năm về kích thước.',
          hint: 'Trái Đất không phải hành tinh lớn nhất.'
        },
        3: {
          error: 'Saturn (Sao Thổ) là hành tinh lớn thứ hai sau Sao Mộc.',
          hint: 'Hành tinh lớn nhất là Sao Mộc (Jupiter).'
        }
      }
    },
    {
      id: 'u12_pq4',
      question: 'The teacher asked us what we ______ about the possibility of life on other planets.',
      options: [
        'think',
        'are thinking',
        'thinks',
        'thought'
      ],
      correctIndex: 3,
      explanation: 'Động từ tường thuật ở quá khứ "asked", do đó động từ trong mệnh đề gián tiếp phải lùi thì từ "think" về Quá khứ đơn là "thought".',
      hint: 'Động từ "asked" ở thì quá khứ, hãy chọn dạng quá khứ đơn của "think".',
      knowledgeTopic: 'Luyện tập: Lùi thì trong câu tường thuật Wh-question',
      wrongFeedbacks: {
        0: {
          error: '"think" là thì hiện tại đơn, chưa lùi thì.',
          hint: 'Cần lùi thì về quá khứ theo động từ tường thuật asked.'
        },
        1: {
          error: '"are thinking" là hiện tại tiếp diễn, chưa lùi thì.',
          hint: 'Hiện tại tiếp diễn cần lùi thành quá khứ tiếp diễn.'
        },
        2: {
          error: '"thinks" là hiện tại đơn ngôi thứ ba, trong khi chủ ngữ là "we".',
          hint: 'Chủ ngữ là "we" và động từ cần lùi về quá khứ đơn.'
        }
      }
    },
    {
      id: 'u12_pq5',
      question: 'The pilot reported seeing a strange ______, an unidentified flying object in the night sky.',
      options: [
        'UFO',
        'telescope',
        'planet',
        'galaxy'
      ],
      correctIndex: 0,
      explanation: '“UFO” là từ viết tắt của "Unidentified Flying Object" (vật thể bay không xác định).',
      hint: 'Từ viết tắt gồm 3 chữ cái tiếng Anh chỉ "vật thể bay không xác định" là gì?',
      knowledgeTopic: 'Luyện tập: Từ vựng vật thể bay không xác định (UFO)',
      wrongFeedbacks: {
        1: {
          error: 'Telescope là kính thiên văn dùng để ngắm sao.',
          hint: 'Kính thiên văn là dụng cụ quan sát đặt dưới mặt đất.'
        },
        2: {
          error: 'Planet là hành tinh (thiên thể tự nhiên).',
          hint: 'Hành tinh không phải vật thể bay lạ được quan sát trên bầu trời đêm.'
        },
        3: {
          error: 'Galaxy là thiên hà.',
          hint: 'Thiên hà chứa hàng tỷ ngôi sao, không phải vật thể bay cá lẻ.'
        }
      }
    },
    {
      id: 'u12_pq6',
      question: 'Nick asked Phong, “Where will the spaceship land?” ➔ Nick asked Phong where ______.',
      options: [
        'would the spaceship land',
        'the spaceship would land',
        'will the spaceship land',
        'the spaceship will land'
      ],
      correctIndex: 1,
      explanation: 'Quy tắc chuyển sang câu tường thuật: Giữ từ để hỏi "where", lùi modal verb "will" thành "would", và trật tự khẳng định S + V ➔ "where the spaceship would land."',
      hint: 'Chủ ngữ "the spaceship" phải đứng trước trợ động từ "would", và "will" phải lùi thì thành "would".',
      knowledgeTopic: 'Luyện tập: Tường thuật câu hỏi với "will ➔ would"',
      wrongFeedbacks: {
        0: {
          error: '"would the spaceship land" bị đảo trợ động từ "would" lên trước chủ ngữ.',
          hint: 'Trong câu gián tiếp, chủ ngữ phải đứng trước động từ.'
        },
        2: {
          error: '"will the spaceship land" chưa lùi thì và vẫn đảo ngữ.',
          hint: '"will" phải lùi thành "would" và không đảo ngữ.'
        },
        3: {
          error: '"the spaceship will land" chưa lùi thì động từ "will" thành "would".',
          hint: 'Động từ "will" cần lùi một thì thành "would".'
        }
      }
    },
    {
      id: 'u12_pq7',
      question: '______ is famous for its beautiful and bright rings of ice and dust.',
      options: [
        'Earth',
        'Mars',
        'Saturn',
        'Rocket'
      ],
      correctIndex: 2,
      explanation: '“Saturn” (Sao Thổ) là hành tinh nổi tiếng nhất trong hệ Mặt Trời với hệ thống vành đai tráng lệ làm từ băng và bụi vũ trụ.',
      hint: 'Hành tinh nào được biết đến với những chiếc vành đai bao quanh tuyệt đẹp?',
      knowledgeTopic: 'Luyện tập: Từ vựng hành tinh (Saturn - Sao Thổ)',
      wrongFeedbacks: {
        0: {
          error: 'Earth là Trái Đất, không có hệ thống vành đai băng.',
          hint: 'Trái Đất là Earth.'
        },
        1: {
          error: 'Mars là Sao Hỏa (Hành tinh Đỏ).',
          hint: 'Sao Hỏa không có vành đai bao quanh nổi tiếng.'
        },
        3: {
          error: 'Rocket là tên lửa (phương tiện nhân tạo).',
          hint: 'Rocket là tên lửa, không phải hành tinh tự nhiên.'
        }
      }
    },
    {
      id: 'u12_pq8',
      question: 'They wanted to know why the rocket ______ delayed yesterday.',
      options: [
        'was',
        'were',
        'is',
        'be'
      ],
      correctIndex: 0,
      explanation: 'Chủ ngữ "the rocket" là danh từ số ít, và câu gián tiếp có động từ tường thuật "wanted to know" nên to be lùi thì về quá khứ số ít là "was": "why the rocket was delayed."',
      hint: 'Chủ ngữ "the rocket" là danh từ số ít, hãy chọn dạng to be quá khứ phù hợp.',
      knowledgeTopic: 'Luyện tập: Động từ tường thuật "want to know" và to be quá khứ',
      wrongFeedbacks: {
        1: {
          error: '"were" dùng cho danh từ số nhiều.',
          hint: '"the rocket" là số ít, phải đi với "was".'
        },
        2: {
          error: '"is" là thì hiện tại, chưa lùi thì.',
          hint: 'Động từ "wanted" ở quá khứ đòi hỏi to be phải lùi thì thành "was".'
        },
        3: {
          error: '"be" là dạng nguyên mẫu không chia.',
          hint: 'Cần chia to be ở thì quá khứ theo chủ ngữ the rocket.'
        }
      }
    },
    {
      id: 'u12_pq9',
      question: 'Scientists believe there is a ______ of finding micro-organisms on Europa.',
      options: [
        'telescope',
        'galaxy',
        'rocket',
        'possibility'
      ],
      correctIndex: 3,
      explanation: '“possibility” (khả năng / triển vọng): "there is a possibility of..." nghĩa là có khả năng điều gì đó sẽ xảy ra.',
      hint: 'Cụm từ "there is a ______ of..." có nghĩa là "có khả năng xảy ra điều gì". Chọn danh từ phù hợp.',
      knowledgeTopic: 'Luyện tập: Cụm từ với danh từ possibility (khả năng)',
      wrongFeedbacks: {
        0: {
          error: 'Telescope là kính thiên văn.',
          hint: 'Kính thiên văn là dụng cụ, không ghép được vào cấu trúc này.'
        },
        1: {
          error: 'Galaxy là thiên hà.',
          hint: 'Thiên hà không phù hợp nghĩa ở đây.'
        },
        2: {
          error: 'Rocket là tên lửa.',
          hint: 'Tên lửa là phương tiện, không hợp ngữ nghĩa.'
        }
      }
    },
    {
      id: 'u12_pq10',
      question: 'She asked, “Are aliens real?” ➔ She asked me if aliens ______ real.',
      options: [
        'was',
        'were',
        'are',
        'have been'
      ],
      correctIndex: 1,
      explanation: 'Chủ ngữ "aliens" là danh từ số nhiều, và to be "are" trong câu trực tiếp được lùi một thì thành "were" trong câu tường thuật.',
      hint: 'Chủ ngữ "aliens" có đuôi -s (số nhiều), dạng to be quá khứ lùi thì của "are" là gì?',
      knowledgeTopic: 'Luyện tập: To be quá khứ số nhiều trong câu hỏi Yes/No gián tiếp',
      wrongFeedbacks: {
        0: {
          error: '"was" chỉ dùng cho chủ ngữ số ít.',
          hint: 'Chủ ngữ "aliens" là danh từ số nhiều, phải đi với "were".'
        },
        2: {
          error: '"are" chưa lùi thì về quá khứ.',
          hint: 'Động từ to be "are" cần lùi một thì thành "were".'
        },
        3: {
          error: '"have been" là thì hiện tại hoàn thành.',
          hint: 'Thì hiện tại đơn của to be (are) lùi thành quá khứ đơn (were).'
        }
      }
    }
  ]
};
