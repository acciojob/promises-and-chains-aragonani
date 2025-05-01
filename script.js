  document.getElementById('voteForm').addEventListener('submit', function (e) {
      e.preventDefault(); // Prevent actual form submission

      const name = document.getElementById('name').value.trim();
      const age = parseInt(document.getElementById('age').value.trim());

      // Validation
      if (!name || isNaN(age)) {
        alert("Please enter valid details.");
        return;
      }

      // Promise logic
      new Promise((resolve, reject) => {
        setTimeout(() => {
          if (age > 18) {
            resolve(`Welcome, ${name}. You can vote.`);
          } else {
            reject(`Oh sorry ${name}. You aren't old enough.`);
          }
        }, 4000); // 4-second delay
      })
      .then(message => alert(message))
      .catch(errorMessage => alert(errorMessage));
    });