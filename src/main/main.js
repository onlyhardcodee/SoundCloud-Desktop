const { app, BrowserWindow, session } = require('electron');
const path = require('path');
const fs = require('fs');

// Функция для создания окна приложения
function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });

  // Функция для скрытия попапа с cookies
  function hideCookiesPopup() {
    win.webContents.executeJavaScript(`
      // Попробуем найти кнопку принятия cookies и нажать на неё
      const acceptButton = document.querySelector('button[data-action="accept"]'); // Зависит от сайта
      if (acceptButton) acceptButton.click();

      // Или можно спрятать попап с cookies
      const cookiePopup = document.querySelector('.cookie-popup'); // Также зависит от сайта
      if (cookiePopup) cookiePopup.style.display = 'none';
    `);
  }

  // Вызов hideCookiesPopup после того, как страница загружена
  win.webContents.on('did-finish-load', () => {
    hideCookiesPopup();
  });

  win.loadURL('https://soundcloud.com');

  win.webContents.session.cookies.get({})
    .then((cookies) => {
      fs.writeFileSync(path.join(__dirname, 'cookies.json'), JSON.stringify(cookies));
    })
    .catch((err) => {
      console.log();
    });

  if (fs.existsSync(path.join(__dirname, 'cookies.json'))) {
    const cookies = JSON.parse(fs.readFileSync(path.join(__dirname, 'cookies.json')));
    cookies.forEach(cookie => {
      win.webContents.session.cookies.set(cookie)
        .catch((err) => {
          console.log();
        });
    });
  }
}

// Запуск приложения
app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
