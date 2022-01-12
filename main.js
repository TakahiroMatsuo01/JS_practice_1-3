const getValue = () => {
    const title = '==============================\n現在持っているタスクの一覧\n==============================';
    const tasks = ['掃除','買い物','散歩'];
    let request = prompt('「確認、追加、削除、終了」のいずれかを入力してください。');
    let addtask = prompt('タスクを入力してください。');
    console.log(title);
    for(let i = 0; i < tasks.length; i++) {
        console.log(`${tasks[i]}`);
　　　}
    
    if(addtask){
            console.log(title);
            tasks.push(addtask);
            alert('新しいタスクを追加しました。');
    for(let i = 0; i < tasks.length; i++) {
            console.log(`${i}:\b${tasks[i]}`);
　　}
　}   
}
getValue();
