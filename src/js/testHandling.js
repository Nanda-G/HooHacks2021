var test = require("./test.js");

sub = localStorage.getItem("subject")
let ques
for (let i=0; i<test.length; i++){
  if(test[i].subject===sub){
    ques = test[i].test
    break;
  }
}
// ============Rendering Test Data==============
for (let i = 0; i < ques.length; i++) {
  $("#test").append(
    `<div class="panel-heading question">
            Q.${i + 1} ${ques[i].q}
        </div>
        <div class="panel-body" id="q${i}"></div>`
  );
  if (ques[i].type === "mcq") {
    for (let j = 0; j < ques[i].o.length; j++) {
      $("#q" + i.toString()).append(
        `<div class="radio">
                	<label>
            			<input type="radio" name="${ques[i].id}" value="${ques[i].o[j]}">${ques[i].o[j]}
                	</label>
          		</div>`
      );
    }
  } else if (ques[i].type === "sub") {
    $("#q" + i.toString()).append(
      `<div>
                <label>
                    <input type="text" name="${ques[i].id}">
                </label>
            </div>`
    );
  }
}

$("#test").append(
  `<div class="panel-footer">
        <button id="submit" type="submit" class="btn btn-primary">Submit</button>
    </div>`
);

var res = { score: 0, ans: [] };
$("#submit").on("click", (e) => {
  e.preventDefault();
  for (let i = 0; i < ques.length; i++) {
    if (ques[i].type === "mcq") {
      options = document.querySelectorAll(`input[name="${ques[i].id}"]`);
      let ans;
      for (const option of options) {
        if (option.checked) {
          ans = option.value;
          break;
        }
      }
      if (ans === ques[i].a) {
        res.score++;
        res.ans.push("Correct");
      } else res.ans.push("Incorrect");
    } else if (ques[i].type === "sub") {
      ans = $(`input[name="${ques[i].id}"]`).val();
      if (ans.toLowerCase() === ques[i].a.toLowerCase()) {
        res.score++;
        res.ans.push("Correct");
      } else res.ans.push("Incorrect");
    }
  }
  $("#test").html(
    `<div class="panel-heading question">
            Result
        </div>
        <div class="panel-body" id="result">
            <p>Score: ${res.score} out of ${res.ans.length}</p>
        </div>`
  );
  for (let i = 0; i < res.ans.length; i++) {
    $("#result").append(`<p>Q.${i + 1} ${res.ans[i]}</p>`);
  }
});
