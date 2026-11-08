import { EnglishVocabularyItem, EnglishGrammarPoint, QuizQuestion } from '../types';

export interface EnglishUnitData {
  id: string;
  unitNumber: number;
  title: string;
  vietnameseTitle?: string;
  topic: string;
  description: string;
  vocabularyList: EnglishVocabularyItem[];
  vocabQuestions: QuizQuestion[];
  grammarTopic?: string;
  grammarPoints: EnglishGrammarPoint[];
  grammarQuestions: QuizQuestion[];
  practiceQuestions: QuizQuestion[];
}

export const ENGLISH_UNIT_1_DATA: EnglishUnitData = {
  id: 'ch_tienganh_1',
  unitNumber: 1,
  title: 'Unit 1: Leisure Time',
  topic: 'Leisure activities & Verbs of liking/disliking',
  description: 'Từ vựng trọng tâm, điểm ngữ pháp và bài tập luyện tập tương tác theo SGK Tiếng Anh 8 Global Success.',

  // ==================== TAB 1: 10 TỪ VỰNG TRỌNG TÂM ====================
  // Chỉ 3 thông tin: STT, Từ vựng tiếng Anh, Nghĩa tiếng Việt. Bỏ hoàn toàn Từ loại, bỏ ví dụ.
  vocabularyList: [
    {
      id: 'u1_v1',
      word: 'leisure time',
      partOfSpeech: '',
      meaning: 'thời gian rảnh'
    },
    {
      id: 'u1_v2',
      word: 'doing DIY',
      partOfSpeech: '',
      meaning: 'tự làm đồ thủ công'
    },
    {
      id: 'u1_v3',
      word: 'doing puzzles',
      partOfSpeech: '',
      meaning: 'giải câu đố'
    },
    {
      id: 'u1_v4',
      word: 'surfing the net',
      partOfSpeech: '',
      meaning: 'lướt Internet'
    },
    {
      id: 'u1_v5',
      word: 'playing sport',
      partOfSpeech: '',
      meaning: 'chơi thể thao'
    },
    {
      id: 'u1_v6',
      word: 'messaging friends',
      partOfSpeech: '',
      meaning: 'nhắn tin với bạn bè'
    },
    {
      id: 'u1_v7',
      word: 'knitting',
      partOfSpeech: '',
      meaning: 'đan len'
    },
    {
      id: 'u1_v8',
      word: 'cycling',
      partOfSpeech: '',
      meaning: 'đạp xe'
    },
    {
      id: 'u1_v9',
      word: 'hanging out with friends',
      partOfSpeech: '',
      meaning: 'đi chơi với bạn bè'
    },
    {
      id: 'u1_v10',
      word: 'making paper flowers',
      partOfSpeech: '',
      meaning: 'làm hoa giấy'
    }
  ],

  // 5 CÂU HỎI CỦNG CỐ TỪ VỰNG (KIỂM TRA 10 TỪ VỰNG VỪA HỌC)
  vocabQuestions: [
    {
      id: 'u1_vq1',
      question: 'My grandmother likes making warm sweaters and scarves from wool. Her favorite hobby is _______.',
      options: [
        'knitting',
        'cycling',
        'surfing the net',
        'doing puzzles'
      ],
      correctIndex: 0,
      explanation: 'knitting có nghĩa là đan len (đan áo, khăn từ sợi len).',
      hint: 'Em hãy tìm từ vựng chỉ hoạt động đan len từ sợi len nhé!',
      knowledgeTopic: 'Từ vựng Unit 1',
      wrongFeedbacks: {
        1: {
          error: 'Cycling có nghĩa là đạp xe, không phù hợp với việc làm áo len từ sợi len (wool).',
          hint: 'Em hãy tìm từ vựng chỉ hoạt động đan len từ sợi len nhé!'
        },
        2: {
          error: 'Surfing the net có nghĩa là lướt mạng Internet, không tạo ra áo len.',
          hint: 'Từ cần tìm bắt đầu bằng chữ k (knitting) có nghĩa là đan len.'
        },
        3: {
          error: 'Doing puzzles là giải câu đố, không liên quan đến đan len.',
          hint: 'Em hãy chọn từ vựng mang nghĩa là đan len nhé!'
        }
      }
    },
    {
      id: 'u1_vq2',
      question: 'Tom enjoys making or repairing things by himself at home. He is fond of _______.',
      options: [
        'messaging friends',
        'doing DIY',
        'playing sport',
        'cycling'
      ],
      correctIndex: 1,
      explanation: 'doing DIY (Do It Yourself) có nghĩa là tự làm đồ thủ công, tự đóng hoặc sửa đồ.',
      hint: 'Em hãy tìm cụm từ viết tắt của "Do It Yourself" (tự làm đồ thủ công).',
      knowledgeTopic: 'Từ vựng Unit 1',
      wrongFeedbacks: {
        0: {
          error: 'Messaging friends là nhắn tin với bạn bè, không phải là tự làm đồ.',
          hint: 'Tìm cụm từ viết tắt của "Do It Yourself" (tự làm đồ thủ công).'
        },
        2: {
          error: 'Playing sport là chơi thể thao, không mang nghĩa tự sửa chữa đồ đạc tại nhà.',
          hint: 'Em hãy chọn cụm từ có nghĩa là tự làm đồ thủ công (DIY).'
        },
        3: {
          error: 'Cycling là hoạt động đạp xe, không phù hợp với "repairing things by himself".',
          hint: 'Cụm từ chỉ việc tự chế tạo hoặc sửa chữa đồ đạc tại nhà là gì?'
        }
      }
    },
    {
      id: 'u1_vq3',
      question: 'On Saturday evenings, we often go to a coffee shop and spend time _______ with friends.',
      options: [
        'doing puzzles',
        'hanging out',
        'making paper flowers',
        'knitting'
      ],
      correctIndex: 1,
      explanation: 'hanging out with friends có nghĩa là đi chơi, tụ tập cùng bạn bè.',
      hint: 'Cụm từ chỉ việc đi chơi cùng bạn bè bắt đầu bằng "hanging out".',
      knowledgeTopic: 'Từ vựng Unit 1',
      wrongFeedbacks: {
        0: {
          error: 'Doing puzzles là giải câu đố, ít dùng với cụm "with friends at a coffee shop".',
          hint: 'Cụm từ nào mang nghĩa đi chơi, tụ tập thư giãn cùng bạn bè?'
        },
        2: {
          error: 'Making paper flowers là làm hoa giấy, không đúng ngữ cảnh tụ tập đi chơi ngoài quán cà phê.',
          hint: 'Tìm cụm từ đi với "with friends" mang nghĩa đi chơi, la cà cùng bạn bè.'
        },
        3: {
          error: 'Knitting là đan len, không phải hoạt động đi chơi cùng bạn bè ở quán cà phê.',
          hint: 'Cụm từ chỉ việc đi chơi cùng bạn bè bắt đầu bằng "hanging out".'
        }
      }
    },
    {
      id: 'u1_vq4',
      question: 'Solving crosswords and Sudoku games is an example of _______.',
      options: [
        'doing puzzles',
        'playing sport',
        'cycling',
        'making paper flowers'
      ],
      correctIndex: 0,
      explanation: 'doing puzzles có nghĩa là giải câu đố (ô chữ, Sudoku, trò chơi trí tuệ).',
      hint: 'Em hãy chọn cụm từ có nghĩa là "giải câu đố".',
      knowledgeTopic: 'Từ vựng Unit 1',
      wrongFeedbacks: {
        1: {
          error: 'Crosswords (ô chữ) và Sudoku là trò chơi trí tuệ, không phải môn thể thao (sport).',
          hint: 'Em hãy tìm cụm từ có nghĩa là "giải câu đố".'
        },
        2: {
          error: 'Cycling là đạp xe thể thao, không liên quan đến ô chữ và Sudoku.',
          hint: 'Trò chơi giải ô chữ, Sudoku được gọi là giải câu đố (puzzles).'
        },
        3: {
          error: 'Making paper flowers là làm hoa giấy thủ công, không phải trò chơi đố chữ.',
          hint: 'Em hãy chọn cụm từ chỉ hoạt động giải câu đố nhé!'
        }
      }
    },
    {
      id: 'u1_vq5',
      question: 'What do you usually do in your _______? - I usually read comic books or play chess.',
      options: [
        'playing sport',
        'cycling',
        'leisure time',
        'messaging friends'
      ],
      correctIndex: 2,
      explanation: 'leisure time có nghĩa là thời gian rảnh rỗi.',
      hint: 'Cụm danh từ "thời gian rảnh" trong tiếng Anh là gì?',
      knowledgeTopic: 'Từ vựng Unit 1',
      wrongFeedbacks: {
        0: {
          error: 'Sau "in your" cần một danh từ chỉ thời gian rảnh, "playing sport" là cụm động từ/hành động cụ thể.',
          hint: 'Tìm từ vựng trong bài có nghĩa là "thời gian rảnh".'
        },
        1: {
          error: '"in your cycling" không đúng ngữ pháp và không phải cụm từ chỉ thời gian rảnh.',
          hint: 'Em hãy tìm danh từ chỉ khoảng thời gian rỗi rãi ngoài giờ học.'
        },
        3: {
          error: '"in your messaging friends" sai cấu trúc ngữ pháp để hỏi về thời gian rảnh.',
          hint: 'Cụm danh từ "thời gian rảnh" trong tiếng Anh là gì?'
        }
      }
    }
  ],

  // ==================== TAB 2: NGỮ PHÁP (TINH GỌN) ====================
  // Mỗi mục ngữ pháp chỉ gồm: Tên điểm ngữ pháp, Quy tắc trong khung nổi bật, Một câu ví dụ minh họa chung.
  // Không có "Ghi nhớ", không có "Lỗi học sinh thường gặp", không đưa nhiều ví dụ rườm rà.
  grammarPoints: [
    {
      id: 'u1_gp1',
      title: 'Động từ chỉ sở thích + V-ing',
      formula: 'Quy tắc: enjoy / fancy / detest / dislike + V-ing',
      rule: 'Theo sau các động từ enjoy, fancy, detest, dislike bắt buộc là một Danh động từ (V-ing).',
      example: {
        english: 'I enjoy playing football.',
        vietnamese: 'Tôi thích chơi bóng đá.'
      }
    },
    {
      id: 'u1_gp2',
      title: 'Động từ theo sau bởi cả V-ing và to-V',
      formula: 'Quy tắc: like / love / hate / prefer + V-ing / to-V',
      rule: 'Các động từ like, love, hate, prefer có thể đi với cả V-ing hoặc to-V mà ý nghĩa không thay đổi nhiều.',
      example: {
        english: 'She loves cycling in the park. = She loves to cycle in the park.',
        vietnamese: 'Cô ấy thích đạp xe trong công viên.'
      }
    }
  ],

  // 5 CÂU HỎI CỦNG CỐ NGỮ PHÁP
  grammarQuestions: [
    {
      id: 'u1_gq1',
      question: 'Do you fancy _______ paper flowers with me this afternoon?',
      options: [
        'make',
        'making',
        'to make',
        'made'
      ],
      correctIndex: 1,
      explanation: 'Sau động từ "fancy" bắt buộc dùng Danh động từ (V-ing): fancy + making.',
      hint: 'Động từ "fancy" đi với động từ ở dạng V-ing. Em hãy chọn lại nhé!',
      knowledgeTopic: 'Ngữ pháp Unit 1',
      wrongFeedbacks: {
        0: {
          error: 'Động từ "make" ở dạng nguyên mẫu không "to". Sau "fancy" không dùng động từ nguyên mẫu.',
          hint: 'Sau động từ "fancy" bắt buộc dùng động từ ở dạng V-ing. Em hãy chọn lại nhé!'
        },
        2: {
          error: 'Sau động từ "fancy" không dùng "to V".',
          hint: 'Động từ "fancy" đi với động từ ở dạng V-ing. Em hãy chọn lại nhé!'
        },
        3: {
          error: '"made" là dạng quá khứ, không dùng sau "fancy".',
          hint: 'Quy tắc: fancy + V-ing. Em hãy chọn phương án có đuôi -ing.'
        }
      }
    },
    {
      id: 'u1_gq2',
      question: 'My brother detests _______ in cold and rainy weather.',
      options: [
        'cycle',
        'cycling',
        'to cycle',
        'cycled'
      ],
      correctIndex: 1,
      explanation: 'Sau động từ "detest" (cực kỳ ghét) luôn dùng V-ing: detest + cycling.',
      hint: 'Theo quy tắc: detest + V-ing. Em chọn động từ có đuôi -ing nhé!',
      knowledgeTopic: 'Ngữ pháp Unit 1',
      wrongFeedbacks: {
        0: {
          error: 'Sau "detest" không dùng động từ nguyên mẫu không "to".',
          hint: 'Động từ "detest" (ghét) bắt buộc theo sau bởi V-ing. Em hãy chọn lại nhé!'
        },
        2: {
          error: 'Sau "detest" không đi với "to V".',
          hint: 'Theo quy tắc: detest + V-ing. Em chọn động từ có đuôi -ing nhé!'
        },
        3: {
          error: '"cycled" là dạng quá khứ, không dùng sau động từ chỉ sự ghét bỏ "detest".',
          hint: 'Sau "detest" luôn là danh động từ đuôi -ing.'
        }
      }
    },
    {
      id: 'u1_gq3',
      question: 'Lan enjoys _______ the net to search for good cooking recipes.',
      options: [
        'surf',
        'to surf',
        'surfing',
        'surfed'
      ],
      correctIndex: 2,
      explanation: 'Sau động từ "enjoy" bắt buộc là V-ing: enjoy + surfing.',
      hint: 'Sau "enjoy", động từ cần thêm đuôi -ing.',
      knowledgeTopic: 'Ngữ pháp Unit 1',
      wrongFeedbacks: {
        0: {
          error: 'Động từ sau "enjoy" chưa đúng dạng (đang để nguyên mẫu "surf").',
          hint: 'Sau "enjoy", động từ cần thêm đuôi -ing. Em hãy chọn lại nào!'
        },
        1: {
          error: 'Sau động từ "enjoy" không dùng "to V".',
          hint: 'Quy tắc: enjoy + V-ing. Em hãy chọn phương án đuôi -ing.'
        },
        3: {
          error: '"surfed" là thì quá khứ, không dùng sau "enjoys".',
          hint: 'Động từ sau "enjoy" phải là V-ing (surfing).'
        }
      }
    },
    {
      id: 'u1_gq4',
      question: 'They prefer _______ sport outdoors rather than staying at home.',
      options: [
        'play',
        'to playing',
        'playing',
        'played'
      ],
      correctIndex: 2,
      explanation: 'Động từ "prefer" có thể đi với V-ing (playing) hoặc to-V (to play). Ở đây "playing" là dạng đúng.',
      hint: 'Em hãy chọn phương án ở dạng V-ing (playing).',
      knowledgeTopic: 'Ngữ pháp Unit 1',
      wrongFeedbacks: {
        0: {
          error: 'Sau "prefer" không dùng động từ nguyên mẫu không "to" (play).',
          hint: 'Động từ "prefer" đi với V-ing (hoặc to-V). Em hãy tìm phương án chia đúng dạng nhé!'
        },
        1: {
          error: '"to playing" là sai cấu trúc ngữ pháp (không dùng "to" trước "V-ing").',
          hint: 'Chỉ dùng "to V" hoặc "V-ing". Phương án nào là V-ing chuẩn?'
        },
        3: {
          error: '"played" là dạng quá khứ, không phù hợp sau "prefer".',
          hint: 'Em hãy chọn phương án ở dạng V-ing (playing).'
        }
      }
    },
    {
      id: 'u1_gq5',
      question: 'I don\'t mind _______ my mother clean the house after school.',
      options: [
        'help',
        'helping',
        'to help',
        'helped'
      ],
      correctIndex: 1,
      explanation: 'Sau "mind / don\'t mind" bắt buộc dùng V-ing: don\'t mind + helping.',
      hint: 'Quy tắc: S + don\'t mind + V-ing. Em hãy chọn phương án có đuôi -ing.',
      knowledgeTopic: 'Ngữ pháp Unit 1',
      wrongFeedbacks: {
        0: {
          error: 'Động từ "help" ở dạng nguyên mẫu, chưa đúng quy tắc sau "mind".',
          hint: 'Sau "mind / don\'t mind", động từ bắt buộc thêm đuôi -ing.'
        },
        2: {
          error: 'Sau "mind / don\'t mind" không dùng "to V".',
          hint: 'Quy tắc: S + don\'t mind + V-ing. Em hãy chọn phương án có đuôi -ing.'
        },
        3: {
          error: '"helped" là dạng quá khứ, không dùng sau "don\'t mind".',
          hint: 'Động từ theo sau "mind" luôn có đuôi -ing (helping).'
        }
      }
    }
  ],

  // ==================== TAB 3: LUYỆN TẬP (10 CÂU TỔNG HỢP) ====================
  // Giữ nguyên thứ tự câu hỏi và phương án, không xáo trộn.
  practiceQuestions: [
    {
      id: 'u1_pq1',
      question: 'Tom: "Do you want to hang out with us this Sunday?" - Nick: "_______."',
      options: [
        'Sure, I\'d love to!',
        'No, I am playing.',
        'Yes, I fancy.',
        'I detest friends.'
      ],
      correctIndex: 0,
      explanation: '"Sure, I\'d love to!" là cách đáp lại lời mời đi chơi một cách lịch sự, hào hứng và tự nhiên nhất.',
      hint: 'Em hãy chọn câu nhận lời đi chơi quen thuộc, lịch sự và tự nhiên nhất.',
      knowledgeTopic: 'Giao tiếp tình huống',
      wrongFeedbacks: {
        1: {
          error: 'Câu trả lời này không tự nhiên và không đúng cách đáp lại lời mời lịch sự.',
          hint: 'Khi bạn rủ đi chơi, câu nhận lời hào hứng và lịch sự nhất là gì?'
        },
        2: {
          error: '"Yes, I fancy" là câu chưa hoàn chỉnh và sai ngữ pháp tiếng Anh.',
          hint: 'Em hãy tìm câu nhận lời quen thuộc: "Chắc chắn rồi, mình rất thích!".'
        },
        3: {
          error: 'Câu này có nghĩa là "Tôi ghét bạn bè", hoàn toàn không phù hợp trong giao tiếp.',
          hint: 'Em hãy chọn câu đồng ý đi chơi một cách thân thiện và lịch sự.'
        }
      }
    },
    {
      id: 'u1_pq2',
      question: 'Teenagers today often spend hours _______ friends on their smartphones.',
      options: [
        'message',
        'messaging',
        'to message',
        'messaged'
      ],
      correctIndex: 1,
      explanation: 'Cấu trúc: spend + time + V-ing (dành thời gian làm gì). Ở đây là: spend hours messaging friends.',
      hint: 'Sau "spend + thời gian", động từ phải thêm đuôi -ing.',
      knowledgeTopic: 'Ngữ pháp trong ngữ cảnh',
      wrongFeedbacks: {
        0: {
          error: 'Sau cấu trúc "spend + time", không dùng động từ nguyên mẫu "message".',
          hint: 'Cấu trúc: spend + time + V-ing (dành thời gian làm gì). Em hãy chọn lại nhé!'
        },
        2: {
          error: 'Sau "spend hours" không dùng "to V".',
          hint: 'Sau "spend + thời gian", động từ phải thêm đuôi -ing.'
        },
        3: {
          error: '"messaged" là thì quá khứ, không dùng trong cấu trúc "spend time".',
          hint: 'Động từ cần ở dạng V-ing (messaging).'
        }
      }
    },
    {
      id: 'u1_pq3',
      question: 'Mai has a lot of colored paper and glue. Her favorite hobby is _______.',
      options: [
        'playing sport',
        'making paper flowers',
        'surfing the net',
        'cycling'
      ],
      correctIndex: 1,
      explanation: 'colored paper (giấy màu) và glue (keo dán) là dụng cụ phục vụ hoạt động làm hoa giấy (making paper flowers).',
      hint: 'Em hãy tìm cụm từ có nghĩa là "làm hoa giấy".',
      knowledgeTopic: 'Từ vựng ngữ cảnh',
      wrongFeedbacks: {
        0: {
          error: 'Giấy màu (colored paper) và keo (glue) không dùng để chơi thể thao.',
          hint: 'Hoạt động thủ công nào cần dùng giấy màu và keo dán?'
        },
        2: {
          error: 'Surfing the net là lướt mạng, không cần giấy màu và keo dán.',
          hint: 'Em hãy tìm cụm từ có nghĩa là "làm hoa giấy".'
        },
        3: {
          error: 'Cycling là đạp xe, không liên quan đến giấy màu và keo.',
          hint: 'Cụm từ chỉ hoạt động làm hoa giấy là gì?'
        }
      }
    },
    {
      id: 'u1_pq4',
      question: 'Nam: "Does your sister like cycling?" - Hoa: "Yes, she adores _______ her bike around the park."',
      options: [
        'ride',
        'to ride',
        'riding',
        'rode'
      ],
      correctIndex: 2,
      explanation: 'Sau động từ "adores" (rất yêu thích), động từ theo sau bắt buộc ở dạng V-ing: adore + riding.',
      hint: 'Sau "adore" luôn là V-ing. Em hãy chọn phương án có đuôi -ing nhé!',
      knowledgeTopic: 'Ngữ pháp',
      wrongFeedbacks: {
        0: {
          error: 'Sau động từ "adores", không dùng động từ nguyên mẫu "ride".',
          hint: 'Quy tắc: adore + V-ing. Động từ cần thêm đuôi -ing.'
        },
        1: {
          error: 'Sau động từ "adore" không dùng "to V".',
          hint: 'Sau "adore" luôn là V-ing. Em hãy chọn phương án có đuôi -ing nhé!'
        },
        3: {
          error: '"rode" là quá khứ của ride, không dùng sau "adores".',
          hint: 'Động từ theo sau "adore" phải ở dạng V-ing (riding).'
        }
      }
    },
    {
      id: 'u1_pq5',
      question: 'Tìm phần bị sai trong câu: "My brother enjoys to do DIY projects at home."',
      options: [
        'brother',
        'enjoys',
        'to do',
        'at home'
      ],
      correctIndex: 2,
      explanation: 'Phần sai là "to do". Sau động từ "enjoys", ta bắt buộc dùng danh động từ "doing", không dùng "to do".',
      hint: 'Sau động từ "enjoys", động từ phía sau phải ở dạng V-ing chứ không dùng "to V".',
      knowledgeTopic: 'Tìm lỗi sai',
      wrongFeedbacks: {
        0: {
          error: '"brother" là danh từ chỉ người làm chủ ngữ, hoàn toàn đúng.',
          hint: 'Hãy chú ý vào động từ đứng sau "enjoys".'
        },
        1: {
          error: '"enjoys" chia theo chủ ngữ số ít "My brother" là chính xác.',
          hint: 'Sau "enjoys", động từ phía sau có được dùng dạng "to V" không?'
        },
        3: {
          error: '"at home" là cụm trạng từ chỉ nơi chốn đúng ngữ pháp.',
          hint: 'Lỗi sai nằm ở động từ đi sau "enjoys".'
        }
      }
    },
    {
      id: 'u1_pq6',
      question: 'Phong: "What do you usually do in your leisure time?" - Minh: "_______."',
      options: [
        'I usually do puzzles and play chess.',
        'I am studying at school now.',
        'It is ten o\'clock.',
        'I have two sisters.'
      ],
      correctIndex: 0,
      explanation: 'Câu hỏi hỏi về hoạt động trong thời gian rảnh ("What do you usually do in your leisure time?"), câu trả lời phải nêu hoạt động sở thích lúc rảnh.',
      hint: 'Em hãy chọn câu trả lời kể về sở thích giải trí trong thời gian rảnh.',
      knowledgeTopic: 'Giao tiếp tình huống',
      wrongFeedbacks: {
        1: {
          error: 'Câu hỏi hỏi về thói quen trong thời gian rảnh, không hỏi việc đang làm bây giờ (now).',
          hint: 'Em hãy chọn câu trả lời kể về sở thích giải trí trong thời gian rảnh.'
        },
        2: {
          error: 'Câu này trả lời cho câu hỏi mấy giờ ("What time is it?"), không phù hợp.',
          hint: 'Đề bài hỏi: "Bạn thường làm gì vào thời gian rảnh?".'
        },
        3: {
          error: 'Câu này trả lời về số lượng anh chị em trong gia đình, lạc đề.',
          hint: 'Phương án nào nêu hoạt động sở thích lúc rảnh rỗi?'
        }
      }
    },
    {
      id: 'u1_pq7',
      question: 'Playing _______ like football, basketball, and badminton helps students stay fit and healthy.',
      options: [
        'sport',
        'puzzles',
        'knitting',
        'DIY'
      ],
      correctIndex: 0,
      explanation: 'Bóng đá (football), bóng rổ (basketball), cầu lông (badminton) là các môn thể thao (playing sport).',
      hint: 'Cụm từ chơi thể thao là "playing sport".',
      knowledgeTopic: 'Từ vựng ngữ cảnh',
      wrongFeedbacks: {
        1: {
          error: 'Football và basketball là các môn thể thao vận động, không phải câu đố (puzzles).',
          hint: 'Bóng đá, bóng rổ, cầu lông thuộc nhóm từ vựng nào?'
        },
        2: {
          error: 'Knitting là đan len, không bao gồm bóng đá hay bóng rổ.',
          hint: 'Em hãy tìm từ có nghĩa là "thể thao".'
        },
        3: {
          error: 'DIY là tự làm đồ thủ công, không phải bóng đá hay cầu lông.',
          hint: 'Cụm từ chơi thể thao là "playing sport".'
        }
      }
    },
    {
      id: 'u1_pq8',
      question: 'She hates _______ early on cold winter mornings, so she stays in bed as long as possible.',
      options: [
        'get',
        'gets',
        'getting',
        'got'
      ],
      correctIndex: 2,
      explanation: 'Sau động từ "hate" (ghét), ta dùng V-ing: hate getting up early.',
      hint: 'Dạng V-ing của động từ "get" là "getting".',
      knowledgeTopic: 'Ngữ pháp',
      wrongFeedbacks: {
        0: {
          error: 'Động từ "get" chưa chia dạng sau "hates".',
          hint: 'Sau "hate", động từ cần ở dạng V-ing. Em hãy chọn lại nhé!'
        },
        1: {
          error: 'Không chia thêm "s" vào động từ đứng sau "hates".',
          hint: 'Sau động từ chỉ sự ghét bỏ "hate", ta dùng dạng V-ing.'
        },
        3: {
          error: '"got" là dạng quá khứ, không dùng sau "hates".',
          hint: 'Dạng V-ing của động từ "get" là "getting".'
        }
      }
    },
    {
      id: 'u1_pq9',
      question: 'Spending too much time _______ can hurt your eyes and cause neck pain.',
      options: [
        'surfing the net',
        'playing sport',
        'knitting',
        'cycling'
      ],
      correctIndex: 0,
      explanation: 'surfing the net (lướt Internet trên máy tính/điện thoại) quá nhiều sẽ gây mỏi mắt (hurt eyes) và đau cổ (neck pain).',
      hint: 'Cụm từ chỉ việc duyệt web trên mạng là "surfing the net".',
      knowledgeTopic: 'Từ vựng ngữ cảnh',
      wrongFeedbacks: {
        1: {
          error: 'Chơi thể thao thường giúp cơ thể khỏe mạnh, ít gây mỏi mắt (hurt eyes) như màn hình điện tử.',
          hint: 'Hoạt động nào nhìn vào màn hình máy tính/điện thoại gây mỏi mắt?'
        },
        2: {
          error: 'Knitting là đan len, không phải nguyên nhân chính gây đau cổ và hại mắt trên thiết bị.',
          hint: 'Em hãy chọn cụm từ có nghĩa là lướt mạng Internet.'
        },
        3: {
          error: 'Cycling là đạp xe ngoài trời, không liên quan đến nhìn màn hình mỏi mắt.',
          hint: 'Cụm từ chỉ việc duyệt web trên mạng là "surfing the net".'
        }
      }
    },
    {
      id: 'u1_pq10',
      question: 'Do you fancy _______ out with friends or staying at home tonight?',
      options: [
        'hang',
        'hanging',
        'to hang',
        'hung'
      ],
      correctIndex: 1,
      explanation: 'Sau "fancy", bắt buộc dùng V-ing: fancy hanging out with friends.',
      hint: 'Sau "fancy" phải dùng danh động từ (hanging).',
      knowledgeTopic: 'Ngữ pháp tổng hợp',
      wrongFeedbacks: {
        0: {
          error: 'Động từ "hang" ở dạng nguyên mẫu. Sau "fancy" không dùng nguyên mẫu.',
          hint: 'Sau "fancy", động từ bắt buộc thêm đuôi -ing. Em hãy chọn lại nhé!'
        },
        2: {
          error: 'Sau động từ "fancy" không dùng "to V".',
          hint: 'Quy tắc: fancy + V-ing. Em hãy chọn phương án có đuôi -ing.'
        },
        3: {
          error: '"hung" là dạng quá khứ, không dùng sau "fancy".',
          hint: 'Sau "fancy" phải dùng danh động từ (hanging).'
        }
      }
    }
  ]
};

// ==================== UNIT 2: LIFE IN THE COUNTRYSIDE ====================
export const ENGLISH_UNIT_2_DATA: EnglishUnitData = {
  id: 'ch_tienganh_2',
  unitNumber: 2,
  title: 'Unit 2: Life in the Countryside',
  topic: 'Life in the countryside & Comparative adverbs',
  description: 'Từ vựng về cuộc sống và cảnh quan nông thôn, so sánh hơn của trạng từ và bài tập luyện tập vận dụng theo SGK Tiếng Anh 8 Global Success.',

  // ==================== TAB 1: 10 TỪ VỰNG TRỌNG TÂM ====================
  // Chỉ có 3 cột: STT – Từ vựng tiếng Anh – Nghĩa tiếng Việt. Không có cột từ loại, không có ví dụ.
  vocabularyList: [
    {
      id: 'u2_v1',
      word: 'paddy field',
      partOfSpeech: '',
      meaning: 'ruộng lúa'
    },
    {
      id: 'u2_v2',
      word: 'harvest time',
      partOfSpeech: '',
      meaning: 'mùa thu hoạch'
    },
    {
      id: 'u2_v3',
      word: 'combine harvester',
      partOfSpeech: '',
      meaning: 'máy gặt đập liên hợp'
    },
    {
      id: 'u2_v4',
      word: 'cattle',
      partOfSpeech: '',
      meaning: 'gia súc'
    },
    {
      id: 'u2_v5',
      word: 'poultry',
      partOfSpeech: '',
      meaning: 'gia cầm'
    },
    {
      id: 'u2_v6',
      word: 'crops',
      partOfSpeech: '',
      meaning: 'cây trồng, mùa màng'
    },
    {
      id: 'u2_v7',
      word: 'orchard',
      partOfSpeech: '',
      meaning: 'vườn cây ăn quả'
    },
    {
      id: 'u2_v8',
      word: 'canal',
      partOfSpeech: '',
      meaning: 'kênh, mương'
    },
    {
      id: 'u2_v9',
      word: 'cultivate',
      partOfSpeech: '',
      meaning: 'canh tác, trồng trọt'
    },
    {
      id: 'u2_v10',
      word: 'picturesque',
      partOfSpeech: '',
      meaning: 'đẹp như tranh'
    }
  ],

  // 5 CÂU HỎI CỦNG CỐ TỪ VỰNG UNIT 2 (KIỂM TRA 10 TỪ VỰNG ĐÃ HỌC)
  vocabQuestions: [
    {
      id: 'u2_vq1',
      question: 'During the _______, farmers are very busy cutting and collecting rice from early morning to sunset.',
      options: [
        'harvest time',
        'canal',
        'orchard',
        'poultry'
      ],
      correctIndex: 0,
      explanation: 'harvest time có nghĩa là mùa thu hoạch (mùa gặt lúa).',
      hint: 'Em hãy tìm cụm từ chỉ "mùa thu hoạch" nhé!',
      knowledgeTopic: 'Từ vựng Unit 2',
      wrongFeedbacks: {
        1: {
          error: 'Canal là kênh mương dẫn nước, không phải là thời điểm/mùa vụ bận rộn của nhà nông.',
          hint: 'Em hãy tìm cụm từ chỉ "mùa thu hoạch" nhé!'
        },
        2: {
          error: 'Orchard là vườn cây ăn quả, không phải khoảng thời gian thu hoạch lúa.',
          hint: 'Cụm từ chỉ mùa gặt lúa trong bài bắt đầu bằng "harvest...".'
        },
        3: {
          error: 'Poultry là các loài gia cầm (gà, vịt), không phải là thời vụ làm nông.',
          hint: 'Tìm cụm từ mang nghĩa "mùa thu hoạch".'
        }
      }
    },
    {
      id: 'u2_vq2',
      question: 'A modern machine used on paddy fields to cut, thresh, and clean rice grains in one operation is a _______.',
      options: [
        'cattle',
        'combine harvester',
        'canal',
        'paddy field'
      ],
      correctIndex: 1,
      explanation: 'combine harvester là máy gặt đập liên hợp.',
      hint: 'Tên loại máy gặt đập liên hợp trong tiếng Anh là "combine harvester".',
      knowledgeTopic: 'Từ vựng Unit 2',
      wrongFeedbacks: {
        0: {
          error: 'Cattle là gia súc (bò, trâu), không phải máy móc gặt lúa.',
          hint: 'Em hãy tìm từ chỉ loại máy móc hiện đại dùng để gặt lúa.'
        },
        2: {
          error: 'Canal là kênh mương dẫn nước phục vụ tưới tiêu.',
          hint: 'Tên loại máy gặt đập liên hợp trong tiếng Anh là gì?'
        },
        3: {
          error: 'Paddy field là ruộng lúa, nơi máy móc hoạt động chứ không phải tên cỗ máy.',
          hint: 'Cụm từ có từ "harvester" (máy gặt) là phương án chính xác.'
        }
      }
    },
    {
      id: 'u2_vq3',
      question: 'My uncle planted many orange, mango, and apple trees in his large _______ behind the house.',
      options: [
        'poultry',
        'paddy field',
        'orchard',
        'cattle'
      ],
      correctIndex: 2,
      explanation: 'orchard có nghĩa là vườn cây ăn quả.',
      hint: 'Em hãy tìm từ có nghĩa là "vườn cây ăn quả".',
      knowledgeTopic: 'Từ vựng Unit 2',
      wrongFeedbacks: {
        0: {
          error: 'Poultry là gia cầm (gà, vịt), không phải khu vườn trồng cây ăn quả.',
          hint: 'Em hãy tìm từ có nghĩa là "vườn cây ăn quả".'
        },
        1: {
          error: 'Paddy field là ruộng trồng lúa nước, không dùng để trồng cây cam, xoài hay táo.',
          hint: 'Khu vườn trồng các loại cây ăn trái được gọi là gì?'
        },
        3: {
          error: 'Cattle là đàn gia súc (trâu, bò).',
          hint: 'Tìm danh từ chỉ "vườn cây ăn quả" trong 10 từ vựng Unit 2.'
        }
      }
    },
    {
      id: 'u2_vq4',
      question: 'Farmers in this region _______ rice, vegetables, and fruit trees on their fertile land.',
      options: [
        'cultivate',
        'picturesque',
        'canal',
        'harvest time'
      ],
      correctIndex: 0,
      explanation: 'cultivate (v) có nghĩa là canh tác, trồng trọt cây cối trên đất đai.',
      hint: 'Em hãy chọn động từ "cultivate" (canh tác, trồng trọt).',
      knowledgeTopic: 'Từ vựng Unit 2',
      wrongFeedbacks: {
        1: {
          error: 'Picturesque là tính từ mang nghĩa "đẹp như tranh", sau chủ ngữ cần một động từ chỉ hành động.',
          hint: 'Tìm động từ có nghĩa là "canh tác, trồng trọt".'
        },
        2: {
          error: 'Canal là danh từ chỉ kênh rạch, mương dẫn nước.',
          hint: 'Hành động gieo trồng, làm đất canh tác trong tiếng Anh là gì?'
        },
        3: {
          error: 'Harvest time là danh từ chỉ mùa thu hoạch, không phải động từ chỉ hành động trồng trọt.',
          hint: 'Em hãy chọn động từ "cultivate" (canh tác, trồng trọt).'
        }
      }
    },
    {
      id: 'u2_vq5',
      question: 'With yellow rice fields, lotus ponds, and ancient houses, the countryside landscape looks very _______.',
      options: [
        'crops',
        'cattle',
        'combine harvester',
        'picturesque'
      ],
      correctIndex: 3,
      explanation: 'picturesque (adj) có nghĩa là đẹp như tranh, phong cảnh hữu tình.',
      hint: 'Em hãy chọn tính từ "picturesque" miêu tả vẻ đẹp như tranh nhé!',
      knowledgeTopic: 'Từ vựng Unit 2',
      wrongFeedbacks: {
        0: {
          error: 'Crops là danh từ chỉ mùa màng/cây trồng, sau "looks very..." cần một tính từ miêu tả vẻ đẹp.',
          hint: 'Tìm tính từ miêu tả cảnh quan đẹp như tranh vẽ.'
        },
        1: {
          error: 'Cattle là danh từ chỉ gia súc (bò, trâu).',
          hint: 'Từ nào trong bài học có nghĩa là "đẹp như tranh"?'
        },
        2: {
          error: 'Combine harvester là danh từ chỉ máy gặt đập liên hợp.',
          hint: 'Em hãy chọn tính từ "picturesque" miêu tả vẻ đẹp như tranh nhé!'
        }
      }
    }
  ],

  // ==================== TAB 2: NGỮ PHÁP (COMPARATIVE ADVERBS) ====================
  // Mỗi quy tắc được đặt trong một khung nổi bật, chỉ có một ví dụ minh họa.
  // Giữ cách gọi: "Trạng từ dài", "Trạng từ ngắn", "Trạng từ bất quy tắc".
  grammarTopic: 'COMPARATIVE ADVERBS (So sánh hơn của trạng từ)',
  grammarPoints: [
    {
      id: 'u2_gp1',
      title: 'Quy tắc 1: Trạng từ dài',
      formula: 'Quy tắc: more + adverb',
      rule: 'Với phần lớn trạng từ có từ hai âm tiết trở lên, dùng: more + adverb',
      example: {
        english: 'slowly → more slowly',
        vietnamese: 'chậm hơn'
      }
    },
    {
      id: 'u2_gp2',
      title: 'Quy tắc 2: Trạng từ ngắn',
      formula: 'Quy tắc: adverb + -er',
      rule: 'Với những trạng từ có dạng so sánh hơn bằng cách thêm -er, dùng: adverb + -er',
      example: {
        english: 'fast → faster',
        vietnamese: 'nhanh hơn'
      }
    },
    {
      id: 'u2_gp3',
      title: 'Quy tắc 3: Trạng từ bất quy tắc',
      formula: 'Quy tắc: well → better; badly → worse',
      rule: 'Một số trạng từ có dạng so sánh hơn đặc biệt: well → better (tốt hơn); badly → worse (tệ hơn).',
      example: {
        english: 'well → better; badly → worse',
        vietnamese: 'tốt hơn; tệ hơn'
      }
    }
  ],

  // 5 CÂU HỎI CỦNG CỐ NGỮ PHÁP UNIT 2
  grammarQuestions: [
    {
      id: 'u2_gq1',
      question: 'The old farmer walked _______ than the young boy carrying a heavy basket of rice.',
      options: [
        'more slowly',
        'slowlier',
        'slow',
        'slowest'
      ],
      correctIndex: 0,
      explanation: 'Trạng từ dài "slowly" có hai âm tiết, dạng so sánh hơn là: more + slowly.',
      hint: 'Với trạng từ dài (2 âm tiết trở lên), ta thêm "more" phía trước trạng từ.',
      knowledgeTopic: 'Ngữ pháp Unit 2',
      wrongFeedbacks: {
        1: {
          error: '"slowly" là trạng từ dài, không biến đổi bằng cách thêm đuôi "-ier".',
          hint: 'Với trạng từ dài (2 âm tiết trở lên), ta thêm "more" phía trước trạng từ.'
        },
        2: {
          error: '"slow" là tính từ nguyên mẫu, câu có từ "than" cần dùng dạng so sánh hơn của trạng từ.',
          hint: 'Quy tắc trạng từ dài: more + adverb.'
        },
        3: {
          error: '"slowest" là dạng so sánh nhất, không dùng khi so sánh giữa hai đối tượng với "than".',
          hint: 'Em hãy chọn dạng so sánh hơn "more slowly" nhé!'
        }
      }
    },
    {
      id: 'u2_gq2',
      question: 'In the countryside, horses and dogs can run _______ than goats.',
      options: [
        'more fast',
        'faster',
        'fastly',
        'fastest'
      ],
      correctIndex: 1,
      explanation: 'Trạng từ ngắn "fast" có dạng so sánh hơn là thêm đuôi -er: faster.',
      hint: 'Quy tắc trạng từ ngắn: adverb + -er (fast → faster).',
      knowledgeTopic: 'Ngữ pháp Unit 2',
      wrongFeedbacks: {
        0: {
          error: '"fast" là trạng từ ngắn đặc biệt, không dùng "more fast".',
          hint: 'Quy tắc trạng từ ngắn: adverb + -er (fast → faster).'
        },
        2: {
          error: 'Trong tiếng Anh không có từ "fastly".',
          hint: 'Trạng từ của fast vẫn là fast, so sánh hơn là "faster".'
        },
        3: {
          error: '"fastest" là so sánh nhất, câu so sánh hai đối tượng với "than" cần so sánh hơn.',
          hint: 'Em hãy chọn dạng "faster" nhé!'
        }
      }
    },
    {
      id: 'u2_gq3',
      question: 'Hoa explains the traditional farming process _______ than Nam does.',
      options: [
        'clear',
        'more clearly',
        'clearlier',
        'most clearly'
      ],
      correctIndex: 1,
      explanation: '"clearly" là trạng từ dài (2 âm tiết), dạng so sánh hơn là "more clearly".',
      hint: 'Trạng từ dài "clearly" có dạng so sánh hơn là "more clearly".',
      knowledgeTopic: 'Ngữ pháp Unit 2',
      wrongFeedbacks: {
        0: {
          error: '"clear" là tính từ nguyên mẫu, không phải dạng so sánh hơn của trạng từ bổ nghĩa cho động từ "explains".',
          hint: 'Trạng từ dài "clearly" có dạng so sánh hơn là "more clearly".'
        },
        2: {
          error: 'Không thêm đuôi "-ier" vào trạng từ "clearly".',
          hint: 'Quy tắc trạng từ dài: more + adverb.'
        },
        3: {
          error: '"most clearly" là so sánh nhất, câu có "than" đòi hỏi so sánh hơn.',
          hint: 'Em hãy chọn "more clearly" nhé!'
        }
      }
    },
    {
      id: 'u2_gq4',
      question: 'After practicing all summer, Minh can herd cattle _______ than his cousin.',
      options: [
        'good',
        'well',
        'better',
        'more well'
      ],
      correctIndex: 2,
      explanation: 'Trạng từ "well" là trạng từ bất quy tắc, có dạng so sánh hơn đặc biệt là "better".',
      hint: 'Trạng từ bất quy tắc: well → better.',
      knowledgeTopic: 'Ngữ pháp Unit 2',
      wrongFeedbacks: {
        0: {
          error: '"good" là tính từ, bổ nghĩa cho động từ cần dùng trạng từ so sánh hơn.',
          hint: 'Trạng từ bất quy tắc: well → better.'
        },
        1: {
          error: '"well" là trạng từ nguyên mẫu, câu có "than" cần dạng so sánh hơn.',
          hint: 'So sánh hơn của "well" là gì trong bảng trạng từ bất quy tắc?'
        },
        3: {
          error: 'Không dùng "more well" trong tiếng Anh.',
          hint: 'Trạng từ "well" chuyển thành "better" khi so sánh hơn.'
        }
      }
    },
    {
      id: 'u2_gq5',
      question: 'Farmers have to get up _______ than city people to begin their field work.',
      options: [
        'early',
        'earlier',
        'more early',
        'earliest'
      ],
      correctIndex: 1,
      explanation: '"early" là trạng từ ngắn, kết thúc bằng "y" đổi thành "i" rồi thêm "-er": earlier.',
      hint: 'Đổi đuôi "y" thành "i" rồi thêm "-er" để tạo so sánh hơn.',
      knowledgeTopic: 'Ngữ pháp Unit 2',
      wrongFeedbacks: {
        0: {
          error: '"early" là dạng nguyên mẫu, câu có từ "than" cần dùng dạng so sánh hơn.',
          hint: 'Đổi đuôi "y" thành "i" rồi thêm "-er" để tạo so sánh hơn.'
        },
        2: {
          error: '"early" không đi với "more" khi so sánh hơn.',
          hint: 'Quy tắc: early → earlier.'
        },
        3: {
          error: '"earliest" là so sánh nhất.',
          hint: 'Em hãy chọn phương án "earlier" nhé!'
        }
      }
    }
  ],

  // ==================== TAB 3: LUYỆN TẬP (10 CÂU TỔNG HỢP THEO ĐỀ XUẤT) ====================
  // Giữ nguyên thứ tự câu hỏi và phương án, không xáo trộn.
  practiceQuestions: [
    {
      id: 'u2_pq1',
      question: 'Farmers use a ______ to harvest rice quickly.',
      options: [
        'bicycle',
        'combine harvester',
        'backpack',
        'canal'
      ],
      correctIndex: 1,
      explanation: 'combine harvester là máy gặt đập liên hợp giúp nông dân gặt lúa nhanh chóng.',
      hint: 'Tìm loại máy gặt hiện đại dùng trên đồng ruộng.',
      knowledgeTopic: 'Từ vựng Unit 2',
      wrongFeedbacks: {
        0: {
          error: 'Bicycle là xe đạp, không thể dùng để thu hoạch lúa nhanh chóng.',
          hint: 'Tìm loại máy gặt hiện đại dùng trên đồng ruộng.'
        },
        2: {
          error: 'Backpack là ba lô đi học, không dùng để gặt lúa.',
          hint: 'Tên loại máy gặt đập liên hợp là gì?'
        },
        3: {
          error: 'Canal là kênh dẫn nước, không phải thiết bị thu hoạch lúa.',
          hint: 'Đáp án đúng là "combine harvester".'
        }
      }
    },
    {
      id: 'u2_pq2',
      question: 'My grandparents grow fruit trees in their ______.',
      options: [
        'orchard',
        'classroom',
        'factory',
        'library'
      ],
      correctIndex: 0,
      explanation: 'orchard là vườn cây ăn quả.',
      hint: 'Khu vườn trồng cây ăn trái trong tiếng Anh là gì?',
      knowledgeTopic: 'Từ vựng Unit 2',
      wrongFeedbacks: {
        1: {
          error: 'Classroom là lớp học, không dùng để trồng cây ăn quả.',
          hint: 'Khu vườn trồng cây ăn trái trong tiếng Anh là gì?'
        },
        2: {
          error: 'Factory là nhà máy công nghiệp.',
          hint: 'Tìm từ vựng có nghĩa là "vườn cây ăn quả".'
        },
        3: {
          error: 'Library là thư viện đọc sách.',
          hint: 'Từ vựng chỉ vườn cây ăn quả là "orchard".'
        }
      }
    },
    {
      id: 'u2_pq3',
      question: 'The village is very ______, with beautiful fields and green trees.',
      options: [
        'noisy',
        'crowded',
        'picturesque',
        'unsociable'
      ],
      correctIndex: 2,
      explanation: 'picturesque có nghĩa là đẹp như tranh vẽ, cảnh quan hữu tình.',
      hint: 'Từ vựng miêu tả cảnh quan đẹp như tranh là "picturesque".',
      knowledgeTopic: 'Từ vựng Unit 2',
      wrongFeedbacks: {
        0: {
          error: 'Noisy có nghĩa là ồn ào, trái ngược với vẻ đẹp thanh bình của làng quê.',
          hint: 'Tìm tính từ miêu tả phong cảnh đẹp như tranh vẽ.'
        },
        1: {
          error: 'Crowded có nghĩa là đông đúc, chật chội.',
          hint: 'Từ vựng miêu tả cảnh quan đẹp như tranh là "picturesque".'
        },
        3: {
          error: 'Unsociable có nghĩa là khó gần, không hòa đồng.',
          hint: 'Em hãy chọn từ "picturesque" (đẹp như tranh).'
        }
      }
    },
    {
      id: 'u2_pq4',
      question: 'People in the countryside often raise ______ such as chickens and ducks.',
      options: [
        'canals',
        'poultry',
        'crops',
        'orchards'
      ],
      correctIndex: 1,
      explanation: 'poultry là gia cầm (gà, vịt, ngan, ngỗng).',
      hint: 'Gà và vịt là gia cầm, trong tiếng Anh là "poultry".',
      knowledgeTopic: 'Từ vựng Unit 2',
      wrongFeedbacks: {
        0: {
          error: 'Canals là kênh đào dẫn nước, không thể "chăn nuôi" (raise) kênh đào.',
          hint: 'Gà (chickens) và vịt (ducks) thuộc loài vật nuôi nào?'
        },
        2: {
          error: 'Crops là cây trồng/mùa màng nông nghiệp, không phải gia cầm như gà vịt.',
          hint: 'Gia cầm trong tiếng Anh là gì?'
        },
        3: {
          error: 'Orchards là vườn cây ăn quả.',
          hint: 'Gà và vịt là gia cầm, trong tiếng Anh là "poultry".'
        }
      }
    },
    {
      id: 'u2_pq5',
      question: 'Nam runs ______ than his brother.',
      options: [
        'fast',
        'fastest',
        'faster',
        'more fast'
      ],
      correctIndex: 2,
      explanation: 'fast là trạng từ ngắn, so sánh hơn thêm -er: faster than.',
      hint: 'Quy tắc trạng từ ngắn: fast → faster.',
      knowledgeTopic: 'Ngữ pháp Unit 2',
      wrongFeedbacks: {
        0: {
          error: 'Fast là trạng từ nguyên mẫu, câu có từ "than" cần dùng so sánh hơn.',
          hint: 'Trạng từ ngắn "fast" thêm đuôi -er thành gì?'
        },
        1: {
          error: 'Fastest là dạng so sánh nhất, không đi với "than".',
          hint: 'So sánh hai người cần dùng so sánh hơn.'
        },
        3: {
          error: 'Không dùng "more fast" vì fast là trạng từ ngắn.',
          hint: 'Quy tắc trạng từ ngắn: fast → faster.'
        }
      }
    },
    {
      id: 'u2_pq6',
      question: 'My sister speaks English ______ than I do.',
      options: [
        'more fluently',
        'fluentlier',
        'most fluently',
        'fluent'
      ],
      correctIndex: 0,
      explanation: 'fluently là trạng từ dài (2 âm tiết trở lên), so sánh hơn dùng: more + fluently.',
      hint: 'Đây là trạng từ dài. Em hãy nhớ quy tắc dùng "more" đứng trước trạng từ nhé!',
      knowledgeTopic: 'Ngữ pháp Unit 2',
      wrongFeedbacks: {
        1: {
          error: 'Từ "fluently" chưa được sử dụng đúng dạng so sánh hơn.',
          hint: 'Đây là trạng từ dài. Em hãy nhớ quy tắc dùng "more" đứng trước trạng từ nhé!'
        },
        2: {
          error: '"most fluently" là dạng so sánh nhất, câu có từ "than" cần dùng so sánh hơn.',
          hint: 'Quy tắc so sánh hơn trạng từ dài là: more + adverb.'
        },
        3: {
          error: '"fluent" là tính từ nguyên mẫu, không bổ nghĩa cho động từ "speaks" và chưa chia so sánh hơn.',
          hint: 'Cần dùng trạng từ so sánh hơn "more fluently".'
        }
      }
    },
    {
      id: 'u2_pq7',
      question: 'The farmers work ______ than they did last year.',
      options: [
        'hard',
        'harder',
        'hardest',
        'more hard'
      ],
      correctIndex: 1,
      explanation: 'hard là trạng từ ngắn, dạng so sánh hơn là: hard + -er = harder.',
      hint: 'Quy tắc trạng từ ngắn: hard → harder.',
      knowledgeTopic: 'Ngữ pháp Unit 2',
      wrongFeedbacks: {
        0: {
          error: 'Hard là trạng từ nguyên mẫu, câu có "than" đòi hỏi dạng so sánh hơn.',
          hint: 'Trạng từ ngắn "hard" thêm đuôi -er thành gì?'
        },
        2: {
          error: 'Hardest là so sánh nhất, không dùng với "than".',
          hint: 'Cần dùng dạng so sánh hơn của hard.'
        },
        3: {
          error: 'Không dùng "more hard" trong tiếng Anh.',
          hint: 'Quy tắc trạng từ ngắn: hard → harder.'
        }
      }
    },
    {
      id: 'u2_pq8',
      question: 'Hoa sings ______ than Mai.',
      options: [
        'good',
        'well',
        'better',
        'best'
      ],
      correctIndex: 2,
      explanation: 'well là trạng từ bất quy tắc, so sánh hơn là "better".',
      hint: 'So sánh hơn của trạng từ "well" là "better".',
      knowledgeTopic: 'Ngữ pháp Unit 2',
      wrongFeedbacks: {
        0: {
          error: 'Good là tính từ, bổ nghĩa cho động từ "sings" cần dùng trạng từ.',
          hint: 'Trạng từ "well" có dạng so sánh hơn đặc biệt là gì?'
        },
        1: {
          error: 'Well là trạng từ nguyên mẫu, câu có từ "than" cần dùng so sánh hơn.',
          hint: 'So sánh hơn của "well" là "better".'
        },
        3: {
          error: 'Best là dạng so sánh nhất, không đi với "than".',
          hint: 'Em hãy chọn "better" nhé!'
        }
      }
    },
    {
      id: 'u2_pq9',
      question: 'Which activity is related to harvesting rice?',
      options: [
        'Feeding pigs',
        'Unloading rice',
        'Watching television',
        'Playing chess'
      ],
      correctIndex: 1,
      explanation: 'Unloading rice (dỡ thóc lúa xuống xe/kho) là hoạt động liên quan trực tiếp đến việc thu hoạch lúa.',
      hint: '"Unloading rice" có nghĩa là dỡ thóc lúa sau khi thu hoạch.',
      knowledgeTopic: 'Hoạt động nông nghiệp',
      wrongFeedbacks: {
        0: {
          error: 'Feeding pigs là cho lợn ăn, thuộc hoạt động chăn nuôi, không liên quan đến thu hoạch lúa.',
          hint: 'Tìm hoạt động liên quan đến lúa (rice).'
        },
        2: {
          error: 'Watching television là xem ti vi, hoạt động giải trí.',
          hint: 'Hoạt động nào có chứa từ "rice" (thóc, lúa)?'
        },
        3: {
          error: 'Playing chess là chơi cờ.',
          hint: '"Unloading rice" có nghĩa là dỡ thóc lúa sau khi thu hoạch.'
        }
      }
    },
    {
      id: 'u2_pq10',
      question: 'Tom: "What a beautiful village!" - Mai: "______"',
      options: [
        'Thank you. I\'m glad you like it.',
        'I don\'t know how to swim.',
        'I went to school yesterday.',
        'It is raining heavily.'
      ],
      correctIndex: 0,
      explanation: '"Thank you. I\'m glad you like it." (Cảm ơn bạn. Mình rất vui vì bạn thích nó) là câu đáp lại lịch sự khi ai đó khen ngôi làng.',
      hint: 'Phương án lịch sự nhất là: "Cảm ơn bạn. Mình rất vui vì bạn thích nó".',
      knowledgeTopic: 'Giao tiếp tình huống',
      wrongFeedbacks: {
        1: {
          error: 'Câu "Tôi không biết bơi" lạc đề hoàn toàn so với lời khen ngôi làng đẹp.',
          hint: 'Khi ai đó khen ngôi làng của mình, câu đáp lại lịch sự và tự nhiên nhất là gì?'
        },
        2: {
          error: 'Câu "Hôm qua tôi đi học" không liên quan đến lời khen của Tom.',
          hint: 'Em hãy chọn câu cảm ơn khi người khác khen ngôi làng của mình.'
        },
        3: {
          error: 'Câu "Trời đang mưa to" không phải câu đáp lại lời khen ngợi.',
          hint: 'Phương án lịch sự nhất là: "Cảm ơn bạn. Mình rất vui vì bạn thích nó".'
        }
      }
    }
  ]
};

// ==================== UNIT 3: TEENAGERS ====================
export const ENGLISH_UNIT_3_DATA: EnglishUnitData = {
  id: 'ch_tienganh_3',
  unitNumber: 3,
  title: 'Unit 3: Teenagers',
  topic: 'Teenagers, School clubs & Simple and compound sentences',
  description: 'Từ vựng về câu lạc bộ, mạng xã hội, áp lực học đường; phân biệt câu đơn và câu ghép theo SGK Tiếng Anh 8 Global Success.',

  // ==================== TAB 1: 10 TỪ VỰNG TRỌNG TÂM ====================
  // Chỉ có 3 cột: STT – Từ vựng tiếng Anh – Nghĩa tiếng Việt. Không có cột từ loại, không thêm ví dụ.
  vocabularyList: [
    {
      id: 'u3_v1',
      word: 'school club',
      partOfSpeech: '',
      meaning: 'câu lạc bộ ở trường'
    },
    {
      id: 'u3_v2',
      word: 'arts and crafts club',
      partOfSpeech: '',
      meaning: 'câu lạc bộ nghệ thuật và thủ công'
    },
    {
      id: 'u3_v3',
      word: 'chess club',
      partOfSpeech: '',
      meaning: 'câu lạc bộ cờ vua'
    },
    {
      id: 'u3_v4',
      word: 'sports club',
      partOfSpeech: '',
      meaning: 'câu lạc bộ thể thao'
    },
    {
      id: 'u3_v5',
      word: 'social media',
      partOfSpeech: '',
      meaning: 'mạng xã hội'
    },
    {
      id: 'u3_v6',
      word: 'upload',
      partOfSpeech: '',
      meaning: 'tải lên'
    },
    {
      id: 'u3_v7',
      word: 'browse',
      partOfSpeech: '',
      meaning: 'duyệt, tìm kiếm trên mạng'
    },
    {
      id: 'u3_v8',
      word: 'notifications',
      partOfSpeech: '',
      meaning: 'thông báo'
    },
    {
      id: 'u3_v9',
      word: 'pressure',
      partOfSpeech: '',
      meaning: 'áp lực'
    },
    {
      id: 'u3_v10',
      word: 'bully',
      partOfSpeech: '',
      meaning: 'kẻ bắt nạt; bắt nạt'
    }
  ],

  // 5 CÂU HỎI CỦNG CỐ TỪ VỰNG UNIT 3 (KIỂM TRA 10 TỪ VỰNG ĐÃ HỌC)
  vocabQuestions: [
    {
      id: 'u3_vq1',
      question: 'If you enjoy drawing, painting, and making paper crafts, you should join the _______.',
      options: [
        'chess club',
        'arts and crafts club',
        'sports club',
        'school bus'
      ],
      correctIndex: 1,
      explanation: 'arts and crafts club là câu lạc bộ nghệ thuật và thủ công (vẽ tranh, làm đồ thủ công).',
      hint: 'Em hãy liên hệ các hoạt động vẽ tranh (arts) và làm đồ thủ công (crafts) với tên câu lạc bộ phù hợp.',
      knowledgeTopic: 'Từ vựng Unit 3',
      wrongFeedbacks: {
        0: {
          error: 'Chess club là câu lạc bộ cờ vua, không phải vẽ tranh hay làm thủ công.',
          hint: 'Em hãy tìm câu lạc bộ dành cho hội họa và đồ thủ công.'
        },
        2: {
          error: 'Sports club là câu lạc bộ thể thao.',
          hint: 'Vẽ tranh và làm thủ công thuộc về lĩnh vực nghệ thuật, không phải thể thao vận động.'
        },
        3: {
          error: 'School bus là xe buýt của trường.',
          hint: 'Phương tiện đi lại không phải là một câu lạc bộ sở thích ở trường.'
        }
      }
    },
    {
      id: 'u3_vq2',
      question: 'Teenagers often use _______ like Facebook, TikTok, and Instagram to connect with friends.',
      options: [
        'social media',
        'pressure',
        'bully',
        'paddy field'
      ],
      correctIndex: 0,
      explanation: 'social media là mạng xã hội (Facebook, TikTok, Instagram...).',
      hint: 'Facebook, TikTok, Instagram được gọi chung bằng thuật ngữ gì trong công nghệ thông tin?',
      knowledgeTopic: 'Từ vựng Unit 3',
      wrongFeedbacks: {
        1: {
          error: 'Pressure có nghĩa là áp lực, căng thẳng.',
          hint: 'Em hãy tìm cụm từ chỉ các nền tảng mạng kết nối trực tuyến của giới trẻ.'
        },
        2: {
          error: 'Bully là kẻ bắt nạt hoặc hành vi bắt nạt.',
          hint: 'Hành vi tiêu cực không phải tên gọi chung của các ứng dụng mạng kết nối bạn bè.'
        },
        3: {
          error: 'Paddy field là ruộng lúa (từ vựng Unit 2).',
          hint: 'Ruộng đồng không liên quan đến các ứng dụng trực tuyến như Facebook hay TikTok.'
        }
      }
    },
    {
      id: 'u3_vq3',
      question: 'Whenever someone comments on your post, you will receive _______ on your phone.',
      options: [
        'clubs',
        'notifications',
        'crops',
        'orchards'
      ],
      correctIndex: 1,
      explanation: 'notifications là các thông báo hiển thị trên điện thoại khi có tin nhắn hoặc bình luận mới.',
      hint: 'Khi có tin nhắn hay bình luận mới trên mạng xã hội, ứng dụng sẽ gửi tín hiệu gì đến điện thoại?',
      knowledgeTopic: 'Từ vựng Unit 3',
      wrongFeedbacks: {
        0: {
          error: 'Clubs là các câu lạc bộ, không phải thông báo gửi về điện thoại.',
          hint: 'Em hãy tìm từ vựng chỉ thông báo xuất hiện trên màn hình điện thoại.'
        },
        2: {
          error: 'Crops là cây trồng/mùa màng.',
          hint: 'Mùa màng không xuất hiện trên điện thoại di động khi có người bình luận bài viết.'
        },
        3: {
          error: 'Orchards là vườn cây ăn quả.',
          hint: 'Vườn cây không liên quan đến chức năng báo tin của ứng dụng điện thoại.'
        }
      }
    },
    {
      id: 'u3_vq4',
      question: 'I usually spend thirty minutes to _______ websites for news and interesting articles.',
      options: [
        'browse',
        'bully',
        'pressure',
        'cattle'
      ],
      correctIndex: 0,
      explanation: 'browse có nghĩa là duyệt, lướt tìm kiếm thông tin trên mạng.',
      hint: 'Hành động mở các trang web để đọc tin tức và lướt tìm tài liệu được gọi là gì?',
      knowledgeTopic: 'Từ vựng Unit 3',
      wrongFeedbacks: {
        1: {
          error: 'Bully là bắt nạt, hoàn toàn không phù hợp với ngữ cảnh đọc tin tức.',
          hint: 'Em hãy tìm động từ chỉ hành động duyệt tin tức và lướt web trên mạng.'
        },
        2: {
          error: 'Pressure là áp lực, không phải động từ lướt web.',
          hint: 'Vị trí này đứng sau "to" nên cần một động từ chỉ hành động đọc và duyệt trang web.'
        },
        3: {
          error: 'Cattle là đàn gia súc.',
          hint: 'Gia súc là danh từ, ở đây ta cần động từ chỉ hành động lướt mạng tra cứu.'
        }
      }
    },
    {
      id: 'u3_vq5',
      question: 'At school, teachers always teach students to be kind and never _______ others.',
      options: [
        'upload',
        'bully',
        'browse',
        'combine'
      ],
      correctIndex: 1,
      explanation: 'bully (v) có nghĩa là bắt nạt, ức hiếp người khác.',
      hint: 'Thầy cô luôn khuyên chúng ta đối xử tử tế và không bao giờ có hành vi ức hiếp người khác.',
      knowledgeTopic: 'Từ vựng Unit 3',
      wrongFeedbacks: {
        0: {
          error: 'Upload là tải lên mạng, không đối lập với "be kind" (tử tế).',
          hint: 'Em hãy tìm động từ chỉ hành vi tiêu cực làm tổn thương, ức hiếp bạn bè.'
        },
        2: {
          error: 'Browse là lướt web, duyệt tin tức.',
          hint: 'Lướt web không phải là hành vi xấu đối xử tệ với người khác.'
        },
        3: {
          error: 'Combine là kết hợp.',
          hint: 'Em hãy nhớ lại từ vựng chỉ hành vi bắt nạt bạn bè trong trường học.'
        }
      }
    }
  ],

  // ==================== TAB 2: NGỮ PHÁP (SIMPLE & COMPOUND SENTENCES) ====================
  // Giữ đúng tên: Simple sentences và Compound sentences.
  // Mỗi quy tắc trong một khung nổi bật, đúng 1 ví dụ minh họa.
  grammarTopic: 'SIMPLE SENTENCES AND COMPOUND SENTENCES (Câu đơn và câu ghép)',
  grammarPoints: [
    {
      id: 'u3_gp1',
      title: 'Quy tắc 1: Câu đơn (Simple sentences)',
      formula: 'Cấu trúc: Một mệnh đề độc lập (Independent clause)',
      rule: 'Câu đơn được tạo thành từ đúng một mệnh đề độc lập.',
      example: {
        english: 'Minh has some problems with his schoolwork.',
        vietnamese: 'Minh gặp một số vấn đề trong việc học ở trường.'
      }
    },
    {
      id: 'u3_gp2',
      title: 'Quy tắc 2: Câu ghép (Compound sentences)',
      formula: 'Liên từ kết hợp: for, and, but, or, so\nTrạng từ liên kết: however, therefore, otherwise',
      rule: 'Câu ghép được tạo thành từ hai hoặc nhiều mệnh đề độc lập, nối với nhau bằng liên từ kết hợp hoặc trạng từ liên kết.',
      example: {
        english: 'Mai bought many books, for she likes reading.',
        vietnamese: 'Mai đã mua rất nhiều sách, vì bạn ấy thích đọc sách.'
      }
    }
  ],

  // 5 CÂU HỎI CỦNG CỐ NGỮ PHÁP UNIT 3
  grammarQuestions: [
    {
      id: 'u3_gq1',
      question: 'Minh felt very tired after a long school day, ______ he still completed all his homework.',
      options: [
        'or',
        'but',
        'for',
        'so'
      ],
      correctIndex: 1,
      explanation: 'Liên từ kết hợp "but" (nhưng) dùng để nối hai mệnh đề độc lập có ý nghĩa tương phản (mệt mỏi nhưng vẫn làm bài tập).',
      hint: 'Hai vế câu diễn tả sự tương phản: rất mệt mỏi nhưng vẫn hoàn thành bài tập. Hãy chọn liên từ mang nghĩa đối lập.',
      knowledgeTopic: 'Liên từ kết hợp trong câu ghép',
      wrongFeedbacks: {
        0: {
          error: 'Liên từ "or" dùng để chỉ sự lựa chọn (hoặc là).',
          hint: 'Hai hành động này không phải là sự lựa chọn, mà mang ý nghĩa đối lập.'
        },
        2: {
          error: 'Liên từ "for" dùng để giải thích lý do (bởi vì).',
          hint: 'Vế sau không phải là nguyên nhân của vế trước, hãy tìm liên từ mang nghĩa "nhưng".'
        },
        3: {
          error: 'Liên từ "so" dùng để chỉ kết quả (vì vậy).',
          hint: 'Hãy tìm liên từ kết hợp chỉ sự tương phản đối lập.'
        }
      }
    },
    {
      id: 'u3_gq2',
      question: 'You should bring an umbrella, ______ you will get wet in the heavy rain.',
      options: [
        'so',
        'and',
        'but',
        'or'
      ],
      correctIndex: 3,
      explanation: 'Liên từ "or" (hoặc là, nếu không thì) dùng để đưa ra sự lựa chọn hoặc cảnh báo hậu quả nếu không mang theo ô.',
      hint: 'Vế sau đưa ra cảnh báo về điều sẽ xảy ra nếu không mang ô. Hãy chọn liên từ kết hợp mang nghĩa "hoặc là / nếu không thì".',
      knowledgeTopic: 'Liên từ kết hợp trong câu ghép',
      wrongFeedbacks: {
        0: {
          error: 'Liên từ "so" dùng để chỉ kết quả (cho nên).',
          hint: 'Liên từ ngắn gồm 2 chữ cái nào dùng để chỉ sự lựa chọn hoặc nếu không thì?'
        },
        1: {
          error: 'Liên từ "and" dùng để bổ sung thông tin (và).',
          hint: 'Vế sau cảnh báo hậu quả bị ướt, hãy chọn liên từ mang nghĩa cảnh báo/lựa chọn.'
        },
        2: {
          error: 'Liên từ "but" dùng để chỉ sự tương phản đối lập.',
          hint: 'Hãy tìm liên từ thường dùng để cảnh báo: làm việc này nếu không thì sẽ bị...'
        }
      }
    },
    {
      id: 'u3_gq3',
      question: 'Mark was feeling stressed about the exam, _______ he talked to the school counselor for advice.',
      options: [
        'for',
        'but',
        'so',
        'or'
      ],
      correctIndex: 2,
      explanation: 'Liên từ kết hợp "so" dùng để chỉ kết quả (Mark cảm thấy căng thẳng, vì vậy bạn ấy đã xin lời khuyên).',
      hint: 'Vế sau là kết quả của việc cảm thấy căng thẳng ở vế trước. Em hãy chọn liên từ chỉ kết quả.',
      knowledgeTopic: 'Ngữ pháp Unit 3',
      wrongFeedbacks: {
        0: {
          error: 'Liên từ "for" dùng để chỉ lý do (bởi vì), không dùng chỉ kết quả.',
          hint: 'Em hãy phân biệt giữa liên từ chỉ lý do (bởi vì) và liên từ chỉ kết quả (vì thế, do đó).'
        },
        1: {
          error: 'Liên từ "but" dùng chỉ sự tương phản, không phù hợp với quan hệ nguyên nhân - kết quả ở đây.',
          hint: 'Vế sau là kết quả hành động, em hãy nhớ lại liên từ kết hợp nào mang nghĩa chỉ kết quả (vì vậy).'
        },
        3: {
          error: 'Liên từ "or" dùng để chỉ sự lựa chọn (hoặc là).',
          hint: 'Mối quan hệ giữa căng thẳng và đi xin tư vấn là nguyên nhân - kết quả. Hãy chọn liên từ chỉ kết quả.'
        }
      }
    },
    {
      id: 'u3_gq4',
      question: 'She joined the arts and crafts club, _______ she loves making paper flowers.',
      options: [
        'for',
        'so',
        'but',
        'or'
      ],
      correctIndex: 0,
      explanation: 'Liên từ kết hợp "for" trong câu ghép mang nghĩa là "vì / bởi vì" (nêu lý do).',
      hint: 'Vế sau giải thích lý do vì sao bạn ấy tham gia CLB. Hãy chọn liên từ kết hợp mang nghĩa chỉ lý do (bởi vì).',
      knowledgeTopic: 'Ngữ pháp Unit 3',
      wrongFeedbacks: {
        1: {
          error: '"so" mang nghĩa là "cho nên", vế sau ở đây là lý do chứ không phải kết quả.',
          hint: 'Trong câu ghép, liên từ nào mang nghĩa tương đương "because" (bởi vì) để nêu lý do?'
        },
        2: {
          error: '"but" mang nghĩa là "nhưng" (chỉ sự đối lập), ở đây hai vế không đối lập.',
          hint: 'Vế sau nêu lý do yêu thích làm hoa giấy, em hãy chọn liên từ kết hợp chỉ nguyên nhân, lý do.'
        },
        3: {
          error: '"or" mang nghĩa là "hoặc là".',
          hint: 'Hai vế câu không đưa ra sự lựa chọn, mà vế sau giải thích lý do cho vế trước.'
        }
      }
    },
    {
      id: 'u3_gq5',
      question: 'He prepared carefully for the presentation; _______, he still felt very nervous on stage.',
      options: [
        'so',
        'therefore',
        'otherwise',
        'however'
      ],
      correctIndex: 3,
      explanation: 'Trạng từ liên kết "however" (tuy nhiên) đứng sau dấu chấm phẩy (;) và trước dấu phẩy (,) chỉ sự tương phản.',
      hint: 'Giữa việc chuẩn bị kỹ lưỡng và việc vẫn cảm thấy run rẩy lo lắng có sự tương phản. Hãy chú ý trạng từ liên kết đi sau dấu chấm phẩy và trước dấu phẩy.',
      knowledgeTopic: 'Ngữ pháp Unit 3',
      wrongFeedbacks: {
        0: {
          error: '"so" là liên từ kết hợp, không đứng sau dấu chấm phẩy rồi đi kèm dấu phẩy như trạng từ liên kết.',
          hint: 'Em hãy chọn một trạng từ liên kết (sau dấu chấm phẩy và trước dấu phẩy) chỉ sự tương phản.'
        },
        1: {
          error: '"therefore" mang nghĩa "do đó, vì thế", không phù hợp với sự tương phản giữa chuẩn bị kỹ và vẫn lo lắng.',
          hint: 'Hai vế thể hiện sự tương phản đối lập, em hãy chọn trạng từ liên kết mang nghĩa "tuy nhiên".'
        },
        2: {
          error: '"otherwise" mang nghĩa "nếu không thì", không hợp nghĩa ở đây.',
          hint: 'Trạng từ "otherwise" dùng để cảnh báo hậu quả, ở đây cần trạng từ chỉ sự tương phản.'
        }
      }
    }
  ],

  // ==================== TAB 3: LUYỆN TẬP (10 CÂU TỔNG HỢP THEO ĐỀ XUẤT) ====================
  // Giữ nguyên thứ tự câu hỏi và phương án, không xáo trộn.
  practiceQuestions: [
    {
      id: 'u3_pq1',
      question: 'My sister joined the ______ because she loves playing chess.',
      options: [
        'chess club',
        'music room',
        'school bus',
        'library'
      ],
      correctIndex: 0,
      explanation: 'chess club là câu lạc bộ cờ vua.',
      hint: 'Em hãy liên hệ môn cờ (chess) với tên câu lạc bộ tương ứng trong trường học.',
      knowledgeTopic: 'Từ vựng Unit 3',
      wrongFeedbacks: {
        1: {
          error: 'Music room là phòng âm nhạc, không phải câu lạc bộ dành cho người thích chơi cờ.',
          hint: 'Hãy tìm tên câu lạc bộ gắn liền với từ "chess" (môn cờ).'
        },
        2: {
          error: 'School bus là xe buýt trường học, một phương tiện đi lại chứ không phải câu lạc bộ.',
          hint: 'Hãy tìm lựa chọn chỉ một câu lạc bộ dành cho người đam mê chơi cờ.'
        },
        3: {
          error: 'Library là thư viện, nơi đọc sách báo và tự học.',
          hint: 'Người thích chơi cờ vua thường tham gia câu lạc bộ nào?'
        }
      }
    },
    {
      id: 'u3_pq2',
      question: 'You can ______ photos to your social media account.',
      options: [
        'browse',
        'upload',
        'check',
        'connect'
      ],
      correctIndex: 1,
      explanation: 'upload photos có nghĩa là tải ảnh lên tài khoản mạng xã hội.',
      hint: 'Hãy nhớ lại động từ chỉ hành động đưa hình ảnh hoặc tập tin lên mạng xã hội.',
      knowledgeTopic: 'Từ vựng Unit 3',
      wrongFeedbacks: {
        0: {
          error: 'Browse là lướt xem thông tin, không mang nghĩa đưa tệp tin lên mạng.',
          hint: 'Từ nào đối lập với "download" (tải về)?'
        },
        2: {
          error: 'Check mang nghĩa là kiểm tra, soát lại.',
          hint: 'Hãy tìm động từ chỉ thao tác đăng tải dữ liệu lên tài khoản cá nhân.'
        },
        3: {
          error: 'Connect là kết nối thiết bị hoặc đường truyền mạng.',
          hint: 'Hành động đăng ảnh lên trang mạng xã hội trong tiếng Anh dùng động từ gì?'
        }
      }
    },
    {
      id: 'u3_pq3',
      question: 'Students sometimes feel ______ because of exams and homework.',
      options: [
        'interest',
        'advice',
        'pressure',
        'club'
      ],
      correctIndex: 2,
      explanation: 'feel pressure có nghĩa là cảm thấy áp lực, căng thẳng vì bài vở và thi cử.',
      hint: 'Hãy nhớ lại danh từ chỉ trạng thái căng thẳng, sức ép do bài vở và thi cử gây ra.',
      knowledgeTopic: 'Từ vựng Unit 3',
      wrongFeedbacks: {
        0: {
          error: 'Interest là sự quan tâm, thích thú, không diễn tả sự căng thẳng.',
          hint: 'Từ vựng nào trong Unit 3 chỉ áp lực từ việc học và thi cử?'
        },
        1: {
          error: 'Advice là lời khuyên, không kết hợp với cảm xúc "feel".',
          hint: 'Học sinh thường đối mặt với cảm giác căng thẳng nào trước các kỳ thi?'
        },
        3: {
          error: 'Club là câu lạc bộ, không phải từ chỉ cảm xúc hay trạng thái tâm lý.',
          hint: 'Hãy tìm danh từ mang nghĩa là áp lực, sức ép.'
        }
      }
    },
    {
      id: 'u3_pq4',
      question: 'Mai wanted to buy a new English dictionary, ______ she saved her pocket money for three months.',
      options: [
        'but',
        'or',
        'so',
        'for'
      ],
      correctIndex: 2,
      explanation: 'Liên từ "so" (vì thế, cho nên) nối hai mệnh đề độc lập chỉ mối quan hệ nguyên nhân - kết quả (muốn mua từ điển nên đã tiết kiệm tiền).',
      hint: 'Vế sau là kết quả hành động của vế trước. Hãy chọn liên từ kết hợp chỉ kết quả (vì vậy, cho nên).',
      knowledgeTopic: 'Liên từ chỉ kết quả',
      wrongFeedbacks: {
        0: {
          error: '"but" mang nghĩa là "nhưng" (chỉ sự đối lập), ở đây hai vế không đối lập.',
          hint: 'Vế sau là kết quả của việc muốn mua từ điển, hãy tìm liên từ chỉ kết quả.'
        },
        1: {
          error: '"or" mang nghĩa là "hoặc là".',
          hint: 'Câu không đưa ra sự lựa chọn, mà thể hiện kết quả hành động.'
        },
        3: {
          error: '"for" mang nghĩa là "bởi vì" (chỉ nguyên nhân).',
          hint: 'Hãy tìm liên từ chỉ kết quả bắt đầu bằng chữ "s".'
        }
      }
    },
    {
      id: 'u3_pq5',
      question: 'I wanted to join the sports club, ______ I was too busy.',
      options: [
        'so',
        'but',
        'therefore',
        'or'
      ],
      correctIndex: 1,
      explanation: 'Liên từ "but" (nhưng) thể hiện sự tương phản giữa muốn tham gia và quá bận rộn.',
      hint: 'Hai vế câu thể hiện sự đối lập: muốn tham gia nhưng lại quá bận. Hãy chọn liên từ mang nghĩa tương phản.',
      knowledgeTopic: 'Ngữ pháp Unit 3',
      wrongFeedbacks: {
        0: {
          error: 'Từ nối "so" chỉ kết quả, không phù hợp với ý tương phản ở đây.',
          hint: 'Hãy tìm liên từ thể hiện mối quan hệ đối lập giữa hai sự việc.'
        },
        2: {
          error: '"therefore" là trạng từ liên kết (thường đi sau dấu chấm phẩy), ở đây đứng sau dấu phẩy cần liên từ kết hợp.',
          hint: 'Sau dấu phẩy (,) nối hai mệnh đề cần một liên từ kết hợp chỉ sự tương phản.'
        },
        3: {
          error: '"or" mang nghĩa là "hoặc là".',
          hint: 'Liên từ nào mang ý nghĩa tương đương với "nhưng" trong tiếng Việt?'
        }
      }
    },
    {
      id: 'u3_pq6',
      question: 'Lan was tired; ______, she finished her homework.',
      options: [
        'however',
        'therefore',
        'otherwise',
        'so'
      ],
      correctIndex: 0,
      explanation: 'Trạng từ liên kết "however" (tuy nhiên) thể hiện sự tương phản giữa mệt mỏi và vẫn hoàn thành bài tập.',
      hint: 'Trạng từ liên kết đứng sau dấu chấm phẩy (;) và trước dấu phẩy (,) diễn tả sự nhượng bộ, tương phản mang nghĩa "tuy nhiên".',
      knowledgeTopic: 'Ngữ pháp Unit 3',
      wrongFeedbacks: {
        1: {
          error: '"therefore" mang nghĩa "do đó, vì vậy" (chỉ kết quả), ở đây hai vế mang ý tương phản.',
          hint: 'Lan mệt nhưng vẫn hoàn thành bài tập, hãy chọn trạng từ liên kết mang nghĩa tương phản.'
        },
        2: {
          error: '"otherwise" mang nghĩa "nếu không thì", dùng để cảnh báo hậu quả.',
          hint: 'Từ nào mang nghĩa là "tuy nhiên" để thể hiện sự đối lập giữa hai mệnh đề?'
        },
        3: {
          error: '"so" là liên từ kết hợp, không đứng giữa cấu trúc "; ..., ".',
          hint: 'Hãy tìm trạng từ liên kết tương phản bắt đầu bằng chữ "h".'
        }
      }
    },
    {
      id: 'u3_pq7',
      question: 'You should study harder; ______, you may fail the exam.',
      options: [
        'however',
        'otherwise',
        'and',
        'for'
      ],
      correctIndex: 1,
      explanation: 'Trạng từ liên kết "otherwise" (nếu không thì) dùng để cảnh báo hậu quả nếu không học chăm chỉ hơn.',
      hint: 'Vế sau nêu hậu quả tiêu cực có thể xảy ra nếu không chăm chỉ. Hãy chọn trạng từ liên kết mang nghĩa "nếu không thì".',
      knowledgeTopic: 'Ngữ pháp Unit 3',
      wrongFeedbacks: {
        0: {
          error: '"however" mang nghĩa "tuy nhiên", không diễn tả ý cảnh báo hậu quả.',
          hint: 'Hãy tìm từ vựng dùng để diễn đạt ý: nếu bạn không làm việc này thì điều kia sẽ xảy ra.'
        },
        2: {
          error: '"and" là liên từ kết hợp, không đứng sau dấu chấm phẩy rồi có dấu phẩy đi kèm.',
          hint: 'Hãy tìm trạng từ liên kết chỉ điều kiện cảnh báo hậu quả.'
        },
        3: {
          error: '"for" mang nghĩa "bởi vì".',
          hint: 'Trạng từ liên kết nào mang nghĩa "nếu không thì" trong bài học?'
        }
      }
    },
    {
      id: 'u3_pq8',
      question: 'Minh likes playing sports, ______ his brother prefers playing computer games.',
      options: [
        'otherwise',
        'therefore',
        'and',
        'however'
      ],
      correctIndex: 2,
      explanation: 'Liên từ kết hợp "and" đứng sau dấu phẩy để nối hai mệnh đề độc lập thành câu ghép.',
      hint: 'Sau dấu phẩy (,) nối trực tiếp hai mệnh đề độc lập, ta cần một liên từ kết hợp (FANBOYS), không dùng trạng từ liên kết.',
      knowledgeTopic: 'Liên từ kết hợp trong câu ghép',
      wrongFeedbacks: {
        0: {
          error: '"otherwise" là trạng từ liên kết, thường đứng sau dấu chấm phẩy (;).',
          hint: 'Sau dấu phẩy cần một liên từ kết hợp thông dụng.'
        },
        1: {
          error: '"therefore" là trạng từ liên kết (sau dấu chấm phẩy), không dùng sau dấu phẩy đơn lẻ.',
          hint: 'Hãy tìm liên từ kết hợp gồm 3 chữ cái dùng để nối hai mệnh đề song song.'
        },
        3: {
          error: '"however" là trạng từ liên kết, cần đi kèm dấu chấm phẩy phía trước (; however, ).',
          hint: 'Chỉ có liên từ kết hợp mới có thể đứng ngay sau dấu phẩy để nối hai mệnh đề độc lập.'
        }
      }
    },
    {
      id: 'u3_pq9',
      question: 'Student: "Can you tell me more about the music club, please?" - School club leader: "______"',
      options: [
        'You should go to bed early.',
        'I don\'t like doing homework.',
        'I went to the cinema yesterday.',
        'Certainly. It meets on Mondays and Thursdays.'
      ],
      correctIndex: 3,
      explanation: '"Certainly. It meets on Mondays and Thursdays." (Chắc chắn rồi. CLB sinh hoạt vào thứ Hai và thứ Năm) là câu trả lời lịch sự và đúng trọng tâm nhất.',
      hint: 'Học sinh đang hỏi thông tin về câu lạc bộ một cách lịch sự, người phụ trách cần trả lời cung cấp thông tin sinh hoạt cụ thể.',
      knowledgeTopic: 'Giao tiếp tình huống',
      wrongFeedbacks: {
        0: {
          error: 'Câu "Bạn nên đi ngủ sớm" là lời khuyên không liên quan.',
          hint: 'Hãy tìm câu phản hồi lịch sự và đưa ra thời gian sinh hoạt của câu lạc bộ.'
        },
        1: {
          error: 'Câu "Tôi không thích làm bài tập" hoàn toàn lạc đề so với câu hỏi về CLB.',
          hint: 'Hãy tìm câu trả lời thể hiện thái độ sẵn sàng và cung cấp thông tin lịch họp của câu lạc bộ.'
        },
        2: {
          error: 'Câu "Hôm qua tôi đi xem phim" không trả lời câu hỏi của bạn học sinh.',
          hint: 'Người đối thoại cần câu trả lời lịch sự bắt đầu bằng sự đồng ý cung cấp thông tin.'
        }
      }
    },
    {
      id: 'u3_pq10',
      question: '“______ you show me the way to the school library, please?”',
      options: [
        'Can',
        'Do',
        'Must',
        'Are'
      ],
      correctIndex: 0,
      explanation: 'Cấu trúc "Can you + V (nguyên mẫu) ..., please?" dùng để đưa ra lời yêu cầu, nhờ vả một cách lịch sự.',
      hint: 'Để đưa ra lời yêu cầu lịch sự kèm theo từ "please" ở cuối câu, trợ động từ khuyết thiếu nào đứng đầu câu?',
      knowledgeTopic: 'Giao tiếp tình huống (Making requests)',
      wrongFeedbacks: {
        1: {
          error: '"Do you show..." là câu hỏi về thói quen, không phải mẫu câu nhờ vả lịch sự.',
          hint: 'Hãy tìm trợ động từ tình thái thường dùng để đưa ra lời nhờ vả nhẹ nhàng.'
        },
        2: {
          error: '"Must" mang tính ép buộc (phải), không dùng để nhờ vả lịch sự.',
          hint: 'Từ nào mang nghĩa là "bạn có thể... được không?"'
        },
        3: {
          error: '"Are" là động từ to be, không đi với động từ thường nguyên mẫu "show".',
          hint: 'Hãy chọn trợ động từ bắt đầu bằng chữ "C" dùng trong giao tiếp lịch sự.'
        }
      }
    }
  ]
};


// ==================== UNIT 4: ETHNIC GROUPS OF VIET NAM ====================
export const ENGLISH_UNIT_4_DATA: EnglishUnitData = {
  id: 'ch_tienganh_4',
  unitNumber: 4,
  title: 'Unit 4: Ethnic Groups of Viet Nam',
  topic: 'Ethnic groups, Cultural traditions, Questions & Countable/Uncountable nouns',
  description: 'Từ vựng về các dân tộc Việt Nam, nhà sàn, ruộng bậc thang, cồng chiêng; câu hỏi Yes/No, câu hỏi Wh- và danh từ đếm được/không đếm được theo SGK Tiếng Anh 8 Global Success.',

  // ==================== TAB 1: 10 TỪ VỰNG TRỌNG TÂM ====================
  // Chỉ có 3 cột: STT – Từ vựng tiếng Anh – Nghĩa tiếng Việt. Không có cột từ loại, không thêm ví dụ.
  vocabularyList: [
    {
      id: 'u4_v1',
      word: 'ethnic group',
      partOfSpeech: '',
      meaning: 'dân tộc'
    },
    {
      id: 'u4_v2',
      word: 'minority group',
      partOfSpeech: '',
      meaning: 'nhóm dân tộc thiểu số'
    },
    {
      id: 'u4_v3',
      word: 'stilt house',
      partOfSpeech: '',
      meaning: 'nhà sàn'
    },
    {
      id: 'u4_v4',
      word: 'terraced fields',
      partOfSpeech: '',
      meaning: 'ruộng bậc thang'
    },
    {
      id: 'u4_v5',
      word: 'communal house',
      partOfSpeech: '',
      meaning: 'nhà sinh hoạt cộng đồng'
    },
    {
      id: 'u4_v6',
      word: 'folk dance',
      partOfSpeech: '',
      meaning: 'điệu múa dân gian'
    },
    {
      id: 'u4_v7',
      word: 'musical instrument',
      partOfSpeech: '',
      meaning: 'nhạc cụ'
    },
    {
      id: 'u4_v8',
      word: 'livestock',
      partOfSpeech: '',
      meaning: 'gia súc, vật nuôi'
    },
    {
      id: 'u4_v9',
      word: 'weaving',
      partOfSpeech: '',
      meaning: 'nghề dệt, hoạt động dệt'
    },
    {
      id: 'u4_v10',
      word: 'gong',
      partOfSpeech: '',
      meaning: 'cồng, chiêng'
    }
  ],

  // 5 câu trắc nghiệm củng cố từ vựng
  vocabQuestions: [
    {
      id: 'u4_vq1',
      question: 'A house built on high posts to protect from wild animals and flood is called a ______.',
      options: [
        'tent',
        'stilt house',
        'cottage',
        'modern flat'
      ],
      correctIndex: 1,
      explanation: '"stilt house" nghĩa là nhà sàn, kiểu nhà truyền thống dựng trên các cột gỗ cao đặc trưng của các dân tộc thiểu số.',
      hint: 'Hãy liên hệ kiểu nhà được dựng trên các cột cao để tránh lũ lụt và thú dữ với từ vựng trong bài.',
      knowledgeTopic: 'Từ vựng Unit 4',
      wrongFeedbacks: {
        0: {
          error: 'Tent nghĩa là lều trại bằng vải bạt, không phải nhà sàn truyền thống.',
          hint: 'Hãy nhớ lại từ vựng chỉ kiểu nhà sàn bằng gỗ của đồng bào miền núi.'
        },
        2: {
          error: 'Cottage là nhà tranh/nhà gỗ nhỏ ở nông thôn thông thường, không dựng trên cột sàn cao.',
          hint: 'Từ vựng này ghép từ danh từ chỉ chiếc cột sàn cao với từ "house".'
        },
        3: {
          error: 'Modern flat là căn hộ hiện đại trong thành phố.',
          hint: 'Hãy tìm từ chỉ ngôi nhà truyền thống dựng trên cột gỗ của các dân tộc thiểu số.'
        }
      }
    },
    {
      id: 'u4_vq2',
      question: 'The Thai and Hmong people grow rice on ______ in the mountainous areas.',
      options: [
        'terraced fields',
        'flower gardens',
        'football fields',
        'busy streets'
      ],
      correctIndex: 0,
      explanation: '"terraced fields" nghĩa là ruộng bậc thang, nét văn hóa nông nghiệp đặc trưng của các dân tộc vùng núi phía Bắc Việt Nam.',
      hint: 'Hãy nhớ lại từ vựng chỉ những thửa ruộng bậc thang uốn lượn theo sườn núi.',
      knowledgeTopic: 'Từ vựng Unit 4',
      wrongFeedbacks: {
        1: {
          error: 'Flower gardens là vườn hoa, không dùng để trồng lúa nước trên sườn núi.',
          hint: 'Từ vựng nào trong bài mang nghĩa là ruộng bậc thang?'
        },
        2: {
          error: 'Football fields là sân bóng đá.',
          hint: 'Hãy tìm từ vựng kết hợp giữa bậc thang và đồng ruộng.'
        },
        3: {
          error: 'Busy streets là đường phố nhộn nhịp, không có ở sườn núi.',
          hint: 'Địa hình vùng núi cao thích hợp với kiểu ruộng nào được tạo thành từng bậc?'
        }
      }
    },
    {
      id: 'u4_vq3',
      question: 'Villagers often gather at the ______ for village meetings and community festivals.',
      options: [
        'cinema',
        'communal house',
        'supermarket',
        'railway station'
      ],
      correctIndex: 1,
      explanation: '"communal house" nghĩa là nhà sinh hoạt cộng đồng (như nhà Rông ở Tây Nguyên), nơi hội họp và sinh hoạt lễ hội của dân làng.',
      hint: 'Hãy nhớ lại từ vựng chỉ ngôi nhà chung của cả buôn làng dùng cho hội họp và lễ hội.',
      knowledgeTopic: 'Từ vựng Unit 4',
      wrongFeedbacks: {
        0: {
          error: 'Cinema là rạp chiếu phim, không phải nơi hội họp cộng đồng truyền thống của bản làng.',
          hint: 'Hãy tìm từ mang nghĩa là ngôi nhà cộng đồng, nơi dân làng tụ họp.'
        },
        2: {
          error: 'Supermarket là siêu thị mua sắm.',
          hint: 'Từ vựng bắt đầu bằng "communal" (thuộc về cộng đồng).'
        },
        3: {
          error: 'Railway station là nhà ga xe lửa.',
          hint: 'Ngôi nhà sinh hoạt văn hóa chung của bản làng được gọi là gì trong tiếng Anh?'
        }
      }
    },
    {
      id: 'u4_vq4',
      question: 'A traditional musical instrument made of metal, very famous in the Central Highlands of Viet Nam, is the ______.',
      options: [
        'gong',
        'electric keyboard',
        'headphone',
        'radio'
      ],
      correctIndex: 0,
      explanation: '"gong" (cồng, chiêng) là nhạc cụ bằng đồng/kim loại cổ truyền đặc trưng trong Không gian văn hóa cồng chiêng Tây Nguyên.',
      hint: 'Hãy nhớ lại tên tiếng Anh của nhạc cụ bằng đồng đặc trưng của vùng văn hóa Tây Nguyên.',
      knowledgeTopic: 'Từ vựng Unit 4',
      wrongFeedbacks: {
        1: {
          error: 'Electric keyboard là đàn phím điện tử hiện đại.',
          hint: 'Nhạc cụ cổ truyền này thường được đúc bằng kim loại đồng và gõ bằng dùi.'
        },
        2: {
          error: 'Headphone là tai nghe cá nhân, không phải nhạc cụ.',
          hint: 'Từ vựng này rất ngắn, chỉ gồm 4 chữ cái, mang nghĩa là cồng, chiêng.'
        },
        3: {
          error: 'Radio là máy thu thanh radio.',
          hint: 'Nhạc cụ truyền thống nổi tiếng của Tây Nguyên trong tiếng Anh là gì?'
        }
      }
    },
    {
      id: 'u4_vq5',
      question: 'Raising ______ (cows, buffaloes) and traditional ______ are important economic activities in many ethnic villages.',
      options: [
        'vehicles / driving',
        'smartphones / gaming',
        'livestock / weaving',
        'plastics / shopping'
      ],
      correctIndex: 2,
      explanation: '"livestock" là gia súc (trâu bò, dê...) và "weaving" là nghề dệt vải truyền thống của đồng bào dân tộc thiểu số.',
      hint: 'Hãy tìm cặp từ chỉ gia súc (trâu bò, cừu) và nghề thủ công dệt vải truyền thống.',
      knowledgeTopic: 'Từ vựng Unit 4',
      wrongFeedbacks: {
        0: {
          error: 'Vehicles / driving là xe cộ và lái xe, không phù hợp với chăn nuôi bò trâu và nghề truyền thống vùng quê.',
          hint: 'Từ vựng thứ nhất chỉ gia súc chăn nuôi, từ thứ hai chỉ nghề dệt sợi.'
        },
        1: {
          error: 'Smartphones / gaming là điện thoại và chơi game, không liên quan đến nghề truyền thống.',
          hint: 'Hãy tìm cặp từ liên quan đến chăn nuôi gia súc và nghề dệt thổ cẩm.'
        },
        3: {
          error: 'Plastics / shopping là đồ nhựa và đi mua sắm.',
          hint: 'Hãy nhớ lại từ vựng chỉ gia súc (livestock) và nghề dệt vải truyền thống.'
        }
      }
    }
  ],

  // ==================== TAB 2: NGỮ PHÁP (GRAMMAR) ====================
  grammarTopic: 'YES/NO & WH-QUESTIONS | COUNTABLE & UNCOUNTABLE NOUNS',
  grammarPoints: [
    {
      id: 'u4_gp1',
      title: 'Quy tắc 1: Câu hỏi Yes/No (Yes/No Questions)',
      formula: 'Do / Does / Did + S + V(nguyên thể) ...? | Am / Is / Are + S ...?',
      rule: 'Câu hỏi Yes/No dùng để xác nhận thông tin đúng hay sai, câu trả lời bắt đầu bằng Yes hoặc No. Cần chú ý đảo trợ động từ (Do/Does/Did) hoặc động từ to be (Am/Is/Are/Was/Were) lên trước chủ ngữ.',
      example: {
        english: 'Do you live in the mountains? - Yes, I do.',
        vietnamese: 'Bạn có sống ở vùng miền núi không? - Có, mình có sống ở đó.'
      }
    },
    {
      id: 'u4_gp2',
      title: 'Quy tắc 2: Câu hỏi Wh- (Wh-Questions)',
      formula: 'Wh-word + do / does / did / be + S + V ...?',
      rule: 'Câu hỏi Wh- dùng để hỏi thông tin cụ thể (ai, cái gì, ở đâu, khi nào, tại sao, thế nào...). Luôn bắt đầu bằng một từ để hỏi: What (cái gì), Where (ở đâu), When (khi nào), Who (ai), Which (cái nào/nhóm nào), Why (tại sao), How (như thế nào/bằng cách nào).',
      example: {
        english: 'Where do the Thai people live? - They live in northwestern Viet Nam.',
        vietnamese: 'Người Thái sống ở đâu? - Họ sống chủ yếu ở vùng Tây Bắc Việt Nam.'
      }
    },
    {
      id: 'u4_gp3',
      title: 'Quy tắc 3: Danh từ đếm được và không đếm được (Countable & Uncountable Nouns)',
      formula: 'Countable: a house → houses | Uncountable: water, rice, tea (không thêm -s)',
      rule: 'Danh từ đếm được (Countable nouns) chỉ người, vật có thể đếm bằng số (1, 2, 3...), có dạng số ít và số nhiều (thêm -s/-es). Danh từ không đếm được (Uncountable nouns) chỉ chất lỏng, vật liệu hoặc khái niệm trừu tượng (water, rice, milk, information...), chỉ có một dạng số ít, không thêm -s/-es, không đi trực tiếp với a/an hay số đếm.',
      example: {
        english: 'There are 54 ethnic groups in Viet Nam.',
        vietnamese: 'Có 54 dân tộc ở Việt Nam.'
      }
    },
    {
      id: 'u4_gp4',
      title: 'Quy tắc 4: Lượng từ (Quantifiers: a/an, many, much, a few, a little)',
      formula: 'many / a few + Danh từ đếm được số nhiều | much / a little + Danh từ không đếm được',
      rule: 'Sử dụng lượng từ phù hợp với từng loại danh từ: "a/an" dùng cho danh từ đếm được số ít; "many" và "a few" (một vài, một ít) đi với danh từ đếm được số nhiều; "much" và "a little" (một ít, một chút) đi với danh từ không đếm được.',
      example: {
        english: 'There are a few houses in my village, but there is little water.',
        vietnamese: 'Có một vài ngôi nhà trong làng tôi, nhưng có rất ít nước.'
      }
    }
  ],

  // 5 câu trắc nghiệm củng cố ngữ pháp
  grammarQuestions: [
    {
      id: 'u4_gq1',
      question: '______ they celebrate the harvest festival every year? – Yes, they do.',
      options: [
        'Are',
        'Do',
        'Does',
        'Is'
      ],
      correctIndex: 1,
      explanation: 'Chủ ngữ là "they" (ngôi thứ ba số nhiều) và động từ chính là "celebrate" ở dạng nguyên thể -> ta dùng trợ động từ "Do" ở thì Hiện tại đơn.',
      hint: 'Với chủ ngữ ngôi thứ ba số nhiều "they" và động từ thường "celebrate", hãy chọn trợ động từ tương ứng ở thì Hiện tại đơn.',
      knowledgeTopic: 'Câu hỏi Yes/No',
      wrongFeedbacks: {
        0: {
          error: 'Are là động từ to be, chỉ đi với tính từ hoặc V-ing (hiện tại tiếp diễn), không đi với động từ nguyên thể "celebrate".',
          hint: 'Câu hỏi thì hiện tại đơn với động từ thường cần dùng trợ động từ Do hoặc Does.'
        },
        2: {
          error: 'Does chỉ dùng với chủ ngữ ngôi thứ ba số ít (he, she, it).',
          hint: 'Chủ ngữ "they" là số nhiều, hãy chọn trợ động từ thích hợp.'
        },
        3: {
          error: 'Is là động từ to be số ít, không đi với chủ ngữ "they".',
          hint: 'Hãy nhớ lại trợ động từ đi với chủ ngữ "they" trong câu hỏi Yes/No.'
        }
      }
    },
    {
      id: 'u4_gq2',
      question: '______ do ethnic women make traditional costumes? – By weaving colored threads on a wooden loom.',
      options: [
        'How',
        'Where',
        'When',
        'Who'
      ],
      correctIndex: 0,
      explanation: 'Câu trả lời "By weaving..." (Bằng cách dệt...) trả lời về cách thức thực hiện -> từ để hỏi phù hợp nhất là "How" (như thế nào, bằng cách nào).',
      hint: 'Câu trả lời giải thích về cách thức tiến hành ("By weaving..."), hãy chọn từ để hỏi tương ứng.',
      knowledgeTopic: 'Câu hỏi Wh-',
      wrongFeedbacks: {
        1: {
          error: 'Where dùng để hỏi về địa điểm, nơi chốn (ở đâu).',
          hint: 'Khi câu trả lời nêu phương thức hoặc cách làm, từ để hỏi cần dùng là gì?'
        },
        2: {
          error: 'When dùng để hỏi về thời gian (khi nào).',
          hint: 'Hãy tìm từ để hỏi về cách thức, phương pháp (như thế nào / bằng cách nào).'
        },
        3: {
          error: 'Who dùng để hỏi về con người (ai).',
          hint: 'Từ để hỏi về cách thực hiện một công việc trong tiếng Anh là gì?'
        }
      }
    },
    {
      id: 'u4_gq3',
      question: 'Viet Nam has 54 ethnic groups, so there are ______ cultural traditions.',
      options: [
        'much',
        'a little',
        'many',
        'little'
      ],
      correctIndex: 2,
      explanation: '"cultural traditions" là danh từ đếm được số nhiều (có đuôi -s) -> ta dùng lượng từ "many" (nhiều).',
      hint: '"cultural traditions" là danh từ đếm được số nhiều (có -s), hãy chọn lượng từ mang nghĩa "nhiều".',
      knowledgeTopic: 'Lượng từ many / much',
      wrongFeedbacks: {
        0: {
          error: 'Much chỉ dùng với danh từ không đếm được (như water, milk, rice).',
          hint: 'Danh từ đếm được số nhiều có -s cần đi kèm với lượng từ nào?'
        },
        1: {
          error: 'A little chỉ dùng với danh từ không đếm được.',
          hint: 'Để diễn tả số lượng "nhiều" trước danh từ đếm được số nhiều, ta dùng từ nào?'
        },
        3: {
          error: 'Little chỉ đi với danh từ không đếm được và mang nghĩa gần như không có.',
          hint: 'Hãy phân biệt: "many" đi với danh từ đếm được số nhiều, còn "much" đi với danh từ không đếm được.'
        }
      }
    },
    {
      id: 'u4_gq4',
      question: 'Could you give me ______ information about the Khmer festival in Soc Trang?',
      options: [
        'many',
        'a few',
        'a',
        'a little'
      ],
      correctIndex: 3,
      explanation: '"information" (thông tin) là danh từ không đếm được trong tiếng Anh, nên ta dùng "a little" để diễn tả "một chút thông tin".',
      hint: '"information" là danh từ không đếm được trong tiếng Anh, hãy chọn lượng từ mang nghĩa "một ít / một chút".',
      knowledgeTopic: 'Danh từ không đếm được & a little',
      wrongFeedbacks: {
        0: {
          error: 'Many chỉ dùng trước danh từ đếm được số nhiều.',
          hint: 'Danh từ không đếm được không thể đi cùng với "many".'
        },
        1: {
          error: 'A few chỉ dùng trước danh từ đếm được số nhiều (có đuôi -s/-es).',
          hint: 'Hãy nhớ lại: danh từ đếm được dùng "a few", còn danh từ không đếm được dùng lượng từ nào?'
        },
        2: {
          error: 'Mạo từ "a" chỉ đứng trước danh từ đếm được số ít, không đứng trước danh từ không đếm được.',
          hint: 'Hãy tìm lượng từ đi kèm với danh từ không đếm được mang nghĩa "một chút thông tin".'
        }
      }
    },
    {
      id: 'u4_gq5',
      question: 'We only have ______ minutes left before the folk dance begins.',
      options: [
        'a little',
        'much',
        'a few',
        'little'
      ],
      correctIndex: 2,
      explanation: '"minutes" (phút) là danh từ đếm được số nhiều (có đuôi -s) -> ta dùng "a few" (một vài phút).',
      hint: '"minutes" (phút) là danh từ đếm được số nhiều có đuôi -s, hãy chọn lượng từ phù hợp.',
      knowledgeTopic: 'Lượng từ a few / a little',
      wrongFeedbacks: {
        0: {
          error: 'A little chỉ dùng với danh từ không đếm được.',
          hint: 'Với danh từ đếm được số nhiều, ta dùng lượng từ nào để chỉ "một vài"?'
        },
        1: {
          error: 'Much chỉ dùng với danh từ không đếm được.',
          hint: 'Hãy nhớ lại quy tắc: danh từ đếm được số nhiều đi với "a few".'
        },
        3: {
          error: 'Little chỉ đi với danh từ không đếm được mang nghĩa phủ định.',
          hint: 'Lượng từ mang nghĩa "một vài" đi với danh từ đếm được là gì?'
        }
      }
    }
  ],

  // ==================== TAB 3: LUYỆN TẬP (PRACTICE) ====================
  // 10 câu hỏi trắc nghiệm tổng hợp đúng theo yêu cầu SGK
  practiceQuestions: [
    {
      id: 'u4_pq1',
      question: 'Many ethnic groups in Viet Nam live in ______ houses.',
      options: [
        'stilt',
        'brick',
        'tent',
        'glass'
      ],
      correctIndex: 0,
      explanation: '"stilt houses" là nhà sàn, kiểu nhà truyền thống đặc trưng của nhiều đồng bào dân tộc thiểu số tại Việt Nam.',
      hint: 'Hãy tìm từ ghép với "houses" để tạo thành cụm từ mang nghĩa "nhà sàn".',
      knowledgeTopic: 'Từ vựng Unit 4',
      wrongFeedbacks: {
        1: {
          error: 'Brick houses là nhà xây gạch hiện đại, không phải kiểu nhà truyền thống được miêu tả trong bài học.',
          hint: 'Hãy tìm từ chỉ những ngôi nhà dựng trên cột sàn cao.'
        },
        2: {
          error: 'Tent nghĩa là lều trại tạm thời.',
          hint: 'Kiểu nhà truyền thống trên cột gỗ cao của đồng bào miền núi gọi là gì?'
        },
        3: {
          error: 'Glass houses là nhà kính hiện đại trồng hoa.',
          hint: 'Từ vựng tiếng Anh chỉ ngôi nhà sàn bắt đầu bằng chữ "s".'
        }
      }
    },
    {
      id: 'u4_pq2',
      question: 'The Thai people are famous for their beautiful ______ fields.',
      options: [
        'plain',
        'terraced',
        'dry',
        'desert'
      ],
      correctIndex: 1,
      explanation: '"terraced fields" nghĩa là ruộng bậc thang, cảnh quan nông nghiệp kỳ vĩ và nổi tiếng của người Thái và các dân tộc vùng cao.',
      hint: 'Tính từ nào đứng trước "fields" để tạo thành cụm từ "ruộng bậc thang"?',
      knowledgeTopic: 'Từ vựng Unit 4',
      wrongFeedbacks: {
        0: {
          error: 'Plain fields là cánh đồng bằng phẳng, không phản ánh địa hình vùng cao bậc thang.',
          hint: 'Hãy nhớ lại tính từ chỉ dạng bậc thang trên triền núi.'
        },
        2: {
          error: 'Dry fields là đồng ruộng khô cằn.',
          hint: 'Từ vựng chỉ ruộng bậc thang trong SGK Unit 4 là gì?'
        },
        3: {
          error: 'Desert là hoang mạc/sa mạc.',
          hint: 'Tính từ này bắt đầu bằng "terraced...".'
        }
      }
    },
    {
      id: 'u4_pq3',
      question: 'A ______ is a traditional musical instrument.',
      options: [
        'gong',
        'car',
        'phone',
        'laptop'
      ],
      correctIndex: 0,
      explanation: '"gong" (cồng, chiêng) là nhạc cụ gõ bằng đồng truyền thống của đồng bào các dân tộc Tây Nguyên.',
      hint: 'Trong các lựa chọn, hãy tìm một loại nhạc cụ truyền thống bằng đồng.',
      knowledgeTopic: 'Từ vựng Unit 4',
      wrongFeedbacks: {
        1: {
          error: 'Car là xe ô tô (phương tiện giao thông), không phải nhạc cụ.',
          hint: 'Hãy tìm từ chỉ một loại nhạc cụ truyền thống của Tây Nguyên.'
        },
        2: {
          error: 'Phone là điện thoại thông minh, không phải nhạc cụ truyền thống.',
          hint: 'Nhạc cụ gõ bằng đồng có tên gọi tiếng Anh là gì?'
        },
        3: {
          error: 'Laptop là máy tính xách tay.',
          hint: 'Hãy chọn từ vựng chỉ cồng, chiêng trong bài học.'
        }
      }
    },
    {
      id: 'u4_pq4',
      question: '“______ do you live?” – “I live in Tuyen Quang.”',
      options: [
        'When',
        'Where',
        'Why',
        'What'
      ],
      correctIndex: 1,
      explanation: 'Câu trả lời "I live in Tuyen Quang" nêu rõ nơi chốn/địa điểm sinh sống -> ta dùng từ để hỏi "Where" (ở đâu).',
      hint: 'Câu trả lời nêu rõ địa danh ("in Tuyen Quang"), hãy chọn từ để hỏi về nơi chốn.',
      knowledgeTopic: 'Câu hỏi Wh-',
      wrongFeedbacks: {
        0: {
          error: 'When dùng để hỏi thời gian (khi nào).',
          hint: 'Từ để hỏi nơi chốn, vị trí trong tiếng Anh là gì?'
        },
        2: {
          error: 'Why dùng để hỏi lý do (tại sao).',
          hint: 'Khi muốn hỏi ai đó sống ở đâu, ta dùng từ để hỏi nào?'
        },
        3: {
          error: 'What dùng để hỏi sự vật, đồ vật (cái gì).',
          hint: 'Hãy nhớ lại từ để hỏi về địa điểm (ở đâu).'
        }
      }
    },
    {
      id: 'u4_pq5',
      question: '“______ you enjoy folk dances?” – “Yes, I do.”',
      options: [
        'Is',
        'Are',
        'Does',
        'Do'
      ],
      correctIndex: 3,
      explanation: 'Câu hỏi ở thì Hiện tại đơn với chủ ngữ "you" và động từ thường "enjoy" (nguyên thể) -> bắt đầu bằng trợ động từ "Do". Câu trả lời mẫu là "Yes, I do".',
      hint: 'Câu trả lời dùng "Yes, I do" và câu hỏi có động từ thường "enjoy", hãy chọn trợ động từ tương ứng.',
      knowledgeTopic: 'Câu hỏi Yes/No',
      wrongFeedbacks: {
        0: {
          error: 'Is là to be đi với chủ ngữ số ít, không dùng với "you".',
          hint: 'Với chủ ngữ "you" và động từ thường, câu hỏi Yes/No bắt đầu bằng trợ động từ nào?'
        },
        1: {
          error: 'Are là to be, không đi cùng động từ thường nguyên thể "enjoy".',
          hint: 'Hãy chú ý câu trả lời "Yes, I do" để xác định trợ động từ ở đầu câu.'
        },
        2: {
          error: 'Does chỉ dùng với ngôi thứ ba số ít (he, she, it).',
          hint: 'Chủ ngữ "you" đi cùng trợ động từ nào ở thì Hiện tại đơn?'
        }
      }
    },
    {
      id: 'u4_pq6',
      question: 'There are ______ ethnic groups in Viet Nam.',
      options: [
        'much',
        'a little',
        'many',
        'little'
      ],
      correctIndex: 2,
      explanation: '"ethnic groups" là danh từ đếm được số nhiều (có -s) -> ta dùng lượng từ "many" (có 54 dân tộc ở Việt Nam).',
      hint: '"ethnic groups" là danh từ đếm được số nhiều, hãy chọn lượng từ mang nghĩa "nhiều".',
      knowledgeTopic: 'Lượng từ many / much',
      wrongFeedbacks: {
        0: {
          error: 'Much chỉ dùng với danh từ không đếm được.',
          hint: 'Trước danh từ đếm được số nhiều có -s, ta dùng lượng từ nào?'
        },
        1: {
          error: 'A little chỉ dùng với danh từ không đếm được.',
          hint: 'Từ nào mang nghĩa là "nhiều" khi đứng trước danh từ đếm được số nhiều?'
        },
        3: {
          error: 'Little đi với danh từ không đếm được và mang nghĩa rất ít/hầu như không.',
          hint: 'Quy tắc: many + danh từ đếm được số nhiều, much + danh từ không đếm được.'
        }
      }
    },
    {
      id: 'u4_pq7',
      question: 'We need ______ water for the garden.',
      options: [
        'many',
        'a few',
        'few',
        'a little'
      ],
      correctIndex: 3,
      explanation: '"water" (nước) là danh từ không đếm được -> ta dùng "a little" (một ít nước).',
      hint: '"water" là danh từ không đếm được chỉ chất lỏng, hãy chọn lượng từ phù hợp.',
      knowledgeTopic: 'Lượng từ a few / a little',
      wrongFeedbacks: {
        0: {
          error: 'Many chỉ dùng trước danh từ đếm được số nhiều.',
          hint: 'Chất lỏng như nước không đếm được, hãy chọn lượng từ thích hợp.'
        },
        1: {
          error: 'A few chỉ dùng trước danh từ đếm được số nhiều.',
          hint: 'Danh từ không đếm được đi với "a little" hay "a few"?'
        },
        2: {
          error: 'Few chỉ dùng trước danh từ đếm được số nhiều và mang nghĩa rất ít.',
          hint: 'Hãy nhớ lại lượng từ mang nghĩa "một ít" dùng cho danh từ không đếm được.'
        }
      }
    },
    {
      id: 'u4_pq8',
      question: 'My village has ______ old houses.',
      options: [
        'much',
        'a few',
        'a little',
        'little'
      ],
      correctIndex: 1,
      explanation: '"houses" (ngôi nhà) là danh từ đếm được số nhiều (có đuôi -s) -> ta dùng "a few" (một vài ngôi nhà cổ).',
      hint: '"old houses" là danh từ đếm được số nhiều (có -s), hãy chọn lượng từ mang nghĩa "một vài".',
      knowledgeTopic: 'Lượng từ a few / a little',
      wrongFeedbacks: {
        0: {
          error: 'Much chỉ đi với danh từ không đếm được.',
          hint: 'Danh từ đếm được số nhiều không đi với "much".'
        },
        2: {
          error: 'A little chỉ dùng với danh từ không đếm được.',
          hint: 'Để chỉ "một vài" trước danh từ đếm được số nhiều, ta dùng lượng từ nào?'
        },
        3: {
          error: 'Little chỉ đi với danh từ không đếm được.',
          hint: 'Hãy nhớ lại quy tắc sử dụng giữa "a few" và "a little".'
        }
      }
    },
    {
      id: 'u4_pq9',
      question: 'Tom: “What do you think about folk dances?” – Mai: “______”',
      options: [
        'I think they are very interesting.',
        'I live in Ha Noi.',
        'It is raining outside.',
        'I usually go to bed at 10 p.m.'
      ],
      correctIndex: 0,
      explanation: 'Tom hỏi ý kiến/quan điểm về các điệu múa dân gian ("What do you think about folk dances?") -> Mai trả lời nêu quan điểm: "I think they are very interesting." (Mình thấy chúng rất thú vị).',
      hint: 'Tom hỏi cảm nghĩ ("What do you think...?"), hãy tìm câu trả lời nêu quan điểm cá nhân một cách lịch sự.',
      knowledgeTopic: 'Giao tiếp tình huống',
      wrongFeedbacks: {
        1: {
          error: 'Câu "Tôi sống ở Hà Nội" trả lời về nơi chốn, lạc đề so với câu hỏi xin ý kiến về điệu múa dân gian.',
          hint: 'Khi được hỏi quan điểm, người đối thoại thường bắt đầu câu trả lời bằng cụm từ nào?'
        },
        2: {
          error: 'Câu "Ngoài trời đang mưa" không liên quan gì đến điệu múa dân gian.',
          hint: 'Hãy tìm câu trả lời bày tỏ cảm nhận về những điệu múa dân gian.'
        },
        3: {
          error: 'Câu "Tôi thường đi ngủ lúc 10 giờ tối" nói về thói quen cá nhân, không trả lời câu hỏi của Tom.',
          hint: 'Người nói cần đưa ra ý kiến của mình bắt đầu bằng "I think...".'
        }
      }
    },
    {
      id: 'u4_pq10',
      question: '“______ water do villagers need to prepare for the harvest festival?”',
      options: [
        'How many',
        'How much',
        'How few',
        'How little'
      ],
      correctIndex: 1,
      explanation: '"water" là danh từ không đếm được nên ta dùng từ để hỏi số lượng "How much water".',
      hint: '"water" là danh từ không đếm được, hãy chọn từ để hỏi số lượng phù hợp.',
      knowledgeTopic: 'How much / How many',
      wrongFeedbacks: {
        0: {
          error: '"How many" chỉ dùng trước danh từ đếm được số nhiều.',
          hint: 'Từ để hỏi số lượng trước danh từ không đếm được là gì?'
        },
        2: {
          error: '"How few" không phải cụm từ chuẩn để hỏi số lượng.',
          hint: 'Hãy nhớ lại: "How many" đi với danh từ đếm được, còn danh từ không đếm được đi với cụm từ nào?'
        },
        3: {
          error: '"How little" không dùng làm từ để hỏi số lượng trong câu hỏi thông thường.',
          hint: 'Từ để hỏi số lượng bắt đầu bằng "How m..." cho danh từ không đếm được là gì?'
        }
      }
    }
  ]
};


// ==================== UNIT 5: OUR CUSTOMS AND TRADITIONS ====================
export const ENGLISH_UNIT_5_DATA: EnglishUnitData = {
  id: 'ch_tienganh_5',
  unitNumber: 5,
  title: 'Unit 5: Our Customs and Traditions',
  topic: 'Customs and traditions, Tet & Zero article',
  description: 'Từ vựng về phong tục và truyền thống, lễ cưới, đồ cúng, đoàn tụ gia đình, võ thuật, thờ cá voi; quy tắc Zero article (Không dùng mạo từ) theo SGK Tiếng Anh 8 Global Success.',

  // ==================== TAB 1: 10 TỪ VỰNG TRỌNG TÂM ====================
  // Chỉ có 3 cột: STT – Từ vựng tiếng Anh – Nghĩa tiếng Việt. Không có cột từ loại, không thêm ví dụ.
  vocabularyList: [
    {
      id: 'u5_v1',
      word: 'custom',
      partOfSpeech: '',
      meaning: 'phong tục'
    },
    {
      id: 'u5_v2',
      word: 'tradition',
      partOfSpeech: '',
      meaning: 'truyền thống'
    },
    {
      id: 'u5_v3',
      word: 'wedding ceremony',
      partOfSpeech: '',
      meaning: 'lễ cưới'
    },
    {
      id: 'u5_v4',
      word: 'food offerings',
      partOfSpeech: '',
      meaning: 'lễ vật, đồ cúng'
    },
    {
      id: 'u5_v5',
      word: 'family reunion',
      partOfSpeech: '',
      meaning: 'đoàn tụ gia đình'
    },
    {
      id: 'u5_v6',
      word: 'martial arts',
      partOfSpeech: '',
      meaning: 'võ thuật'
    },
    {
      id: 'u5_v7',
      word: 'whale worship',
      partOfSpeech: '',
      meaning: 'tục thờ cá voi'
    },
    {
      id: 'u5_v8',
      word: 'longevity',
      partOfSpeech: '',
      meaning: 'sự trường thọ'
    },
    {
      id: 'u5_v9',
      word: 'festival goers',
      partOfSpeech: '',
      meaning: 'người tham gia lễ hội'
    },
    {
      id: 'u5_v10',
      word: 'decoration',
      partOfSpeech: '',
      meaning: 'sự trang trí, đồ trang trí'
    }
  ],

  // 5 câu trắc nghiệm củng cố từ vựng
  vocabQuestions: [
    {
      id: 'u5_vq1',
      question: 'A belief, principle, or way of acting that people in a particular society have continued to follow for a long time is a ______.',
      options: [
        'tradition',
        'decoration',
        'martial arts',
        'festival goer'
      ],
      correctIndex: 0,
      explanation: '"tradition" nghĩa là truyền thống, tập tục và giá trị văn hóa được truyền qua nhiều thế hệ.',
      hint: 'Hãy nhớ lại từ vựng chỉ phong tục hoặc tập quán được truyền từ thế hệ này sang thế hệ khác.',
      knowledgeTopic: 'Từ vựng Unit 5',
      wrongFeedbacks: {
        1: {
          error: 'Decoration là đồ trang trí, sự trang trí trong các dịp lễ tết.',
          hint: 'Khái niệm chỉ các nét văn hóa lâu đời truyền qua các thế hệ là gì?'
        },
        2: {
          error: 'Martial arts là các môn võ thuật rèn luyện sức khỏe.',
          hint: 'Hãy tìm danh từ có nghĩa là truyền thống.'
        },
        3: {
          error: 'Festival goer là người tham gia lễ hội.',
          hint: 'Từ vựng này bắt đầu bằng chữ "t" và mang nghĩa là truyền thống lâu đời.'
        }
      }
    },
    {
      id: 'u5_vq2',
      question: 'During Tet holiday, all family members often gather for a warm and happy ______.',
      options: [
        'whale worship',
        'family reunion',
        'martial arts',
        'food offering'
      ],
      correctIndex: 1,
      explanation: '"family reunion" nghĩa là sự đoàn tụ gia đình, các thành viên quây quần sum họp bên nhau sau một năm xa cách.',
      hint: 'Cụm từ nào chỉ sự sum họp, đoàn tụ các thành viên trong gia đình vào dịp Tết?',
      knowledgeTopic: 'Từ vựng Unit 5',
      wrongFeedbacks: {
        0: {
          error: 'Whale worship là tục thờ cá voi của ngư dân miền biển.',
          hint: 'Hãy tìm cụm từ chỉ sự quây quần của các thành viên gia đình.'
        },
        2: {
          error: 'Martial arts là các môn võ thuật cổ truyền.',
          hint: 'Từ vựng nào kết hợp giữa gia đình và sự đoàn tụ?'
        },
        3: {
          error: 'Food offering là đồ cúng, lễ vật dâng lên bàn thờ.',
          hint: 'Cụm từ chỉ cuộc sum họp gia đình trong tiếng Anh là gì?'
        }
      }
    },
    {
      id: 'u5_vq3',
      question: 'Before having dinner on New Year\'s Eve, Vietnamese people place ______ on the altar to show gratitude to ancestors.',
      options: [
        'food offerings',
        'festival goers',
        'decorations',
        'martial arts'
      ],
      correctIndex: 0,
      explanation: '"food offerings" là lễ vật, đồ cúng (mâm cỗ, hoa quả) dâng lên bàn thờ gia tiên để bày tỏ lòng hiếu kính.',
      hint: 'Hãy nhớ lại từ vựng chỉ đồ cúng, mâm lễ vật dâng lên bàn thờ tổ tiên.',
      knowledgeTopic: 'Từ vựng Unit 5',
      wrongFeedbacks: {
        1: {
          error: 'Festival goers là những người đi trẩy hội, không đặt lên bàn thờ.',
          hint: 'Hãy tìm từ chỉ các đồ cúng, lễ vật thực phẩm dâng lên bàn thờ.'
        },
        2: {
          error: 'Decorations là đồ trang trí (hoa, đèn, câu đối...), ở đây nói về mâm cỗ cúng ("food offerings").',
          hint: 'Mâm cỗ hoặc thức ăn dâng cúng tổ tiên trong bài học có tên tiếng Anh là gì?'
        },
        3: {
          error: 'Martial arts là các môn võ thuật rèn luyện thân thể.',
          hint: 'Từ vựng này kết hợp giữa từ đồ ăn và danh từ chỉ đồ cúng/lễ vật.'
        }
      }
    },
    {
      id: 'u5_vq4',
      question: 'Fishermen in coastal areas in Viet Nam have a long-standing custom of ______ to pray for safe fishing voyages.',
      options: [
        'wedding ceremony',
        'martial arts',
        'whale worship',
        'longevity'
      ],
      correctIndex: 2,
      explanation: '"whale worship" là tục thờ cá voi (Cá Ông), phong tục tín ngưỡng độc đáo của ngư dân miền duyên hải Việt Nam cầu mong bình an trên biển.',
      hint: 'Hãy nhớ lại phong tục tín ngưỡng độc đáo của ngư dân miền biển cầu mong đi biển thuận buồm xuôi gió.',
      knowledgeTopic: 'Từ vựng Unit 5',
      wrongFeedbacks: {
        0: {
          error: 'Wedding ceremony là lễ cưới, nghi lễ kết hôn của cô dâu chú rể.',
          hint: 'Phong tục tâm linh nào của ngư dân gắn liền với loài cá voi?'
        },
        1: {
          error: 'Martial arts là võ thuật, không phải phong tục thờ cúng của ngư dân biển.',
          hint: 'Hãy tìm cụm từ chỉ tục thờ cúng cá voi linh thiêng của ngư dân.'
        },
        3: {
          error: 'Longevity là sự trường thọ, sống lâu.',
          hint: 'Cụm từ này gồm tên loài cá voi kết hợp với từ chỉ sự thờ phụng.'
        }
      }
    },
    {
      id: 'u5_vq5',
      question: 'Thousands of ______ enjoyed the vibrant spring atmosphere and admired colorful street ______.',
      options: [
        'traditions / offerings',
        'festival goers / decorations',
        'customs / reunions',
        'ceremonies / longevities'
      ],
      correctIndex: 1,
      explanation: '"festival goers" là những người tham gia lễ hội và "decorations" là các đồ trang trí rực rỡ trên đường phố.',
      hint: 'Hãy tìm cặp từ chỉ những người tham gia lễ hội và các đồ trang trí rực rỡ.',
      knowledgeTopic: 'Từ vựng Unit 5',
      wrongFeedbacks: {
        0: {
          error: 'Traditions / offerings là truyền thống / lễ vật, không phù hợp với chủ ngữ chỉ người thưởng thức không khí lễ hội.',
          hint: 'Người tham gia lễ hội là gì và đồ trang trí trên phố là gì?'
        },
        2: {
          error: 'Customs / reunions nghĩa là phong tục / sự đoàn tụ.',
          hint: 'Hãy tìm từ chỉ người đi hội kết hợp với danh từ chỉ đồ trang trí rực rỡ.'
        },
        3: {
          error: 'Ceremonies / longevities là các nghi lễ / sự trường thọ.',
          hint: 'Hãy tìm phương án có từ chỉ người đi hội kết thúc bằng "-goers".'
        }
      }
    }
  ],

  // ==================== TAB 2: NGỮ PHÁP (GRAMMAR) ====================
  grammarTopic: 'ZERO ARTICLE (Không dùng mạo từ)',
  grammarPoints: [
    {
      id: 'u5_gp1',
      title: 'Quy tắc 1: Không dùng mạo từ với danh từ không đếm được hoặc danh từ trừu tượng',
      formula: 'Ø + Danh từ không đếm được / Danh từ trừu tượng (khi nói chung)',
      rule: 'Ta không dùng a/an hoặc the trước danh từ không đếm được hoặc danh từ trừu tượng khi nói chung.',
      example: {
        english: 'Sugar is not good for your teeth.',
        vietnamese: 'Đường không tốt cho răng của bạn.'
      }
    },
    {
      id: 'u5_gp2',
      title: 'Quy tắc 2: Không dùng mạo từ khi nói về sự vật, con người nói chung',
      formula: 'Ø + Danh từ số nhiều (khi nói về nhóm người hoặc sự vật nói chung)',
      rule: 'Ta không dùng mạo từ trước danh từ số nhiều khi nói về một nhóm người hoặc sự vật nói chung.',
      example: {
        english: 'Students should work hard.',
        vietnamese: 'Học sinh nên học tập chăm chỉ.'
      }
    },
    {
      id: 'u5_gp3',
      title: 'Quy tắc 3: Không dùng mạo từ trước phương tiện giao thông khi dùng với "by"',
      formula: 'by + phương tiện giao thông (không dùng a/an/the)',
      rule: 'Khi nói về cách di chuyển bằng phương tiện giao thông với "by", không dùng a/an hoặc the trước tên phương tiện.',
      example: {
        english: 'We went there by boat.',
        vietnamese: 'Chúng tôi đã đến đó bằng thuyền.'
      }
    }
  ],

  // 5 câu trắc nghiệm củng cố ngữ pháp
  grammarQuestions: [
    {
      id: 'u5_gq1',
      question: '______ is a sweet substance, but eating too much of it can damage your health.',
      options: [
        'A sugar',
        'The sugar',
        'Sugar',
        'An sugar'
      ],
      correctIndex: 2,
      explanation: '"sugar" (đường) là danh từ không đếm được khi nói chung về chất ngọt, ta dùng Zero article (không dùng mạo từ) -> "Sugar".',
      hint: 'Danh từ không đếm được chỉ chất liệu hoặc thực phẩm nói chung áp dụng quy tắc Zero article (không dùng mạo từ).',
      knowledgeTopic: 'Zero article với danh từ không đếm được',
      wrongFeedbacks: {
        0: {
          error: 'Sugar là danh từ không đếm được, tuyệt đối không dùng mạo từ "a".',
          hint: 'Trước danh từ không đếm được nói chung, ta không sử dụng mạo từ a/an.'
        },
        1: {
          error: '"The" chỉ dùng khi nói về một lượng đường cụ thể đã xác định trước, ở đây nói về đường nói chung.',
          hint: 'Khi nói về bản chất của một chất nói chung, ta áp dụng quy tắc không dùng mạo từ.'
        },
        3: {
          error: 'Sugar bắt đầu bằng phụ âm /s/ và là danh từ không đếm được, không thể dùng "An".',
          hint: 'Hãy tìm phương án danh từ đứng độc lập mà không cần mạo từ phía trước.'
        }
      }
    },
    {
      id: 'u5_gq2',
      question: '______ should respect and preserve the traditional customs of their homeland.',
      options: [
        'The children in general',
        'A children',
        'An children',
        'Children'
      ],
      correctIndex: 3,
      explanation: '"children" là danh từ số nhiều nói chung về trẻ em, không xác định một nhóm cụ thể nào -> dùng Zero article (Children).',
      hint: 'Khi nói về một nhóm đối tượng số nhiều nói chung (trẻ em nói chung), ta áp dụng quy tắc Zero article.',
      knowledgeTopic: 'Zero article với danh từ số nhiều',
      wrongFeedbacks: {
        0: {
          error: 'Không dùng "The" trước danh từ số nhiều khi nói về đối tượng chung chung.',
          hint: 'Theo quy tắc Zero article, danh từ số nhiều nói chung không cần thêm mạo từ.'
        },
        1: {
          error: '"A" chỉ đi với danh từ số ít đếm được, "children" là danh từ số nhiều (child -> children).',
          hint: 'Không dùng mạo từ a/an trước danh từ số nhiều.'
        },
        2: {
          error: '"An" chỉ dùng trước danh từ số ít bắt đầu bằng nguyên âm, không dùng với danh từ số nhiều "children".',
          hint: 'Hãy chọn dạng danh từ số nhiều đứng độc lập không có mạo từ đi kèm.'
        }
      }
    },
    {
      id: 'u5_gq3',
      question: 'They travelled from Ha Noi to Hue ______ train yesterday.',
      options: [
        'with',
        'in',
        'on',
        'by'
      ],
      correctIndex: 3,
      explanation: 'Cấu trúc chỉ phương thức di chuyển bằng phương tiện giao thông là "by + phương tiện" (by train, by bus, by boat...).',
      hint: 'Hãy nhớ lại giới từ dùng trước tên phương tiện giao thông để chỉ phương thức di chuyển theo quy tắc Zero article.',
      knowledgeTopic: 'Cấu trúc by + phương tiện giao thông',
      wrongFeedbacks: {
        0: {
          error: 'With train nghĩa là "cùng với xe lửa", không dùng để chỉ phương tiện di chuyển.',
          hint: 'Giới từ thông dụng nhất đi liền trước tên phương tiện giao thông là gì?'
        },
        1: {
          error: 'In thường đi với ô tô riêng có mạo từ (in a car), không dùng trực tiếp "in train".',
          hint: 'Cấu trúc chỉ phương thức di chuyển không mạo từ sử dụng giới từ nào?'
        },
        2: {
          error: 'On dùng khi có mạo từ (on the train), không dùng trực tiếp "on train" theo quy tắc zero article.',
          hint: 'Hãy tìm giới từ ngắn gồm 2 chữ cái đứng trước phương tiện giao thông.'
        }
      }
    },
    {
      id: 'u5_gq4',
      question: 'My grandfather often goes to the local market ______.',
      options: [
        'by a bicycle',
        'by bicycle',
        'by the bicycle in general',
        'by an bicycle'
      ],
      correctIndex: 1,
      explanation: 'Theo quy tắc Zero article, khi dùng "by" với phương tiện giao thông, ta không thêm bất kỳ mạo từ nào (a/an/the) trước tên phương tiện -> "by bicycle".',
      hint: 'Sau giới từ "by" chỉ phương tiện đi lại, tuyệt đối không thêm bất kỳ mạo từ nào (a/an/the).',
      knowledgeTopic: 'Zero article sau by',
      wrongFeedbacks: {
        0: {
          error: 'Không dùng "a" sau "by" khi nói về phương tiện đi lại.',
          hint: 'Cấu trúc chuẩn: by + tên phương tiện (không mạo từ).'
        },
        2: {
          error: 'Không dùng "the... in general" sau "by".',
          hint: 'Theo quy tắc Zero article, tên phương tiện đứng ngay sau "by" mà không cần từ nào xen vào.'
        },
        3: {
          error: 'Không dùng mạo từ "an" sau "by", và bicycle bắt đầu bằng phụ âm /b/.',
          hint: 'Hãy tìm cách kết hợp ngắn gọn gồm giới từ "by" và danh từ chỉ phương tiện.'
        }
      }
    },
    {
      id: 'u5_gq5',
      question: '______ play an important role in educating young people and passing down national customs.',
      options: [
        'A teachers',
        'Teachers',
        'The teachers in general',
        'An teacher'
      ],
      correctIndex: 1,
      explanation: '"Teachers" là danh từ số nhiều khi nói chung về nghề giáo viên, ta áp dụng quy tắc Zero article (không dùng mạo từ).',
      hint: 'Khi nói về một nhóm người/nghề nghiệp số nhiều nói chung, danh từ đứng độc lập theo quy tắc Zero article.',
      knowledgeTopic: 'Zero article với danh từ số nhiều',
      wrongFeedbacks: {
        0: {
          error: 'Mạo từ số ít "A" không bao giờ đứng trước danh từ số nhiều.',
          hint: 'Không dùng mạo từ a/an trước danh từ số nhiều.'
        },
        2: {
          error: 'Không dùng "The... in general" khi nói về đối tượng chung chung.',
          hint: 'Theo quy tắc Zero article, danh từ số nhiều nói chung không cần mạo từ.'
        },
        3: {
          error: 'Teacher bắt đầu bằng phụ âm, không dùng "An".',
          hint: 'Hãy tìm phương án có danh từ số nhiều đứng độc lập không mạo từ.'
        }
      }
    }
  ],

  // ==================== TAB 3: LUYỆN TẬP (PRACTICE) ====================
  // 10 câu hỏi trắc nghiệm tổng hợp đúng theo yêu cầu SGK
  practiceQuestions: [
    {
      id: 'u5_pq1',
      question: 'Vietnamese people often have a family ______ during Tet.',
      options: [
        'reunion',
        'decoration',
        'martial arts',
        'offering'
      ],
      correctIndex: 0,
      explanation: '"family reunion" nghĩa là cuộc sum họp, đoàn tụ gia đình dịp Tết cổ truyền.',
      hint: 'Từ vựng nào kết hợp với "family" để tạo thành cụm từ chỉ cuộc sum họp gia đình ngày Tết?',
      knowledgeTopic: 'Từ vựng Unit 5',
      wrongFeedbacks: {
        1: {
          error: 'Decoration là đồ trang trí, không kết hợp với family để chỉ sự sum họp.',
          hint: 'Hãy tìm danh từ chỉ sự hội ngộ, đoàn tụ gia đình.'
        },
        2: {
          error: 'Martial arts là võ thuật rèn luyện sức khỏe.',
          hint: 'Cụm từ chỉ sum họp gia đình trong bài là gì?'
        },
        3: {
          error: 'Offering là đồ cúng dâng lên bàn thờ.',
          hint: 'Hãy tìm từ bắt đầu bằng chữ "r" mang nghĩa sum họp, đoàn viên.'
        }
      }
    },
    {
      id: 'u5_pq2',
      question: 'People put food ______ on the family altar.',
      options: [
        'customs',
        'offerings',
        'ceremonies',
        'traditions'
      ],
      correctIndex: 1,
      explanation: '"food offerings" là đồ cúng, lễ vật đặt lên bàn thờ gia tiên để cúng tổ tiên.',
      hint: 'Từ vựng nào đi sau "food" để tạo thành cụm từ chỉ đồ cúng, lễ vật trên bàn thờ?',
      knowledgeTopic: 'Từ vựng Unit 5',
      wrongFeedbacks: {
        0: {
          error: 'Customs là phong tục, tập quán.',
          hint: 'Hãy tìm danh từ chỉ các món lễ vật, đồ cúng dâng lên tổ tiên.'
        },
        2: {
          error: 'Ceremonies là các buổi nghi lễ.',
          hint: 'Cụm từ chỉ mâm cỗ cúng gia tiên trong bài học là gì?'
        },
        3: {
          error: 'Traditions là truyền thống văn hóa.',
          hint: 'Từ này bắt đầu bằng "offer..." chỉ đồ dâng cúng.'
        }
      }
    },
    {
      id: 'u5_pq3',
      question: 'Many people practise ______ to stay healthy.',
      options: [
        'wedding ceremony',
        'martial arts',
        'family reunion',
        'food offerings'
      ],
      correctIndex: 1,
      explanation: '"martial arts" là võ thuật; "practise martial arts" nghĩa là luyện tập võ thuật để nâng cao sức khỏe.',
      hint: 'Động từ "practise" đi với môn võ thuật nào để chỉ việc rèn luyện nâng cao sức khỏe?',
      knowledgeTopic: 'Từ vựng Unit 5',
      wrongFeedbacks: {
        0: {
          error: 'Wedding ceremony là lễ cưới hỏi.',
          hint: 'Hãy tìm cụm từ chỉ các môn võ thuật cổ truyền.'
        },
        2: {
          error: 'Family reunion là sum họp gia đình.',
          hint: 'Hoạt động nào rèn luyện thân thể và nâng cao sức khỏe?'
        },
        3: {
          error: 'Food offerings là mâm cỗ cúng gia tiên.',
          hint: 'Từ vựng này có chữ "arts" chỉ các bộ môn võ thuật.'
        }
      }
    },
    {
      id: 'u5_pq4',
      question: '______ is not good for your teeth.',
      options: [
        'A sugar',
        'The sugar',
        'Sugar',
        'An sugar'
      ],
      correctIndex: 2,
      explanation: 'Danh từ không đếm được "sugar" khi nói chung về bản chất không dùng mạo từ (Zero article) -> "Sugar".',
      hint: 'Danh từ không đếm được chỉ thực phẩm nói chung áp dụng quy tắc Zero article (không dùng mạo từ).',
      knowledgeTopic: 'Zero article',
      wrongFeedbacks: {
        0: {
          error: 'Không dùng mạo từ "a" trước danh từ không đếm được.',
          hint: 'Danh từ không đếm được không thể đi với mạo từ a/an.'
        },
        1: {
          error: 'Không dùng "The" khi nói về chất đường nói chung.',
          hint: 'Khi nói về bản chất chung của sự vật, danh từ đứng một mình không có mạo từ.'
        },
        3: {
          error: 'Sugar bắt đầu bằng phụ âm và không đếm được, không dùng "An".',
          hint: 'Hãy chọn đáp án áp dụng đúng quy tắc không mạo từ (Zero article).'
        }
      }
    },
    {
      id: 'u5_pq5',
      question: '______ should respect their family traditions.',
      options: [
        'A children',
        'The children',
        'Children',
        'An children'
      ],
      correctIndex: 2,
      explanation: '"children" là danh từ số nhiều khi nói về con cái/trẻ em nói chung -> dùng Zero article (Children).',
      hint: 'Danh từ số nhiều khi nói chung về một nhóm người không dùng mạo từ (Zero article).',
      knowledgeTopic: 'Zero article',
      wrongFeedbacks: {
        0: {
          error: '"A" chỉ dùng cho danh từ số ít, "children" là danh từ số nhiều.',
          hint: 'Không dùng mạo từ số ít trước danh từ số nhiều.'
        },
        1: {
          error: 'Không dùng "The" trước danh từ số nhiều khi nói chung về mọi trẻ em.',
          hint: 'Quy tắc Zero article: danh từ số nhiều nói chung đứng độc lập.'
        },
        3: {
          error: '"An" chỉ dùng trước danh từ số ít bắt đầu bằng nguyên âm.',
          hint: 'Hãy tìm phương án có danh từ số nhiều không đi kèm bất kỳ mạo từ nào.'
        }
      }
    },
    {
      id: 'u5_pq6',
      question: 'We travelled to the island ______ boat.',
      options: [
        'in',
        'on',
        'by',
        'with'
      ],
      correctIndex: 2,
      explanation: 'Cấu trúc chỉ phương tiện di chuyển không mạo từ: "by + phương tiện giao thông" (by boat).',
      hint: 'Giới từ nào đứng trước tên phương tiện giao thông để chỉ cách thức di chuyển theo quy tắc Zero article?',
      knowledgeTopic: 'Cấu trúc by + phương tiện',
      wrongFeedbacks: {
        0: {
          error: 'Không dùng "in boat" khi chỉ phương thức di chuyển không mạo từ.',
          hint: 'Cấu trúc quen thuộc chỉ phương tiện di chuyển trong tiếng Anh dùng giới từ gì?'
        },
        1: {
          error: 'Không dùng "on boat" trực tiếp khi thiếu mạo từ.',
          hint: 'Hãy tìm giới từ ngắn gọn thường đi liền với các phương tiện giao thông.'
        },
        3: {
          error: 'With nghĩa là cùng với một ai đó hoặc công cụ, không chỉ phương tiện đi lại.',
          hint: 'Giới từ nào đi cùng boat, bus, train để chỉ cách di chuyển?'
        }
      }
    },
    {
      id: 'u5_pq7',
      question: 'My family has ______ tradition of gathering together for dinner on New Year’s Eve.',
      options: [
        'a',
        'the',
        'an',
        'zero article (Ø)'
      ],
      correctIndex: 0,
      explanation: '"tradition" là danh từ đếm được số ít, cụm từ chuẩn là "have a tradition of + V-ing" (có một truyền thống làm gì).',
      hint: '"tradition" là danh từ đếm được số ít bắt đầu bằng một phụ âm, hãy chọn mạo từ phù hợp.',
      knowledgeTopic: 'Mạo từ với danh từ đếm được số ít',
      wrongFeedbacks: {
        1: {
          error: 'Mạo từ "the" dùng cho danh từ đã được xác định cụ thể trước đó, ở đây lần đầu nhắc đến một truyền thống.',
          hint: 'Cụm từ cố định mang nghĩa "có một truyền thống" dùng mạo từ nào?'
        },
        2: {
          error: '"tradition" bắt đầu bằng phụ âm /t/, không dùng mạo từ "an".',
          hint: 'Hãy chọn mạo từ số ít đi trước từ bắt đầu bằng phụ âm.'
        },
        3: {
          error: 'Danh từ đếm được số ít không thể đứng độc lập mà không có mạo từ hoặc từ hạn định.',
          hint: 'Cần có mạo từ "a" đứng trước danh từ số ít "tradition".'
        }
      }
    },
    {
      id: 'u5_pq8',
      question: '______ should respect their family customs and protect national identity.',
      options: [
        'The students in general',
        'An student',
        'A students',
        'Students'
      ],
      correctIndex: 3,
      explanation: 'Khi nói về học sinh nói chung (danh từ số nhiều), ta dùng Zero article (không dùng mạo từ): "Students".',
      hint: 'Khi nói về một nhóm đối tượng số nhiều nói chung, danh từ đứng một mình không có mạo từ (Zero article).',
      knowledgeTopic: 'Zero article với danh từ số nhiều',
      wrongFeedbacks: {
        0: {
          error: 'Không dùng "The... in general" khi nói về đối tượng chung.',
          hint: 'Quy tắc Zero article: danh từ số nhiều nói chung không dùng mạo từ.'
        },
        1: {
          error: 'Student bắt đầu bằng phụ âm, không dùng "An".',
          hint: 'Hãy chọn dạng danh từ số nhiều đứng độc lập không mạo từ.'
        },
        2: {
          error: 'Mạo từ số ít "A" không bao giờ đi cùng danh từ số nhiều "students".',
          hint: 'Không dùng mạo từ a/an trước danh từ số nhiều.'
        }
      }
    },
    {
      id: 'u5_pq9',
      question: 'Tom: “I want to learn more about Vietnamese traditions. What should I do?” – Mai: “______”',
      options: [
        'You should read books about them.',
        'I went to school yesterday.',
        'There are many students here.',
        'I don\'t like playing football.'
      ],
      correctIndex: 0,
      explanation: 'Tom hỏi xin lời khuyên ("What should I do?") -> Mai đưa ra lời khuyên phù hợp: "You should read books about them." (Bạn nên đọc sách về các truyền thống đó).',
      hint: 'Tom hỏi xin lời khuyên ("What should I do?"), câu đáp lại cần đưa ra lời khuyên với cấu trúc "You should...".',
      knowledgeTopic: 'Giao tiếp tình huống (Giving advice)',
      wrongFeedbacks: {
        1: {
          error: 'Câu này nói về việc đã làm trong quá khứ, không đưa ra lời khuyên cho người hỏi.',
          hint: 'Khi ai đó hỏi xin lời khuyên, ta nên dùng mẫu câu nào để hướng dẫn họ?'
        },
        2: {
          error: 'Câu này chỉ số lượng học sinh, không liên quan đến lời khuyên tìm hiểu truyền thống.',
          hint: 'Hãy tìm câu khuyên bạn nên làm gì để tìm hiểu thêm về truyền thống.'
        },
        3: {
          error: 'Câu này nói về sở thích thể thao, hoàn toàn lạc đề.',
          hint: 'Cấu trúc khuyên bảo ai đó nên làm gì là "You should + V".'
        }
      }
    },
    {
      id: 'u5_pq10',
      question: 'The students decided to travel to the craft village ______ instead of taking a taxi.',
      options: [
        'by bus',
        'by a bus',
        'by the bus',
        'by an bus'
      ],
      correctIndex: 0,
      explanation: 'Quy tắc Zero article: sau giới từ "by" chỉ phương tiện di chuyển, không dùng mạo từ a/an/the -> "by bus".',
      hint: 'Sau giới từ "by" chỉ phương tiện di chuyển, danh từ đứng ngay sau mà không có mạo từ (a/an/the).',
      knowledgeTopic: 'Zero article sau by',
      wrongFeedbacks: {
        1: {
          error: 'Không dùng mạo từ "a" sau giới từ "by" khi nói về phương tiện đi lại.',
          hint: 'Theo quy tắc Zero article, sau "by" không dùng mạo từ.'
        },
        2: {
          error: 'Không thêm "the... in general" sau giới từ "by".',
          hint: 'Hãy tìm cách kết hợp chuẩn xác và ngắn gọn nhất giữa "by" và phương tiện.'
        },
        3: {
          error: 'Không dùng mạo từ sau "by", và "bus" cũng không bắt đầu bằng nguyên âm.',
          hint: 'Hãy nhớ lại cấu trúc: by + phương tiện giao thông.'
        }
      }
    }
  ]
};


// ==================== UNIT 6: LIFESTYLES ====================
export const ENGLISH_UNIT_6_DATA: EnglishUnitData = {
  id: 'ch_tienganh_6',
  unitNumber: 6,
  title: 'Unit 6: Lifestyles',
  topic: 'Lifestyles, Future simple & First conditional',
  description: 'Từ vựng về lối sống, chào hỏi, ẩm thực, nghệ thuật bản địa, xe trượt tuyết; thì tương lai đơn (Future simple) và câu điều kiện loại 1 (First conditional) theo SGK Tiếng Anh 8 Global Success.',

  // ==================== TAB 1: 10 TỪ VỰNG TRỌNG TÂM ====================
  // Chỉ có 3 cột: STT – Từ vựng tiếng Anh – Nghĩa tiếng Việt. Không có cột từ loại, không thêm ví dụ.
  vocabularyList: [
    {
      id: 'u6_v1',
      word: 'lifestyle',
      partOfSpeech: '',
      meaning: 'lối sống'
    },
    {
      id: 'u6_v2',
      word: 'greet',
      partOfSpeech: '',
      meaning: 'chào hỏi'
    },
    {
      id: 'u6_v3',
      word: 'street food',
      partOfSpeech: '',
      meaning: 'thức ăn đường phố'
    },
    {
      id: 'u6_v4',
      word: 'food in restaurants',
      partOfSpeech: '',
      meaning: 'thức ăn tại nhà hàng'
    },
    {
      id: 'u6_v5',
      word: 'online learning',
      partOfSpeech: '',
      meaning: 'học trực tuyến'
    },
    {
      id: 'u6_v6',
      word: 'native art',
      partOfSpeech: '',
      meaning: 'nghệ thuật bản địa'
    },
    {
      id: 'u6_v7',
      word: 'weaving',
      partOfSpeech: '',
      meaning: 'nghề dệt, sự dệt vải'
    },
    {
      id: 'u6_v8',
      word: 'tribal dance',
      partOfSpeech: '',
      meaning: 'điệu múa bộ lạc'
    },
    {
      id: 'u6_v9',
      word: 'making crafts',
      partOfSpeech: '',
      meaning: 'làm đồ thủ công'
    },
    {
      id: 'u6_v10',
      word: 'dog sled',
      partOfSpeech: '',
      meaning: 'xe trượt tuyết do chó kéo'
    }
  ],

  // 5 câu trắc nghiệm củng cố từ vựng
  vocabQuestions: [
    {
      id: 'u6_vq1',
      question: 'The way in which a person or a group of people lives and works is called their ______.',
      options: [
        'lifestyle',
        'dog sled',
        'native art',
        'weaving'
      ],
      correctIndex: 0,
      explanation: '"lifestyle" nghĩa là lối sống, cách sinh sống và làm việc đặc trưng của một người hay cộng đồng.',
      hint: 'Hãy nhớ lại từ vựng chỉ lối sống, cách sinh hoạt và làm việc đặc trưng của một người hay cộng đồng.',
      knowledgeTopic: 'Từ vựng Unit 6',
      wrongFeedbacks: {
        1: {
          error: 'Dog sled là xe trượt tuyết do chó kéo, một phương tiện di chuyển ở xứ tuyết.',
          hint: 'Từ vựng chỉ phong cách sống, lối sống trong bài là gì?'
        },
        2: {
          error: 'Native art là nghệ thuật bản địa.',
          hint: 'Hãy tìm từ ghép giữa "life" và một từ chỉ phong cách.'
        },
        3: {
          error: 'Weaving là nghề dệt vải.',
          hint: 'Từ vựng nào trong bài mang nghĩa là lối sống?'
        }
      }
    },
    {
      id: 'u6_vq2',
      question: 'When people meet each other in different cultures, they ______ in different ways, such as bowing or shaking hands.',
      options: [
        'practise',
        'greet',
        'weave',
        'cook'
      ],
      correctIndex: 1,
      explanation: '"greet" nghĩa là chào hỏi (bằng cách cúi đầu, bắt tay, vẫy tay...).',
      hint: 'Hành động cúi đầu hoặc bắt tay khi gặp gỡ người khác thuộc về phép tắc gì?',
      knowledgeTopic: 'Từ vựng Unit 6',
      wrongFeedbacks: {
        0: {
          error: 'Practise là luyện tập, rèn luyện.',
          hint: 'Hãy tìm động từ chỉ hành động chào hỏi khi gặp nhau.'
        },
        2: {
          error: 'Weave là dệt vải.',
          hint: 'Từ vựng nào bắt đầu bằng chữ "g" mang nghĩa là chào hỏi?'
        },
        3: {
          error: 'Cook là nấu ăn.',
          hint: 'Khi gặp người khác, hành động xã giao đầu tiên là gì?'
        }
      }
    },
    {
      id: 'u6_vq3',
      question: 'Instead of going to a traditional classroom, many students now take advantage of ______ at home.',
      options: [
        'street food',
        'online learning',
        'tribal dance',
        'dog sled'
      ],
      correctIndex: 1,
      explanation: '"online learning" là hình thức học tập trực tuyến qua Internet tại nhà.',
      hint: 'Cụm từ nào chỉ hình thức học tập tại nhà qua máy tính có kết nối mạng Internet?',
      knowledgeTopic: 'Từ vựng Unit 6',
      wrongFeedbacks: {
        0: {
          error: 'Street food là thức ăn đường phố.',
          hint: 'Hãy tìm cụm từ chỉ việc học tập trên không gian mạng.'
        },
        2: {
          error: 'Tribal dance là điệu múa bộ lạc.',
          hint: 'Từ ghép bắt đầu bằng "online" chỉ hình thức học này là gì?'
        },
        3: {
          error: 'Dog sled là xe trượt tuyết do chó kéo.',
          hint: 'Hãy tìm cụm từ mang nghĩa là học trực tuyến.'
        }
      }
    },
    {
      id: 'u6_vq4',
      question: 'In Alaska and other snowy Arctic areas, Inuit people traditionally travel across snow using a ______.',
      options: [
        'dog sled',
        'online learning',
        'tribal dance',
        'street food'
      ],
      correctIndex: 0,
      explanation: '"dog sled" là xe trượt tuyết do đàn chó kéo, phương tiện di chuyển truyền thống trên băng tuyết của người dân vùng Bắc Cực.',
      hint: 'Hãy nhớ lại phương tiện di chuyển truyền thống trên băng tuyết do các chú chó kéo ở vùng cực Bắc.',
      knowledgeTopic: 'Từ vựng Unit 6',
      wrongFeedbacks: {
        1: {
          error: 'Online learning là học trực tuyến.',
          hint: 'Hãy tìm từ chỉ loại xe trượt tuyết được kéo bởi động vật.'
        },
        2: {
          error: 'Tribal dance là điệu múa bộ lạc.',
          hint: 'Phương tiện di chuyển trên tuyết trong bài học có tên tiếng Anh là gì?'
        },
        3: {
          error: 'Street food là thức ăn vặt lề đường.',
          hint: 'Cụm từ này ghép giữa từ con chó và từ xe trượt tuyết.'
        }
      }
    },
    {
      id: 'u6_vq5',
      question: 'Many tourists love watching a traditional ______ performed by local people and buying authentic ______.',
      options: [
        'dog sled / food in restaurants',
        'tribal dance / native art',
        'lifestyle / online learning',
        'greeting / street food'
      ],
      correctIndex: 1,
      explanation: '"tribal dance" là điệu múa bộ lạc và "native art" là các tác phẩm nghệ thuật bản địa truyền thống.',
      hint: 'Tìm cặp từ chỉ điệu múa truyền thống của các bộ lạc và các sản phẩm nghệ thuật bản địa.',
      knowledgeTopic: 'Từ vựng Unit 6',
      wrongFeedbacks: {
        0: {
          error: 'Dog sled / food in restaurants không phù hợp với ngữ cảnh biểu diễn điệu múa dân gian.',
          hint: 'Hãy tìm từ chỉ điệu múa dân tộc và nghệ thuật truyền thống của người bản xứ.'
        },
        2: {
          error: 'Lifestyle / online learning là lối sống / học trực tuyến.',
          hint: 'Khách du lịch thường thích xem điệu múa gì và mua tác phẩm gì?'
        },
        3: {
          error: 'Greeting / street food không kết hợp với hành động biểu diễn múa và mua tác phẩm nghệ thuật.',
          hint: 'Hãy tìm phương án có từ "dance" chỉ điệu múa và "art" chỉ nghệ thuật.'
        }
      }
    }
  ],

  // ==================== TAB 2: NGỮ PHÁP (GRAMMAR) ====================
  grammarTopic: 'THE FUTURE SIMPLE & FIRST CONDITIONAL (Thì tương lai đơn & Câu điều kiện loại 1)',
  grammarPoints: [
    {
      id: 'u6_gp1',
      title: 'Quy tắc 1: Thì tương lai đơn (The future simple)',
      formula: 'Khẳng định:\nS + will + V (nguyên mẫu).\n\nPhủ định:\nS + will not (won\'t) + V (nguyên mẫu).\n\nNghi vấn:\nWill + S + V (nguyên mẫu)?',
      rule: 'Dùng thì tương lai đơn để diễn tả những sự việc, khả năng hoặc dự định có thể xảy ra trong tương lai.',
      example: {
        english: 'If I fail the test, I will have to take the course again.',
        vietnamese: 'Nếu tôi trượt bài kiểm tra, tôi sẽ phải học lại khóa học.'
      }
    },
    {
      id: 'u6_gp2',
      title: 'Quy tắc 2: Câu điều kiện loại 1 (First conditional)',
      formula: 'Cấu trúc câu điều kiện loại 1:\nIf + S + V (hiện tại đơn), S + will + V (nguyên mẫu).',
      rule: 'Dùng để diễn tả một điều kiện có thể xảy ra ở hiện tại hoặc tương lai và kết quả có thể xảy ra nếu điều kiện đó được đáp ứng.',
      example: {
        english: 'If you eat an apple every day, you will stay healthy.',
        vietnamese: 'Nếu bạn ăn một quả táo mỗi ngày, bạn sẽ luôn khỏe mạnh.'
      }
    },
    {
      id: 'u6_gp3',
      title: 'Quy tắc 3: Cách dùng UNLESS (Unless = If ... not)',
      formula: 'Cách dùng Unless:\nUnless = If ... not (nếu không / trừ phi).\n\nCấu trúc tương đương:\nUnless + S + V (khẳng định) = If + S + don\'t/doesn\'t + V.',
      rule: 'Unless có nghĩa là "if ... not" (trừ phi, nếu không). Mệnh đề sau Unless luôn ở dạng khẳng định.',
      example: {
        english: 'You will fail the test unless you study harder.',
        vietnamese: 'Bạn sẽ trượt bài thi nếu bạn không học tập chăm chỉ hơn.'
      }
    }
  ],

  // 5 câu trắc nghiệm củng cố ngữ pháp
  grammarQuestions: [
    {
      id: 'u6_gq1',
      question: 'Scientists predict that people ______ online more often in the next decade.',
      options: [
        'learn',
        'learned',
        'will learn',
        'learning'
      ],
      correctIndex: 2,
      explanation: 'Dấu hiệu tương lai "in the next decade" và dự đoán tương lai -> dùng thì tương lai đơn "will learn".',
      hint: 'Dấu hiệu thời gian "in the next decade" (trong thập kỷ tới) yêu cầu thì tương lai đơn (will + V).',
      knowledgeTopic: 'Thì tương lai đơn',
      wrongFeedbacks: {
        0: {
          error: 'Learn là thì hiện tại đơn, không phù hợp với mốc thời gian tương lai "in the next decade".',
          hint: 'Cấu trúc thì tương lai đơn dùng trợ động từ khiếm khuyết nào trước động từ nguyên mẫu?'
        },
        1: {
          error: 'Learned là thì quá khứ đơn.',
          hint: 'Với mốc thời gian tương lai, hãy tìm cấu trúc có "will".'
        },
        3: {
          error: 'Learning là dạng V-ing, không thể đứng làm vị ngữ chính mà không có to be.',
          hint: 'Hãy nhớ lại công thức khẳng định của thì tương lai đơn.'
        }
      }
    },
    {
      id: 'u6_gq2',
      question: 'Our teacher promises that she ______ us with the scientific experiment tomorrow.',
      options: [
        'helps',
        'helped',
        'will help',
        'helping'
      ],
      correctIndex: 2,
      explanation: 'Dấu hiệu thời gian "tomorrow" (ngày mai) và lời hứa hẹn trong tương lai dùng thì tương lai đơn (will + V nguyên mẫu) -> "will help".',
      hint: 'Hành động xảy ra vào ngày mai (tomorrow) và là một lời hứa hẹn, hãy chia động từ ở thì tương lai đơn.',
      knowledgeTopic: 'Thì tương lai đơn',
      wrongFeedbacks: {
        0: {
          error: 'Helps là thì hiện tại đơn, không phù hợp với mốc thời gian "tomorrow".',
          hint: 'Hành động sẽ diễn ra vào ngày mai cần trợ động từ nào đứng trước?'
        },
        1: {
          error: 'Helped là thì quá khứ đơn.',
          hint: 'Hãy tìm cấu trúc của thì tương lai đơn: will + động từ nguyên mẫu.'
        },
        3: {
          error: 'Helping là dạng V-ing, không làm vị ngữ chính.',
          hint: 'Công thức thì tương lai đơn là will + V nguyên mẫu.'
        }
      }
    },
    {
      id: 'u6_gq3',
      question: 'If you ______ street food in Ha Noi, you will fall in love with Vietnamese cuisine.',
      options: [
        'tried',
        'tries',
        'will try',
        'try'
      ],
      correctIndex: 3,
      explanation: 'Trong câu điều kiện loại 1, mệnh đề "If" chia ở thì Hiện tại đơn. Chủ ngữ "you" đi với động từ nguyên thể "try" (không dùng will trong mệnh đề If).',
      hint: 'Trong câu điều kiện loại 1, mệnh đề "If" chia ở thì Hiện tại đơn với chủ ngữ "you" (không dùng will).',
      knowledgeTopic: 'Câu điều kiện loại 1 (Mệnh đề If)',
      wrongFeedbacks: {
        0: {
          error: 'Tried là thì quá khứ, không dùng trong câu điều kiện loại 1.',
          hint: 'Hãy chọn động từ nguyên thể phù hợp với chủ ngữ "you" ở thì Hiện tại đơn.'
        },
        1: {
          error: 'Tries chỉ dùng cho ngôi thứ ba số ít (he, she, it), chủ ngữ ở đây là "you".',
          hint: 'Chủ ngữ "you" đi với động từ ở dạng nguyên thể trong thì hiện tại đơn.'
        },
        2: {
          error: 'Không dùng "will" trong mệnh đề If của câu điều kiện loại 1.',
          hint: 'Tuyệt đối không dùng "will" trong mệnh đề If của câu điều kiện loại 1.'
        }
      }
    },
    {
      id: 'u6_gq4',
      question: 'If she joins the arts club, she ______ how to make traditional crafts.',
      options: [
        'will learn',
        'learns',
        'learn',
        'learning'
      ],
      correctIndex: 0,
      explanation: 'Cấu trúc câu điều kiện loại 1: If + S + V(hiện tại đơn), S + will + V(nguyên mẫu). Mệnh đề chính dùng "will learn".',
      hint: 'Trong câu điều kiện loại 1, mệnh đề chính (kết quả) dùng thì tương lai đơn: will + V nguyên mẫu.',
      knowledgeTopic: 'Câu điều kiện loại 1 (Mệnh đề chính)',
      wrongFeedbacks: {
        1: {
          error: 'Learns là thì hiện tại đơn, mệnh đề kết quả cần dùng "will learn".',
          hint: 'Cấu trúc mệnh đề chính: S + will + V nguyên mẫu.'
        },
        2: {
          error: 'Learn thiếu trợ động từ "will" trong mệnh đề chính của câu điều kiện loại 1.',
          hint: 'Động từ nguyên mẫu đơn lẻ thiếu trợ động từ "will" cho mệnh đề chính.'
        },
        3: {
          error: 'Learning là dạng V-ing, không làm vị ngữ chính.',
          hint: 'Hãy tìm dạng kết hợp giữa "will" và động từ nguyên thể.'
        }
      }
    },
    {
      id: 'u6_gq5',
      question: 'You won\'t understand the local lifestyle ______ you spend time living with the villagers.',
      options: [
        'if',
        'unless',
        'because',
        'so'
      ],
      correctIndex: 1,
      explanation: '"unless" có nghĩa là "trừ phi, nếu không" (Unless you spend time... = If you don\'t spend time...). Câu có nghĩa: Bạn sẽ không hiểu lối sống địa phương trừ phi bạn dành thời gian sống cùng dân làng.',
      hint: 'Liên từ nào mang nghĩa "trừ phi / nếu không" (tương đương if... not) phù hợp với nghĩa phủ định của mệnh đề chính?',
      knowledgeTopic: 'Cách dùng Unless',
      wrongFeedbacks: {
        0: {
          error: 'Dùng "if" sẽ làm câu mang nghĩa vô lý: "Bạn sẽ không hiểu nếu bạn dành thời gian sống cùng...".',
          hint: 'Hãy tìm liên từ mang nghĩa phủ định "trừ phi" hoặc "nếu không".'
        },
        2: {
          error: 'Because là liên từ chỉ nguyên nhân (bởi vì), không dùng cho câu điều kiện loại 1.',
          hint: 'Liên từ điều kiện tương đương với "if... not" là từ nào trong bài học?'
        },
        3: {
          error: 'So là liên từ chỉ kết quả (vì vậy).',
          hint: 'Hãy nhớ lại liên từ bắt đầu bằng chữ "u" mang nghĩa "trừ phi".'
        }
      }
    }
  ],

  // ==================== TAB 3: LUYỆN TẬP (PRACTICE) ====================
  // 10 câu hỏi trắc nghiệm tổng hợp đúng theo yêu cầu SGK
  practiceQuestions: [
    {
      id: 'u6_pq1',
      question: 'The traditional craft of the villagers is ______ bamboo baskets.',
      options: [
        'weaving',
        'making',
        'greeting',
        'serving'
      ],
      correctIndex: 1,
      explanation: 'Cụm từ "making bamboo baskets" (làm/đan rổ tre) là cách diễn đạt phổ biến và chuẩn xác theo SGK.',
      hint: 'Với đồ thủ công đan lát rổ tre trong SGK, động từ thông dụng thường đi kèm là gì?',
      knowledgeTopic: 'Từ vựng Unit 6',
      wrongFeedbacks: {
        0: {
          error: 'Weaving thường dùng với dệt vải, thổ cẩm (weaving cloth).',
          hint: 'Với cụm từ "bamboo baskets" trong bài, động từ nào mang nghĩa làm/chế tác?'
        },
        2: {
          error: 'Greeting là chào hỏi, không liên quan đến rổ tre.',
          hint: 'Hãy tìm động từ chỉ hành động chế tạo hoặc làm đồ vật thủ công.'
        },
        3: {
          error: 'Serving là phục vụ ăn uống.',
          hint: 'Động từ thông dụng đi với đồ thủ công (making crafts / baskets) là gì?'
        }
      }
    },
    {
      id: 'u6_pq2',
      question: 'Many people in my city enjoy eating ______.',
      options: [
        'street food',
        'native art',
        'dog sled',
        'tribal dance'
      ],
      correctIndex: 0,
      explanation: '"street food" (thức ăn đường phố) là danh từ chỉ món ăn phù hợp với động từ "eating".',
      hint: 'Sau động từ "eating", hãy tìm danh từ chỉ đồ ăn thức uống đường phố.',
      knowledgeTopic: 'Từ vựng Unit 6',
      wrongFeedbacks: {
        1: {
          error: 'Native art là nghệ thuật bản địa, không phải đồ ăn.',
          hint: 'Hãy tìm từ vựng chỉ các món ăn hè phố bình dân.'
        },
        2: {
          error: 'Dog sled là xe trượt tuyết do chó kéo.',
          hint: 'Từ vựng nào trong bài mang nghĩa là ẩm thực đường phố?'
        },
        3: {
          error: 'Tribal dance là điệu múa bộ lạc.',
          hint: 'Cụm từ này ghép giữa từ đường phố và từ đồ ăn.'
        }
      }
    },
    {
      id: 'u6_pq3',
      question: 'We ______ our grandparents next Sunday.',
      options: [
        'visit',
        'visited',
        'will visit',
        'visiting'
      ],
      correctIndex: 2,
      explanation: 'Dấu hiệu thời gian "next Sunday" (chủ nhật tới) chỉ tương lai -> dùng thì tương lai đơn "will visit".',
      hint: '"next Sunday" là thời điểm trong tương lai, hãy chia động từ ở thì tương lai đơn (will + V).',
      knowledgeTopic: 'Thì tương lai đơn',
      wrongFeedbacks: {
        0: {
          error: 'Visit là thì hiện tại đơn, không phù hợp với mốc tương lai "next Sunday".',
          hint: 'Hành động sẽ diễn ra trong tương lai cần trợ động từ nào?'
        },
        1: {
          error: 'Visited là thì quá khứ đơn.',
          hint: 'Công thức thì tương lai đơn: will + V nguyên mẫu.'
        },
        3: {
          error: 'Visiting là dạng V-ing.',
          hint: 'Hãy tìm phương án có trợ động từ "will" chỉ hành động trong tương lai.'
        }
      }
    },
    {
      id: 'u6_pq4',
      question: 'If you study hard, you ______ the exam.',
      options: [
        'pass',
        'passed',
        'will pass',
        'passing'
      ],
      correctIndex: 2,
      explanation: 'Cấu trúc câu điều kiện loại 1: If + S + V(hiện tại đơn), S + will + V(nguyên mẫu) -> "will pass".',
      hint: 'Trong câu điều kiện loại 1, mệnh đề chính dùng thì tương lai đơn: will + V nguyên mẫu.',
      knowledgeTopic: 'Câu điều kiện loại 1',
      wrongFeedbacks: {
        0: {
          error: 'Pass thiếu "will" trong mệnh đề chính của câu điều kiện loại 1.',
          hint: 'Mệnh đề kết quả cần có cấu trúc: will + V nguyên mẫu.'
        },
        1: {
          error: 'Passed là thì quá khứ đơn.',
          hint: 'Hãy tìm cấu trúc chỉ kết quả trong tương lai với trợ động từ "will".'
        },
        3: {
          error: 'Passing là dạng V-ing.',
          hint: 'Công thức câu điều kiện loại 1: If + S + V(hiện tại đơn), S + will + V.'
        }
      }
    },
    {
      id: 'u6_pq5',
      question: 'If it ______ tomorrow, we will stay at home.',
      options: [
        'rain',
        'rains',
        'will rain',
        'raining'
      ],
      correctIndex: 1,
      explanation: 'Trong câu điều kiện loại 1, mệnh đề "If" chia ở thì Hiện tại đơn; chủ ngữ "it" là ngôi thứ ba số ít nên động từ thêm -s -> "rains". Tuyệt đối không dùng "will" trong mệnh đề If.',
      hint: 'Trong câu điều kiện loại 1, mệnh đề "If" chia ở thì Hiện tại đơn; chủ ngữ "it" là số ít nên động từ cần biến đổi như thế nào?',
      knowledgeTopic: 'Câu điều kiện loại 1',
      wrongFeedbacks: {
        0: {
          error: 'Chủ ngữ "it" là ngôi thứ ba số ít nên động từ ở hiện tại đơn phải thêm -s (rains).',
          hint: 'Hãy chú ý quy tắc chia động từ ngôi thứ ba số ít ở thì Hiện tại đơn.'
        },
        2: {
          error: 'Tuyệt đối không dùng "will" trong mệnh đề If của câu điều kiện loại 1.',
          hint: 'Mệnh đề If chỉ chia thì Hiện tại đơn.'
        },
        3: {
          error: 'Raining là dạng V-ing.',
          hint: 'Hãy tìm động từ chia thì hiện tại đơn phù hợp với chủ ngữ "it".'
        }
      }
    },
    {
      id: 'u6_pq6',
      question: 'You won\'t improve your English unless you ______ regularly.',
      options: [
        'practise',
        'practises',
        'will practise',
        'practising'
      ],
      correctIndex: 0,
      explanation: 'Mệnh đề sau "unless" tương đương mệnh đề "if", dùng thì Hiện tại đơn. Với chủ ngữ "you", động từ ở dạng nguyên thể -> "practise".',
      hint: 'Mệnh đề sau "unless" tương đương mệnh đề "if", chia ở thì Hiện tại đơn. Với chủ ngữ "you", động từ ở dạng nào?',
      knowledgeTopic: 'Cách dùng Unless',
      wrongFeedbacks: {
        1: {
          error: 'Practises có -s chỉ dùng cho ngôi thứ ba số ít (he, she, it), chủ ngữ ở đây là "you".',
          hint: 'Chủ ngữ "you" đi với động từ ở dạng nguyên thể trong thì hiện tại đơn.'
        },
        2: {
          error: 'Không dùng "will" trong mệnh đề sau unless.',
          hint: 'Sau unless dùng thì Hiện tại đơn, không dùng thì tương lai.'
        },
        3: {
          error: 'Practising là dạng V-ing.',
          hint: 'Hãy chọn động từ nguyên thể phù hợp với chủ ngữ "you".'
        }
      }
    },
    {
      id: 'u6_pq7',
      question: 'Lan ______ to the city art museum with her classmates tomorrow morning.',
      options: [
        'will goes',
        'will go',
        'will going',
        'goes will'
      ],
      correctIndex: 1,
      explanation: 'Sau trợ động từ "will", động từ luôn ở dạng nguyên mẫu không chia -> "will go".',
      hint: 'Sau trợ động từ "will", động từ luôn ở dạng nguyên mẫu (không thêm -s/-es/-ing).',
      knowledgeTopic: 'Dạng động từ sau will',
      wrongFeedbacks: {
        0: {
          error: 'Động từ sau will không được thêm đuôi -es ("goes" là sai).',
          hint: 'Sau will luôn là động từ nguyên mẫu.'
        },
        2: {
          error: 'Không dùng dạng V-ing ("going") ngay sau will.',
          hint: 'Sau will phải là động từ ở dạng nguyên thể cơ bản.'
        },
        3: {
          error: 'Sai trật tự từ ("goes will" là hoàn toàn sai).',
          hint: 'Cấu trúc chuẩn: will + động từ nguyên mẫu.'
        }
      }
    },
    {
      id: 'u6_pq8',
      question: 'If I have free time this weekend, I ______ how to weave traditional cloth.',
      options: [
        'learning',
        'learn',
        'learned',
        'will learn'
      ],
      correctIndex: 3,
      explanation: 'Trong câu điều kiện loại 1: If + S + V(hiện tại đơn), S + will + V(nguyên mẫu). Mệnh đề kết quả dùng "will learn".',
      hint: 'Mệnh đề If đã chia ở thì hiện tại đơn (have), mệnh đề chính chỉ kết quả tương lai cần trợ động từ nào?',
      knowledgeTopic: 'Câu điều kiện loại 1',
      wrongFeedbacks: {
        0: {
          error: 'Learning là dạng V-ing, không làm vị ngữ chính.',
          hint: 'Công thức mệnh đề chính: will + V nguyên mẫu.'
        },
        1: {
          error: 'Mệnh đề chính của câu điều kiện loại 1 cần có trợ động từ "will".',
          hint: 'Cấu trúc mệnh đề chính: S + will + V nguyên mẫu.'
        },
        2: {
          error: 'Learned là thì quá khứ đơn, không dùng cho kết quả tương lai.',
          hint: 'Hãy tìm cấu trúc có "will" để diễn tả kết quả trong tương lai.'
        }
      }
    },
    {
      id: 'u6_pq9',
      question: 'Nam: “Can I come over to your house on Sunday?” – Tom: “______. You\'re welcome.”',
      options: [
        'Sure',
        'Never mind',
        'I\'m sorry',
        'Goodbye'
      ],
      correctIndex: 0,
      explanation: '"Sure. You\'re welcome." (Chắc chắn rồi, rất hoan nghênh bạn) là lời đồng ý và thể hiện sự chắc chắn, hiếu khách khi bạn xin phép đến chơi nhà.',
      hint: 'Khi bạn xin phép đến chơi nhà, để thể hiện sự chắc chắn và hiếu khách chào đón, người ta thường dùng từ đáp lại nào?',
      knowledgeTopic: 'Giao tiếp tình huống (Expressing certainty)',
      wrongFeedbacks: {
        1: {
          error: '"Never mind" nghĩa là "đừng bận tâm", không dùng để đồng ý cho bạn đến nhà.',
          hint: 'Hãy tìm từ ngắn gọn thể hiện sự đồng ý chắc chắn và nhiệt tình.'
        },
        2: {
          error: '"I\'m sorry" là lời xin lỗi hoặc từ chối, mâu thuẫn với câu đi sau "You\'re welcome".',
          hint: 'Người nói muốn đồng ý một cách chắc chắn và vui vẻ.'
        },
        3: {
          error: '"Goodbye" là lời chào tạm biệt.',
          hint: 'Từ nào mang nghĩa là "chắc chắn rồi" để biểu lộ sự đồng ý?'
        }
      }
    },
    {
      id: 'u6_pq10',
      question: 'You won\'t pass the final exam ______ you study hard every day.',
      options: [
        'although',
        'if',
        'because',
        'unless'
      ],
      correctIndex: 3,
      explanation: '"unless" có nghĩa là "trừ phi, nếu không" (Unless you study hard = If you don\'t study hard). Bạn sẽ không đỗ kỳ thi trừ phi bạn học tập chăm chỉ.',
      hint: 'Hãy chọn liên từ mang nghĩa "trừ phi / nếu không" để nối với mệnh đề điều kiện.',
      knowledgeTopic: 'Cách dùng liên từ Unless',
      wrongFeedbacks: {
        0: {
          error: '"although" chỉ sự nhượng bộ (mặc dù).',
          hint: 'Từ nối bắt đầu bằng chữ "u" mang nghĩa "trừ phi" là gì?'
        },
        1: {
          error: 'Nếu dùng "if" thì câu mang nghĩa: Bạn sẽ không đỗ nếu bạn học chăm (ngược nghĩa).',
          hint: 'Từ nối nào mang nghĩa "if ... not" (trừ phi)?'
        },
        2: {
          error: '"because" chỉ nguyên nhân, làm câu mang nghĩa phi lý.',
          hint: 'Hãy tìm liên từ điều kiện mang nghĩa "trừ phi".'
        }
      }
    }
  ]
};

// ==================== UNIT 7: ENVIRONMENTAL PROTECTION ====================
export const ENGLISH_UNIT_7_DATA: EnglishUnitData = {
  id: 'ch_tienganh_7',
  unitNumber: 7,
  title: 'Unit 7: Environmental Protection',
  topic: 'Environmental protection, complex sentences with adverb clauses of time',
  description: 'Từ vựng về bảo vệ môi trường, hệ sinh thái, lượng khí thải carbon, rác thải nhựa; câu phức với mệnh đề trạng ngữ chỉ thời gian theo SGK Tiếng Anh 8 Global Success.',

  // ==================== TAB 1: 10 TỪ VỰNG TRỌNG TÂM ====================
  // Chỉ có 3 nội dung: STT – Từ vựng tiếng Anh – Nghĩa tiếng Việt. Không có cột từ loại, không thêm ví dụ.
  vocabularyList: [
    {
      id: 'u7_v1',
      word: 'environmental protection',
      partOfSpeech: '',
      meaning: 'bảo vệ môi trường'
    },
    {
      id: 'u7_v2',
      word: 'pollution',
      partOfSpeech: '',
      meaning: 'sự ô nhiễm'
    },
    {
      id: 'u7_v3',
      word: 'ecosystem',
      partOfSpeech: '',
      meaning: 'hệ sinh thái'
    },
    {
      id: 'u7_v4',
      word: 'habitat',
      partOfSpeech: '',
      meaning: 'môi trường sống'
    },
    {
      id: 'u7_v5',
      word: 'endangered species',
      partOfSpeech: '',
      meaning: 'các loài có nguy cơ tuyệt chủng'
    },
    {
      id: 'u7_v6',
      word: 'carbon footprint',
      partOfSpeech: '',
      meaning: 'lượng khí thải carbon do một hoạt động tạo ra'
    },
    {
      id: 'u7_v7',
      word: 'single-use products',
      partOfSpeech: '',
      meaning: 'sản phẩm dùng một lần'
    },
    {
      id: 'u7_v8',
      word: 'plastic rubbish',
      partOfSpeech: '',
      meaning: 'rác thải nhựa'
    },
    {
      id: 'u7_v9',
      word: 'water pollution',
      partOfSpeech: '',
      meaning: 'ô nhiễm nguồn nước'
    },
    {
      id: 'u7_v10',
      word: 'save water',
      partOfSpeech: '',
      meaning: 'tiết kiệm nước'
    }
  ],

  // 5 câu trắc nghiệm củng cố từ vựng
  vocabQuestions: [
    {
      id: 'u7_vq1',
      question: 'The natural home or environment of an animal, plant, or other organism is called its ______.',
      options: [
        'habitat',
        'carbon footprint',
        'plastic rubbish',
        'single-use product'
      ],
      correctIndex: 0,
      explanation: '"habitat" nghĩa là môi trường sống tự nhiên của động vật hoặc thực vật.',
      hint: 'Hãy nhớ lại từ vựng chỉ nơi cư trú, môi trường sinh sống tự nhiên của các loài động thực vật.',
      knowledgeTopic: 'Từ vựng Unit 7',
      wrongFeedbacks: {
        1: {
          error: 'Carbon footprint là lượng khí thải carbon do một hoạt động tạo ra.',
          hint: 'Hãy tìm từ vựng có nghĩa là môi trường sống tự nhiên của sinh vật.'
        },
        2: {
          error: 'Plastic rubbish là rác thải nhựa.',
          hint: 'Nơi sinh sống của động thực vật hoang dã trong tiếng Anh bắt đầu bằng chữ "h".'
        },
        3: {
          error: 'Single-use product là sản phẩm dùng một lần.',
          hint: 'Từ vựng này có nghĩa là môi trường sống tự nhiên.'
        }
      }
    },
    {
      id: 'u7_vq2',
      question: 'Animals and plants that are in danger of disappearing forever are called ______.',
      options: [
        'single-use products',
        'endangered species',
        'ecosystems',
        'habitats'
      ],
      correctIndex: 1,
      explanation: '"endangered species" là các loài sinh vật có nguy cơ tuyệt chủng.',
      hint: 'Hãy liên hệ cụm từ chỉ những loài động thực vật đang gặp nguy hiểm và có nguy cơ biến mất vĩnh viễn.',
      knowledgeTopic: 'Từ vựng Unit 7',
      wrongFeedbacks: {
        0: {
          error: 'Single-use products là các sản phẩm chỉ dùng một lần rồi vứt bỏ.',
          hint: 'Hãy tìm cụm từ chỉ các loài sinh vật đang bên bờ vực tuyệt chủng.'
        },
        2: {
          error: 'Ecosystems là các hệ sinh thái bao gồm sinh vật và môi trường sống.',
          hint: 'Cụm từ nào trong bài có từ "species" mang nghĩa là giống loài?'
        },
        3: {
          error: 'Habitats là các môi trường sống tự nhiên.',
          hint: 'Hãy tìm cụm từ bắt đầu bằng "endangered" chỉ các loài bị đe dọa.'
        }
      }
    },
    {
      id: 'u7_vq3',
      question: 'To reduce our ______, we should walk or cycle instead of travelling by car.',
      options: [
        'ecosystem',
        'plastic rubbish',
        'carbon footprint',
        'habitat'
      ],
      correctIndex: 2,
      explanation: '"carbon footprint" là lượng phát thải khí carbon (dấu chân carbon) do các hoạt động tạo ra.',
      hint: 'Hãy nhớ lại thuật ngữ chỉ lượng khí thải nhà kính carbon sinh ra do các hoạt động tiêu thụ năng lượng của con người.',
      knowledgeTopic: 'Từ vựng Unit 7',
      wrongFeedbacks: {
        0: {
          error: 'Ecosystem là hệ sinh thái tự nhiên.',
          hint: 'Cụm từ nào chỉ lượng khí thải carbon mà mỗi cá nhân hoặc hoạt động thải ra?'
        },
        1: {
          error: 'Plastic rubbish là rác thải nhựa.',
          hint: 'Hãy tìm cụm từ ghép có chứa từ "carbon".'
        },
        3: {
          error: 'Habitat là môi trường sống tự nhiên.',
          hint: 'Thuật ngữ nào trong bài mang nghĩa là lượng phát thải carbon / dấu chân carbon?'
        }
      }
    },
    {
      id: 'u7_vq4',
      question: 'Straws, plastic cups, and bags that are thrown away after one time of use are called ______.',
      options: [
        'single-use products',
        'endangered species',
        'natural habitats',
        'ecosystems'
      ],
      correctIndex: 0,
      explanation: '"single-use products" là các sản phẩm dùng một lần (như ống hút nhựa, túi nilon dùng 1 lần rồi bỏ).',
      hint: 'Những vật dụng như ống hút hay cốc nhựa dùng đúng một lần rồi vứt bỏ được gọi là sản phẩm gì?',
      knowledgeTopic: 'Từ vựng Unit 7',
      wrongFeedbacks: {
        1: {
          error: 'Endangered species là các loài có nguy cơ tuyệt chủng, không phải đồ dùng nhân tạo.',
          hint: 'Hãy tìm cụm từ có nghĩa là sản phẩm dùng một lần.'
        },
        2: {
          error: 'Natural habitats là môi trường sống tự nhiên.',
          hint: 'Cụm từ nào có chứa từ "single" (một lần)?'
        },
        3: {
          error: 'Ecosystems là các hệ sinh thái.',
          hint: 'Hãy nhớ lại từ vựng chỉ đồ nhựa dùng một lần trong bài học.'
        }
      }
    },
    {
      id: 'u7_vq5',
      question: 'Factories pouring untreated chemicals into rivers cause serious ______.',
      options: [
        'habitat protection',
        'water pollution',
        'carbon reduction',
        'endangered species'
      ],
      correctIndex: 1,
      explanation: '"water pollution" là sự ô nhiễm nguồn nước do hóa chất hoặc chất thải xả vào sông ngòi.',
      hint: 'Hành động xả hóa chất độc hại vào sông ngòi sẽ dẫn đến tình trạng ô nhiễm loại tài nguyên nào?',
      knowledgeTopic: 'Từ vựng Unit 7',
      wrongFeedbacks: {
        0: {
          error: 'Habitat protection là bảo vệ môi trường sống, trái ngược với việc xả thải.',
          hint: 'Hãy tìm cụm từ chỉ sự ô nhiễm nguồn nước.'
        },
        2: {
          error: 'Carbon reduction là việc giảm lượng carbon.',
          hint: 'Xả chất thải xuống sông suối gây ra hiện tượng ô nhiễm gì?'
        },
        3: {
          error: 'Endangered species là các loài nguy cấp.',
          hint: 'Từ vựng nào kết hợp giữa nước (water) và sự ô nhiễm (pollution)?'
        }
      }
    }
  ],

  // ==================== TAB 2: NGỮ PHÁP (GRAMMAR) ====================
  grammarTopic: 'COMPLEX SENTENCES WITH ADVERB CLAUSES OF TIME (Câu phức với mệnh đề trạng ngữ chỉ thời gian)',
  grammarPoints: [
    {
      id: 'u7_gp1',
      title: 'Quy tắc 1: Câu phức (Complex sentences)',
      formula: 'Cấu trúc câu phức:\nMệnh đề độc lập + Mệnh đề phụ thuộc.\n\nhoặc:\nMệnh đề phụ thuộc, + Mệnh đề độc lập.',
      rule: 'Câu phức gồm một mệnh đề độc lập và ít nhất một mệnh đề phụ thuộc.',
      example: {
        english: "As soon as they arrive, we'll have lunch.",
        vietnamese: 'Ngay khi họ đến, chúng tôi sẽ ăn trưa.'
      }
    },
    {
      id: 'u7_gp2',
      title: 'Quy tắc 2: Mệnh đề trạng ngữ chỉ thời gian (Adverb clauses of time)',
      formula: 'Các từ nối thường gặp:\n- when: khi\n- until: cho đến khi\n- as soon as: ngay khi\n- while: trong khi\n- before: trước khi\n- after: sau khi',
      rule: 'Dùng để diễn tả thời điểm hoặc khoảng thời gian một hành động xảy ra.',
      example: {
        english: "As soon as they arrive, we'll have lunch.",
        vietnamese: 'Ngay khi họ đến, chúng tôi sẽ ăn trưa.'
      }
    }
  ],

  // 5 câu trắc nghiệm củng cố ngữ pháp
  grammarQuestions: [
    {
      id: 'u7_gq1',
      question: 'Please stay inside the classroom ______ the heavy rain stops completely.',
      options: [
        'while',
        'until',
        'before',
        'as'
      ],
      correctIndex: 1,
      explanation: '"until" có nghĩa là "cho đến khi", diễn tả hành động ở trong lớp kéo dài cho đến thời điểm tạnh mưa.',
      hint: 'Hành động ở lại trong lớp kéo dài cho tới thời điểm cơn mưa dừng hẳn. Hãy chọn liên từ mang nghĩa "cho đến khi".',
      knowledgeTopic: 'Liên từ thời gian until',
      wrongFeedbacks: {
        0: {
          error: 'While mang nghĩa là "trong khi", không diễn đạt điểm kết thúc thời gian.',
          hint: 'Hãy tìm liên từ bắt đầu bằng chữ "u" mang nghĩa "cho đến khi".'
        },
        2: {
          error: 'Before mang nghĩa là "trước khi".',
          hint: 'Liên từ nào dùng để chỉ hành động kéo dài tới tận một thời điểm?'
        },
        3: {
          error: 'As mang nghĩa là khi / vì.',
          hint: 'Xem lại các từ nối chỉ thời gian mang nghĩa "cho đến khi".'
        }
      }
    },
    {
      id: 'u7_gq2',
      question: '______ the bell rings, all students will gather in the schoolyard to clean up plastic rubbish.',
      options: [
        'Until',
        'Before',
        'As soon as',
        'While'
      ],
      correctIndex: 2,
      explanation: '"As soon as" (ngay khi) dùng để nối hai hành động diễn ra nối tiếp nhau ngay lập tức.',
      hint: 'Liên từ đứng đầu câu diễn tả hành động tập trung dọn rác sẽ diễn ra ngay lập tức khi chuông reo.',
      knowledgeTopic: 'Mệnh đề trạng ngữ chỉ thời gian với As soon as',
      wrongFeedbacks: {
        0: {
          error: 'Until mang nghĩa "cho đến khi", không hợp nghĩa khi đứng đầu câu chỉ sự việc bắt đầu.',
          hint: 'Cụm từ nối nào mang nghĩa là "ngay khi"?'
        },
        1: {
          error: 'Before nghĩa là "trước khi", học sinh không thể biết chuông reo trước khi nó thực sự reo.',
          hint: 'Hãy tìm cụm từ chỉ thời điểm xảy ra ngay lập tức sau tiếng chuông.'
        },
        3: {
          error: 'While nghĩa là "trong khi", thường dùng với hành động kéo dài.',
          hint: 'Cụm từ 3 chữ bắt đầu bằng "As..." mang nghĩa "ngay khi" là gì?'
        }
      }
    },
    {
      id: 'u7_gq3',
      question: 'We will start cleaning the park as soon as the sun ______.',
      options: [
        'rise',
        'rises',
        'will rise',
        'rising'
      ],
      correctIndex: 1,
      explanation: 'Trong mệnh đề trạng ngữ chỉ thời gian (sau as soon as, when...), ta dùng thì Hiện tại đơn thay cho thì tương lai. Chủ ngữ "the sun" là số ít nên động từ thêm -s -> "rises".',
      hint: 'Trong mệnh đề trạng ngữ chỉ thời gian, ta dùng thì Hiện tại đơn (không dùng will). Chủ ngữ "the sun" là ngôi thứ ba số ít.',
      knowledgeTopic: 'Thì của động từ trong mệnh đề thời gian',
      wrongFeedbacks: {
        0: {
          error: 'Chủ ngữ "the sun" là ngôi thứ ba số ít, động từ ở hiện tại đơn phải thêm đuôi -s.',
          hint: 'Hãy chú ý quy tắc chia động từ ngôi thứ ba số ít ở thì Hiện tại đơn.'
        },
        2: {
          error: 'Tuyệt đối không dùng trợ động từ "will" trong mệnh đề trạng ngữ chỉ thời gian.',
          hint: 'Mệnh đề sau "as soon as" dùng thì Hiện tại đơn.'
        },
        3: {
          error: 'Rising là dạng V-ing, không thể đứng làm vị ngữ chính độc lập.',
          hint: 'Hãy tìm động từ thì hiện tại đơn chia theo chủ ngữ số ít "the sun".'
        }
      }
    },
    {
      id: 'u7_gq4',
      question: 'Always wash your hands ______ you have meals to protect your health.',
      options: [
        'after',
        'before',
        'while',
        'until'
      ],
      correctIndex: 1,
      explanation: '"before" (trước khi): Rửa tay trước khi ăn bữa ăn là thói quen vệ sinh đúng đắn để bảo vệ sức khỏe.',
      hint: 'Hãy suy nghĩ về trình tự vệ sinh: chúng ta cần rửa tay vào thời điểm nào (trước hay sau khi ăn)?',
      knowledgeTopic: 'Chọn liên từ thời gian phù hợp',
      wrongFeedbacks: {
        0: {
          error: 'After nghĩa là sau khi, việc rửa tay phòng bệnh cần làm trước khi ăn.',
          hint: 'Từ nối nào mang nghĩa là "trước khi"?'
        },
        2: {
          error: 'While nghĩa là trong khi (hai hành động diễn ra song song), không phù hợp với thói quen ăn uống.',
          hint: 'Hãy tìm từ nối chỉ thời điểm diễn ra trước một sự việc.'
        },
        3: {
          error: 'Until nghĩa là cho đến khi, không phù hợp với ý nghĩa của câu.',
          hint: 'Liên từ chỉ thời gian đối lập với "after" là gì?'
        }
      }
    },
    {
      id: 'u7_gq5',
      question: 'The phone rang ______ my sister was doing her homework.',
      options: [
        'as soon as',
        'until',
        'before',
        'while'
      ],
      correctIndex: 3,
      explanation: '"while" (trong khi) dùng để nối một hành động ngắn xen vào (The phone rang) khi một hành động khác đang diễn ra (was doing her homework).',
      hint: 'Vế sau chia ở thì quá khứ tiếp diễn ("was doing"), hãy chọn liên từ mang nghĩa "trong khi".',
      knowledgeTopic: 'Cách dùng liên từ While',
      wrongFeedbacks: {
        0: {
          error: 'As soon as nghĩa là ngay khi, thường dùng với hai hành động nối tiếp nhau nhanh chóng.',
          hint: 'Hành động đang làm bài tập cần liên từ diễn tả tính kéo dài (trong khi).'
        },
        1: {
          error: 'Until nghĩa là cho đến khi, không đi với thì tiếp diễn diễn tả hành động đang xảy ra.',
          hint: 'Liên từ nào thường đi kèm với hành động đang diễn ra mang nghĩa "trong khi"?'
        },
        2: {
          error: 'Before nghĩa là trước khi, không phù hợp với hành động đang diễn ra.',
          hint: 'Hãy tìm liên từ bắt đầu bằng chữ "w" mang nghĩa "trong khi".'
        }
      }
    }
  ],

  // ==================== TAB 3: LUYỆN TẬP (PRACTICE) ====================
  // 10 câu hỏi trắc nghiệm tổng hợp đúng theo yêu cầu SGK
  practiceQuestions: [
    {
      id: 'u7_pq1',
      question: 'We should turn off the lights to reduce our ______ footprint.',
      options: [
        'carbon',
        'water',
        'plastic',
        'natural'
      ],
      correctIndex: 0,
      explanation: '"carbon footprint" là lượng phát thải khí carbon (dấu chân carbon).',
      hint: 'Hãy nhớ lại cụm từ cố định trong Unit 7 chỉ lượng phát thải khí nhà kính.',
      knowledgeTopic: 'Từ vựng Unit 7',
      wrongFeedbacks: {
        1: {
          error: 'Không dùng cụm từ "water footprint" trong ngữ cảnh này.',
          hint: 'Khái niệm dấu chân khí thải trong tiếng Anh bắt đầu bằng chữ "c".'
        },
        2: {
          error: 'Không dùng "plastic footprint".',
          hint: 'Từ nào ghép với "footprint" để chỉ lượng khí thải nhà kính?'
        },
        3: {
          error: 'Natural footprint không phải thuật ngữ được học trong bài.',
          hint: 'Hãy tìm từ chỉ nguyên tố carbon.'
        }
      }
    },
    {
      id: 'u7_pq2',
      question: 'Local students can actively protect the environment by ______ in their neighborhood.',
      options: [
        'cutting down trees',
        'throwing plastic rubbish',
        'planting more trees',
        'using more single-use bags'
      ],
      correctIndex: 2,
      explanation: '"planting more trees" (trồng thêm nhiều cây xanh) là hành động tích cực giúp bảo vệ môi trường và lọc sạch không khí.',
      hint: 'Hành động nào đem lại lợi ích tích cực cho tự nhiên và bầu không khí xung quanh?',
      knowledgeTopic: 'Bảo vệ môi trường',
      wrongFeedbacks: {
        0: {
          error: 'Chặt cây phá hủy môi trường sống của muông thú.',
          hint: 'Hãy tìm hành động có ích cho môi trường thiên nhiên.'
        },
        1: {
          error: 'Vứt rác nhựa gây ô nhiễm môi trường đất và nước.',
          hint: 'Hành động nào giúp phủ xanh không gian sống?'
        },
        3: {
          error: 'Dùng nhiều túi một lần làm gia tăng rác thải nhựa.',
          hint: 'Trồng thêm cây xanh là giải pháp bảo vệ môi trường bền vững.'
        }
      }
    },
    {
      id: 'u7_pq3',
      question: 'An ______ is a community of living things and their environment.',
      options: [
        'programme',
        'footprint',
        'pollution',
        'ecosystem'
      ],
      correctIndex: 3,
      explanation: '"ecosystem" là hệ sinh thái, gồm một quần xã sinh vật và môi trường sống của chúng.',
      hint: 'Hãy nhớ lại từ vựng chỉ một cộng đồng sinh vật cùng với môi trường tương tác của chúng.',
      knowledgeTopic: 'Từ vựng Unit 7',
      wrongFeedbacks: {
        0: {
          error: 'Programme là chương trình, kế hoạch.',
          hint: 'Từ vựng nào trong bài mang nghĩa là hệ sinh thái?'
        },
        1: {
          error: 'Footprint là dấu chân / lượng phát thải, không phải cộng đồng sinh vật.',
          hint: 'Hãy tìm từ có nghĩa là hệ sinh thái.'
        },
        2: {
          error: 'Pollution là sự ô nhiễm môi trường.',
          hint: 'Thuật ngữ khoa học nào bắt đầu bằng tiền tố "eco-"?'
        }
      }
    },
    {
      id: 'u7_pq4',
      question: 'We will clean up the beach as soon as the rain ______.',
      options: [
        'stop',
        'stops',
        'will stop',
        'stopping'
      ],
      correctIndex: 1,
      explanation: 'Mệnh đề trạng ngữ chỉ thời gian sau "as soon as" dùng thì Hiện tại đơn; chủ ngữ "the rain" là số ít nên động từ thêm -s -> "stops".',
      hint: 'Mệnh đề sau "as soon as" chia thì Hiện tại đơn (không dùng will), chủ ngữ "the rain" là ngôi thứ ba số ít.',
      knowledgeTopic: 'Mệnh đề thời gian với as soon as',
      wrongFeedbacks: {
        0: {
          error: 'Chủ ngữ "the rain" là danh từ không đếm được / số ít, động từ cần thêm -s.',
          hint: 'Chia động từ ở thì hiện tại đơn với chủ ngữ số ít: động từ cần có đuôi gì?'
        },
        2: {
          error: 'Tuyệt đối không dùng "will" trong mệnh đề trạng ngữ chỉ thời gian sau as soon as.',
          hint: 'Sau "as soon as" chỉ dùng thì Hiện tại đơn.'
        },
        3: {
          error: 'Stopping là dạng V-ing, không làm vị ngữ chính khi thiếu to be.',
          hint: 'Hãy tìm động từ thì hiện tại đơn có đuôi -s.'
        }
      }
    },
    {
      id: 'u7_pq5',
      question: 'You should turn off the tap ______ you finish using water.',
      options: [
        'before',
        'while',
        'after',
        'until'
      ],
      correctIndex: 2,
      explanation: '"after" (sau khi): Bạn nên khóa vòi nước sau khi dùng nước xong để tiết kiệm nước.',
      hint: 'Hãy suy nghĩ về trình tự hành động: chúng ta khóa vòi nước vào lúc nào (trước, trong khi hay sau khi dùng xong)?',
      knowledgeTopic: 'Từ nối chỉ thời gian',
      wrongFeedbacks: {
        0: {
          error: 'Before nghĩa là trước khi, khóa vòi nước trước khi dùng xong thì không thể dùng nước được.',
          hint: 'Từ nối nào mang nghĩa là "sau khi"?'
        },
        1: {
          error: 'While nghĩa là trong khi, không hợp lý với việc tắt vòi nước.',
          hint: 'Hành động tắt vòi nước diễn ra sau khi đã hoàn thành việc sử dụng.'
        },
        3: {
          error: 'Until nghĩa là cho đến khi, làm câu mang nghĩa sai lệch.',
          hint: 'Hãy tìm từ nối có nghĩa là "sau khi".'
        }
      }
    },
    {
      id: 'u7_pq6',
      question: 'Tigers and sea turtles are ______ that need urgent protection from extinction.',
      options: [
        'endangered species',
        'single-use products',
        'plastic rubbish',
        'carbon footprints'
      ],
      correctIndex: 0,
      explanation: '"endangered species" (các loài có nguy cơ tuyệt chủng) là những loài sinh vật đang đứng trước nguy cơ biến mất vĩnh viễn.',
      hint: 'Em hãy chú ý ngữ cảnh nhắc đến các loài sinh vật đang bị đe dọa biến mất vĩnh viễn (extinction).',
      knowledgeTopic: 'Từ vựng Unit 7 – Sinh vật cần bảo vệ',
      wrongFeedbacks: {
        1: {
          error: 'Single-use products chỉ các sản phẩm dùng một lần rồi bỏ.',
          hint: 'Hãy chú ý cụm danh từ liên quan đến động thực vật hoang dã.'
        },
        2: {
          error: 'Plastic rubbish là rác thải nhựa.',
          hint: 'Hãy tìm cụm danh từ chỉ các loài sinh vật cần được bảo vệ.'
        },
        3: {
          error: 'Carbon footprints là lượng khí thải carbon tạo ra.',
          hint: 'Hãy nhớ lại cụm từ chỉ các loài có nguy cơ tuyệt chủng trong SGK.'
        }
      }
    },
    {
      id: 'u7_pq7',
      question: 'We should not leave the lights on ______ we are not using them.',
      options: [
        'when',
        'until',
        'as soon as',
        'after'
      ],
      correctIndex: 0,
      explanation: '"when" (khi): Chúng ta không nên để đèn sáng khi không sử dụng chúng để tiết kiệm điện.',
      hint: 'Hãy chọn liên từ mang nghĩa "khi / vào lúc" để chỉ hoàn cảnh không nên bật đèn.',
      knowledgeTopic: 'Cách dùng liên từ When',
      wrongFeedbacks: {
        1: {
          error: 'Until nghĩa là cho đến khi, làm câu mang nghĩa phi lý.',
          hint: 'Từ nối nào mang nghĩa là "khi"?'
        },
        2: {
          error: 'As soon as nghĩa là ngay khi, thường dùng với hai sự việc nối tiếp nhau.',
          hint: 'Hãy tìm liên từ thời gian phổ biến nhất có nghĩa là "khi".'
        },
        3: {
          error: 'After nghĩa là sau khi.',
          hint: 'Liên từ ngắn bắt đầu bằng chữ "w" mang nghĩa "khi" là gì?'
        }
      }
    },
    {
      id: 'u7_pq8',
      question: 'People can prevent water pollution by ______ into proper waste bins instead of lakes.',
      options: [
        'throwing bottles',
        'pouring chemicals',
        'putting rubbish',
        'leaving plastic bags'
      ],
      correctIndex: 2,
      explanation: 'Cụm từ "putting rubbish" (bỏ rác vào thùng quy định) là hành động đúng đắn giúp ngăn ngừa ô nhiễm nguồn nước.',
      hint: 'Em hãy chọn cụm động từ thể hiện hành động giữ gìn vệ sinh và xử lý rác đúng nơi quy định.',
      knowledgeTopic: 'Bảo vệ nguồn nước',
      wrongFeedbacks: {
        0: {
          error: 'Ném chai lọ vào hồ nước làm nguồn nước bị ô nhiễm nặng hơn.',
          hint: 'Hãy tìm hành vi đúng đắn giúp bảo vệ môi trường.'
        },
        1: {
          error: 'Đổ hóa chất vào sông hồ là hành vi hủy hoại nghiêm trọng nguồn nước.',
          hint: 'Hành động nào giúp xử lý rác đúng nơi quy định?'
        },
        3: {
          error: 'Vứt lại túi nilon trên bãi biển sẽ khiến rác trôi dạt ra biển.',
          hint: 'Bỏ rác vào thùng rác quy định là giải pháp đúng đắn.'
        }
      }
    },
    {
      id: 'u7_pq9',
      question: 'We should wait ______ the club leader gives us instructions.',
      options: [
        'until',
        'while',
        'after',
        'as soon as'
      ],
      correctIndex: 0,
      explanation: 'wait until... (chờ cho đến khi...): Chúng ta nên đợi cho đến khi người phụ trách câu lạc bộ đưa ra hướng dẫn.',
      hint: 'Động từ "wait" (chờ đợi) thường đi liền với liên từ mang nghĩa "cho đến khi".',
      knowledgeTopic: 'Liên từ thời gian until',
      wrongFeedbacks: {
        1: {
          error: 'While mang nghĩa là trong khi.',
          hint: 'Chờ đợi cho tới một thời điểm ta dùng liên từ nào?'
        },
        2: {
          error: 'After mang nghĩa là sau khi.',
          hint: 'Từ nối nào mang nghĩa là "cho đến khi"?'
        },
        3: {
          error: 'As soon as mang nghĩa là ngay khi.',
          hint: 'Hãy tìm từ nối bắt đầu bằng chữ "u" mang nghĩa "cho đến khi".'
        }
      }
    },
    {
      id: 'u7_pq10',
      question: '“Excuse me teacher, ______ does this English phrase mean?”',
      options: [
        'Where',
        'How often',
        'Who',
        'What'
      ],
      correctIndex: 3,
      explanation: 'Từ để hỏi "What" đi với "mean" để hỏi về ý nghĩa của một từ/cụm từ: "What does this phrase mean?" (Cụm từ này có nghĩa là gì?).',
      hint: 'Em hãy xác định từ để hỏi thích hợp khi muốn tìm hiểu ý nghĩa (meaning) của một từ hoặc cụm từ.',
      knowledgeTopic: 'Giao tiếp tình huống (Asking for meaning)',
      wrongFeedbacks: {
        0: {
          error: 'Where là từ dùng để hỏi về nơi chốn/địa điểm.',
          hint: 'Từ để hỏi nào dùng để hỏi về ý nghĩa hoặc khái niệm?'
        },
        1: {
          error: 'How often là cụm từ hỏi về tần suất diễn ra của sự việc.',
          hint: 'Hãy chọn từ để hỏi quen thuộc cho câu hỏi "cái gì / nghĩa là gì".'
        },
        2: {
          error: 'Who là từ dùng để hỏi về người.',
          hint: 'Để hỏi một cụm từ có ý nghĩa gì, ta dùng từ để hỏi nào?'
        }
      }
    }
  ]
};

// ==================== UNIT 8: SHOPPING ====================
export const ENGLISH_UNIT_8_DATA: EnglishUnitData = {
  id: 'ch_tienganh_8',
  unitNumber: 8,
  title: 'Unit 8: Shopping',
  topic: 'Shopping, Adverbs of frequency, Present simple for future events',
  description: 'Từ vựng các loại hình mua sắm, trạng từ chỉ tần suất và thì hiện tại đơn diễn tả sự việc theo lịch trình trong tương lai theo SGK Tiếng Anh 8 Global Success.',

  // ==================== TAB 1: 10 TỪ VỰNG TRỌNG TÂM ====================
  // Đánh số thứ tự từ 1 đến 10, chỉ hiển thị từ tiếng Anh và nghĩa tiếng Việt
  vocabularyList: [
    {
      id: 'u8_v1',
      word: 'open-air market',
      partOfSpeech: '',
      meaning: 'chợ ngoài trời'
    },
    {
      id: 'u8_v2',
      word: 'supermarket',
      partOfSpeech: '',
      meaning: 'siêu thị'
    },
    {
      id: 'u8_v3',
      word: 'specialty shop',
      partOfSpeech: '',
      meaning: 'cửa hàng chuyên doanh'
    },
    {
      id: 'u8_v4',
      word: 'discount shop',
      partOfSpeech: '',
      meaning: 'cửa hàng giảm giá'
    },
    {
      id: 'u8_v5',
      word: 'online shop',
      partOfSpeech: '',
      meaning: 'cửa hàng trực tuyến'
    },
    {
      id: 'u8_v6',
      word: 'price tag',
      partOfSpeech: '',
      meaning: 'nhãn ghi giá'
    },
    {
      id: 'u8_v7',
      word: 'bargain',
      partOfSpeech: '',
      meaning: 'mặc cả'
    },
    {
      id: 'u8_v8',
      word: 'on sale',
      partOfSpeech: '',
      meaning: 'đang được giảm giá'
    },
    {
      id: 'u8_v9',
      word: 'browsing',
      partOfSpeech: '',
      meaning: 'xem hàng, xem qua các sản phẩm'
    },
    {
      id: 'u8_v10',
      word: 'shopaholic',
      partOfSpeech: '',
      meaning: 'người nghiện mua sắm'
    }
  ],

  // 5 CÂU HỎI CỦNG CỐ TỪ VỰNG UNIT 8
  vocabQuestions: [
    {
      id: 'u8_vq1',
      question: 'My mother enjoys going to the local ______ because farmers sell fresh fruit and vegetables in open outdoor spaces.',
      options: [
        'price tag',
        'open-air market',
        'shopaholic',
        'browsing'
      ],
      correctIndex: 1,
      explanation: '"open-air market" là chợ ngoài trời, nơi họp chợ và buôn bán rau củ quả ở không gian mở ngoài trời.',
      hint: 'Em hãy chú ý cụm từ "open outdoor spaces" (không gian mở ngoài trời) để chọn loại chợ phù hợp nhé.',
      knowledgeTopic: 'Từ vựng Unit 8 – Địa điểm mua sắm',
      wrongFeedbacks: {
        0: {
          error: 'Price tag là nhãn ghi giá tiền của sản phẩm, không phải nơi bán rau củ.',
          hint: 'Hãy tìm cụm từ chỉ một khu chợ họp ở ngoài trời.'
        },
        2: {
          error: 'Shopaholic là người nghiện mua sắm, danh từ chỉ người.',
          hint: 'Đề bài đang nói về một địa điểm họp chợ buôn bán ngoài trời.'
        },
        3: {
          error: 'Browsing là hành động xem lướt qua các sản phẩm.',
          hint: 'Em hãy chọn danh từ chỉ khu chợ ngoài trời.'
        }
      }
    },
    {
      id: 'u8_vq2',
      question: 'Can you help me find the ______ on this coat? I want to know how much money it costs.',
      options: [
        'price tag',
        'supermarket',
        'discount shop',
        'online shop'
      ],
      correctIndex: 0,
      explanation: '"price tag" là nhãn ghi giá, ghi rõ số tiền cần trả cho món đồ.',
      hint: 'Em hãy để ý cụm từ "how much money it costs" (món đồ có giá bao nhiêu tiền) để tìm vật ghi thông tin giá cả nhé.',
      knowledgeTopic: 'Từ vựng Unit 8 – Nhãn giá',
      wrongFeedbacks: {
        1: {
          error: 'Supermarket là siêu thị.',
          hint: 'Người hỏi muốn xem chiếc nhãn đính trên áo để biết giá tiền.'
        },
        2: {
          error: 'Discount shop là cửa hàng giảm giá.',
          hint: 'Vật gì được gắn trên quần áo để ghi mức giá của nó?'
        },
        3: {
          error: 'Online shop là cửa hàng trực tuyến.',
          hint: 'Hãy tìm từ chỉ chiếc nhãn ghi giá tiền.'
        }
      }
    },
    {
      id: 'u8_vq3',
      question: 'At traditional markets, my grandmother often tries to ______ with the seller to get a lower price.',
      options: [
        'close',
        'browse',
        'bargain',
        'open'
      ],
      correctIndex: 2,
      explanation: '"bargain" (động từ) có nghĩa là mặc cả, trả giá với người bán để có được mức giá tốt hơn.',
      hint: 'Em hãy chú ý cụm từ "to get a lower price" (để có mức giá thấp hơn) và nhớ lại hành động thương lượng giá cả ở chợ truyền thống.',
      knowledgeTopic: 'Từ vựng Unit 8 – Hành vi mua sắm',
      wrongFeedbacks: {
        0: {
          error: 'Close có nghĩa là đóng lại hoặc đóng cửa.',
          hint: 'Hành động trao đổi với người bán để mua rẻ hơn gọi là gì?'
        },
        1: {
          error: 'Browse là xem lướt qua hàng hóa.',
          hint: 'Ở đây bà đang chủ động thương lượng để người bán bớt giá.'
        },
        3: {
          error: 'Open có nghĩa là mở ra.',
          hint: 'Hãy nhớ lại động từ chỉ việc mặc cả giá.'
        }
      }
    },
    {
      id: 'u8_vq4',
      question: 'All shoes in that store are 40% cheaper than usual because they are ______ this week.',
      options: [
        'on sale',
        'out of stock',
        'in trouble',
        'at work'
      ],
      correctIndex: 0,
      explanation: '"on sale" có nghĩa là đang được giảm giá (có chương trình hạ giá/khuyến mãi).',
      hint: 'Em hãy chú ý thông tin "40% cheaper than usual" (rẻ hơn 40% so với thông thường) để chọn cụm từ chỉ tình trạng hàng hóa đang được giảm giá.',
      knowledgeTopic: 'Từ vựng Unit 8 – Giảm giá',
      wrongFeedbacks: {
        1: {
          error: 'Out of stock nghĩa là hết hàng trong kho.',
          hint: 'Khi sản phẩm được bán rẻ hơn giá ngày thường thì người ta dùng cụm từ nào?'
        },
        2: {
          error: 'In trouble nghĩa là đang gặp rắc rối.',
          hint: 'Hãy tìm cụm từ liên quan đến chương trình hạ giá bán.'
        },
        3: {
          error: 'At work nghĩa là đang làm việc.',
          hint: 'Cụm từ bắt đầu bằng "on" chỉ hàng hóa đang được giảm giá là gì?'
        }
      }
    },
    {
      id: 'u8_vq5',
      question: 'Lan spends all her pocket money on new clothes every weekend even when her wardrobe is full. Her friends call her a ______.',
      options: [
        'specialty shop',
        'shopaholic',
        'supermarket',
        'price tag'
      ],
      correctIndex: 1,
      explanation: '"shopaholic" là người nghiện mua sắm, luôn thích mua sắm nhiều đến mức không kiềm chế được.',
      hint: 'Em hãy chú ý thói quen tiêu hết tiền để mua sắm liên tục và tìm từ chỉ người có thói quen này nhé.',
      knowledgeTopic: 'Từ vựng Unit 8 – Người nghiện mua sắm',
      wrongFeedbacks: {
        0: {
          error: 'Specialty shop là cửa hàng chuyên doanh, không phải danh từ chỉ người.',
          hint: 'Chủ ngữ là "Lan" (người), cần từ chỉ người nghiện mua sắm.'
        },
        2: {
          error: 'Supermarket là siêu thị.',
          hint: 'Hãy tìm từ có đuôi "-aholic" dùng để gọi người quá mê mua sắm.'
        },
        3: {
          error: 'Price tag là nhãn ghi giá tiền.',
          hint: 'Từ nào dùng để chỉ người luôn luôn mua sắm đồ đạc?'
        }
      }
    }
  ],

  // ==================== TAB 2: NGỮ PHÁP (GRAMMAR) ====================
  // Hai chủ điểm ngữ pháp trình bày từng dòng riêng biệt, rõ ràng, dễ hiểu
  grammarTopic: 'ADVERBS OF FREQUENCY & PRESENT SIMPLE FOR FUTURE EVENTS',
  grammarPoints: [
    {
      id: 'u8_gp1',
      title: 'Chủ điểm 1: Adverbs of frequency – Trạng từ chỉ tần suất',
      formula: 'Các từ cần có:\n• always – luôn luôn.\n• often – thường xuyên.\n• sometimes – thỉnh thoảng.\n• rarely – hiếm khi.\n• never – không bao giờ.\n\nGiải thích dễ hiểu:\n• Trạng từ chỉ tần suất dùng để diễn tả mức độ thường xuyên của một hành động.\n• Đứng trước động từ thường: S + Adv + V\n• Đứng sau động từ to be: S + be (am/is/are) + Adv',
      rule: 'Trạng từ chỉ tần suất diễn tả mức độ thường xuyên của hành động, đứng trước động từ thường và đứng sau động từ to be.',
      example: {
        english: 'I often go shopping with my mother. / Shopping centres are usually crowded at weekends.',
        vietnamese: 'Tôi thường xuyên đi mua sắm cùng mẹ. / Các trung tâm mua sắm thường đông đúc vào dịp cuối tuần.'
      }
    },
    {
      id: 'u8_gp2',
      title: 'Chủ điểm 2: Present simple for future events – Thì hiện tại đơn diễn tả sự việc trong tương lai',
      formula: 'Giải thích:\nDùng thì hiện tại đơn để nói về sự kiện trong tương lai đã được sắp xếp theo lịch trình, thời gian biểu hoặc kế hoạch cố định.\n\nTrình bày cấu trúc thành từng dòng riêng biệt:\n\nKhẳng định:\nS + V(s/es) + ...\n\nPhủ định:\nS + do/does not + V(nguyên mẫu) + ...\n\nNghi vấn:\nDo/Does + S + V(nguyên mẫu) + ...?\n\nLưu ý về chủ ngữ số ít và cách thêm -s/-es:\n• Chủ ngữ số ít (he, she, it, danh từ số ít): V thêm -s hoặc -es; câu phủ định/nghi vấn dùng "does".\n• Chủ ngữ số nhiều (I, you, we, they, danh từ số nhiều): V nguyên mẫu; câu phủ định/nghi vấn dùng "do".',
      rule: 'Dùng thì hiện tại đơn để nói về sự kiện trong tương lai đã được sắp xếp theo lịch trình, thời gian biểu hoặc kế hoạch cố định.',
      example: {
        english: 'The shopping centre opens at 9 a.m. tomorrow. / The shop doesn\'t open on Sundays. / Does the supermarket close at 10 p.m.?',
        vietnamese: 'Trung tâm mua sắm mở cửa lúc 9 giờ sáng mai. / Cửa hàng không mở cửa vào các ngày Chủ nhật. / Siêu thị đóng cửa lúc 10 giờ tối phải không?'
      }
    }
  ],

  // 10 CÂU HỎI CỦNG CỐ NGỮ PHÁP UNIT 8
  grammarQuestions: [
    {
      id: 'u8_gq1',
      question: 'My father is very busy on weekdays, so he ______ goes shopping from Monday to Friday.',
      options: [
        'always',
        'usually',
        'rarely',
        'often'
      ],
      correctIndex: 2,
      explanation: 'Bố rất bận vào các ngày trong tuần (very busy on weekdays), nên mức độ đi mua sắm từ thứ Hai đến thứ Sáu là "hiếm khi" (rarely).',
      hint: 'Em hãy đọc kỹ ngữ cảnh: Người rất bận rộn thì tần suất đi mua sắm sẽ nhiều hay ít?',
      knowledgeTopic: 'Trạng từ chỉ tần suất – Ngữ nghĩa',
      wrongFeedbacks: {
        0: {
          error: 'Always có nghĩa là luôn luôn (100%), không phù hợp với người rất bận rộn.',
          hint: 'Người bận rộn thì hành động này diễn ra rất ít khi.'
        },
        1: {
          error: 'Usually là thường xuyên, trái ngược với ngữ cảnh bận rộn.',
          hint: 'Hãy tìm trạng từ chỉ mức độ thỉnh thoảng hoặc hiếm hoi.'
        },
        3: {
          error: 'Often có nghĩa là thường lệ, thường xuyên.',
          hint: 'Hãy chọn trạng từ chỉ tần suất rất thấp.'
        }
      }
    },
    {
      id: 'u8_gq2',
      question: 'Minh ______ his homework right after returning home from the bookstore.',
      options: [
        'does usually',
        'usually does',
        'is usually do',
        'usually doing'
      ],
      correctIndex: 1,
      explanation: 'Trạng từ chỉ tần suất đứng TRƯỚC động từ thường. Với chủ ngữ số ít "Minh", động từ thường chia là "does": usually does.',
      hint: 'Em hãy nhớ lại quy tắc: Trạng từ chỉ tần suất đứng trước hay đứng sau động từ thường?',
      knowledgeTopic: 'Vị trí trạng từ chỉ tần suất với động từ thường',
      wrongFeedbacks: {
        0: {
          error: 'Vị trí này đặt trạng từ sau động từ thường là chưa đúng cấu trúc.',
          hint: 'Trạng từ chỉ tần suất phải đứng trước động từ thường.'
        },
        2: {
          error: 'Không kết hợp "is" với động từ nguyên mẫu "do" như vậy.',
          hint: 'Câu này chia ở thì hiện tại đơn với chủ ngữ số ít.'
        },
        3: {
          error: 'Động từ thêm đuôi -ing mà không có to be là sai ngữ pháp.',
          hint: 'Hãy xét vị trí trạng từ đứng trước động từ thường chia theo chủ ngữ số ít.'
        }
      }
    },
    {
      id: 'u8_gq3',
      question: 'Products at convenience stores are ______ ready for customers twenty-four hours a day.',
      options: [
        'always',
        'always are',
        'are always',
        'be always'
      ],
      correctIndex: 2,
      explanation: 'Trạng từ chỉ tần suất đứng SAU động từ to be: are always ready.',
      hint: 'Em hãy chú ý: Khi câu có động từ to be (are), trạng từ chỉ tần suất sẽ đứng trước hay đứng sau to be?',
      knowledgeTopic: 'Vị trí trạng từ chỉ tần suất với động từ to be',
      wrongFeedbacks: {
        0: {
          error: 'Nếu chỉ chọn always thì câu sẽ bị thiếu động từ to be đi kèm tính từ "ready".',
          hint: 'Câu cần có động từ to be đi kèm tính từ "ready".'
        },
        1: {
          error: 'Trạng từ đứng trước to be là chưa đúng thứ tự chuẩn.',
          hint: 'Quy tắc: To be đứng trước trạng từ chỉ tần suất.'
        },
        3: {
          error: 'Dạng nguyên mẫu "be" không phù hợp với chủ ngữ số nhiều ở hiện tại.',
          hint: 'Hãy chia động từ to be theo chủ ngữ số nhiều và đặt trạng từ ngay phía sau.'
        }
      }
    },
    {
      id: 'u8_gq4',
      question: 'She is a vegetarian, so she ______ buys meat or fish at the supermarket.',
      options: [
        'never',
        'always',
        'frequently',
        'usually'
      ],
      correctIndex: 0,
      explanation: 'Cô ấy ăn chay (vegetarian) nên cô ấy "không bao giờ" (never) mua thịt hay cá.',
      hint: 'Em hãy suy luận từ từ khóa "vegetarian" (người ăn chay): Người ăn chay có mua thịt cá không?',
      knowledgeTopic: 'Trạng từ chỉ tần suất – Ngữ cảnh thực tế',
      wrongFeedbacks: {
        1: {
          error: 'Always là luôn luôn, người ăn chay không ăn thịt cá.',
          hint: 'Người ăn chay hoàn toàn không dùng thịt hoặc cá.'
        },
        2: {
          error: 'Frequently nghĩa là thường xuyên.',
          hint: 'Tần suất của người ăn chay đối với thịt cá là 0%.'
        },
        3: {
          error: 'Usually là thường lệ.',
          hint: 'Hãy tìm trạng từ chỉ mức độ không bao giờ xảy ra.'
        }
      }
    },
    {
      id: 'u8_gq5',
      question: 'The shop assistants at this specialty shop ______ friendly and helpful to customers.',
      options: [
        'are always',
        'always are',
        'always be',
        'be always'
      ],
      correctIndex: 0,
      explanation: 'Trạng từ chỉ tần suất (always) đứng ngay SAU động từ to be (are): "are always".',
      hint: 'Em hãy nhớ lại quy tắc vị trí của trạng từ chỉ tần suất khi đi cùng động từ to be (am/is/are).',
      knowledgeTopic: 'Trật tự từ của trạng từ chỉ tần suất',
      wrongFeedbacks: {
        1: {
          error: 'Trạng từ always đứng trước động từ to be "are" là sai trật tự.',
          hint: 'Trạng từ chỉ tần suất đứng ở vị trí nào so với to be?'
        },
        2: {
          error: 'Sau chủ ngữ số nhiều ở hiện tại đơn, to be chia là "are", không để dạng nguyên thể "be".',
          hint: 'Động từ to be cần chia theo thì hiện tại đơn.'
        },
        3: {
          error: 'Động từ be chưa chia và sai vị trí so với trạng từ.',
          hint: 'To be chia theo ngôi thứ ba số nhiều là "are" và đứng trước trạng từ.'
        }
      }
    },
    {
      id: 'u8_gq6',
      question: 'The bakery near my house ______ at 6:30 a.m. every morning according to its opening schedule.',
      options: [
        'open',
        'opens',
        'opened',
        'is opening'
      ],
      correctIndex: 1,
      explanation: 'Thì hiện tại đơn diễn tả lịch trình/thời gian biểu cố định. Chủ ngữ số ít "The bakery" đi với động từ thêm -s: opens.',
      hint: 'Em hãy xác định chủ ngữ là số ít hay số nhiều và nhớ quy tắc chia động từ ở thì hiện tại đơn diễn tả lịch trình cố định.',
      knowledgeTopic: 'Hiện tại đơn cho lịch trình – Thể khẳng định',
      wrongFeedbacks: {
        0: {
          error: 'Chủ ngữ "The bakery" là danh từ số ít, động từ không để nguyên thể.',
          hint: 'Với danh từ số ít ở hiện tại đơn, động từ cần thêm đuôi gì?'
        },
        2: {
          error: 'Opened là thì quá khứ đơn, không dùng cho lịch trình mở cửa hàng ngày.',
          hint: 'Lịch trình thời gian biểu cố định được diễn tả bằng thì hiện tại đơn.'
        },
        3: {
          error: 'Thì hiện tại tiếp diễn không dùng cho lịch trình mở cửa cố định.',
          hint: 'Hãy dùng thì hiện tại đơn và chú ý ngôi của chủ ngữ.'
        }
      }
    },
    {
      id: 'u8_gq7',
      question: 'Our flight to Singapore ______ at 8:45 p.m. this evening.',
      options: [
        'departed',
        'depart',
        'departs',
        'will departing'
      ],
      correctIndex: 2,
      explanation: 'Lịch trình bay cố định dùng thì hiện tại đơn. Chủ ngữ số ít "Our flight" đi với động từ thêm -s: departs.',
      hint: 'Em hãy chú ý chủ ngữ "Our flight" là danh từ số ít, và câu diễn tả lịch trình phương tiện giao thông.',
      knowledgeTopic: 'Hiện tại đơn cho lịch trình – Lịch bay',
      wrongFeedbacks: {
        0: {
          error: 'Departed là quá khứ đơn, trong khi sự việc diễn ra vào tối nay (this evening).',
          hint: 'Lịch trình cố định trong tương lai dùng thì hiện tại đơn.'
        },
        1: {
          error: 'Chủ ngữ là danh từ số ít nên động từ cần biến đổi theo quy tắc hiện tại đơn.',
          hint: 'Động từ cần thêm đuôi -s hay giữ nguyên khi chủ ngữ là số ít?'
        },
        3: {
          error: 'Cấu trúc "will departing" sai ngữ pháp vì sau will phải là động từ nguyên mẫu.',
          hint: 'Hãy chia động từ theo thì hiện tại đơn cho chủ ngữ số ít.'
        }
      }
    },
    {
      id: 'u8_gq8',
      question: 'The flea market ______ on weekdays; it only opens on Saturdays and Sundays.',
      options: [
        "not operate",
        "don't operate",
        "isn't operate",
        "doesn't operate"
      ],
      correctIndex: 3,
      explanation: 'Câu phủ định thì hiện tại đơn với động từ thường: S (số ít) + does not (doesn\'t) + V (nguyên mẫu).',
      hint: 'Em hãy chú ý: Chủ ngữ "The flea market" là số ít và động từ theo sau là động từ thường. Trợ động từ phủ định nào là chính xác?',
      knowledgeTopic: 'Hiện tại đơn cho lịch trình – Thể phủ định',
      wrongFeedbacks: {
        0: {
          error: 'Không thể ghép trực tiếp từ "not" đứng trước động từ thường mà thiếu trợ động từ.',
          hint: 'Hãy tìm dạng phủ định có trợ động từ phù hợp với ngôi thứ ba số ít.'
        },
        1: {
          error: 'Don\'t chỉ dùng cho chủ ngữ số nhiều (I, you, we, they).',
          hint: 'Chủ ngữ là danh từ số ít thì dùng trợ động từ phủ định nào?'
        },
        2: {
          error: 'To be "isn\'t" không đi trực tiếp với động từ thường nguyên mẫu "operate".',
          hint: 'Phủ định động từ thường ở hiện tại đơn cần dùng trợ động từ do/does.'
        }
      }
    },
    {
      id: 'u8_gq9',
      question: '______ the shopping mall close at 10:00 p.m. tomorrow evening?',
      options: [
        'Do',
        'Does',
        'Is',
        'Are'
      ],
      correctIndex: 1,
      explanation: 'Cấu trúc câu hỏi nghi vấn thì hiện tại đơn diễn tả lịch trình với chủ ngữ số ít: Does + S + V(nguyên mẫu)...?',
      hint: 'Em hãy nhìn vào động từ nguyên mẫu "close" và chủ ngữ số ít "the shopping mall" để chọn trợ động từ đứng đầu câu hỏi.',
      knowledgeTopic: 'Hiện tại đơn cho lịch trình – Thể nghi vấn',
      wrongFeedbacks: {
        0: {
          error: 'Do chỉ đi với chủ ngữ số nhiều.',
          hint: 'Chủ ngữ "the shopping mall" là danh từ số ít, cần trợ động từ nào?'
        },
        2: {
          error: 'Is là động từ to be, không dùng làm trợ động từ cho động từ thường nguyên mẫu "close".',
          hint: 'Câu hỏi thì hiện tại đơn với động từ thường bắt đầu bằng Do hoặc Does.'
        },
        3: {
          error: 'Are dùng cho chủ ngữ số nhiều.',
          hint: 'Hãy chọn trợ động từ dành cho danh từ số ít.'
        }
      }
    },
    {
      id: 'u8_gq10',
      question: 'The English test ______ at 2:00 p.m. next Monday, so make sure you arrive on time.',
      options: [
        'started',
        'start',
        'starting',
        'starts'
      ],
      correctIndex: 3,
      explanation: 'Lịch thi là sự kiện theo thời gian biểu cố định nên dùng thì hiện tại đơn. Chủ ngữ số ít "The English test" đi với "starts".',
      hint: 'Em hãy nhớ lại: Sự kiện tương lai diễn ra theo thời gian biểu hoặc lịch trình của trường lớp thì dùng thì gì và chia như thế nào với chủ ngữ số ít?',
      knowledgeTopic: 'Hiện tại đơn cho lịch trình – Thời gian biểu học tập',
      wrongFeedbacks: {
        0: {
          error: 'Started là thì quá khứ đơn, trong khi sự kiện diễn ra vào thứ Hai tới (next Monday).',
          hint: 'Lịch trình tương lai diễn tả bằng thì hiện tại đơn.'
        },
        1: {
          error: 'Chủ ngữ "The English test" là danh từ số ít.',
          hint: 'Ở thì hiện tại đơn, danh từ số ít yêu cầu động từ phải có đuôi gì?'
        },
        2: {
          error: 'Starting là dạng V-ing, không thể đứng làm vị ngữ chính mà không có to be.',
          hint: 'Hãy tìm động từ được chia ở thì hiện tại đơn.'
        }
      }
    }
  ],

  // ==================== TAB 3: LUYỆN TẬP (PRACTICE) ====================
  // 10 câu hỏi vận dụng tổng hợp Unit 8: Từ vựng mua sắm, trạng từ tần suất, vị trí trạng từ, thì hiện tại đơn cho lịch trình
  practiceQuestions: [
    {
      id: 'u8_pq1',
      question: 'A ______ is a retail store that sells goods at lower prices than standard retail stores.',
      options: [
        'discount shop',
        'price tag',
        'shopaholic',
        'open-air market'
      ],
      correctIndex: 0,
      explanation: '"discount shop" là cửa hàng giảm giá, chuyên bán các mặt hàng với mức giá rẻ hơn thông thường.',
      hint: 'Em hãy chú ý cụm từ "sells goods at lower prices" (bán hàng với giá thấp hơn) để nhận biết loại cửa hàng này nhé.',
      knowledgeTopic: 'Tổng hợp Unit 8 – Cửa hàng giảm giá',
      wrongFeedbacks: {
        1: {
          error: 'Price tag là nhãn ghi giá tiền, không phải cửa hàng bán lẻ.',
          hint: 'Đề bài đang hỏi về một loại cửa hàng bán hàng giá hạ.'
        },
        2: {
          error: 'Shopaholic là người nghiện mua sắm.',
          hint: 'Hãy tìm danh từ chỉ một cửa hàng giảm giá.'
        },
        3: {
          error: 'Open-air market là chợ ngoài trời, không mang nghĩa chuyên biệt về bán đồ hạ giá.',
          hint: 'Từ nào có chứa chữ "discount" (giảm giá)?'
        }
      }
    },
    {
      id: 'u8_pq2',
      question: 'Nam and his classmates ______ go to the supermarket together on Saturday afternoons.',
      options: [
        'often going',
        'are often',
        'often are',
        'often'
      ],
      correctIndex: 3,
      explanation: 'Câu đã có động từ thường "go". Trạng từ chỉ tần suất đứng trước động từ thường: often go.',
      hint: 'Em hãy quan sát xem trong câu đã có động từ thường "go" chưa, và trạng từ chỉ tần suất sẽ đứng ở vị trí nào so với động từ đó.',
      knowledgeTopic: 'Tổng hợp Unit 8 – Trạng từ trước động từ thường',
      wrongFeedbacks: {
        0: {
          error: 'Hai động từ đuôi -ing đi liền nhau không đúng ngữ pháp.',
          hint: 'Động từ chính "go" đã có sẵn, em chỉ cần chọn trạng từ.'
        },
        1: {
          error: 'Nếu thêm "are" thì câu sẽ thừa động từ to be trước động từ thường "go".',
          hint: 'Trong câu đã có động từ thường "go", chỉ cần điền trạng từ chỉ tần suất.'
        },
        2: {
          error: 'Vừa có "are" vừa có "go" là sai cấu trúc ngữ pháp.',
          hint: 'Hãy chọn phương án chỉ gồm trạng từ chỉ tần suất đứng trước động từ thường.'
        }
      }
    },
    {
      id: 'u8_pq3',
      question: 'We love ______ through different clothes racks to see what is new, even when we have no intention of buying.',
      options: [
        'closing',
        'browsing',
        'bargaining',
        'pricing'
      ],
      correctIndex: 1,
      explanation: '"browsing" là việc xem hàng, ngắm nghía qua các sản phẩm mà không nhất thiết phải mua.',
      hint: 'Em hãy chú ý cụm từ "to see what is new, even when we have no intention of buying" (để xem có gì mới dù không định mua) để tìm từ vựng phù hợp.',
      knowledgeTopic: 'Tổng hợp Unit 8 – Xem hàng hóa',
      wrongFeedbacks: {
        0: {
          error: 'Closing nghĩa là đóng cửa.',
          hint: 'Hành động ngắm nghía xem qua hàng hóa gọi là gì?'
        },
        2: {
          error: 'Bargaining là mặc cả giá tiền.',
          hint: 'Khi chỉ xem hàng mà không định mua thì hành động đó là gì?'
        },
        3: {
          error: 'Pricing là định giá.',
          hint: 'Hãy tìm từ mang nghĩa là xem hàng, lướt qua sản phẩm.'
        }
      }
    },
    {
      id: 'u8_pq4',
      question: 'What time ______ the supermarket open on Sunday mornings?',
      options: [
        'is',
        'do',
        'does',
        'are'
      ],
      correctIndex: 2,
      explanation: 'Câu hỏi ở thì hiện tại đơn với động từ thường "open" và chủ ngữ số ít "the supermarket": What time + does + S + V(nguyên mẫu)?',
      hint: 'Em hãy xác định chủ ngữ "the supermarket" là danh từ số ít hay số nhiều để chọn trợ động từ thích hợp trong câu hỏi.',
      knowledgeTopic: 'Tổng hợp Unit 8 – Câu hỏi lịch trình hiện tại đơn',
      wrongFeedbacks: {
        0: {
          error: 'To be "is" không làm trợ động từ cho động từ thường "open".',
          hint: 'Câu hỏi có động từ thường ở hiện tại đơn dùng trợ động từ do/does.'
        },
        1: {
          error: 'Trợ động từ "do" dùng cho chủ ngữ số nhiều.',
          hint: 'Chủ ngữ ở đây là danh từ số ít, cần trợ động từ nào?'
        },
        3: {
          error: 'Are dùng cho ngôi số nhiều.',
          hint: 'Hãy tìm trợ động từ dành cho ngôi thứ ba số ít.'
        }
      }
    },
    {
      id: 'u8_pq5',
      question: 'Mary ______ late for her shift at the specialty bookstore; she is always punctual.',
      options: [
        'always is',
        'never is',
        'is always',
        'is never'
      ],
      correctIndex: 3,
      explanation: 'Mary luôn đúng giờ (always punctual) nên cô ấy "không bao giờ" muộn. Trạng từ never đứng sau to be: is never late.',
      hint: 'Em hãy đọc vế sau: "she is always punctual" (cô ấy luôn luôn đúng giờ). Vậy cô ấy có đi muộn không, và to be đứng trước hay sau trạng từ tần suất?',
      knowledgeTopic: 'Tổng hợp Unit 8 – Trạng từ sau động từ to be',
      wrongFeedbacks: {
        0: {
          error: 'Sai cả vị trí trạng từ và nghĩa câu.',
          hint: 'Quy tắc: To be đứng trước trạng từ chỉ tần suất.'
        },
        1: {
          error: 'Trạng từ never đứng trước động từ to be "is" là sai vị trí.',
          hint: 'Trạng từ chỉ tần suất đứng sau động từ to be.'
        },
        2: {
          error: 'Always late nghĩa là luôn đi muộn, trái ngược với "luôn đúng giờ".',
          hint: 'Hãy chọn trạng từ mang nghĩa không bao giờ và đứng đúng vị trí sau to be.'
        }
      }
    },
    {
      id: 'u8_pq6',
      question: 'The annual book fair ______ next Friday and lasts for three days.',
      options: [
        'begin',
        'begins',
        'began',
        'is beginning'
      ],
      correctIndex: 1,
      explanation: 'Hội chợ sách diễn ra theo lịch trình cố định nên dùng thì hiện tại đơn. Chủ ngữ số ít "The annual book fair" đi với "begins" (hòa hợp với động từ "lasts" ở vế sau).',
      hint: 'Em hãy chú ý động từ "lasts" ở vế sau được chia ở thì hiện tại đơn số ít, do đó động từ ở chỗ trống cũng phải tương ứng.',
      knowledgeTopic: 'Tổng hợp Unit 8 – Sự kiện theo lịch trình',
      wrongFeedbacks: {
        0: {
          error: 'Chủ ngữ "The annual book fair" là danh từ số ít, động từ không để nguyên thể.',
          hint: 'Động từ ở thì hiện tại đơn với danh từ số ít cần thêm đuôi gì?'
        },
        2: {
          error: 'Began là quá khứ đơn, sự kiện diễn ra vào thứ Sáu tới (next Friday).',
          hint: 'Lịch trình tương lai dùng thì hiện tại đơn.'
        },
        3: {
          error: 'Cần chia thì hiện tại đơn để hòa hợp với động từ "lasts" phía sau.',
          hint: 'Hãy tìm dạng động từ hiện tại đơn có đuôi -s cho ngôi số ít.'
        }
      }
    },
    {
      id: 'u8_pq7',
      question: 'A shop that focuses specifically on selling one category of products, such as flowers or tea, is a ______.',
      options: [
        'discount shop',
        'supermarket',
        'specialty shop',
        'price tag'
      ],
      correctIndex: 2,
      explanation: '"specialty shop" là cửa hàng chuyên doanh, tập trung vào một nhóm sản phẩm đặc thù.',
      hint: 'Em hãy chú ý cụm từ "focuses specifically on selling one category of products" (tập trung đặc biệt vào một nhóm sản phẩm nhất định).',
      knowledgeTopic: 'Tổng hợp Unit 8 – Cửa hàng chuyên doanh',
      wrongFeedbacks: {
        0: {
          error: 'Discount shop là cửa hàng giảm giá.',
          hint: 'Từ vựng có gốc từ "special" mang nghĩa chuyên doanh là gì?'
        },
        1: {
          error: 'Supermarket là siêu thị bán đa dạng rất nhiều chủng loại hàng hóa.',
          hint: 'Cửa hàng chỉ chuyên bán một loại hàng gọi là gì?'
        },
        3: {
          error: 'Price tag là nhãn ghi giá.',
          hint: 'Hãy tìm danh từ chỉ cửa hàng chuyên biệt một mặt hàng.'
        }
      }
    },
    {
      id: 'u8_pq8',
      question: 'The local express train ______ at 7:15 p.m. this evening from platform 3.',
      options: [
        'left',
        'leave',
        'leaving',
        'leaves'
      ],
      correctIndex: 3,
      explanation: 'Thời gian biểu tàu xe dùng thì hiện tại đơn. Chủ ngữ số ít "The local express train" đi với động từ thêm -s: leaves.',
      hint: 'Em hãy chú ý: Lịch trình tàu xe dùng thì hiện tại đơn. Chủ ngữ "The local express train" là số ít hay số nhiều?',
      knowledgeTopic: 'Tổng hợp Unit 8 – Lịch tàu xe hiện tại đơn',
      wrongFeedbacks: {
        0: {
          error: 'Left là thì quá khứ đơn, trong khi sự việc diễn ra tối nay (this evening).',
          hint: 'Lịch trình tàu xe dùng thì hiện tại đơn.'
        },
        1: {
          error: 'Chủ ngữ là danh từ số ít, động từ không giữ nguyên mẫu ở thì hiện tại đơn.',
          hint: 'Với chủ ngữ ngôi thứ ba số ít, động từ chia như thế nào?'
        },
        2: {
          error: 'Leaving là dạng phân từ/danh động từ, không thể làm động từ chính của câu.',
          hint: 'Hãy chia động từ theo thì hiện tại đơn cho chủ ngữ số ít.'
        }
      }
    },
    {
      id: 'u8_pq9',
      question: 'My grandparents ______ shopping at the open-air market on Sunday mornings.',
      options: [
        'usually go',
        'are usually go',
        'go usually',
        'usually going'
      ],
      correctIndex: 0,
      explanation: 'Với động từ thường "go", trạng từ chỉ tần suất "usually" đứng trước động từ thường và không dùng động từ to be: "usually go".',
      hint: 'Em hãy nhớ lại vị trí của trạng từ chỉ tần suất đối với động từ thường và lưu ý không dùng thừa động từ to be.',
      knowledgeTopic: 'Tổng hợp Unit 8 – Trạng từ tần suất với động từ thường',
      wrongFeedbacks: {
        1: {
          error: 'Không dùng động từ to be (are) đứng kèm trực tiếp trước động từ thường (go).',
          hint: 'Trong câu có động từ thường ở hiện tại đơn thì không cần động từ to be.'
        },
        2: {
          error: 'Trạng từ tần suất không đứng sau động từ thường.',
          hint: 'Trạng từ chỉ tần suất đứng TRƯỚC động từ thường.'
        },
        3: {
          error: 'Dạng V-ing (going) không thể làm vị ngữ chính ở thì hiện tại đơn nếu thiếu trợ động từ.',
          hint: 'Chủ ngữ số nhiều đi với động từ nguyên mẫu có trạng từ đứng trước.'
        }
      }
    },
    {
      id: 'u8_pq10',
      question: 'The exhibition ______ until 8:00 p.m., so we can go there after dinner.',
      options: [
        "doesn't finish",
        "don't finish",
        "isn't finish",
        "not finishes"
      ],
      correctIndex: 0,
      explanation: 'Lịch trình phủ định thì hiện tại đơn với chủ ngữ số ít "The exhibition" và động từ thường "finish": doesn\'t finish.',
      hint: 'Em hãy chú ý: Chủ ngữ "The exhibition" là danh từ số ít và động từ theo sau là động từ thường. Cấu trúc phủ định chuẩn là gì?',
      knowledgeTopic: 'Tổng hợp Unit 8 – Thể phủ định lịch trình',
      wrongFeedbacks: {
        1: {
          error: 'Don\'t finish dùng cho chủ ngữ số nhiều.',
          hint: 'Chủ ngữ "The exhibition" là số ít, cần trợ động từ phủ định nào?'
        },
        2: {
          error: 'To be "isn\'t" không kết hợp trực tiếp với động từ thường nguyên mẫu "finish".',
          hint: 'Phủ định động từ thường ở hiện tại đơn dùng trợ động từ don\'t hoặc doesn\'t.'
        },
        3: {
          error: 'Không đặt từ "not" trực tiếp trước động từ có đuôi -es.',
          hint: 'Hãy dùng trợ động từ phủ định chuẩn xác cho danh từ số ít.'
        }
      }
    }
  ]
};

import { ENGLISH_UNIT_9_DATA } from './unit9Data';
export { ENGLISH_UNIT_9_DATA };
import { ENGLISH_UNIT_10_DATA } from './unit10Data';
export { ENGLISH_UNIT_10_DATA };
import { ENGLISH_UNIT_11_DATA } from './unit11Data';
export { ENGLISH_UNIT_11_DATA };
import { ENGLISH_UNIT_12_DATA } from './unit12Data';
export { ENGLISH_UNIT_12_DATA };

// ==================== EXPORT UNITS MAP ====================
export const ENGLISH_UNITS: Record<string, EnglishUnitData> = {
  ch_tienganh_1: ENGLISH_UNIT_1_DATA,
  ch_tienganh_2: ENGLISH_UNIT_2_DATA,
  ch_tienganh_3: ENGLISH_UNIT_3_DATA,
  ch_tienganh_4: ENGLISH_UNIT_4_DATA,
  ch_tienganh_5: ENGLISH_UNIT_5_DATA,
  ch_tienganh_6: ENGLISH_UNIT_6_DATA,
  ch_tienganh_7: ENGLISH_UNIT_7_DATA,
  ch_tienganh_8: ENGLISH_UNIT_8_DATA,
  ch_tienganh_9: ENGLISH_UNIT_9_DATA,
  ch_tienganh_10: ENGLISH_UNIT_10_DATA,
  ch_tienganh_11: ENGLISH_UNIT_11_DATA,
  ch_tienganh_12: ENGLISH_UNIT_12_DATA,
};







