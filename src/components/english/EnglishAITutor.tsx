import React, { useState, useRef, useEffect } from 'react';
import { 
  Bot, 
  X, 
  Send, 
  Sparkles, 
  HelpCircle, 
  Lightbulb, 
  BookOpen, 
  ChevronDown, 
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { QuizQuestion } from '../../types';

interface Message {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  hints?: string[];
  suggestedAction?: string;
}

interface EnglishAITutorProps {
  currentTab: 'vocab' | 'grammar' | 'practice';
  activeQuestion?: QuizQuestion | null;
  unitTitle?: string;
}

export const EnglishAITutor: React.FC<EnglishAITutorProps> = ({
  currentTab,
  activeQuestion,
  unitTitle = 'Unit 1: Leisure Time',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      sender: 'assistant',
      text: `Chào em! Thầy/Cô là TRỢ LÝ AI – BẠN ĐỒNG HÀNH TIẾNG ANH. 🌟\n\nThầy/Cô luôn ở đây để giúp em phân tích từ vựng, nhận diện dấu hiệu ngữ pháp và phương pháp loại trừ câu hỏi trong ${unitTitle}.\n\n*Nguyên tắc đồng hành:* Thầy/Cô sẽ không chọn đáp án thay em, mà sẽ cùng em tư duy để tìm ra đáp án đúng nhất nhé!`,
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && !isMinimized) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen, isMinimized]);

  // Socratic Response Engine
  const generateSocraticResponse = (query: string): { text: string; hints?: string[] } => {
    const q = query.toLowerCase().trim();

    // Student asks for direct answer
    if (
      q.includes('đáp án') || 
      q.includes('chọn câu nào') || 
      q.includes('chọn gì') || 
      q.includes('câu a hay') || 
      q.includes('chọn a') || 
      q.includes('chọn b') || 
      q.includes('chọn c') || 
      q.includes('chọn d') ||
      q.includes('giải hộ') ||
      q.includes('cho kết quả')
    ) {
      if (activeQuestion) {
        return {
          text: `Thầy/Cô không chọn đáp án trực tiếp giúp em nhé! 😉\n\nNhưng hãy cùng phân tích câu này:\n\n👉 **Câu hỏi:** "${activeQuestion.question}"\n\nEm hãy quan sát xem trong câu có **từ khóa** nào đứng ngay trước vị trí cần điền không? (Ví dụ: một động từ chỉ sự yêu thích, hay một giới từ như *of, on, about*?)`,
          hints: [
            activeQuestion.hint || 'Hãy chú ý xem từ phía trước đòi hỏi V-ing hay to-V.',
            'Thử loại bỏ các phương án có thì không phù hợp trước.',
          ],
        };
      }
      return {
        text: `Thầy/Cô không chọn đáp án hộ em đâu nhé! 😊 Hãy cho thầy/cô biết em đang phân vân giữa những phương án nào, hoặc câu hỏi có từ khóa gì, thầy/cô sẽ gợi mở cách suy luận cho em.`,
      };
    }

    // Question about active question / current question hint
    if (q.includes('câu đang làm') || q.includes('câu này') || q.includes('gợi ý')) {
      if (activeQuestion) {
        return {
          text: `Được rồi! Cùng phân tích câu hỏi số hiện tại nhé:\n\n📌 **Đề bài:** "${activeQuestion.question}"`,
          hints: activeQuestion.hints && activeQuestion.hints.length > 0 
            ? [
                `Gợi ý 1: ${activeQuestion.hints[0]}`,
                activeQuestion.hints.length > 1 ? `Gợi ý 2: ${activeQuestion.hints[1]}` : 'Kiểm tra kỹ chủ ngữ và cấu trúc tương ứng.',
              ]
            : [activeQuestion.hint || 'Hãy tìm từ khóa chỉ mức độ thích/ghét trong câu!'],
        };
      }
      return {
        text: `Em đang ở tab ${currentTab === 'vocab' ? 'Từ vựng' : currentTab === 'grammar' ? 'Ngữ pháp' : 'Luyện tập'}. Em hãy mở một câu hỏi trắc nghiệm bên dưới để Thầy/Cô gợi ý chi tiết nhé!`,
      };
    }

    // Verbs of liking / disliking
    if (
      q.includes('fancy') || 
      q.includes('enjoy') || 
      q.includes('detest') || 
      q.includes('mind') || 
      q.includes('adore')
    ) {
      return {
        text: `✨ **Quy tắc vàng với nhóm động từ yêu/ghét tuyệt đối:**\n\nSau các động từ:\n- **enjoy** (thích thú)\n- **fancy** (thích, muốn)\n- **adore** (mê mẩn, yêu tha thiết)\n- **mind** (phiền, ngại)\n- **detest** (cực kỳ ghét)\n\n👉 BẮT BUỘC theo sau là một **Danh động từ (V-ing)**!\n*Ví dụ:* Do you fancy **hanging out**? / She detests **washing** the dishes.`,
        hints: ['Không bao giờ dùng "to-V" sau enjoy/fancy/detest/mind/adore nhé!'],
      };
    }

    // Like, love, hate, prefer
    if (
      q.includes('like') || 
      q.includes('love') || 
      q.includes('hate') || 
      q.includes('prefer')
    ) {
      return {
        text: `💡 **Nhóm động từ 2 cách dùng:**\n\nCác động từ **like, love, hate, prefer** có thể đi với:\n1. **V-ing** (khi nói về sở thích chung chung, cảm giác)\n2. **To-V** (khi nói về thói quen, lựa chọn phù hợp tại thời điểm cụ thể)\n\n👉 Nghĩa của 2 dạng này gần như tương đương trong chương trình Tiếng Anh 8 Global Success!`,
      };
    }

    // Adjective + Preposition (fond of, keen on, crazy about, interested in, into)
    if (
      q.includes('fond') || 
      q.includes('keen') || 
      q.includes('crazy') || 
      q.includes('interested') || 
      q.includes('giới từ') || 
      q.includes('into')
    ) {
      return {
        text: `🎯 **Cụm tính từ + giới từ diễn tả sở thích:**\n\nNhớ kỹ các cặp "bất di bất dịch" này nhé:\n- **be fond + of** + V-ing/Noun\n- **be keen + on** + V-ing/Noun\n- **be crazy + about** + V-ing/Noun\n- **be interested + in** + V-ing/Noun\n- **be + into** + V-ing/Noun\n\n⚠️ *Lưu ý:* Sau tất cả các giới từ (of, on, about, in) nếu có động từ thì động từ đó LUÔN ở dạng **V-ing**!`,
      };
    }

    // Eliminate wrong options strategy
    if (q.includes('loại trừ') || q.includes('phân vân') || q.includes('mẹo')) {
      return {
        text: `🧠 **Chiến thuật loại trừ 3 bước khi làm bài trắc nghiệm Tiếng Anh 8:**\n\n1. **Bước 1:** Xác định từ khóa đứng trước chỗ trống (Verb of liking hay Adj + Prep?)\n2. **Bước 2:** Gạch bỏ ngay các phương án sai dạng (Ví dụ: sau *fancy* thì gạch ngay các phương án có *to-V* hoặc *động từ nguyên thể*).\n3. **Bước 3:** Xét thì và chủ ngữ của câu để chọn phương án chính xác nhất.`,
      };
    }

    // Unit 2: Comparative Adverbs (So sánh hơn của trạng từ)
    if (
      q.includes('so sánh') || 
      q.includes('trạng từ') || 
      q.includes('adverb') || 
      q.includes('comparative') ||
      q.includes('faster') ||
      q.includes('slowly') ||
      q.includes('fluently') ||
      q.includes('better') ||
      q.includes('worse')
    ) {
      return {
        text: `🌾 **Quy tắc so sánh hơn của trạng từ (Comparative Adverbs):**\n\n1. **Trạng từ dài** (phần lớn trạng từ từ 2 âm tiết trở lên, thường có đuôi -ly):\n👉 **more + adverb**\n*Ví dụ:* slowly → **more slowly**, fluently → **more fluently**.\n\n2. **Trạng từ ngắn** (thêm đuôi -er):\n👉 **adverb + -er**\n*Ví dụ:* fast → **faster**, hard → **harder**, early → **earlier**.\n\n3. **Trạng từ bất quy tắc** (học thuộc lòng):\n- **well → better** (tốt hơn, hay hơn)\n- **badly → worse** (tệ hơn, dở hơn)`,
        hints: ['Chú ý: Nếu câu có từ "than" đi sau động từ chỉ hành động, hãy xác định trạng từ là ngắn hay dài trước nhé!'],
      };
    }

    // Unit 2: Countryside Vocabulary
    if (
      q.includes('nông thôn') || 
      q.includes('countryside') || 
      q.includes('paddy') || 
      q.includes('harvester') || 
      q.includes('cattle') || 
      q.includes('poultry') || 
      q.includes('orchard') || 
      q.includes('canal') || 
      q.includes('picturesque') || 
      q.includes('cultivate')
    ) {
      return {
        text: `🌱 **Từ vựng Unit 2 – Life in the Countryside:**\n- **paddy field**: ruộng lúa\n- **harvest time**: mùa thu hoạch\n- **combine harvester**: máy gặt đập liên hợp\n- **cattle**: đàn gia súc (bò, trâu...)\n- **poultry**: đàn gia cầm (gà, vịt...)\n- **crops**: cây trồng, mùa màng\n- **orchard**: vườn cây ăn quả\n- **canal**: kênh, mương dẫn nước\n- **cultivate**: canh tác, trồng trọt\n- **picturesque**: đẹp như tranh vẽ`,
      };
    }

    // Unit 3: Simple & Compound Sentences (Câu đơn và câu ghép)
    if (
      q.includes('câu đơn') || 
      q.includes('câu ghép') || 
      q.includes('simple') || 
      q.includes('compound') || 
      q.includes('however') || 
      q.includes('therefore') || 
      q.includes('otherwise') ||
      q.includes('liên từ')
    ) {
      return {
        text: `🧩 **Phân biệt Câu đơn và Câu ghép (Unit 3):**\n\n1. **Câu đơn (Simple sentences):**\n👉 Chỉ gồm **đúng 1 mệnh đề độc lập** (1 cụm chủ vị độc lập).\n*Ví dụ:* Minh has some problems with his schoolwork. / I joined the arts club.\n\n2. **Câu ghép (Compound sentences):**\n👉 Gồm **2 hoặc nhiều mệnh đề độc lập**, nối với nhau bằng:\n- **Liên từ kết hợp:** for (bởi vì), and (và), but (nhưng), or (hoặc), so (vì vậy).\n- **Trạng từ liên kết:** however (tuy nhiên), therefore (do đó), otherwise (nếu không thì) — thường đứng sau dấu chấm phẩy (;) và trước dấu phẩy (,).`,
        hints: ['Mẹo nhận biết: Thấy 2 mệnh đề nối bằng "and/but/so" hoặc "; however, " thì đó là câu ghép!'],
      };
    }

    // Unit 3: Teenagers Vocabulary & Clubs
    if (
      q.includes('teenager') || 
      q.includes('club') || 
      q.includes('câu lạc bộ') || 
      q.includes('mạng xã hội') || 
      q.includes('upload') || 
      q.includes('browse') || 
      q.includes('notification') || 
      q.includes('pressure') || 
      q.includes('bully')
    ) {
      return {
        text: `🎒 **Từ vựng trọng tâm Unit 3 – Teenagers:**\n- **school club**: câu lạc bộ ở trường\n- **arts and crafts club**: CLB nghệ thuật và thủ công\n- **chess club**: CLB cờ vua\n- **sports club**: CLB thể thao\n- **social media**: mạng xã hội\n- **upload**: tải lên\n- **browse**: duyệt, tìm kiếm trên mạng\n- **notifications**: thông báo\n- **pressure**: áp lực, căng thẳng\n- **bully**: kẻ bắt nạt; bắt nạt`,
      };
    }

    // Unit 4: Ethnic Groups of Viet Nam Vocabulary
    if (
      q.includes('ethnic') || 
      q.includes('dân tộc') || 
      q.includes('stilt house') || 
      q.includes('nhà sàn') || 
      q.includes('terraced') || 
      q.includes('ruộng bậc thang') || 
      q.includes('communal house') || 
      q.includes('gong') || 
      q.includes('cồng chiêng') || 
      q.includes('livestock') || 
      q.includes('weaving')
    ) {
      return {
        text: `🎋 **Từ vựng trọng tâm Unit 4 – Ethnic Groups of Viet Nam:**\n- **ethnic group**: dân tộc\n- **minority group**: nhóm dân tộc thiểu số\n- **stilt house**: nhà sàn\n- **terraced fields**: ruộng bậc thang\n- **communal house**: nhà sinh hoạt cộng đồng (nhà Rông)\n- **folk dance**: điệu múa dân gian\n- **musical instrument**: nhạc cụ\n- **livestock**: gia súc, vật nuôi\n- **weaving**: nghề dệt, hoạt động dệt\n- **gong**: cồng, chiêng`,
      };
    }

    // Unit 4: Countable / Uncountable & Quantifiers (many, much, a few, a little)
    if (
      q.includes('đếm được') || 
      q.includes('không đếm được') || 
      q.includes('countable') || 
      q.includes('uncountable') || 
      q.includes('many') || 
      q.includes('much') || 
      q.includes('a few') || 
      q.includes('a little') ||
      q.includes('yes/no') ||
      q.includes('wh-')
    ) {
      return {
        text: `⚖️ **Ngữ pháp trọng tâm Unit 4:**\n\n1. **Câu hỏi Yes/No & Wh-questions:**\n- Yes/No: **Do/Does/Did + S + V...?** hoặc **Am/Is/Are + S...?**\n- Wh-question: **Wh-word + do/does/did/be + S + V...?**\n\n2. **Lượng từ (Quantifiers):**\n- **many / a few** + Danh từ đếm được số nhiều (houses, students, groups)\n- **much / a little** + Danh từ không đếm được (water, milk, rice, money, information)\n*Mẹo nhớ:* "a few / a little" mang nghĩa một ít đủ dùng; "few / little" mang nghĩa rất ít hầu như không có.`,
        hints: ['Xem kỹ danh từ phía sau có đuôi -s/-es (đếm được) hay là danh từ không đếm được (water, information) nhé!'],
      };
    }

    // Unit 5: Our Customs and Traditions Vocabulary
    if (
      q.includes('custom') || 
      q.includes('phong tục') || 
      q.includes('tradition') || 
      q.includes('truyền thống') || 
      q.includes('ceremony') || 
      q.includes('offering') || 
      q.includes('lễ vật') || 
      q.includes('reunion') || 
      q.includes('đoàn tụ') || 
      q.includes('martial arts') || 
      q.includes('võ thuật') || 
      q.includes('whale') || 
      q.includes('cá voi') || 
      q.includes('longevity') || 
      q.includes('trường thọ')
    ) {
      return {
        text: `🏮 **Từ vựng trọng tâm Unit 5 – Our Customs and Traditions:**\n- **custom**: phong tục\n- **tradition**: truyền thống\n- **wedding ceremony**: lễ cưới\n- **food offerings**: lễ vật, đồ cúng\n- **family reunion**: đoàn tụ gia đình\n- **martial arts**: võ thuật\n- **whale worship**: tục thờ cá voi\n- **longevity**: sự trường thọ\n- **festival goers**: người tham gia lễ hội\n- **decoration**: sự trang trí, đồ trang trí`,
      };
    }

    // Unit 5: Zero Article (Mạo từ bằng không)
    if (
      q.includes('zero article') || 
      q.includes('mạo từ') || 
      q.includes('article') || 
      q.includes('không dùng mạo từ') || 
      q.includes('sugar') || 
      q.includes('by boat') || 
      q.includes('by bus')
    ) {
      return {
        text: `⭕ **Quy tắc Zero Article (Không dùng mạo từ - Ø):**\n\n1. **Ø + Danh từ không đếm được / trừu tượng:** khi nói chung.\n*Ví dụ:* **Sugar** is not good for your teeth.\n\n2. **Ø + Danh từ số nhiều:** khi nói về sự vật/con người nói chung.\n*Ví dụ:* **Students** should work hard.\n\n3. **by + Phương tiện giao thông:** không dùng a/an/the.\n*Ví dụ:* We went there **by boat** (không dùng *by a boat* hay *by the boat*).`,
        hints: ['Ghi nhớ: Danh từ số nhiều nói chung và phương tiện sau "by" thì không dùng mạo từ nhé!'],
      };
    }

    // Unit 6: Lifestyles Vocabulary
    if (
      q.includes('lifestyle') || 
      q.includes('lối sống') || 
      q.includes('greet') || 
      q.includes('chào hỏi') || 
      q.includes('street food') || 
      q.includes('online learning') || 
      q.includes('native art') || 
      q.includes('tribal dance') || 
      q.includes('dog sled') || 
      q.includes('xe trượt tuyết')
    ) {
      return {
        text: `❄️ **Từ vựng trọng tâm Unit 6 – Lifestyles:**\n- **lifestyle**: lối sống\n- **greet**: chào hỏi\n- **street food**: thức ăn đường phố\n- **food in restaurants**: thức ăn tại nhà hàng\n- **online learning**: học trực tuyến\n- **native art**: nghệ thuật bản địa\n- **weaving**: nghề dệt, sự dệt vải\n- **tribal dance**: điệu múa bộ lạc\n- **making crafts**: làm đồ thủ công\n- **dog sled**: xe trượt tuyết do chó kéo`,
      };
    }

    // Unit 6: Future Simple & First Conditional
    if (
      q.includes('tương lai đơn') || 
      q.includes('future simple') || 
      q.includes('điều kiện loại 1') || 
      q.includes('first conditional') || 
      q.includes('unless') || 
      q.includes('if you') || 
      q.includes('will')
    ) {
      return {
        text: `⚡ **Ngữ pháp trọng tâm Unit 6:**\n\n1. **Thì tương lai đơn (Future simple):**\n- Cấu trúc: **S + will + V (nguyên mẫu)** / **S + won't + V** / **Will + S + V...?**\n- Dùng để diễn tả dự đoán, sự việc xảy ra trong tương lai.\n\n2. **Câu điều kiện loại 1 (First conditional):**\n- Cấu trúc: **If + S + V (hiện tại đơn), S + will + V (nguyên mẫu)**\n- *Lưu ý tuyệt đối:* Mệnh đề **If** KHÔNG dùng will!\n- **Unless = If ... not** (trừ phi, nếu không): Mệnh đề sau Unless luôn ở dạng khẳng định.`,
        hints: ['Mẹo làm bài: Trong câu điều kiện loại 1, mệnh đề If chia hiện tại đơn (V/V-s-es), mệnh đề chính dùng will + V!'],
      };
    }

    // Unit 7: Environmental Protection Vocabulary
    if (
      q.includes('environmental protection') ||
      q.includes('môi trường') ||
      q.includes('pollution') ||
      q.includes('ô nhiễm') ||
      q.includes('ecosystem') ||
      q.includes('hệ sinh thái') ||
      q.includes('habitat') ||
      q.includes('môi trường sống') ||
      q.includes('endangered') ||
      q.includes('tuyệt chủng') ||
      q.includes('carbon footprint') ||
      q.includes('single-use') ||
      q.includes('plastic rubbish') ||
      q.includes('rác thải') ||
      q.includes('save water')
    ) {
      return {
        text: `🌱 **Từ vựng trọng tâm Unit 7 – Environmental Protection:**\n1. **environmental protection**: bảo vệ môi trường\n2. **pollution**: sự ô nhiễm\n3. **ecosystem**: hệ sinh thái\n4. **habitat**: môi trường sống\n5. **endangered species**: các loài có nguy cơ tuyệt chủng\n6. **carbon footprint**: lượng khí thải carbon do một hoạt động tạo ra\n7. **single-use products**: sản phẩm dùng một lần\n8. **plastic rubbish**: rác thải nhựa\n9. **water pollution**: ô nhiễm nguồn nước\n10. **save water**: tiết kiệm nước`,
        hints: ['Hãy chú ý nghĩa của từ trong ngữ cảnh của câu để chọn phương án chính xác nhất!'],
      };
    }

    // Unit 7: Complex Sentences with Adverb Clauses of Time
    if (
      q.includes('câu phức') ||
      q.includes('complex sentence') ||
      q.includes('mệnh đề trạng ngữ') ||
      q.includes('mệnh đề thời gian') ||
      q.includes('adverb clause of time') ||
      q.includes('as soon as') ||
      q.includes('until') ||
      q.includes('while') ||
      q.includes('before') ||
      q.includes('after')
    ) {
      return {
        text: `⏱️ **Ngữ pháp trọng tâm Unit 7: Câu phức với mệnh đề trạng ngữ chỉ thời gian**\n\n1. **Câu phức (Complex sentences):**\n- Gồm một mệnh đề độc lập (mệnh đề chính) và ít nhất một mệnh đề phụ thuộc.\n- Mệnh đề phụ thuộc có thể đứng trước (ngăn cách bởi dấu phẩy ",") hoặc đứng sau mệnh đề chính.\n\n2. **Mệnh đề trạng ngữ chỉ thời gian (Adverb clauses of time):**\n- Thường bắt đầu bằng các liên từ chỉ thời gian:\n  • **when**: khi\n  • **while**: trong khi\n  • **before**: trước khi\n  • **after**: sau khi\n  • **as soon as**: ngay khi\n  • **until**: cho đến khi\n\n*Ví dụ:* As soon as they arrive, we'll have lunch. (Ngay khi họ đến, chúng tôi sẽ ăn trưa.)`,
        hints: [
          'Phân tích liên từ: "as soon as" (ngay khi), "until" (cho đến khi), "before" (trước khi), "after" (sau khi).',
          'Nếu mệnh đề chỉ thời gian đứng đầu câu, cần có dấu phẩy ngăn cách với mệnh đề chính.',
        ],
      };
    }

    // Unit 8: Shopping Vocabulary
    if (
      q.includes('shopping') ||
      q.includes('mua sắm') ||
      q.includes('open-air market') ||
      q.includes('supermarket') ||
      q.includes('specialty shop') ||
      q.includes('discount shop') ||
      q.includes('online shop') ||
      q.includes('price tag') ||
      q.includes('bargain') ||
      q.includes('on sale') ||
      q.includes('browsing') ||
      q.includes('shopaholic') ||
      q.includes('mặc cả') ||
      q.includes('nhãn giá')
    ) {
      return {
        text: `🛍️ **10 từ vựng trọng tâm Unit 8 – Shopping:**\n1. **open-air market** – chợ ngoài trời\n2. **supermarket** – siêu thị\n3. **specialty shop** – cửa hàng chuyên doanh\n4. **discount shop** – cửa hàng giảm giá\n5. **online shop** – cửa hàng trực tuyến\n6. **price tag** – nhãn ghi giá\n7. **bargain** – mặc cả\n8. **on sale** – đang được giảm giá\n9. **browsing** – xem hàng, xem qua các sản phẩm\n10. **shopaholic** – người nghiện mua sắm`,
        hints: ['Em hãy chú ý ngữ cảnh của câu (địa điểm, hành động hay danh từ chỉ người) để chọn từ phù hợp nhất nhé.'],
      };
    }

    // Unit 8: Adverbs of frequency & Present simple for future events
    if (
      q.includes('tần suất') ||
      q.includes('frequency') ||
      q.includes('always') ||
      q.includes('rarely') ||
      q.includes('thời gian biểu') ||
      q.includes('lịch trình') ||
      q.includes('timetable') ||
      q.includes('schedule') ||
      q.includes('future event') ||
      q.includes('opens at') ||
      q.includes('leaves at')
    ) {
      return {
        text: `🛒 **Ngữ pháp trọng tâm Unit 8:**\n\n1. **Adverbs of frequency (Trạng từ chỉ tần suất):**\n• always (luôn luôn), often (thường xuyên), sometimes (thỉnh thoảng), rarely (hiếm khi), never (không bao giờ).\n• **Vị trí:**\n  - Đứng **trước** động từ thường: *S + Adv + V* (Ví dụ: I often go shopping).\n  - Đứng **sau** động từ to be: *S + be + Adv* (Ví dụ: They are usually crowded).\n\n2. **Present simple for future events (Hiện tại đơn cho tương lai):**\n• Dùng để nói về sự kiện tương lai đã được sắp xếp theo lịch trình, thời gian biểu cố định.\n• **Cấu trúc:**\n  - Khẳng định: S + V(s/es)\n  - Phủ định: S + do/does not + V(nguyên mẫu)\n  - Nghi vấn: Do/Does + S + V(nguyên mẫu)?\n• *Ví dụ:* The shopping centre opens at 9 a.m. tomorrow.`,
        hints: [
          'Kiểm tra xem câu có động từ to be (am/is/are) hay động từ thường để xác định vị trí trạng từ tần suất.',
          'Chú ý chủ ngữ số ít hay số nhiều để chia động từ theo thời gian biểu cho đúng.',
        ],
      };
    }



    // Vocabulary query
    if (q.includes('nghĩa') || q.includes('từ mới') || q.includes('diy') || q.includes('origami') || q.includes('puzzle')) {
      return {
        text: `📚 **Các cụm từ chủ đề Leisure Time hay gặp trong SGK:**\n- **doing DIY**: làm đồ thủ công, tự sửa chữa/chế tạo đồ đạc\n- **doing puzzles**: giải đố, chơi xếp hình trí tuệ\n- **surfing the net**: lướt mạng Internet\n- **origami**: nghệ thuật gấp giấy Nhật Bản\n- **making crafts**: làm đồ thủ công mỹ nghệ\n- **hanging out**: đi chơi, la cà cùng bạn bè`,
      };
    }

    // Unit 12: Vocabulary (Planets, Space & Extraterrestrial Life)
    if (
      q.includes('hành tinh') ||
      q.includes('vũ trụ') ||
      q.includes('earth') ||
      q.includes('mars') ||
      q.includes('jupiter') ||
      q.includes('saturn') ||
      q.includes('telescope') ||
      q.includes('ufo') ||
      q.includes('rocket') ||
      q.includes('galaxy') ||
      q.includes('aliens') ||
      q.includes('possibility')
    ) {
      return {
        text: `🪐 **10 từ vựng trọng tâm Unit 12 – Life on Other Planets:**\n1. **Earth** – Trái Đất\n2. **Mars** – Sao Hỏa\n3. **Jupiter** – Sao Mộc\n4. **Saturn** – Sao Thổ\n5. **telescope** – Kính thiên văn\n6. **UFO** – Vật thể bay không xác định\n7. **rocket** – Tên lửa\n8. **galaxy** – Thiên hà\n9. **aliens** – Người ngoài hành tinh\n10. **possibility** – Khả năng`,
        hints: [
          'Em hãy quan sát đặc điểm của câu (tên hành tinh, dụng cụ quan sát, phương tiện hay sinh vật) để chọn từ phù hợp nhất nhé!',
        ],
      };
    }

    // Unit 12: Reported Speech (Questions)
    if (
      q.includes('câu hỏi tường thuật') ||
      q.includes('tường thuật') ||
      q.includes('reported speech') ||
      q.includes('reported question') ||
      q.includes('wh-question') ||
      q.includes('yes/no') ||
      q.includes('if') ||
      q.includes('whether') ||
      q.includes('wonder') ||
      q.includes('want to know')
    ) {
      return {
        text: `🛸 **Ngữ pháp trọng tâm Unit 12 – Reported Speech (Questions):**\n\n1. **Wh-questions:**\n• Công thức: **S + asked + (O) + Wh-word + S + V.**\n• Giữ nguyên từ để hỏi (*what, where, when, why, how...*).\n\n2. **Yes/No questions:**\n• Công thức: **S + asked + (O) + if / whether + S + V.**\n• Dùng *if* hoặc *whether* để nối mệnh đề.\n\n⚠️ **2 Quy tắc cốt lõi cần nhớ:**\n• Luôn đưa mệnh đề về trật tự trần thuật: **S + V** (không đảo trợ động từ lên trước S).\n• Phải **lùi thì** động từ và đổi trạng từ (now ➔ then, can ➔ could, will ➔ would, am/is ➔ was, are ➔ were).`,
        hints: [
          'Kiểm tra xem câu hỏi gốc là Wh-question (giữ từ để hỏi) hay Yes/No question (dùng if/whether).',
          'Nhớ rằng trong câu tường thuật, chủ ngữ luôn đứng TRƯỚC động từ và không dùng dấu hỏi chấm.',
        ],
      };
    }

    // General fallback guiding question
    return {
      text: `Thầy/Cô đã nhận được câu hỏi của em: "${query}".\n\nĐể tìm lời giải chính xác, em hãy tự hỏi:\n1. Câu này đang kiểm tra về **Từ vựng** (nghĩa của từ) hay **Ngữ pháp** (cấu trúc câu)?\n2. Dấu hiệu nhận biết trong câu là từ nào?\n\nEm hãy thử gõ suy đoán của em xem sao nhé, Thầy/Cô sẽ nhận xét ngay!`,
    };
  };

  const handleSend = (textToSend?: string) => {
    const text = (textToSend || input).trim();
    if (!text) return;

    const userMsg: Message = {
      id: `user_${Date.now()}`,
      sender: 'user',
      text,
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput('');

    // Generate response
    setTimeout(() => {
      const response = generateSocraticResponse(text);
      const botMsg: Message = {
        id: `bot_${Date.now()}`,
        sender: 'assistant',
        text: response.text,
        hints: response.hints,
      };
      setMessages((prev) => [...prev, botMsg]);
    }, 350);
  };

  const handleQuickPrompt = (prompt: string) => {
    handleSend(prompt);
  };

  return (
    <>
      {/* Floating Launcher Button */}
      {!isOpen && (
        <button
          onClick={() => {
            setIsOpen(true);
            setIsMinimized(false);
          }}
          className="fixed bottom-20 right-4 sm:bottom-6 sm:right-6 z-40 flex items-center gap-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-sky-500 to-indigo-600 text-white font-bold text-xs shadow-lg shadow-sky-500/30 hover:shadow-xl hover:scale-105 active:scale-95 transition-all cursor-pointer border-2 border-white/20"
          title="Mở Trợ lý AI Tiếng Anh"
        >
          <div className="relative">
            <Bot className="w-5 h-5 text-white animate-bounce" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-amber-400 rounded-full border-2 border-sky-600 animate-ping" />
          </div>
          <span className="tracking-wide">Hỏi Trợ lý AI</span>
        </button>
      )}

      {/* Floating Assistant Modal / Drawer */}
      {isOpen && (
        <div 
          className={`fixed z-50 transition-all duration-200 ${
            isMinimized 
              ? 'bottom-20 right-4 sm:bottom-6 sm:right-6 w-72' 
              : 'bottom-20 right-3 sm:bottom-6 sm:right-6 w-[calc(100vw-24px)] sm:w-96 max-h-[82vh] h-[540px]'
          } bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-sky-200 dark:border-slate-700 flex flex-col overflow-hidden backdrop-blur-md`}
        >
          {/* Header */}
          <div className="p-3.5 bg-gradient-to-r from-sky-500 via-sky-600 to-indigo-600 text-white flex items-center justify-between select-none">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="w-8 h-8 rounded-xl bg-white/20 backdrop-blur-xs flex items-center justify-center shrink-0">
                <Bot className="w-5 h-5 text-amber-200" />
              </div>
              <div className="min-w-0">
                <h3 className="font-extrabold text-[12px] leading-tight truncate text-white">
                  TRỢ LÝ AI – BẠN ĐỒNG HÀNH TIẾNG ANH
                </h3>
                <p className="text-[10px] text-sky-100 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse" />
                  Gợi mở tư duy · Không giải hộ
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="w-7 h-7 rounded-lg hover:bg-white/10 flex items-center justify-center text-white/80 hover:text-white transition cursor-pointer"
                title={isMinimized ? 'Mở rộng' : 'Thu nhỏ'}
              >
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isMinimized ? 'rotate-180' : ''}`} />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="w-7 h-7 rounded-lg hover:bg-white/10 flex items-center justify-center text-white/80 hover:text-white transition cursor-pointer"
                title="Đóng trợ lý"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Minimized View Bar */}
          {isMinimized ? (
            <div 
              onClick={() => setIsMinimized(false)}
              className="p-3 bg-sky-50 dark:bg-slate-800 text-xs text-slate-700 dark:text-slate-300 cursor-pointer flex items-center justify-between hover:bg-sky-100 dark:hover:bg-slate-700 transition"
            >
              <span className="font-medium truncate">Nhấn để tiếp tục trao đổi với AI</span>
              <Sparkles className="w-4 h-4 text-amber-500 shrink-0" />
            </div>
          ) : (
            <>
              {/* Quick Prompt Pills Bar */}
              <div className="p-2 border-b border-slate-100 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/50 flex items-center gap-1.5 overflow-x-auto scrollbar-none text-[11px]">
                {activeQuestion && (
                  <button
                    onClick={() => handleQuickPrompt('Gợi ý câu hỏi đang làm')}
                    className="shrink-0 px-2.5 py-1 rounded-full bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300 font-bold hover:bg-amber-200 transition cursor-pointer flex items-center gap-1"
                  >
                    <Lightbulb className="w-3 h-3 text-amber-600" />
                    <span>Gợi ý câu hiện tại</span>
                  </button>
                )}
                <button
                  onClick={() => handleQuickPrompt('Dấu hiệu nhận biết động từ chỉ sở thích')}
                  className="shrink-0 px-2.5 py-1 rounded-full bg-sky-100 text-sky-800 dark:bg-sky-950 dark:text-sky-300 font-medium hover:bg-sky-200 transition cursor-pointer flex items-center gap-1"
                >
                  <BookOpen className="w-3 h-3 text-sky-600" />
                  <span>Quy tắc V-ing</span>
                </button>
                <button
                  onClick={() => handleQuickPrompt('Các cụm tính từ đi với giới từ')}
                  className="shrink-0 px-2.5 py-1 rounded-full bg-indigo-100 text-indigo-800 dark:bg-indigo-950 dark:text-indigo-300 font-medium hover:bg-indigo-200 transition cursor-pointer"
                >
                  <span>Fond of / Keen on</span>
                </button>
                <button
                  onClick={() => handleQuickPrompt('Mẹo loại trừ phương án sai')}
                  className="shrink-0 px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 font-medium hover:bg-emerald-200 transition cursor-pointer"
                >
                  <span>Mẹo loại trừ</span>
                </button>
              </div>

              {/* Chat Messages Body */}
              <div className="flex-1 overflow-y-auto p-3.5 space-y-3 text-xs">
                {messages.map((m) => (
                  <div
                    key={m.id}
                    className={`flex flex-col ${m.sender === 'user' ? 'items-end' : 'items-start'}`}
                  >
                    <div
                      className={`max-w-[88%] rounded-2xl p-3 leading-relaxed whitespace-pre-wrap ${
                        m.sender === 'user'
                          ? 'bg-sky-600 text-white rounded-br-xs'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 rounded-bl-xs border border-slate-200 dark:border-slate-700'
                      }`}
                    >
                      {m.text}

                      {/* Display pedagogical hints if available */}
                      {m.hints && m.hints.length > 0 && (
                        <div className="mt-2.5 pt-2 border-t border-slate-200 dark:border-slate-700 space-y-1.5">
                          {m.hints.map((hint, idx) => (
                            <div 
                              key={idx}
                              className="p-2 rounded-xl bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-800 text-amber-900 dark:text-amber-200 text-[11px] flex items-start gap-1.5"
                            >
                              <Lightbulb className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                              <div className="flex-1 font-medium">{hint}</div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>

              {/* Input Footer */}
              <div className="p-2.5 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') handleSend();
                  }}
                  placeholder="Hỏi từ vựng, ngữ pháp hoặc dấu hiệu nhận biết..."
                  className="flex-1 min-h-[38px] px-3 py-1.5 text-xs rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
                <button
                  onClick={() => handleSend()}
                  disabled={!input.trim()}
                  className="min-h-[38px] px-3.5 rounded-xl bg-sky-600 hover:bg-sky-700 disabled:opacity-40 text-white font-bold flex items-center justify-center transition cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
};
