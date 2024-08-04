document.addEventListener('DOMContentLoaded', function() {
  const toastElement = document.getElementById('toast');

  // Toast daha önce gösterildiyse localStorage'da 'toastShown' anahtarına bak
  const isToastShown = localStorage.getItem('toastShown');

  if (!isToastShown) {
    // Toast daha önce gösterilmediyse göster ve 'toastShown' anahtarını ayarla
    toastElement.classList.add('show');

    // 2 saniye sonra toast bildiriminin kaybolmasını sağlayan zamanlayıcı
    setTimeout(() => {
      toastElement.classList.add('hide');
      toastElement.addEventListener('animationend', () => {
        toastElement.style.display = 'none';
      });
      // Toast'ın gösterildiğini kaydet
      localStorage.setItem('toastShown', 'true');
    }, 3000);

    // "Done" düğmesine tıklanırsa toast bildirimi kaybolur
    document.querySelector('.btn-done').addEventListener('click', function() {
      toastElement.classList.add('hide');
      toastElement.addEventListener('animationend', () => {
        toastElement.style.display = 'none';
      });
      // Toast'ın gösterildiğini kaydet
      localStorage.setItem('toastShown', 'true');
    });

    // Kapatma simgesine tıklanırsa toast bildirimi kaybolur
    document.querySelector('.btn-close').addEventListener('click', function() {
      toastElement.classList.add('hide');
      toastElement.addEventListener('animationend', () => {
        toastElement.style.display = 'none';
      });
      // Toast'ın gösterildiğini kaydet
      localStorage.setItem('toastShown', 'true');
    });
  }
});
