  document.addEventListener("DOMContentLoaded", function () {
      const ageInput = document.getElementById("age");
      const nameInput = document.getElementById("name");
      const button = document.getElementById("btn");

      // Listen for form submission
      button.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default form submission

        const age = ageInput.value.trim();
        const name = nameInput.value.trim();

        // Validation: Check if fields are empty
        if (!age || !name) {
          alert("Please enter valid details.");
          return;
        }

        // Create a promise to simulate voting eligibility check
        const checkEligibility = new Promise(function (resolve, reject) {
          setTimeout(function () {
            if (parseInt(age) > 18) {
              resolve();
            } else {
              reject();
            }
          }, 4000);
        });

        // Handle the promise result
        checkEligibility
          .then(function () {
            alert(`Welcome, ${name}. You can vote.`);
          })
          .catch(function () {
            alert(`Oh sorry ${name}. You aren't old enough.`);
          });
      });
    });