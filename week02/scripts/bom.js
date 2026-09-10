const input = document.querySelector("input");
const button = document.querySelector("button");
const list = document.querySelector("ul");

button.addEventListener("click", function() {
    if (input.value.trim() !== "") {
        
        const li = document.createElement("li");
        const deleteBtn = document.createElement("button");
        
        li.textContent = input.value;
        deleteBtn.textContent = "❌";
        deleteBtn.addEventListener("click", function () {
            list.removeChild(li);
            input.focus();
        });

        input.value = "";
        input.focus();

        li.append(deleteBtn);
        list.append(li);
    }
});