// Get reference to the input box and list container elements
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Function to add a new task
function addTask(){
    // Check if the input box is empty
    if(inputBox.value === ''){
        // If empty, display an alert
        alert("You must write something!");
    }
    else{
        // If not empty, create a new list item
        let li = document.createElement("li");
        // Set the content of the list item to the value of the input box
        li.innerHTML = inputBox.value;
        // Append the new list item to the list container
        listContainer.appendChild(li);
        // Create a span element for the delete button
        let span = document.createElement("span");
        // Set the content of the span to '×' (multiplication sign)
        span.innerHTML = "\u00d7";
        // Append the span to the list item
        li.appendChild(span);
    }
    // Clear the input box after adding the task
    inputBox.value = "";
    // Save the updated task list to local storage
    saveData();
}

// Event listener to add a task when the 'Enter' key is pressed
inputBox.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});
// Event listener to handle task completion and deletion
listContainer.addEventListener("click", function(e){
    // Check if the clicked element is a list item
    if(e.target.tagName === "LI"){
        // Toggle the 'checked' class to mark/unmark the task as completed
        e.target.classList.toggle("checked");
        // Save the updated task list to local storage
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        // If the clicked element is a delete button, remove the parent list item
        e.target.parentElement.remove();
        // Save the updated task list to local storage
        saveData();       
    }
}, false);
// Function to save the task list to local storage
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
// Function to display tasks from local storage when the page is loaded
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data")
    
}
// Call the showTask function to display tasks from local storage when the page is loaded
showTask();