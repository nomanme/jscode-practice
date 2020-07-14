// adding event listener with multiple items
//html codes
<body>
    <P>This is a demo</P>
    <button class="my-button">button1</button>
    <button class="my-button">button2</button>
    <button class="my-button">button3</button>

    <script src="index.js"></script>
</body>



// javascript codes
var numberOfButtons = document.querySelectorAll(".my-button").length
for (i = 0; i < numberOfButtons; i++) {
    document.querySelectorAll(".my-button")[i].addEventListener("click", function () {
        var text = this.innerHTML;
        document.querySelector("p").innerHTML = text + " is clicked";
    })
}
