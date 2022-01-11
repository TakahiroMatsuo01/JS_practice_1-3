const getValue = () => {
    const title = {
       top: "==================================",
       middle: "        現在持っているタスク一覧",
       bottom:"==================================",
    };
    const tasks = new Array(
        "掃除",
        "買い物",
        "散歩"
    );
        console.log(title.top);
        console.log(title.middle);
        console.log(title.bottom);
    　　for(let j = 0; j < tasks.length; j++){
        console.log(`${tasks[j]}`);
　　　}
    let request = prompt("「確認、追加、削除、終了」のいずれかを入力してください。")
    let addtask = prompt("タスクを入力してください")
    if(addtask){
            console.log(title.top);
            console.log(title.middle);
            console.log(title.bottom);
            tasks.push(addtask);
            alert("新しいタスクを追加しました。")
    　　for(let j = 0; j < tasks.length; j++){
            console.log(`${j}:\b${tasks[j]}`);
　　}
　}   
}
getValue();
