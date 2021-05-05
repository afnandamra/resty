module.exports = async function historyClick(e) {
  let method = e.currentTarget.childNodes[0].innerHTML;
  let url = e.currentTarget.childNodes[1].innerHTML;
  let body = e.currentTarget.childNodes[2].innerHTML;

  const input = document.getElementById(`url`);
  input.value = url;

  const selected = document.getElementById(`${method}`);
  await selected.click();

  const text = document.getElementById('body');
  text.value = body;

  const submit = document.getElementById('submit');
  await submit.click();
};


