const getValue = () => {
    let title = new Array(
        "==================================",
        "        現在持っているタスク一覧",
        "==================================",
    );
    let data = new Array(
        "掃除",
        "買い物",
        "散歩"
    );
    let request = prompt("「確認、追加、削除、終了」のいずれかを入力してください。")
    let addtask = prompt("タスクを入力してください")
    if(addtask){
        for(let i = 0; i < title.length; i++) {
            console.log(`${title[i]}`);
        }
            data.push(addtask);
            alert("新しいタスクを追加しました。")
        for(let j = 0; j < data.length; j++){
            console.log(`${j}:\b${data[j]}`);
        }
      }   
    }
getValue();
