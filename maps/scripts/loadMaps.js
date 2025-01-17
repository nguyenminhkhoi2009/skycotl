// scripts/loadMaps.js

function createImageElement(src, alt) {
    const img = document.createElement('img');
    img.src = `${src}.jpg`;
    img.alt = alt;
    img.classList.add('clickable-image');
    return img;
}

function createLocationElement(location) {
    const div = document.createElement('div');
    div.classList.add('image');
    const img = createImageElement(location.imgSrc, location.name);
    div.appendChild(img);
    div.innerHTML += `<p>${location.name}</p>`;
    return div;
}

function createSectionElement(section, sectionId) {
    const sectionDiv = document.createElement('div');
    sectionDiv.id = sectionId;
    sectionDiv.innerHTML = `<p>${section.title}</p>`;
    section.locations.forEach(location => {
        const locationElement = createLocationElement(location);
        sectionDiv.appendChild(locationElement);
    });
    return sectionDiv;
}

fetch('json/maps.json')
    .then(response => response.json())
    .then(data => {
        Object.keys(data).forEach(key => {
            const section = data[key];
            const sectionId = section.name.toLowerCase().replace(/\s+/g, '');
            const sectionElement = createSectionElement(section, sectionId);
            document.body.appendChild(sectionElement);
        });

        // Reinitialize click events for images
        initializeImageClickEvents();
    })
    .catch(error => console.error('Error loading JSON:', error));
