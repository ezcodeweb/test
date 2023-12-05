const texts = document.querySelector(".texts");

window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;

let p = document.createElement("p");

recognition.addEventListener("result", (e) => {
  texts.append(p);
  const text = Array.from(e.results)
    .map((result) => result[0])
    .map((result) => result.transcript)
    .join("");

  p.innerText = text;
  if (e.results[0].isFinal) {
    if (text.includes("open YouTube") || text.includes("Open YouTube") || text.includes("open music") || text.includes("Open music")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "opening youtube\n🎭";
      texts.appendChild(p);
      console.log("opening youtube");
      window.open("https://www.youtube.com");
      let go = "opening youtube";
      sp(go);
    }
    if (text.includes("open Gmail") || text.includes("Open Gmail")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "opening gmail\n📧";
      texts.appendChild(p);
      console.log("opening gmail");
      window.open("https://mail.google.com/mail/u/0/");
      let go = "opening gmail";
      sp(go);
    }
    if (text.includes("open Facebook") || text.includes("Open Facebook")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "opening facebook\n👌";
      texts.appendChild(p);
      console.log("opening facebook");
      window.open("https://www.facebook.com/");
      let go = "opening facebook";
      sp(go);
    }
    if (text.includes("open map") || text.includes("Open map")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "opening map\n😊";
      texts.appendChild(p);
      console.log("opening map");
      window.open("https://www.google.com/maps/");
      let go = "opening map";
      sp(go);
    }
    if (text.includes("open translate") || text.includes("Open translate")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "opening translate\n🤗";
      texts.appendChild(p);
      console.log("opening translate");
      window.open("https://translate.google.com/");
      let go = "opening translate";
      sp(go);
    }
    if (text.includes("open new tab") || text.includes("open GoogleSearch") || text.includes("open search") || text.includes("open Google") || text.includes("Open new tab") || text.includes("Open GoogleSearch") || text.includes("Open search") || text.includes("Open Google")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "opening new tab\n";
      texts.appendChild(p);
      console.log("opening new tab");
      window.open("https://google.com/");  
      let go = "opening new tab";
      sp(go);
    }
    if (text.includes("open google meet") || text.includes("open meet") || text.includes("Open google meet") || text.includes("Open meet")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "opening google meet\n👨👨‍👦‍👦";
      texts.appendChild(p);
      console.log("opening google meet");
      window.open("https://meet.google.com/");
      let go = "opening google meet";
      sp(go);
    }
    if (text.includes("open messenger") || text.includes("open Messenger") || text.includes("Open messenger") || text.includes("Open Messenger")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "opening messenger\n📨";
      texts.appendChild(p);
      console.log("opening messenger");
      window.open("https://www.facebook.com/messages/");
      let go = "opening messenger";
      sp(go);
    }
    if (text.includes("open code pen") || text.includes("open codepen") || text.includes("open code gallery") || text.includes("Open code pen") || text.includes("Open codepen") || text.includes("Open code gallery")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "opening Codepen\n✍";
      texts.appendChild(p);
      console.log("opening Codepen");
      window.open("https://codepen.io/trending");
      let go = "opening Codepen";
      sp(go);
    }
    if (text.includes("open Instagram") || text.includes("open instagram") || text.includes("Open Instagram") || text.includes("Open instagram")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "opening Instagram\n📸";
      texts.appendChild(p);
      console.log("opening Instagram");
      window.open("https://www.instagram.com/");
      let go = "opening Instagram";
      sp(go);
    }
    if (text.includes("open WhatsApp") || text.includes("Open WhatsApp")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "opening WhatsApp\n📫";
      texts.appendChild(p);
      console.log("opening WhatsApp");
      window.open("https://web.whatsapp.com/");
      let go = "opening WhatsApp";
      sp(go);
    }
    if (text.includes("open GitHub") || text.includes("open GitHub")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "opening GitHub\n📬";
      texts.appendChild(p);
      console.log("opening GitHub");
      window.open("https://github.com/");
      let go = "opening Github";
      sp(go);
    }
    if (text.includes("Google Maps") || text.includes("Maps")) {
      let str = text;
      str = str.replace("search", "");
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "opening Maps 🚩";
      texts.appendChild(p);
      console.log("opening Maps");
      window.open("https://www.google.com/maps");
      let go = "opening Maps";
      sp(go);
    }
    if (text.includes("search") || text.includes("Search")) {
      let str = text;
      str = str.replace("search", "");
      str = str.replace("Search", "");
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "opening...🔍";
      texts.appendChild(p);
      console.log("opening...");
      window.open("https://www.google.com/search?q=" + str);
      let go = "searching for" + str;
      sp(go);
    }
    if (text.includes("find") || text.includes("Find")) {
      let str = text;
      str.toLowerCase();
      str = str.replace("find", "");
      str = str.replace("Find", "");
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "opening...🔍";
      texts.appendChild(p);
      console.log("opening...");
      window.open("https://www.google.com/search?q=" + str);
      let go = "searching for" + str;
      sp(go);
    }
    if (text.includes("What is") || text.includes("what is")) {
      let str = text;
      str.toLowerCase();
      str = str.replace("what is", "");
      str = str.replace("What is", "");
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "opening...🔍";
      texts.appendChild(p);
      console.log("opening...");
      window.open("https://www.google.com/search?q=" + str);
      let go = "searching for" + str;
      sp(go);
    }
    if (text.includes("Who is") || text.includes("who is")) {
      let str = text;
      str.toLowerCase();
      str = str.replace("who is", "");
      str = str.replace("Who is", "");
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "opening...🔍";
      texts.appendChild(p);
      console.log("opening...");
      window.open("https://www.google.com/search?q=" + str);
      let go = "searching for " + str;
      sp(go);
    }
    if (text.includes("Tìm") || text.includes("tìm")) {
      let str = text;
      str.toLowerCase();
      str = str.replace("tìm", "");
      str = str.replace("Tìm", "");
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "opening...🔍";
      texts.appendChild(p);
      console.log("opening...");
      window.open("https://www.google.com/search?q=" + str);
      let go = "searching for " + str;
      sp(go);
    }
    if (text.includes("Watch") || text.includes("watch")) {
      let str = text;
      str.toLowerCase();
      str = str.replace("watch", "");
      str = str.replace("Watch", "");
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "opening...🔍";
      texts.appendChild(p);
      console.log("opening...");
      window.open("https://www.youtube.com/results?search_query=" + str);
      let go = "opening " + str + " on YouTube";
      sp(go);
    }
    if (text.includes("Xem") || text.includes("xem")) {
      let str = text;
      str.toLowerCase();
      str = str.replace("xem", "");
      str = str.replace("Xem", "");
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "opening...🔍";
      texts.appendChild(p);
      console.log("opening...");
      window.open("https://www.youtube.com/results?search_query=" + str);
      let go = "opening " + str + " on YouTube";
      sp(go);
    }
    if (text.includes("Mở") || text.includes("mở")) {
      let str = text;
      str.toLowerCase();
      str = str.replace("mở", "");
      str = str.replace("Mở", "");
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "opening...🔍";
      texts.appendChild(p);
      console.log("opening...");
      window.open("https://www.youtube.com/results?search_query=" + str);
      let go = "opening " + str + " on YouTube";
      sp(go);
    }
    if (text.includes("See") || text.includes("see")) {
      let str = text;
      str.toLowerCase();
      str = str.replace("see", "");
      str = str.replace("See", "");
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "opening...🔍";
      texts.appendChild(p);
      console.log("opening...");
      window.open("https://www.youtube.com/results?search_query=" + str);
      let go = "opening " + str + " on YouTube";
      sp(go);
    }
    p = document.createElement("p");
  }
});

recognition.addEventListener("end", () => {
  recognition.start();
});

recognition.start();

function sp(a) {
const utterance = new SpeechSynthesisUtterance(a);
window.speechSynthesis.speak(utterance);      
}
