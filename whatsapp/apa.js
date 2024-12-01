var users = [
    {
      username: "arjun_verma",
      dp: "https://images.pexels.com/photos/28243029/pexels-photo-28243029/free-photo-of-a-man-in-a-suit-sitting-on-a-chair.jpeg?auto=compress&cs=tinysrgb&w=600",
      lastMessage: "Sure, I'll send it over.",
      chatMessages: [
        { tag: "send", message: "Yes, what time?" },
        { tag: "received", message: "Hey, are you free tomorrow?" },
        { tag: "send", message: "Sure, I'll send it over." },
        { tag: "received", message: "How about 10 AM?" }
      ]
    },
    {
      username: "priya_sharma",
      dp: "https://images.pexels.com/photos/17191688/pexels-photo-17191688/free-photo-of-a-woman-posing-against-portraits-hanging-on-the-wall.jpeg?auto=compress&cs=tinysrgb&w=600",
      lastMessage: "I'll see you soon!",
      chatMessages: [
        { tag: "send", message: "Okay, see you soon!" },
        { tag: "send", message: "What time are we meeting?" },
        { tag: "received", message: "Let’s meet at 5 PM." },
        { tag: "received", message: "Great! See you!" }
      ]
    },
    {
      username: "rahul_mehta",
      dp: "https://images.pexels.com/photos/16136794/pexels-photo-16136794/free-photo-of-portrait-of-young-man-with-professional-camera.jpeg?auto=compress&cs=tinysrgb&w=600",
      lastMessage: "Got it. Thanks!",
      chatMessages: [
        { tag: "received", message: "Got it. Thanks!" },
        { tag: "send", message: "Sure, sending it now." },
        { tag: "received", message: "Can you send me the report?" },
        { tag: "send", message: "You're welcome." }
      ]
    },
    {
      username: "neha_gupta",
      dp: "https://images.pexels.com/photos/22046103/pexels-photo-22046103/free-photo-of-portrait-of-woman.jpeg?auto=compress&cs=tinysrgb&w=600",
      lastMessage: "Let’s discuss it tomorrow.",
      chatMessages: [
        { tag: "received", message: "Thanks for understanding!" },
        { tag: "send", message: "No worries. Let’s discuss it tomorrow." },
        { tag: "send", message: "Are you done with the task?" },
        { tag: "received", message: "Almost, but I need some more time." }
      ]
    },
    {
      username: "vikas_kumar",
      dp: "https://images.pexels.com/photos/18269632/pexels-photo-18269632/free-photo-of-man-wearing-casual-outfit-with-camera.jpeg?auto=compress&cs=tinysrgb&w=600",
      lastMessage: "Let's catch up in the evening.",
      chatMessages: [
        { tag: "send", message: "See you!" },
        { tag: "received", message: "Perfect, see you!" },
        { tag: "received", message: "Long time, no see!" },
        { tag: "send", message: "Yes! Let’s catch up in the evening." }
      ]
    },
    {
      username: "aarti_singh",
      dp: "https://images.pexels.com/photos/12189048/pexels-photo-12189048.jpeg?auto=compress&cs=tinysrgb&w=600",
      lastMessage: "I'll be there by 6 PM.",
      chatMessages: [
        { tag: "received", message: "I'll be there by 6 PM." },
        { tag: "send", message: "What time are you coming?" },
        { tag: "send", message: "Great, see you then!" },
        { tag: "received", message: "See you!" }
      ]
    }
  ];


var chatsection=document.querySelector(".upper");
var Naam = document.querySelector(".top h2");
var back = document.querySelector(".top #back");
var batee=document.querySelector(".batee");
var clutter='';

users.forEach(function(dets,idx){
    clutter+=`
            <div class="chatting">
                
                <div id=${idx} class="overlay"></div>
                <img src="https://plus.unsplash.com/premium_photo-1664303847960-586318f59035?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="">
                <div class="info">
                    <h2>${dets.username}</h2>
                    <h4>Heyy..... kaise hooo</h4>
                </div>
            </div>`
})

var chat=document.querySelector(".chat");
chat.innerHTML=clutter;

chat.addEventListener("click",function(event){
    chatsection.style.display="block";
    Naam.textContent = users[event.target.id].username;
    messagestore = ''
    users[event.target.id].upper.forEach(function (message) {
    messagestore += ` <div class="text ${message.tag}">
                              ${message.message}    
                      </div>`
  })

  batee.innerHTML=messagestore;
  
})

back.addEventListener("click", function () {
    chatsection.style.display = "none"
  })
