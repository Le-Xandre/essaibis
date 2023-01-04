const draggerArea = document.getElementById('dragger');
const inputField = document.getElementById('fileInputField');
const dragText = document.getElementById('drag-text');
const fileName = document.getElementById('fileName');
const browseFile = document.getElementById('browseFile');
browseFile.addEventListener('click', () => {
    inputField.value = ""
    inputField.click();
});
inputField.addEventListener('change', function(e) {
    file = this.files[0];
    fileHandler(file);
});
draggerArea.addEventListener('dragover', (e) => {
    e.preventDefault(); dragText.textContent = "Relancer la page pour glisser et déposer de nouveau 1 ou plusieurs images"
});
draggerArea.addEventListener('dragleave', () => {
    dragText.textContent = "Relancer la page pour télécharger de nouveau 1 ou plusieurs images"
  });

draggerArea.addEventListener('drop', (e) => {
    e.preventDefault(); file = e.dataTransfer.files[0];
    fileHandler(file)
});
const deleteHandler = () => {
    const draggerElement = ` <div class="icon"><i class="fa-solid fa-images"></i></div> <h2 id="drag-text">Glisser & Déposer</h2> <h3>Où</h3> <button class="browseFile" id="browseFile">Parcourir les fichiers</button> <input type="file" hidden id="fileInputField"/>`;
    draggerArea.innerHTML = draggerElement (fileName.innerHTML = '')
    draggerArea.classList.remove('active');
};
const fileHandler = (file) => {
    const validExt = ["image/jpeg","image/jpg", "image/png","image/gif","image/SVG"]
    if (validExt.includes(file.type)) {
        const fileReader = new FileReader();
        fileReader.onload = () => {
            const fileURL = fileReader.result;
            let imgTag = `<img src=${fileURL} alt=""/>`
            draggerArea.innerHTML = imgTag;
            let paragraph = `<div class="fileName"><i class="fa-solid fa-trash-can" onclick={deleteHandler()}></i><p>${file.name.split('.')[0]}</p></div>`
            fileName.innerHTML = $.find(paragraph);
        }
        fileReader.readAsDataURL(file);
        draggerArea.classList.add('active')
    } else {
        draggerArea.classList.remove('active');
        
        dragText.textContent = 'Relancer la page pour télécharger de nouveau 1 image'

    }
};




