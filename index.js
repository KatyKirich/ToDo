const form = document.querySelector(".form");
const desk = document.querySelector(".cards");
const data = [];

const submitBtm = document.querySelector(".btn_submit");
const delBtn = document.querySelector("#delete");

let index

const showTask = () => {
desk.innerHTML = "";
  data.forEach((item) => {
    desk.innerHTML += `<div class="card_text">
    <h3>${item.note}</h3>
    <p>${item.content}</p>
    <button class="btn_card" id="redact">&#128394;</button>
    <button class="btn_card" id ="delete">&#128465;</button>
    <button class="btn_card" id ="done">&#10003;</button>
  </div>`;
  });
};

const searchTask = (event)=>{
  const card = event.target.closest(".card_text");

  const cardTask = card.querySelector(".task").textContent;
  const cardComment = card.querySelector(".comment").textContent;

  data.forEach(function (el, ind) {
    if (el.note === cardTask && el.comment === cardComment) {
      index = ind;
    }
  })
}

const delTask=(index)=>{
  data.splice(index, 1);
  showTask();
}

submitBtm.addEventListener("click", (event) => {
  event.preventDefault();

  const task = document.querySelector(".task");
  const comment = document.querySelector(".comment");

  data.push({ note: task.value, content: comment.value });

  showTask();
  form.reset();
});

desk.addEventListener("click", (event)=>{
  event.preventDefault();

  if (event.target.closest("#redact")){

    searchTask()
  } 
if(event.target.closest("#delete")){

  searchTask();
  delTask(index);
}
if(event.target.closest("#done")){
  searchTask()
}
})