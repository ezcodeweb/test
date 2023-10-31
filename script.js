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
    }
    if (text.includes("open Gmail")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "opening gmail\n📧";
      texts.appendChild(p);
      console.log("opening gmail");
      window.open("https://mail.google.com/mail/u/0/");
    }
    if (text.includes("open Facebook")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "opening facebook\n👌";
      texts.appendChild(p);
      console.log("opening facebook");
      window.open("https://www.facebook.com/");
    }
    if (text.includes("open zalo")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "opening zalo\n👌";
      texts.appendChild(p);
      console.log("opening zalo");
      window.open("https://chat.zalo.me/");
    }
    if (text.includes("open map")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "opening map\n😊";
      texts.appendChild(p);
      console.log("opening map");
      window.open("https://www.google.com/maps/");
    }
    if (text.includes("play game") || text.includes("open game") || text.includes("Open game") || text.includes("Play game")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "opening game\n";
      texts.appendChild(p);
      console.log("opening game");
      window.open("https://game.thomwebsite.com");
    }
    if (text.includes("open translate") || text.includes("Open translate")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "opening translate\n🤗";
      texts.appendChild(p);
      console.log("opening translate");
      window.open("https://translate.google.com/");
    }
    if (text.includes("open new tab") || text.includes("open GoogleSearch") || text.includes("open search") || text.includes("open Google") || text.includes("Open new tab") || text.includes("Open GoogleSearch") || text.includes("Open search") || text.includes("Open Google")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "opening new tab\n";
      texts.appendChild(p);
      console.log("opening new tab");
      window.open("https://google.com/");
    }
    if (text.includes("open google meet") || text.includes("open meet")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "opening google meet\n👨👨‍👦‍👦";
      texts.appendChild(p);
      console.log("opening google meet");
      window.open("https://meet.google.com/");
    }
    if (text.includes("open coder chat") || text.includes("open chat") || text.includes("open ed") || text.includes("open Ed")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "opening Ed\n🤗";
      texts.appendChild(p);
      console.log("opening Ed");
      window.open("https://edstem.org/us/dashboard");
    }
    if (text.includes("open messenger") || text.includes("open Messenger") || text.includes("Open messenger") || text.includes("Open Messenger")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "opening messenger\n📨";
      texts.appendChild(p);
      console.log("opening messenger");
      window.open("https://www.facebook.com/messages/");
    }
    if (text.includes("open code pen") || text.includes("open codepen") || text.includes("open code gallery") || text.includes("Open code pen") || text.includes("Open codepen") || text.includes("Open code gallery")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "opening Codepen\n✍";
      texts.appendChild(p);
      console.log("opening Codepen");
      window.open("https://codepen.io/trending");
    }
    if (text.includes("open edx") || text.includes("open Edx") || text.includes("open learning code") || text.includes("open learning")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "opening Edx\n✌";
      texts.appendChild(p);
      console.log("opening Edx");
      window.open("https://courses.edx.org/dashboard");
    }
    if (text.includes("open Instagram") || text.includes("open instagram")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "opening Instagram\n📸";
      texts.appendChild(p);
      console.log("opening Instagram");
      window.open("https://www.instagram.com/");
    }
    if (text.includes("open WhatsApp")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "opening WhatsApp\n📫";
      texts.appendChild(p);
      console.log("opening WhatsApp");
      window.open("https://web.whatsapp.com/");
    }
    if (text.includes("open GitHub")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "opening GitHub\n📬";
      texts.appendChild(p);
      console.log("opening GitHub");
      window.open("https://github.com/");
    }
    if (text.includes("search")) {
      let str = text;
      str = str.replace("search", "");
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "opening...🔍";
      texts.appendChild(p);
      console.log("opening...");
      window.open("https://www.google.com/search?q=" + str);
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
    }
    p = document.createElement("p");
  }
});

recognition.addEventListener("end", () => {
  recognition.start();
});

recognition.start();