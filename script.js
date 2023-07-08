document.getElementById('search-form').addEventListener('submit', function (event) {
    event.preventDefault();
    
    var location = document.getElementsByName('location')[0].value;
    var jobRole = document.getElementsByName('job_role')[0].value;
  
    var candidateData = [
      { name: 'John Doe', location: 'New Delhi', jobRole: 'Software Engineer' },
      { name: 'Jane Smith', location: 'San Francisco', jobRole: 'UX Designer' },
    ];
    
    var candidateList = document.getElementById('candidate-list');
    candidateList.innerHTML = '';
    
    candidateData.forEach(function(candidate) {
      var candidateItem = document.createElement('div');
      candidateItem.classList.add('candidate-item');
      candidateItem.innerHTML = '<h3>' + candidate.name + '</h3>' +
                                '<p>Location: ' + candidate.location + '</p>' +
                                '<p>Job Role: ' + candidate.jobRole + '</p>';
      candidateList.appendChild(candidateItem);
    });
  });