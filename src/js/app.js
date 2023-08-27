const button = document.querySelector('.button');

const showTooltip = (element) => {
  const popover = document.createElement('div');
  const header = document.createElement('h3');
  const description = document.createElement('div');

  header.textContent = 'Popover title';
  description.textContent = 'And here\'s some amazing content. It\'s very engaging. Right?';

  popover.appendChild(header);
  popover.appendChild(description);

  popover.classList.add('popover');
  header.classList.add('popover-header');
  description.classList.add('popover-description');

  document.body.appendChild(popover);

  const { top, left } = element.getBoundingClientRect();

  popover.style.bottom = `${top + 25}px`;
  popover.style.left = `${left + element.offsetWidth / 2 - popover.offsetWidth / 2}px`;
};

const removeTooltip = () => {
  document.querySelector('.popover').remove();
};

button.addEventListener('click', (e) => {
  const tooltip = document.querySelector('.popover');
  if (!tooltip) {
    showTooltip(e.target);
  } else {
    removeTooltip();
  }
});
