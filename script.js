const rooms = {};
const MAX_OCCUPANTS = 2;

// Initialize rooms
function initializeRooms(roomNames) {
    roomNames.forEach(room => {
        rooms[room] = [];
    });
}

// Function to display room status
function displayRooms() {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';
    for (const [room, occupants] of Object.entries(rooms)) {
        const roomDiv = document.createElement('div');
        if (occupants.length === MAX_OCCUPANTS) {
            roomDiv.innerHTML = `<strong>${room}:</strong> ${occupants.join(', ')} (Full)`;
        } else {
            roomDiv.innerHTML = `<strong>${room}:</strong> ${occupants.join(', ')}`;
        }
        resultDiv.appendChild(roomDiv);
    }
}

// Handle form submission
document.getElementById('applicationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const room = document.getElementById('room').value.trim();

    if (!rooms.hasOwnProperty(room)) {
        alert('Invalid room name.');
        return;
    }

    if (rooms[room].length >= MAX_OCCUPANTS) {
        alert('Room is full.');
        return;
    }

    rooms[room].push(name);
    displayRooms();
});

// Example room names (you can replace these with the actual room names)
const roomNames = ['Room 1', 'Room 2', 'Room 3', 'Room 4', 'Room 5', 'Room 6', 'Room 7', 'Room 8', 'Room 9', 'Room 10', 'Room 11', 'Room 12', 'Room 13', 'Room 14', 'Room 15', 'Room 16', 'Room 17'];

initializeRooms(roomNames);
displayRooms();
