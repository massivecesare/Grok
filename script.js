// Dati stanze
const rooms = [
    { id: 0, name: "Suite Miele d’Oro", type: "Camera Luxury B&B", size: "38 m²", image: "https://picsum.photos/id/201/1200/800", desc: "Letto king size, bagno con vasca idromassaggio e doccia rain, terrazza privata con vista sui colli abruzzesi.", amenities: ["Letto King", "Vasca idromassaggio", "Terrazza privata", "Aria condizionata", "Wi-Fi", "Minibar premium", "TV 55\" Smart"] },
    { id: 1, name: "Suite Lavanda", type: "Camera Luxury B&B", size: "42 m²", image: "https://picsum.photos/id/251/1200/800", desc: "Eleganza provenzale con camino funzionante, grandi finestre e bagno spa.", amenities: ["Camino privato", "Letto King", "Doccia rain + vasca", "Vista tramonto", "Aria condizionata", "Wi-Fi", "Minibar"] },
    { id: 2, name: "Suite Ulivo", type: "Camera Luxury B&B", size: "35 m²", image: "https://picsum.photos/id/316/1200/800", desc: "Design contemporaneo con accesso diretto al giardino mediterraneo.", amenities: ["Accesso giardino", "Letto King", "Bagno in marmo", "Aria condizionata", "Wi-Fi", "Minibar"] },
    { id: 3, name: "Suite Tramonto", type: "Camera Luxury B&B", size: "40 m²", image: "https://picsum.photos/id/342/1200/800", desc: "Vasca idromassaggio esterna sulla terrazza privata e vista mozzafiato.", amenities: ["Vasca esterna", "Terrazza panoramica", "Letto King", "Aria condizionata", "Wi-Fi", "Minibar premium"] },
    { id: 4, name: "Bubble delle Stelle", type: "Bubble Room Glamping", size: "30 m²", image: "https://picsum.photos/id/870/1200/800", desc: "Cupola trasparente per ammirare il cielo stellato, deck privato e bagno esterno riscaldato.", amenities: ["Cupola trasparente", "Letto King", "Riscaldamento pavimento", "Deck privato", "Stargazing"] },
    { id: 5, name: "Bubble del Sangro", type: "Bubble Room Glamping", size: "30 m²", image: "https://picsum.photos/id/1016/1200/800", desc: "Vista sulla valle del fiume Sangro e vasca idromassaggio esterna.", amenities: ["Vasca idromassaggio esterna", "Letto King", "Vista fiume", "Riscaldamento", "Privacy totale"] }
];

function showRoomModal(index) {
    const room = rooms[index];
    document.getElementById('modal-image').style.backgroundImage = `url('${room.image}')`;
    let amenitiesHTML = room.amenities.map(a => `<div class="flex items-center gap-3"><i class="fas fa-check text-amber-600"></i><span>${a}</span></div>`).join('');
    
    document.getElementById('modal-content').innerHTML = `
        <div class="flex justify-between">
            <div>
                <span class="px-5 py-1 bg-amber-100 text-amber-800 text-xs rounded-3xl">${room.type}</span>
                <h2 class="heading-font text-5xl mt-4">${room.name}</h2>
                <p class="text-amber-700">${room.size}</p>
            </div>
            <button onclick="closeModal()" class="text-5xl text-gray-400 hover:text-gray-600">×</button>
        </div>
        <p class="mt-8 text-lg text-gray-700">${room.desc}</p>
        <div class="mt-10">
            <h4 class="uppercase text-xs tracking-widest text-gray-500 mb-6">Cosa include</h4>
            <div class="grid grid-cols-2 gap-y-5 text-sm">${amenitiesHTML}</div>
        </div>
        <button onclick="closeModal(); window.location.href='contatti.html'" 
                class="mt-12 w-full py-6 bg-amber-800 text-white rounded-3xl text-xl font-semibold">
            Prenota questa stanza
        </button>
    `;
    document.getElementById('room-modal').classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('room-modal').classList.add('hidden');
    document.body.style.overflow = 'visible';
}

function handleBooking(e) {
    e.preventDefault();
    alert("✅ Richiesta di prenotazione inviata con successo!\nTi contatteremo entro 2 ore.");
    e.target.reset();
}

// Rendi le funzioni globali
window.showRoomModal = showRoomModal;
window.closeModal = closeModal;
window.handleBooking = handleBooking;
