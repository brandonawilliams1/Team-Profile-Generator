const generateManager = manager => {
    return `
          <article>
            <div class="blue-bg">
              <h3>${manager.getName()}</h3>
              <h4><i class="fas fa-mug-hot"></i> ${manager.getRole()}</h4>
            </div>
            <div class="grey-bg">
              <ul>
                <li>ID: ${manager.getId()}</li>
                <li>
                  Email:
                  <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a>
                </li>
                <li>Office Number: ${manager.getOfficeNumber()}</li>
              </ul>
            </div>
          </article>`;
  };
  
  const generateEngineers = engineers => {
    let engineersHTML = [];
    for (let i = 0; i < engineers.length; i++) {
      engineersHTML.push(`
          <article>
            <div class="blue-bg">
              <h3>${engineers[i].getName()}</h3>
              <h4><i class="fas fa-glasses"></i> ${engineers[i].getRole()}</h4>
            </div>
            <div class="grey-bg">
              <ul>
                <li>ID: ${engineers[i].getId()}</li>
                <li>
                  Email:
                  <a href="mailto:${engineers[i].getEmail()}">${engineers[i].getEmail()}</a>
                </li>
                <li>GitHub: <a href="https://github.com/${engineers[i].getGitHub()}" target="_blank">${engineers[i].getGitHub()}</a></li>
              </ul>
            </div>
          </article>`);
    }
    return engineersHTML.join("");
  };
  
  const generateInterns = interns => {
    let internsHTML = [];
    for (let i = 0; i < interns.length; i++) {
      internsHTML.push(`
          <article>
            <div class="blue-bg">
              <h3>${interns[i].getName()}</h3>
              <h4><i class="fas fa-user-graduate"></i> ${interns[i].getRole()}</h4>
            </div>
            <div class="grey-bg">
              <ul>
                <li>ID: ${interns[i].getId()}</li>
                <li>
                  Email:
                  <a href="mailto:${interns[i].getEmail()}">${interns[i].getEmail()}</a>
                </li>
                <li>School: ${interns[i].getSchool()}</li>
              </ul>
            </div>
          </article>`);
    }
    return internsHTML.join("");
  };
  
  function generateHTML(manager, engineers, interns) {
    return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" href="./assets/css/styles.css" />
      <title>Team Profile</title>
    </head>
  
    <body>
      <header>
        <h1>My Team</h1>
      </header>
      
      <main class="container">
        <div class="flex-container">
          ${generateManager(manager)}
          ${generateEngineers(engineers)}
          ${generateInterns(interns)}        
        </div>
      </main>
  
      <script
        src="https://kit.fontawesome.com/7f68d95029.js"
        crossorigin="anonymous"
      ></script>
    </body>
  </html>
  `;
  }
  
  module.exports = generateHTML;