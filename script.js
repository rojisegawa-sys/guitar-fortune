const questions = [
  { text: "休日の過ごし方は？", options: [
      { text: "外でアクティブに！", scores: { strat:1, tele:1 } },
      { text: "家でまったり", scores: { lespaul:1, jazzmaster:1 } }
    ]},
  { text: "好きな音楽ジャンルは？", options: [
      { text: "ロック", scores: { sg:1, flyingv:1 } },
      { text: "ポップス", scores: { mustang:1, pacifica:1 } }
    ]}
];

const container = document.getElementById('quiz-container');
questions.forEach((q, i) => {
  const div = document.createElement('div');
  div.classList.add('question');
  div.innerHTML = `<p>${i+1}. ${q.text}</p>`;
  q.options.forEach(opt => {
    div.innerHTML += `<label><input type="radio" name="q${i}" value='${JSON.stringify(opt.scores)}'> ${opt.text}</label><br>`;
  });
  container.appendChild(div);
});

document.getElementById('submit').addEventListener('click', () => {
  let scores = {};
  let answered = true;
  questions.forEach((q, i) => {
    const checked = document.querySelector(`input[name="q${i}"]:checked`);
    if (!checked) { answered = false; return; }
    const val = JSON.parse(checked.value);
    for (let key in val) { scores[key] = (scores[key]||0) + val[key]; }
  });
  if (!answered) { alert('全ての質問に答えてください'); return; }
  let max = Math.max(...Object.values(scores));
  let best = Object.keys(scores).filter(k => scores[k] === max);
  document.getElementById('result').innerText = `あなたのタイプは: ${best.join(", ")}`;
});
