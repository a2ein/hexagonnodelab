document.addEventListener('DOMContentLoaded', () => {
    const events = [
        { name: 'Center and variability', date: '1', description: '', modelUrl: 'https://phet.colorado.edu/sims/html/center-and-variability/latest/center-and-variability_all.html' },
        { name: 'FRACTION', date: '2', description: '', modelUrl: 'https://phet.colorado.edu/sims/html/fractions-mixed-numbers/latest/fractions-mixed-numbers_all.html' },{
            name:'MEAN',date:'3',description:'',modelUrl:'https://phet.colorado.edu/sims/html/mean-share-and-balance/latest/mean-share-and-balance_all.html'
        },
    ];
    
    const eventsList = document.getElementById('events-list');
    const modal = document.getElementById('modal');
    const closeButton = document.querySelector('.close-button');
    const modalTitle = document.getElementById('modal-title');
    const modalDate = document.getElementById('modal-date');
    const modalDescription = document.getElementById('modal-description');
    const modelViewer = document.getElementById('model-viewer');
    
    events.forEach(event => {
        const eventItem = document.createElement('div');
        eventItem.className = 'event';
        eventItem.innerHTML = `
            <h3>${event.name}</h3>
            <p>Date: ${event.date}</p>
       
            <button onclick="showEventDetails('${event.name}', '${event.date}', '${event.description}', '${event.modelUrl}')">Visual Representation</button>
        `;
        eventsList.appendChild(eventItem);
    });

    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    };
});

function showEventDetails(name, date, description, modelUrl) {
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDate = document.getElementById('modal-date');
    const modalDescription = document.getElementById('modal-description');
    const modelViewer = document.getElementById('model-viewer');
    
    // Display the model using iframe or other method
    modelViewer.innerHTML = `<iframe src="${modelUrl}" width="100%" height="240px"></iframe>`;
    
    modal.style.display = 'block';
    modalTitle.innerText = name;
    modalDate.innerText = `Date: ${date}`;
    modalDescription.innerText = description;

}
