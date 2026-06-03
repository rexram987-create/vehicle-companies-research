
const searchInput = document.querySelector('#brandSearch');
if (searchInput) {
  searchInput.addEventListener('input', () => {
    const q = searchInput.value.trim().toLowerCase();
    document.querySelectorAll('[data-brand]').forEach(card => {
      card.style.display = card.dataset.brand.toLowerCase().includes(q) ? '' : 'none';
    });
  });
}
