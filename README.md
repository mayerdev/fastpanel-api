# fastpanel-api
NodeJS API client for FastPanel

## Установка

> npm install fastpanel-api -s

## Пример

```js
const api = require('fastpanel-api');

const Api = new api('https://cp.mayerdev.com');

Api.auth('fastuser', 'password').then(async () => {
	console.log(await Api.me());
});
```

## Пример вывода

```bash
[FastPanel API by MayerDev] Got token:
Здесь токен
{ data:
   { action: null,
     allowed_user_count: 0,
     allowed_virtualhost_count: 0,
     avail_virtualhost_count: 0,
     created_at: '2021-04-11T19:27:02.658153773Z',
     enabled: true,
     home_dir: '/var/www/fastuser/data',
     id: 1,
     php_version: null,
     profile:
      { cards_order: null,
        id: 1,
        interface_settings: [Object],
        server_name: '10.130.0.19',
        show_information: false,
        show_statistic: false,
        vhost_order: [] },
     quota: null,
     reseller_creating: false,
     restore_email: 'mayer.dev@yahoo.com',
     roles: [ 'ROLE_SUPER_ADMIN' ],
     sites_allocated: 0,
     state:
      { sites: 2,
        domain: 1,
        email_domain: 0,
        db: 2,
        task: 1,
        ftp_account: 2,
        box: 0,
        backup_plan: 0,
        user: 4 },
     user_creating: false,
     username: 'fastuser',
     virtualhost_count: 2 } }
```

## Методы

### me()

Получить информацию о текущем аккаунте

#### Использование:

```js
Api.me();
```

### settings()

Получить настройки

#### Использование:

```js
Api.settings();
```

### users()

Получить список пользователей

#### Использование:

```js
Api.users();
```

### user(id пользователя)

Получить информацию о пользователе

#### Использование:

```js
Api.user(1);
```

### domains()

Получить список DNS-доменов

#### Использование:

```js
Api.domains();
```

### domain(id домена)

Получить список DNS-записей домена

#### Использование:

```js
Api.domain(1);
```

### sites(максимальное количество, по умолчанию 30)

Получить список сайтов

#### Использование:

```js
Api.sites(1);
```

### site(id сайта)

Получить информацию о сайте

#### Использование:

```js
Api.site(1);
```

### createUser(Данные пользователя)

Создать пользователя

#### Создание пользователя:

```js
Api.createUser({
	username: 'test', // логин
	password: 'qwer12345', // пароль
	role: 'user', // группа пользователя
	sites: 1 // количество разрешённых сайтов
});
```

#### Создание реселлера:

```js
Api.createUser({
	username: 'test', // логин
	password: 'qwer12345', // пароль
	role: 'reseller', // группа пользователя
	sites: 1, // количество разрешённых сайтов
	users: 1, // количество разрешённых пользователей
	create: true // может ли создавать пользователей
});
```

### deleteUser(id пользователя)

Удаляет пользователя

#### Использование:

```js
Api.deleteUser(16);
```

### pauseUser(id пользователя)

Заблокировать аккаунт пользователя

#### Использование:

```js
Api.pauseUser(16);
```

### unpauseUser(id пользователя)

Разблокировать аккаунт пользователя

#### Использование:

```js
Api.unpauseUser(16);
```
