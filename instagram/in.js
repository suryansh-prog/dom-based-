var users = [
    {
      username: "Babita kumari",
      story:
        "https://images.unsplash.com/photo-1541216970279-affbfdd55aa8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      dp: "https://images.unsplash.com/photo-1549570652-97324981a6fd?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      username: "Lovely Kumari",
      story:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      dp: "https://images.unsplash.com/photo-1574015974293-817f0ebebb74?q=80&w=1946&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      username: "Sweeti kumari",
      story:
        "https://images.unsplash.com/photo-1562572159-4efc207f5aff?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      dp: "https://images.unsplash.com/photo-1553782376-b2e8256ab838?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      username: "Babita kumari",
      story:
        "https://images.unsplash.com/photo-1541216970279-affbfdd55aa8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      dp: "https://images.unsplash.com/photo-1549570652-97324981a6fd?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      username: "Lovely Kumari",
      story:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      dp: "https://images.unsplash.com/photo-1574015974293-817f0ebebb74?q=80&w=1946&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      username: "Sweeti kumari",
      story:
        "https://images.unsplash.com/photo-1562572159-4efc207f5aff?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      dp: "https://images.unsplash.com/photo-1553782376-b2e8256ab838?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
];
var clutter="";
users.forEach(function(dets,idx){
    clutter+=`<div class="story">
                <img id=${idx} src="${dets.dp}" alt="">
            </div>`
})
var nav=document.querySelector(".nav");
nav.innerHTML=clutter;
var chat=document.querySelector(".chat");
var growth=document.querySelector(".growth");
var lelo=document.querySelector(".lelo h5");
var images=document.querySelector(".lelo img");
var band=document.querySelector(".band");

var time=0;

nav.addEventListener("click",function(dets){
    // console.log(dets);
    var target=users[dets.target.id];
    chat.style.display="block";
    chat.style.backgroundImage=`url(${target.story})`
    lelo.innerHTML=target.username;
    images.style.backgroundImage=`url(${target.dp})`;


    var storyinterval=setInterval(function(){
        time++;
        growth.style.width=time + "%";
    },30)

    setTimeout(function(){
        clearInterval(storyinterval)
        time = 0
        chat.style.display = "none"
    },3000);

    band.addEventListener("click",function(){
      clearInterval(storyinterval);
      time=0;
      chat.style.display = "none";
    })

})

