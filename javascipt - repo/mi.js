// function printResume() {
  //   const resumeData = JSON.parse(localStorage.getItem("resumeData"));
  //   if (resumeData) {
  //     const printWindow = window.open("", "_blank");
  //     const { name, phone, email, linkedin, educations, workExperiences, certifications, skills } = resumeData;
  
  // printWindow.document.write(`
  //   <html>
  //       <head>
  //         <title>Print Resume</title>
  //         <style>
  //           body {
  //             font-family: Arial, sans-serif;
  //             background:linear-gradient(green,yellow);
               
  //           }
  //           .container {
  //             width: 160mm;
  //             height: 250mm;
  //             margin: 0 auto;
  //             box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  //             padding: 20px;
  //              background-color: #ffffff;
  
  //           }
  //           h1
  //           {
  //             color: aqua;
  //             text-align : center;
  
  //           }
  //           h2 {
  //             color: #000000;
  //             font-weight : bold;
  //             margin-left : 20px;
  //           }
  //            h3 {
  //             color: gray;
  //           }
  //           .section {
  //             margin-bottom: 30px;
  //           }
  //           .section h2 {
  //             font-size: 18px;
  //             font-weight: bold;
  //             margin-bottom: 10px;
  //           }
  //           .section-item {
  //             margin-bottom: 10px;
  //             margin-left: 30px;
  //           }
  //         </style>
  //       </head>
  //       <body>
  //         <div class="container">
  //           <h1>${name}</h1>
  //           <div class="section">
  //             <h2>Contact</h2>
  //             <div class="section-item">Phone: ${phone}</div>
  //             <div class="section-item">Email: ${email}</div>
  //             <div class="section-item">LinkedIn: ${linkedin}</div>
  //           </div>
  //           <div class="section">
  //             <h2>Educational Qualifications</h2>
  //             ${educations.map(
  //               (education) => `<div class="section-item">
  //                 <h3>${education.degree}</h3>
  //                 <div>${education.university}</div>
  //                 <div>${education.year}</div>
  //               </div>`
  //             ).join('')}
  //           </div>
  //           <div class="section">
  //             <h2>Work Experience</h2>
  //             ${workExperiences.map(
  //               (work) => `<div class="section-item">
  //                 <h3>${work.position}</h3>
  //                 <div>${work.company}</div>
  //                 <div>${work.duration} years</div>
  //               </div>`
  //             ).join('')}
  //           </div>
  //           <div class="section">
  //             <h2>Certifications</h2>
  //             ${certifications.map(
  //               (certification) => `<div class="section-item">
  //                 <h3>${certification.certificate}</h3>
  //                 <div>${certification.authority}</div>
  //                 <div>${certification.certYear}</div>
  //               </div>`
  //             ).join('')}
  //           </div>
  //           <div class="section">
  //             <h2>Skill Set</h2>
  //             ${skills.map((skill) => `<div class="section-item">${skill}</div>`).join('')}
  //           </div>
  //         </div>
  //       </body>
  //       </html>`);
  //     printWindow.document.close();
  //     printWindow.print();
  //   } else {
  //     alert("No resume data found. Please save your resume first.");
  //   }
  // }