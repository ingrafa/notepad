function addNote() {
    const noteInput = document.getElementById('note-input');
    const notesContainer = document.getElementById('notes-container');

    if (noteInput.value.trim() !== '') {
        const noteDiv = document.createElement('div');
        noteDiv.className = 'note';

        const noteText = document.createElement('p');
        noteText.textContent = noteInput.value;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.onclick = function() {
            notesContainer.removeChild(noteDiv);
        };

        noteDiv.appendChild(noteText);
        noteDiv.appendChild(deleteButton);

        notesContainer.appendChild(noteDiv);
        noteInput.value = '';
    }
}
