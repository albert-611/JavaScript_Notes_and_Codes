let hour = 16; // 24-hour format (2:00 PM)

if (hour < 12) {
  console.log("Good morning!");
    if(hour < 9){
        console.log("Take your breakfast");
    }else{
        console.log("Go to University");
    }
} 
else if (hour < 18) {
  console.log("Good afternoon!");
  if(hour < 14){
    console.log("Take bath.");
  }else if(hour < 15){
    console.log("Take your lunch");
  }else{
    console.log("Take some rest");
  }
} 
else if (hour < 22) {
  console.log("Good evening!");
  if(hour < 18){
    console.log("Go to Gym.");
  }else{
    console.log("Do your Homework");
  }
} 
else {
  console.log("Good night!");
}

// Output: Good afternoon!