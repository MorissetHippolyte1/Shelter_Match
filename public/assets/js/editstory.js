async function editFormHandler(event) {
    event.preventDefault();
    const dog_name = document.querySelector('#dog_name').value;
    const story = document.querySelector('#story').value;
    const owner_name = document.querySelector('#owner_name').value;
    
  
    // window.location gives us access to the URL. We then use the .split() method to access the number at the end of the URL and set that equal to id.
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
  
   
    // Controller handles this 'put' request
    const response = await fetch(`/api/dog/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        dog_name,
        story,
        owner_name,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // If the response is ok, story was updated successfully
    if (response.ok) {
      document.location.replace(`/dog/${id}`);
    } else {
      alert('Failed to edit Story');
    }
  }
  
  document.querySelector('.edit-story-form').addEventListener('submit', editFormHandler);
  