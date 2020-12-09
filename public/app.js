window.addEventListener('load', function () {

    //Open and connect socket
    let socket = io();
    //Listen for confirmation of connection
    socket.on('connect', function () {
        console.log("Connected");
    });

    /* --- Code to RECEIVE a socket message from the server --- */
    let chatBox = document.getElementById('chat-box-msgs');

    //Listen for messages named 'msg' from the server
    socket.on('msg', function (data) {
        console.log("Message arrived!");
        console.log(data);

        //Create a message string and page element
        let receivedMsg = data.name + ": " + data.msg;
        let msgEl = document.createElement('p');
        msgEl.innerHTML = receivedMsg;

        //Add the element with the message to the page
        chatBox.appendChild(msgEl);
        //Add a bit of auto scroll for the chat box
        chatBox.scrollTop = chatBox.scrollHeight;
    });

    /* --- Code to SEND a socket message to the Server --- */
    // let nameInput = document.getElementById('name-input')
    // let msgInput = document.getElementById('msg-input');
    // let sendButton = document.getElementById('send-button');

    // sendButton.addEventListener('click', function () {
    //     let curName = nameInput.value;
    //     let curMsg = msgInput.value;
    //     let msgObj = { "name": curName, "msg": curMsg };

    //     //Send the message object to the server
    //     socket.emit('msg', msgObj);
    // });

    let radioinput1 = document.getElementById("first-choice");
    let radioinput2 = document.getElementById("second-choice");
    radioinput1.addEventListener('change', startinputdisable);
    radioinput2.addEventListener('change', startinputdisable);

    let radiochosen = false;

    function startinputdisable(event) {
        console.log("chosen");
        if (radiochosen === false) {


            setTimeout(() => {
                radioinput1.disabled = true;
                radioinput2.disabled = true;
                analyze(radioinput1, radioinput2);
            }, 5000);
            radiochosen = true;
        }
    }

    function analyze(r1, r2) {
        let tr = r1.parentElement.parentElement;
        let answer = tr.getAttribute("answer");

        if (answer === "1") {
            console.log(r1.checked ? "correct" : "incorrect");
        } else {
            console.log(r2.checked ? "correct" : "incorrect");
            
        }
    }
    
});
