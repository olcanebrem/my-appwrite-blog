document.addEventListener('DOMContentLoaded', function() {
  const toastElement = document.getElementById('toast');
  toastElement.classList.add('show');

  // 2 saniye sonra toast bildiriminin kaybolmasını sağlayan zamanlayıcı
  setTimeout(() => {
    toastElement.classList.add('hide');
    toastElement.addEventListener('animationend', () => {
      toastElement.style.display = 'none';
    });
  }, 2000);

  // "Done" düğmesine tıklanırsa toast bildirimi kaybolur
  document.querySelector('.btn-done').addEventListener('click', function() {
    toastElement.classList.add('hide');
    toastElement.addEventListener('animationend', () => {
      toastElement.style.display = 'none';
    });
  });

  // Kapatma simgesine tıklanırsa toast bildirimi kaybolur
  document.querySelector('.btn-close').addEventListener('click', function() {
    toastElement.classList.add('hide');
    toastElement.addEventListener('animationend', () => {
      toastElement.style.display = 'none';
    });
  });
});
