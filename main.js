const cardinfo = [
    {
        id: 1,
        nome: "Eric Smith",
        idade: 26,
        local: "London",
        github: "8K",
        freecd: "3K",
        Duo: "1.2K",
        image: "image-victor.jpg",
    },
    {
        id: 2,
        nome: "The Pascal",
        idade: 20,
        local: "FortalCity",
        github: "+8K",
        freecd: "10K",
        Duo: "15 Dias",
        image: "Cat.jpg",
    },
    {
        id: 3,
        nome: "Teobaldo",
        idade: 25,
        local: "Paris",
        github: "5K",
        freecd: "12K",
        Duo: "9K",
        image: "EricCartman.png",
    },

];

for (const cardElemnt of cardinfo) {
    const card = `<div class="card">
      <div class="img-fundo">
        <img src="./assets/images/bg-pattern-card.svg" alt="background pattern card">
      </div>
      <div class="imgbx">
        <img src="./assets/images/${cardElemnt.image}" alt="${cardElemnt.nome}">
      </div>
      <div class="conteiner">
        <div class="principal">
          <h3 class="nome">${cardElemnt.nome}</h3>
          <h6 class="idade">${cardElemnt.idade}</h6>
        </div>
        <p class="local">${cardElemnt.local}</p>
        <div class="divider"></div>
        <div class="social-media">
          <div class="github">
            <h2>${cardElemnt.github}</h2>
            <p>GitHub</p>
          </div>
          <div class="freecodecamp">
            <h2>${cardElemnt.freecd}</h2>
            <p>FreeCodeCamp</p>
          </div>
          <div class="duolingo">
            <h2>${cardElemnt.Duo}</h2>
            <p>Duolingo</p>
          </div>
        </div>
      </div>
    </div>`

    document.getElementById("container-Card").innerHTML += card;
}