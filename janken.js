const gBtn = document.getElementById('gBtn');
const tBtn = document.getElementById('tBtn');
const pBtn = document.getElementById('pBtn');

const cheatMode = document.getElementById('cheatMode')

const choices = {
    gBtn: "グー",
    tBtn: "チョキ",
    pBtn: "パー"
  };

const result = document.getElementById('result');

// この中から一つCPUが出す手を取り出す
const hands = ["グー", "チョキ", "パー"];

function judgeResult(player, cpu) {
    // 既存の結果をリセット
    result.classList.remove("win", "lose", "draw")

    if (player === cpu) {
        result.classList.add('draw');
      return "あいこ！";
    }
    if (
      (player === "グー" && cpu === "チョキ") ||
      (player === "チョキ" && cpu === "パー") ||
      (player === "パー" && cpu === "グー")
    ) {
        result.classList.add('win');
      return "あなたの勝ち！";
    }
        result.classList.add('lose');
      return "あなたの負け！";
  }

  let onCheckbox = false;
  let cpuHand;

  cheatMode.addEventListener('change', () => {
    onCheckbox = cheatMode.checked;
    document.body.classList.toggle('cheat-active');
    console.log("チートモード:", onCheckbox);
  })

document.querySelectorAll('.button-group button').forEach(button => {
    button.addEventListener('click', () => {
        // 自分の手を取得
        const myHand = choices[button.id];
        // ランダムにグーチョキパーを出す
        const random = Math.floor(Math.random() * hands.length);
        cpuHand = hands[random];

        // if文で条件分岐で判定①
        // if(onCheckbox) {
        //     if(myHand === "グー"){
        //         cpuHand = "チョキ";
        //     }else if(myHand === "チョキ"){
        //         cpuHand = "パー";
        //     }else{
        //         cpuHand = "グー";
        //     }
        //     }

        // マップで判定対応表作る②
        if (onCheckbox) {
            const loseMap = {
              "グー": "チョキ",
              "チョキ": "パー",
              "パー": "グー"
            };
            cpuHand = loseMap[myHand];
          }

        result.textContent = "自分 : " + myHand + " 相手 : " + cpuHand + "→" + judgeResult(myHand, cpuHand);
    });
});
