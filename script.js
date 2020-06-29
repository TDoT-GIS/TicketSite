let project_val, jj_val, first, last, user_class, email;

function updateCollectorText(){
  let project_val = document.querySelector('input[name="projects"]:checked').value;
  let jj_val = document.querySelector('input[name="jj"]').value;
  console.log(project_val);
  console.log(jj_val);
  document.getElementById('textArea').value = 
  "I am requesting Collector and Survey123 for "+jj_val+". They will be a part of the "+project_val+" project.";
}
function updateTrimsText(){
  let first = document.querySelector('input[name="firstname"]').value;
  let last = document.querySelector('input[name="lastname"]').value;
  document.getElementById('trimsText').value = 
  "I am requesting a TRIMS account be created for "+first+" "+last+". Their user class should be "+user_class+"."; 
}

function updateEsriText(){
  let email = document.querySelector('input[name="email"]').value;
  document.getElementById('esriText').value = 
  "I am requesting access to ESRI online training. My Esri account email is "+email+"."; 
}

function copyText(id) {
  /* Get the text field */
  var copyText = document.getElementById(id);

  /* Select the text field */
  copyText.select();
  /* Copy the text inside the text field */
  document.execCommand("copy");

}