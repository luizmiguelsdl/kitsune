const openModalButton = document.getElementById('openModal');
const modal = document.getElementById('modal');
const closeModalButton = document.getElementById('closeModal');
const mainOptions = document.getElementById('mainOptions');
const backButton = document.getElementById('backButton');
const subButton = document.getElementById('subButton');
const nextSignButton = document.getElementById('nextButton');
const headModal = document.getElementById('headModal');


openModalButton.addEventListener('click', () => {
  modal.style.display = 'flex';
});

closeModalButton.addEventListener('click', () => {
  modal.style.display = 'none';
  restart()
});

window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
    restart()
  }
});


document.getElementById('nextButton').addEventListener('click', () => {
  const selectedRadio = document.querySelector('input[name="value-radio"]:checked');
  const selectedCheck = document.querySelector('input[name="value-check"]:checked');
  const selectedDay = document.querySelector('input[name="value-day"]:checked');
  const selectedEnd = document.querySelector('input[name="value-end"]:checked');
  if (selectedRadio) {
    renderOptions(selectedRadio.value);
  } else if(selectedCheck){
    renderDays()
  }else if(selectedDay){
    renderSign()
  } else if(selectedEnd){
    modal.style.display = 'none';
    window.alert("O agendamento foi concluído com sucesso! Confirme o horário em seu E-mail ou Telefone.");
    restart()
  } else{
    window.alert("Verifique se preencheu os campos corretamente");
  }
});

backButton.addEventListener('click', () => {
  restart()
});


function renderDays() {
  mainOptions.innerHTML = '';
  const days = ["Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];

  for (let item of days) {
    mainOptions.innerHTML += `
      <label class="label">
                    <input type="radio" id="value-1" name="value-day" value="${item}"/>
                    <p class="text">${item}</p>
                </label>
      `;

  }
}


function renderOptions(selection) {
  mainOptions.innerHTML = '';
  if (selection == 'Make') {
    let makeOp = ['Maquiagem', 'Sobrancelhas', 'Depilação']
    for (let item of makeOp) {
      mainOptions.innerHTML += `
      <label class="label">
                    <input type="checkbox" id="value-1" name="value-check" value="${item}" />
                    <p class="text">${item}</p>
                </label>
      `;

    }
  } else if (selection == 'Hair') {
    let hairOp = ['Alisamento', 'Corte', 'Coloração', 'Escova', 'Penteado']
    for (let item of hairOp) {
      mainOptions.innerHTML += `
        <label class="label">
                      <input type="checkbox" id="value-1" name="value-check" value="${item}"/>
                      <p class="text">${item}</p>
                  </label>
        `;

    }
  }
  backButton.style.display = 'block';
}

function restart() {
  backButton.style.display = 'none';

  mainOptions.innerHTML = `<label class="label">
                    <input type="radio" id="value-1" name="value-radio" value="Hair" />
                    <p class="text">Cabelo</p>
                </label>
                <label class="label">
                    <input type="radio" id="value-2" name="value-radio" value="Make" />
                    <p class="text">Pele / Maquiagem</p>
                </label>`;
                nextSignButton.innerHTML = 'Continuar'
}


function renderSign(){
  mainOptions.innerHTML = `<label class="signLabel">
                    <p>Qual o seu nome?</p>
                    <input class="signInput" type="text" name="name" id="name" placeholder="Nome e Sobrenome">
                </label>
                <label class="signLabel">
                    <p>Digite um email para contato</p>
                    <input class="signInput" type="email" name="email" id="email" placeholder="exemplo@exemplo.com">
                </label>
                <label class="signLabel">
                    <p>Digite um telefone para contato</p>
                    <input class="signInput" type="tel" id="phoneInput" placeholder="(XX) XXXXX-XXXX" required>
                </label>
                <label class="label" id="termCheck">
                    <input type="checkbox" id="value-1" name="value-end" value="Accept">
                    <p class="text" style="text-align: left; font-size: 18px;">Aceito os termos de responsabilidade</p>
                </label>`

                nextSignButton.textContent = 'Finalizar'
                const phoneInput = document.getElementById('phoneInput');
                phoneInput.addEventListener('input', () => {
                  let input = phoneInput.value.replace(/\D/g, '');
                  if (input.length > 11) input = input.slice(0, 11); 
                  if (input.length > 10) {
                    phoneInput.value = `(${input.slice(0, 2)}) ${input.slice(2, 7)}-${input.slice(7)}`;
                  } else if (input.length > 6) {
                    phoneInput.value = `(${input.slice(0, 2)}) ${input.slice(2, 6)}-${input.slice(6)}`;
                  } else if (input.length > 2) {
                    phoneInput.value = `(${input.slice(0, 2)}) ${input.slice(2)}`;
                  } else {
                    phoneInput.value = input;
                  }
                });
}


const backToTopButton = document.getElementById('backToTop');

        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) { 
                backToTopButton.classList.add('show');
            } else {
                backToTopButton.classList.remove('show');
            }
        });

        backToTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });


        let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slider img');
    if (index >= slides.length) currentIndex = 0;
    if (index < 0) currentIndex = slides.length - 1;

    slides.forEach((slide, i) => {
        slide.style.display = 'none';
    });

    slides[currentIndex].style.display = 'block';
}

function moveSlide(step) {
    currentIndex += step;
    showSlide(currentIndex);
}

showSlide(currentIndex);