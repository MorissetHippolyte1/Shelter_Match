async function newFormHandler(event) {
    event.preventDefault();
  
    const dog_name = document.querySelector('#dog_name').value;
    const story = document.querySelector('#story').value;
    const owner_name = document.querySelector('#owner_name').value;
    
  
    const response = await fetch(`/api/dog`, {
      method: 'POST',
      body: JSON.stringify({
        dog_name,
        story,
        owner_name,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to add Story');
    }
  }
  
  document
    .querySelector('.new-story-form')
    .addEventListener('submit', newFormHandler);
  