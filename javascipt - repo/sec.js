function addEducationField() {
    let educationFields = document.getElementById("educationFields");
    let newEducationField = document.createElement("div");
    newEducationField.className = "educationField";
    newEducationField.innerHTML = `<input type="text" class="degree" placeholder="Degree" required>
      <input type="text" class="university" placeholder="University" required>
      <input type="number" class="year" placeholder="Year" required>`;
    educationFields.appendChild(newEducationField);
  }
  
  function addWorkField() {
    let workFields = document.getElementById("workFields");
    let newWorkField = document.createElement("div");
    newWorkField.className = "workField";
    newWorkField.innerHTML = `<input type="text" class="company" placeholder="Company" required>
      <input type="text" class="position" placeholder="Position" required>
      <input type="number" class="duration" placeholder="Duration (in years)" required>`;
    workFields.appendChild(newWorkField);
  }
  
  function addCertificationField() {
    let certificationFields = document.getElementById("certificationFields");
    let newCertificationField = document.createElement("div");
    newCertificationField.className = "certificationField";
    newCertificationField.innerHTML = `<input type="text" class="certificate" placeholder="Certificate" required>
      <input type="text" class="authority" placeholder="Authority" required>
      <input type="number" class="certYear" placeholder="Year" required>`;
    certificationFields.appendChild(newCertificationField);
  }
  
  function addSkillField() {
    let skillFields = document.getElementById("skillFields");
    let newSkillField = document.createElement("div");
    newSkillField.className = "skillField";
    newSkillField.innerHTML = `<input type="text" class="skill" placeholder="Skill" required>`;
    skillFields.appendChild(newSkillField);
  }
  
  function saveResume() {
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    let linkedin = document.getElementById("linkedin").value;
  
    let nameRegex = /^[a-zA-Z\s]+$/;
    if (!nameRegex.test(name)) {
      alert("Please enter a valid name with only alphabetic characters.");
      return;
    }
  
    let phoneRegex = /^\d{1,10}$/;
    if (!phoneRegex.test(phone)) {
      alert("Please enter a valid phone number with a maximum of 10 digits.");
      return;
    }
  
    let emailRegex = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }
  
    if (!name || !phone || !email || !linkedin) {
      alert("Please fill in all the required fields.");
      return;
    }
  
    let educationFields = document.getElementsByClassName("educationField");
    let educations = [];
    for (let field of educationFields) {
      let degree = field.getElementsByClassName("degree")[0].value;
      let university = field.getElementsByClassName("university")[0].value;
      let year = field.getElementsByClassName("year")[0].value;
      if (!degree || !university || !year) {
        alert("Please fill in all the required fields in the education section.");
        return;
      }
      educations.push({ degree, university, year });
    }
  
    let workFields = document.getElementsByClassName("workField");
    let workExperiences = [];
    for (let field of workFields) {
      let company = field.getElementsByClassName("company")[0].value;
      let position = field.getElementsByClassName("position")[0].value;
      let duration = field.getElementsByClassName("duration")[0].value;
      workExperiences.push({ company, position, duration });
    }
  
    let certificationFields = document.getElementsByClassName("certificationField");
    let certifications = [];
    for (let field of certificationFields) {
      let certificate = field.getElementsByClassName("certificate")[0].value;
      let authority = field.getElementsByClassName("authority")[0].value;
      let certYear = field.getElementsByClassName("certYear")[0].value;
      if (!certificate || !authority || !certYear) {
        alert("Please fill in all the required fields in the certification section.");
        return;
      }
      certifications.push({ certificate, authority, certYear });
    }
  
    let skillFields = document.getElementsByClassName("skillField");
    let skills = [];
    for (let field of skillFields) {
      let skill = field.getElementsByClassName("skill")[0].value;
      if (!skill) {
        alert("Please fill in all the required fields ");
        return;
      }
      skills.push(skill);
    }
  
    let resumeData = {
      name,
      phone,
      email,
      linkedin,
      educations,
      workExperiences,
      certifications,
      skills
    };
  
    localStorage.setItem("resumeData", JSON.stringify(resumeData));
    alert("Saved Sucessfully");
  }
  
  