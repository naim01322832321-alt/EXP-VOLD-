import { db, auth } from "./firebase.js";

import {
collection,
addDoc,
query,
orderBy,
onSnapshot,
serverTimestamp
}
from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";

const messageInput = document.getElementById("messageInput");
const sendBtn = document.getElementById("sendBtn");
const messages = document.getElementById("messages");

const chatRef = collection(db, "messages");

sendBtn.addEventListener("click", async () => {

const text = messageInput.value.trim();

if(text==="") return;

await addDoc(chatRef,{
name:auth.currentUser.email,
text:text,
time:serverTimestamp()
});

messageInput.value="";

});

const q=query(chatRef,orderBy("time"));

onSnapshot(q,(snapshot)=>{

messages.innerHTML="";

snapshot.forEach((doc)=>{

const data=doc.data();

messages.innerHTML+=`
<div class="card">
<b>${data.name}</b><br>
${data.text}
</div>
`;

});

});
