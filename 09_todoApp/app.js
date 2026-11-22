
let todo = [];
let req = prompt("Please enter your request");

while (true) {

    if(req === 'quit'){
        console.log("Exiting app");
        break;

    }else if (req === "list"){
        console.log('----------------');
        for (let i = 0; i < todo.length; i++){
            console.log(i, todo[i]);
        }
        console.log('----------------');

    }else if (req === "add"){
        let task = prompt("Please enter your task");

        if (task !== null && task.trim() !== ""){
            todo.push(task);
            console.log(`Task: ${task} added`);
        } else {
            console.log("Invalid task!");
        }

    }
    else if(req === "delete"){
        let idx = prompt("Please enter task Index");
        let deleted = todo.splice(idx,1);
        console.log(`${deleted[0]} task deleted`);
    }
    else{
        console.log("Invalid request!");
    }

    req = prompt("Please enter your request");
}
