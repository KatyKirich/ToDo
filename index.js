const form = document.querySelector(".form");

const desk = document.querySelector(".cards");
const deskProgress = document.querySelector(".card_progress");
const deskDone = document.querySelector(".card_done");
const deskDel = document.querySelector(".card_del");

const data = [];
const dataDel = [];

const submitBtm = document.querySelector(".btn_submit");
const delBtn = document.querySelector("#delete");

let index;

const showTask = () => {
  desk.innerHTML = "";
  data.forEach((item) => {
    desk.innerHTML += `<div class="card_text">
    <h3 class="card_task">${item.note}</h3>
    <p class="card_comment">${item.content}</p>
    <button class="btn_card" id="redact">&#128394;</button>
    <button class="btn_card" id ="delete">&#128465;</button>
    <button class="btn_card" id ="done">&#10003;</button>
  </div>`;
  });
};

const searchTask = (event) => {
  const card = event.target.closest(".card_text");

  const cardTask = card.querySelector(".card_task").textContent;
  const cardComment = card.querySelector(".card_comment").textContent;

  data.forEach(function (el, ind) {
    if (el.note === cardTask && el.comment === cardComment) {
      index = ind;
    }
  });
  console.log(index);
};

const delTask = (i) => {
  deskDel.innerHTML = "";
  data[i];
  deskDel.innerHTML += `<div class="card_text">
  <h3 class="card_task">${i.note}</h3>
  <p class="card_comment">${i.content}</p>
</div>`;

  showTask();
};

submitBtm.addEventListener("click", (event) => {
  event.preventDefault();

  const task = document.querySelector(".task");
  const comment = document.querySelector(".comment");

  data.push({ note: task.value, content: comment.value });

  showTask();
  form.reset();
});

desk.addEventListener("click", (event) => {
  event.preventDefault();

  if (event.target.closest("#redact")) {
    searchTask(event);
  }
  if (event.target.closest("#delete")) {
    searchTask(event);
    console.log(index);
    dataDel.push(index);
  }
  if (event.target.closest("#done")) {
    searchTask(event);
  }
});
