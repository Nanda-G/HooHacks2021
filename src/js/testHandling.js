const test = require("./test.js");

console.log(localStorage.getItem("subject"));

// ============Rendering Test Data==============
for (let i = 0; i < test.length; i++) {
  $("#test").append(
    `<div class="panel-heading question">
            Q.${i + 1} ${test[i].q}
        </div>
        <div class="panel-body" id="q${i}"></div>`
  );
  if (test[i].type === "mcq") {
    for (let j = 0; j < test[i].o.length; j++) {
      $("#q" + i.toString()).append(
        `<div class="radio">
                	<label>
            			<input type="radio" name="${test[i].id}" value="${test[i].o[j]}">${test[i].o[j]}
                	</label>
          		</div>`
      );
    }
  } else if (test[i].type === "sub") {
    $("#q" + i.toString()).append(
      `<div>
                <label>
                    <input type="text" name="${test[i].id}">
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
  for (let i = 0; i < test.length; i++) {
    if (test[i].type === "mcq") {
      options = document.querySelectorAll(`input[name="${test[i].id}"]`);
      let ans;
      for (const option of options) {
        if (option.checked) {
          ans = option.value;
          break;
        }
      }
      if (ans === test[i].a) {
        res.score++;
        res.ans.push("Correct");
      } else res.ans.push("Incorrect");
    } else if (test[i].type === "sub") {
      ans = $(`input[name="${test[i].id}"]`).val();
      if (ans.toLowerCase() === test[i].a.toLowerCase()) {
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
