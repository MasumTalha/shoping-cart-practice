function updatingCaseNumber(isIncreasing) {
  const caseInput = document.getElementById('case-input-field');
  const caseValue = caseInput.value;
  const caseInputParse = parseFloat(caseValue);
  if (isIncreasing == true) {
    caseInput.value = caseInputParse + 1;
  } else if (caseValue > 0) {
    caseInput.value = caseInputParse - 1;
  }

}
document.getElementById('case-plus-button').addEventListener('click', function () {
  updatingCaseNumber(true);

})
document.getElementById('case-minus-button').addEventListener('click', function () {
  updatingCaseNumber(false);
})