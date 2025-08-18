// ===== ギター占い（12問版・同点時は「隠しキャラ」を傾向マッチで出現） =====

// 本タイプ（加点キー）→ 表示名
const TYPE_NAMES = {
  strat: "Fender Stratocaster",
  tele: "Fender Telecaster",
  lespaul: "Gibson Les Paul",
  es335: "Gibson ES-335",
  ricken: "Rickenbacker",
  ibanez: "Ibanez",
  jazzmaster: "Fender Jazzmaster",
  prs: "PRS Custom 24",
  sg: "Gibson SG",
  dane: "Danelectro",
  mustang: "Fender Mustang",
  pacifica: "Yamaha Pacifica",
  flyingv: "Gibson Flying V", // 補助タイプ（通常結果には出ないが加点用に存在）
};

// ★同点時の「隠しキャラ」候補（4種）
const HIDDEN_TEXT = {
  casino:   { title: "Epiphone Casino",           desc: "魅了と多面性。人を惹きつける交渉上手。" },
  yamahasg: { title: "Yamaha SG",                  desc: "重厚で堅実。腰の据わった安定の軸。" },
  lpjr:     { title: "Gibson Les Paul Junior",     desc: "最小限で最大。本質を突くミニマリスト。" },
  explorer: { title: "Gibson Explorer",            desc: "開拓精神。未知を切り開くパイオニア。" },
};

// ★本タイプ → 隠しキャラの割り振り（“通じる傾向”で票を入れる）
const HIDDEN_FROM_MAIN = {
  es335: "casino",
  pacifica: "yamahasg",
  lespaul: "lpjr",
  flyingv: "explorer",

  strat: "casino",
  tele: "lpjr",
  ricken: "casino",
  ibanez: "explorer",
  jazzmaster: "explorer",
  prs: "yamahasg",
  sg: "lpjr",
  dane: "casino",
};


// 安定的に決めるためのハッシュ（ランダムではなく毎回同じ結果に）
function stableHash(s){ let h=0; for(let i=0;i<s.length;i++){ h=(h*31 + s.charCodeAt(i))|0; } return Math.abs(h); }

// 同点タイプ配列 tops から「隠しキャラ」を決定
function decideHiddenFromTies(tops){
  const tally = { casino:0, yamahasg:0, lpjr:0, explorer:0 };
  tops.forEach(k => {
    const hid = HIDDEN_FROM_MAIN[k];
    if (hid && tally.hasOwnProperty(hid)) tally[hid] += 1;
  });
  const entries = Object.entries(tally);
  const max = Math.max(...entries.map(([,v]) => v));
  const cands = entries.filter(([,v]) => v === max).map(([k]) => k);
  if (cands.length === 1) return cands[0];
  const seed = tops.slice().sort().join("|");
  return cands[ stableHash(seed) % cands.length ];
}

// ===== 質問（12問）※既存構成そのまま =====
const questions = [
  { text: "休日の朝、あなたはどう過ごす？", options: [
      { text: "早起きして散歩や運動", scores: { strat:1, pacifica:1 } },
      { text: "昼まで寝てから趣味に没頭", scores: { tele:1, jazzmaster:1 } },
      { text: "カフェでゆったり読書", scores: { es335:1, sg:1 } },
      { text: "予定を決めず気ままに行動", scores: { ibanez:1, dane:1 } },
  ]},
  { text: "旅行の計画を立てるときは？", options: [
      { text: "詳細なスケジュールを作る", scores: { prs:1, pacifica:1 } },
      { text: "行き先だけ決めて現地で決断", scores: { mustang:1, ibanez:1 } },
      { text: "現地の友人や口コミを頼る", scores: { strat:1, lespaul:1 } },
      { text: "行きたい場所を全部リスト化", scores: { tele:1, es335:1 } },
  ]},
  { text: "初対面の人と会うときは？", options: [
      { text: "自分から積極的に話しかける", scores: { strat:1, prs:1 } },
      { text: "相手の様子を見てから話す", scores: { es335:1, mustang:1 } },
      { text: "話題をあらかじめ準備する", scores: { tele:1, dane:1 } },
      { text: "会話の流れに身を任せる", scores: { jazzmaster:1, sg:1 } },
  ]},
  { text: "気分が落ち込んだときは？", options: [
      { text: "音楽や映画で気分転換", scores: { es335:1, pacifica:1 } },
      { text: "誰かに話を聞いてもらう", scores: { strat:1, sg:1 } },
      { text: "一人で考えを整理する", scores: { lespaul:1, prs:1 } },
      { text: "とにかく体を動かす", scores: { ibanez:1, flyingv:1 } },
  ]},
  { text: "プレゼントを贈るなら？", options: [
      { text: "実用的で長く使えるもの", scores: { tele:1, mustang:1 } },
      { text: "相手の好みにぴったり", scores: { prs:1, jazzmaster:1 } },
      { text: "ユニークで印象に残るもの", scores: { dane:1, ricken:1 } },
      { text: "思い出に残る体験やイベント", scores: { sg:1, lespaul:1 } },
  ]},
  { text: "集まりでの立ち位置は？", options: [
      { text: "みんなをまとめる司会役", scores: { strat:1, lespaul:1 } },
      { text: "盛り上げ役", scores: { dane:1, sg:1 } },
      { text: "聞き役として場を和ませる", scores: { tele:1, pacifica:1 } },
      { text: "興味ある話題にだけ参加", scores: { jazzmaster:1, es335:1 } },
  ]},
  { text: "食事の選び方は？", options: [
      { text: "健康重視", scores: { prs:1, mustang:1 } },
      { text: "見た目や話題性重視", scores: { jazzmaster:1, dane:1 } },
      { text: "コスパ最優先", scores: { strat:1, pacifica:1 } },
      { text: "その日の気分", scores: { ibanez:1, sg:1 } },
  ]},
  { text: "締め切りが迫ったら？", options: [
      { text: "早めに終わらせて安心", scores: { es335:1, tele:1 } },
      { text: "ギリギリまでアイデア練る", scores: { jazzmaster:1, prs:1 } },
      { text: "着実に計画的に進める", scores: { pacifica:1, mustang:1 } },
      { text: "追い込まれてから集中", scores: { ibanez:1, lespaul:1 } },
  ]},
  { text: "衝動買いの頻度は？", options: [
      { text: "ほとんどしない", scores: { tele:1, prs:1 } },
      { text: "たまに自分へのご褒美で", scores: { lespaul:1, sg:1 } },
      { text: "面白そうならすぐ買う", scores: { ibanez:1, dane:1 } },
      { text: "旅行やイベントではつい買う", scores: { jazzmaster:1, strat:1 } },
  ]},
  { text: "SNSの使い方は？", options: [
      { text: "情報収集メイン", scores: { prs:1, pacifica:1 } },
      { text: "日常や趣味をこまめに発信", scores: { strat:1, jazzmaster:1 } },
      { text: "仲間とのつながり維持", scores: { tele:1, mustang:1 } },
      { text: "バズりそうなネタを狙う", scores: { ibanez:1, sg:1 } },
  ]},
  { text: "大事な決断のときは？", options: [
      { text: "直感で決める", scores: { lespaul:1, ibanez:1 } },
      { text: "複数の意見を比較", scores: { pacifica:1, prs:1 } },
      { text: "自分の経験を信じる", scores: { strat:1, sg:1 } },
      { text: "データや実績を重視", scores: { tele:1, es335:1 } },
  ]},
  { text: "理想の休日スタイルは？", options: [
      { text: "一人時間を満喫", scores: { tele:1, pacifica:1 } },
      { text: "大人数でにぎやかに", scores: { strat:1, sg:1 } },
      { text: "新しい挑戦に取り組む", scores: { ibanez:1, flyingv:1 } },
      { text: "のんびり癒される時間", scores: { es335:1, jazzmaster:1 } },
  ]},
];

// ===== 画面生成（既存 index.html 構造に合わせて） =====
const container = document.getElementById('quiz-container');
container.innerHTML = "";
questions.forEach((q, i) => {
  const div = document.createElement('div');
  div.classList.add('question');
  div.innerHTML = `<p>${i+1}. ${q.text}</p>`;
  q.options.forEach(opt => {
    div.innerHTML += `<label><input type="radio" name="q${i}" value='${JSON.stringify(opt.scores)}'> ${opt.text}</label><br>`;
  });
  container.appendChild(div);
});

// ===== 診断計算＆表示 =====
document.getElementById('submit').addEventListener('click', () => {
  const $res = document.getElementById('result');
  let scores = {};
  let answered = true;

  questions.forEach((q, i) => {
    const checked = document.querySelector(`input[name="q${i}"]:checked`);
    if (!checked) { answered = false; return; }
    const val = JSON.parse(checked.value);
    for (let key in val) scores[key] = (scores[key] || 0) + val[key];
  });

  if (!answered) { alert('全ての質問に答えてください'); return; }

  const entries = Object.entries(scores);
  const max = Math.max(...entries.map(([,v]) => v));
  const tops = entries.filter(([,v]) => v === max).map(([k]) => k);

  if (tops.length === 1) {
  // 単独トップの場合
  $res.innerHTML = `
    <span class="result-badge">結果</span>
    あなたのタイプは <strong>${TYPE_NAMES[tops[0]]}</strong>
    <div class="actions">
      <button onclick="location.reload()">もう一度診断</button>
      <a href="https://twitter.com/intent/tweet?text=ギター占い診断結果：${TYPE_NAMES[tops[0]]}%20%23ギター占い&url=${location.href}" target="_blank">Xでシェア</a>
    </div>
  `;
} else {
  // 同点の場合
  $res.innerHTML = `
    <span class="result-badge">同点</span>
    同点タイプ：${tops.map(k => TYPE_NAMES[k]).join(", ")}
    <div class="actions">
      <button onclick="location.reload()">もう一度診断</button>
      <a href="https://twitter.com/intent/tweet?text=ギター占い診断結果：${tops.map(k => TYPE_NAMES[k]).join(", ")}%20%23ギター占い&url=${location.href}" target="_blank">Xでシェア</a>
    </div>
  `;
}
