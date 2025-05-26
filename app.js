const flashcards = [
    { question: "Quem é o pai do Naruto?", answer: "Minato Namikaze (4º Hokage)" },
    { question: "Qual o nome do time de Naruto?", answer: "Time 7" },
    { question: "Quem é o mestre do Kakashi?", answer: "Minato Namikaze" },
    { question: "Quem foi o primeiro Hokage?", answer: "Hashirama Senju" },
    { question: "Qual o nome da besta de 9 caudas?", answer: "Kurama" },
    { question: "Quem mata o Itachi?", answer: "Sasuke Uchiha" },
    { question: "Qual o clã do Neji?", answer: "Clã Hyuuga" },
    { question: "Quem é o Jinchuuriki do Shukaku?", answer: "Gaara" },
    { question: "Quem é o irmão do Sasuke?", answer: "Itachi Uchiha" },
    { question: "Qual é a Kekkei Genkai do Haku?", answer: "Hyoton (Elemento Gelo)" },
    { question: "Qual o nome do vilarejo do Naruto?", answer: "Konohagakure (Aldeia da Folha)" },
    { question: "Quem é o líder da Akatsuki?", answer: "Pain (Nagato)" }
  ];
  
const cardGrid = document.getElementById("cardGrid");
const clickSound = new Audio('cartinha.mp3');

flashcards.forEach(({ question, answer }) => {
    const card = document.createElement("div");
    card.classList.add("flashcard");
  
    const front = document.createElement("button");
    front.classList.add("front");
    front.textContent = question;

    front.addEventListener("click", () => {
        clickSound.currentTime = 0;
        clickSound.play();
    });
  
    const back = document.createElement("button");
    back.classList.add("back");
    back.textContent = answer;

    back.addEventListener("click", () => {
        clickSound.currentTime = 0;
        clickSound.play();
    });
  
    card.appendChild(front);
    card.appendChild(back);
  
    card.addEventListener("click", () => {
      card.classList.toggle("flipped");
    });
  
    cardGrid.appendChild(card);
});