const candidateData = {
  candidates: [
    {
      "id": 1,
      "name": "Aarav Kumar",
      "location": "Mumbai",
      "jobRole": "Software Developer"
    },
    {
      "id": 2,
      "name": "Aisha Patel",
      "location": "Delhi",
      "jobRole": "Business Analyst"
    },
    {
      "id": 3,
      "name": "Arjun Sharma",
      "location": "Bengaluru",
      "jobRole": "Data Scientist"
    },
    {
      "id": 4,
      "name": "Ishaan Gupta",
      "location": "Hyderabad",
      "jobRole": "UI/UX Designer"
    },
    {
      "id": 5,
      "name": "Kavya Singh",
      "location": "Chennai",
      "jobRole": "Marketing Manager"
    },
    {
      "id": 6,
      "name": "Mohammed Khan",
      "location": "Kolkata",
      "jobRole": "Sales Executive"
    },
    {
      "id": 7,
      "name": "Neha Sharma",
      "location": "Pune",
      "jobRole": "Project Manager"
    },
    {
      "id": 8,
      "name": "Rohan Verma",
      "location": "Ahmedabad",
      "jobRole": "Software Engineer"
    },
    {
      "id": 9,
      "name": "Shreya Patel",
      "location": "Jaipur",
      "jobRole": "HR Coordinator"
    },
    {
      "id": 10,
      "name": "Varun Singh",
      "location": "Lucknow",
      "jobRole": "Finance Analyst"
    }
  ]
};

function searchCandidates() {
  const locationInput = document.getElementById("locationInput").value.toLowerCase();
  const jobRoleInput = document.getElementById("jobRoleInput").value.toLowerCase();

  const filteredCandidates = candidateData.candidates.filter(candidate => {
    const locationMatch = candidate.location.toLowerCase().includes(locationInput);
    const jobRoleMatch = candidate.jobRole.toLowerCase().includes(jobRoleInput);
    return locationMatch && jobRoleMatch;
  });

  displaySearchResults(filteredCandidates);
}

function displaySearchResults(candidates) {
  const searchResults = document.getElementById("searchResults");
  searchResults.innerHTML = "";

  if (candidates.length > 0) {
    candidates.forEach(candidate => {
      const candidateElement = document.createElement("div");
      candidateElement.innerHTML = `<p>${candidate.name}</p>`;
      searchResults.appendChild(candidateElement);
    });
  } else {
    const noResultsElement = document.createElement("p");
    noResultsElement.textContent = "No candidates found.";
    searchResults.appendChild(noResultsElement);
  }
}