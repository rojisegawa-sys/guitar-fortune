// data/guitarTypes.js
export const GUITARS = {
  "stratocaster": {
    name: "Stratocaster",
    image: "img/guitars/strat.png",
    tagline: "柔軟×観察眼｜どこでも最適解を見つける万能型",
    persona: "順応性が高く、まず試して学ぶタイプ。空気を読みつつ自分の色も滲ませられる“万能参謀”。",
    strengths: ["環境適応", "問題分解", "チーム調整"],
    caution: ["器用貧乏になりやすい", "主張が弱くなる時がある"],
    loveWorkTips: "選択肢を出してから絞る進め方が◎。恋愛は相手の“好き”を拾い上げる聞き役がハマる。",
    matches: ["Jazzmaster", "PRS Custom 24"]
  },
  "telecaster": {
    name: "Telecaster",
    image: "img/guitars/tele.png",
    tagline: "誠実×芯の強さ｜一本筋の通った実務家",
    persona: "頑固ではなく“筋が良い”。実装・運用・継続の強さで成果を積み上げる現実派。",
    strengths: ["実行力", "継続力", "現場最適化"],
    caution: ["融通が利かない時がある", "初動が慎重すぎることも"],
    loveWorkTips: "タスクを“見える化”すると爆発的に進む。恋は長期的な安心感で信頼を勝ち取る。",
    matches: ["Les Paul", "Yamaha Pacifica"]
  },
  "les-paul": {
    name: "Les Paul",
    image: "img/guitars/lespaul.png",
    tagline: "存在感×王道力｜場を握るカリスマ",
    persona: "重厚で説得力のあるタイプ。要所の一撃で流れを決める“ここぞの主役”。",
    strengths: ["決定力", "威厳", "説得力"],
    caution: ["完璧主義で詰まりがち", "周囲が遠慮して情報が集まりにくい"],
    loveWorkTips: "役割と権限を明確に。“主役の出番”をデザインすると強い。恋は余裕のあるリードが鍵。",
    matches: ["SG", "ES-335"]
  },
  "es-335": {
    name: "ES-335",
    image: "img/guitars/es335.png",
    tagline: "余裕×大人バランス｜しなやかな中庸の達人",
    persona: "熱と理性のバランスが秀逸。表と裏、理と情を橋渡しするコンダクター。",
    strengths: ["調停", "俯瞰", "品位ある説得"],
    caution: ["決め切りの遅さ", "丸く収めすぎて没個性に見える時も"],
    loveWorkTips: "締切と意思決定者を先に決めると輝く。恋は“余白のある会話”で相手の心をほどく。",
    matches: ["Rickenbacker", "Les Paul"]
  },
  "rickenbacker": {
    name: "Rickenbacker",
    image: "img/guitars/rickenbacker.png",
    tagline: "個性×洗練｜エッジで周囲を覚醒させる人",
    persona: "美意識と独自性が武器。普通の中に“違和感という光”を差し込むクリエイター。",
    strengths: ["審美眼", "発想の独自性", "ブランディング"],
    caution: ["通じ合うまで時間がかかる", "こだわり過多で孤立しがち"],
    loveWorkTips: "“なぜそれが好きか”を言語化すると味方が増える。恋は共感より“理解者”を探すと◎。",
    matches: ["ES-335", "Jazzmaster"]
  },
  "ibanez": {
    name: "Ibanez",
    image: "img/guitars/ibanez.png",
    tagline: "テクニカル×スピード｜最短で上達するストイック派",
    persona: "学習曲線が鋭い努力家。仕様を読み解き、最短手順を組むエンジニア気質。",
    strengths: ["高速学習", "最適化", "指標管理"],
    caution: ["没入しすぎて疲れる", "他人のペースが遅く見えがち"],
    loveWorkTips: "“やらないことリスト”を作ると持久力が伸びる。恋は“上達を一緒に喜べる人”と好相性。",
    matches: ["PRS Custom 24", "Stratocaster"]
  },
  "jazzmaster": {
    name: "Jazzmaster",
    image: "img/guitars/jazzmaster.png",
    tagline: "余白×発見｜未定こそ最高のスパイス",
    persona: "偶然やノイズから新解釈を生む発明家。型にハマらない柔らかい創造性。",
    strengths: ["即興性", "横断思考", "編集力"],
    caution: ["締切に追われやすい", "結論より“過程”に恋をする時がある"],
    loveWorkTips: "“締切の前日イベント”を自分に設定。恋は予定を詰めすぎず“寄り道デート”が吉。",
    matches: ["Stratocaster", "Rickenbacker"]
  },
  "prs-custom-24": {
    name: "PRS Custom 24",
    image: "img/guitars/prs.png",
    tagline: "完成度×統合力｜全部盛りを気品で束ねる",
    persona: "機能美と実用のベストミックス。要件定義→実装→仕上げまで一貫して強いプロデューサー。",
    strengths: ["総合力", "要件整理", "品質管理"],
    caution: ["“無難”に見られやすい", "尖りの演出が課題"],
    loveWorkTips: "一点だけ強い尖りを足すと無敵。恋は“安定＋ちょい冒険”の配合で記憶に残る。",
    matches: ["Ibanez", "Stratocaster"]
  },
  "sg": {
    name: "SG",
    image: "img/guitars/sg.png",
    tagline: "直感×突破力｜一拍目で壁を抜く",
    persona: "反射神経と勢いが武器。思い切りの良さで流れを変えるストライカー。",
    strengths: ["初動の速さ", "突破", "情熱伝播"],
    caution: ["詰めの甘さ", "燃え尽きやすい"],
    loveWorkTips: "“追い込み係”と組むと強い。恋は熱で始まり、ルールで守るとうまくいく。",
    matches: ["Les Paul", "Flying V"]
  },
  "danelectro": {
    name: "Danelectro",
    image: "img/guitars/danelectro.png",
    tagline: "素朴×発明｜ラフな素材から宝を掘る人",
    persona: "“手元にあるもので作る”天才。低コストで面白い解を出すクリエイティブ職人。",
    strengths: ["コスパ設計", "ハック精神", "温かいセンス"],
    caution: ["粗さが出やすい", "評価が伝わるまで時間がかかる"],
    loveWorkTips: "“未完成さ”を味にする戦略が◎。恋は手作りサプライズが刺さる。",
    matches: ["Mustang", "Jazzmaster"]
  },
  "mustang": {
    name: "Mustang",
    image: "img/guitars/mustang.png",
    tagline: "小回り×無邪気｜軽やかに場を明るくするムードメーカー",
    persona: "素早い切替と遊び心。場を軽くし、チームの“動きやすさ”を上げる。",
    strengths: ["機動力", "ムード作り", "発想の転換"],
    caution: ["腰を据えるのが苦手", "飽きやすい"],
    loveWorkTips: "短いスプリントで成果を積む。恋は“新鮮さ”の供給を意識すると長続き。",
    matches: ["Danelectro", "Yamaha Pacifica"]
  },
  "yamaha-pacifica": {
    name: "Yamaha Pacifica",
    image: "img/guitars/pacifica.png",
    tagline: "誠実×伸びしろ｜基礎が強い堅実成長タイプ",
    persona: "地に足がついた努力家。学びを楽しめる“素直さ”が最大の武器。",
    strengths: ["基礎力", "協調性", "継続学習"],
    caution: ["自己評価が低め", "冒険をためらいがち"],
    loveWorkTips: "小さな挑戦を習慣化。恋は“出来たことメモ”を共有すると自己肯定感が上がる。",
    matches: ["Telecaster", "Stratocaster"]
  },
  "flying-v": {
    name: "Flying V",
    image: "img/guitars/flyingv.png",
    tagline: "挑発×突き抜け｜視線をさらうフロントマン",
    persona: "話題化と演出がうまい。大胆さで停滞を破るショーランナー。",
    strengths: ["話題作り", "決断", "度胸"],
    caution: ["継続運用が課題", "注目が目的化しがち"],
    loveWorkTips: "背後に“運用チーム”を置くと強い。恋は大舞台よりも日常の小さなケアを忘れずに。",
    matches: ["SG", "Les Paul"]
  },

  /* --- Hidden --- */
  "casino": {
    name: "Casino (Hidden)",
    image: "img/guitars/casino.png",
    tagline: "艶×余韻｜軽やかなのに深い、洒脱な語り部",
    persona: "軽やかな音色で物語を紡ぐストーリーテラー。肩肘張らずに核心へ。",
    strengths: ["ストーリーメイク", "対話力", "空気づくり"],
    caution: ["強い主張が薄れる時がある"],
    loveWorkTips: "“語り口”を武器に提案。恋は共感を丁寧に重ねると染み込む。",
    matches: ["ES-335", "Rickenbacker"]
  },
  "yamaha-sg": {
    name: "Yamaha SG (Hidden)",
    image: "img/guitars/yamaha-sg.png",
    tagline: "重厚×精緻｜誠実さを極めた王道職人",
    persona: "質実剛健。信頼が通貨。ゆっくりだが確実にチームの基盤を強化する。",
    strengths: ["精緻さ", "信頼性", "長期戦"],
    caution: ["地味に見えがち"],
    loveWorkTips: "定点観測と記録で強みが増幅。恋は“約束を守る”が最大の魅力。",
    matches: ["Les Paul", "Telecaster"]
  },
  "les-paul-junior": {
    name: "Les Paul Junior (Hidden)",
    image: "img/guitars/lespaul-jr.png",
    tagline: "粗削り×直球｜一本釣りの説得力",
    persona: "余計な装飾がない分、芯が太い。直球勝負で周囲を動かす。",
    strengths: ["シンプル設計", "即断", "熱量"],
    caution: ["繊細な配慮は後回しになりがち"],
    loveWorkTips: "“伝える順番”だけ整えると刺さり方が段違い。恋は誠実な一言で十分。",
    matches: ["SG", "Flying V"]
  },
  "explorer": {
    name: "Explorer (Hidden)",
    image: "img/guitars/explorer.png",
    tagline: "開拓×未来志向｜未知の地図を描く先駆者",
    persona: "誰も行かない道に足跡を刻む。構想力と胆力で領域を切り拓く。",
    strengths: ["開拓精神", "構想力", "越境"],
    caution: ["孤独になりやすい"],
    loveWorkTips: "仲間の“翻訳者”を置くと爆発力が持続。恋は理解より尊重を重視してくれる相手と◎。",
    matches: ["PRS Custom 24", "Ibanez"]
  }
};
