<h3 align="center">
Веб приложение «Чат»
</h3>

<p align="center">
  <a href="https://handlebarsjs.com/">
    <img src="https://img.shields.io/badge/Handlebars-4.7.7-blue?style=plastic&logo=handlebarsdotjs"/>
  </a>
  <a href="https://postcss.org/">
    <img src="https://img.shields.io/badge/PostCSS-8.4.16-blue?style=plastic&logo=postcss"/>
  </a>
  <a href="https://jestjs.io/">
    <img src="https://img.shields.io/badge/Jest-29.3.1-blue?style=plastic&logo=jest"/>
  </a>
  <a href="https://websockets.spec.whatwg.org/">
    <img src="https://img.shields.io/badge/WebSocket-blueviolet?style=plastic"/>
  </a>
  <a href="https://expressjs.com/">
    <img src="https://img.shields.io/badge/Express.js-4.18.1-blue?style=plastic&logo=express"/>
  </a>
  <a href="https://eslint.org/">
    <img src="https://img.shields.io/badge/ESLint-8.24.0-blue?style=plastic&logo=eslint"/>
  </a>
  <a href="https://stylelint.io/">
    <img src="https://img.shields.io/badge/Stylelint-14.13.0-blue?style=plastic&logo=stylelint"/>
  </a>
  <a href="https://webpack.js.org/">
    <img src="https://img.shields.io/badge/Webpack-5.75.0-blue?style=plastic&logo=webpack"/>
  </a>
  <a href="https://www.netlify.com/">
    <img src="https://img.shields.io/badge/Netlify-gray?style=plastic&logo=netlify"/>
  </a>
  <a href="https://www.docker.com/">
    <img src="https://img.shields.io/badge/Docker-gray?style=plastic&logo=docker"/>
  </a>
</p>

**Ссылки**  
[Прототип в Figma](https://www.figma.com/file/Q9deLsYNOyxQYDvkhhnaS4/Chat?node-id=10%3A2)  
[Развёрнутый сайт в Netlify](https://unrivaled-kelpie-bcfdba.netlify.app/)  

**Основные команды для работы с приложением**  
**npm run install** - установка необходимых пакетов  
**npm run dev** - сборка и запуск сервера для разработки  
**npm run build** - оптимизированная сборка проекта  
**npm run start** - оптимизированная сборка проекта + запуск сервера Node.js на порту 3000
(больше команд смотри в package.json)

**Реализация**  
На данный момент реализован минимальный функционал чата:

```diff
+ регистрация, авторизация, выход из системы;
+ создание чата, добавление и удаление пользователей из него;
+ обмен сообщениями между пользователями посредством WebSocket;
+ изменение данных владельца аккаунта, пароля к учётной записи, а также аватара.
```

<details>
<summary>Дополнительная информация</summary>
  
**Развёртывание на Heroku через WSL2 - Windows Subsystem for Linux**  
**(далее по тексту - подсистема)**  
[Непосредственная инструкция на сайте Heroku](https://devcenter.heroku.com/articles/container-registry-and-runtime). Я в свою очередь опишу каким образом мне удалось
развернуть образ (на тот случай, если вам придётся заниматься тем же самым.)
Лично я пользовался подсистемой с дистрибутивом Ubuntu 20.04 под Windows 10.

```diff
! Убедитесь в том, что используете вторую версию - WSL2.
```

(проверить версию WSL можно командой **wsl.exe -l -v** в терминале вашей
подсистемы, либо командой **wsl -l -v** в **cmd** или **power shell**).

```diff
! Также в вашей подсистеме должен быть установлен Git.
```

**Установите Heroku CLI**, для этого введите в терминале вашей подсистемы:

> $ curl https://cli-assets.heroku.com/install.sh | sh

Далее для подсистемы Ubuntu / Debian введите:

> $ curl https://cli-assets.heroku.com/install-ubuntu.sh | sh

(доступна также установка через **npm**, но я устанавливал через команды описанные выше)

Проверка версии **Heroku**:

> $ heroku --version

Вероятнее всего, до того момента, когда вы начнёте вводить последующие команды,
вам нужно быть зарегистрированным на сайте **Heroku**. Также возможно следует
привязать ваш **Github** к сайту **Heroku**, хотя не факт что это необходимо.
Я сделал это в своей "первой" попытке установить образ через сайт.
Также для последующих манипуляций необходимо установить **Docker**.
Я кстати не устанавливал его в подсистему напрямую. Вместо это, я установил
[Docker Desktop](https://www.docker.com/products/docker-desktop/) под **Windows 10**.
(приложение **Docker Desktop** было включено в момент создания образа)

Итак авторизуемся через браузер:

> heroku login

Жмём любую клавишу и открывается браузер по умолчанию, с авторизацией через вкладку.
Здесь следует отметить, что **VPN** (который возможно работает в вашем браузере
через какое либо расширение) **должен быть выключен**. Иначе получите ошибку о
несоответствии **IP** адресов.

> $ heroku container:login

Клонируем ваш удалённый репозиторий:

> $ git clone https://github.com/heroku/alpinehelloworld.git

Можно обойтись без этого этапа и перейти сразу к созданию приложения.
Для этого скопируйте папку с исходным кодом (без папки **node_modules**)
в какую нибудь папку в вашей подсистеме. Открыть головную папку можно
посредством команды **explorer.exe .** набранной в терминале вашей подсистемы **WSL2**.

Переходим в папку с проектом:

> $ cd alpinehelloworld

Создаём приложение:

> $ heroku create

Создаём образ и отправляем его в реестр контейнеров:

> $ heroku container:push web

Загружаем образ в ваше приложение:

> heroku container:release web

Теперь можно открыть его в браузере командой:

> heroku open
</details>
