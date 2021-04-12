# fastpanel-api
NodeJS API client for FastPanel

## Пример

```js
const api = require('./index');

const Api = new api('https://cp.mayerdev.com');

Api.auth('fastuser', 'password').then(async () => {
	console.log(await Api.me());
});
```

## Вывод

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

#### Ввод:

```js
Api.me();
```

#### Вывод:

```bash
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

### settings()

Получить настройки

#### Ввод:

```js
Api.settings();
```

#### Вывод:

```bash
{ data:
   { ips: [ [Object] ],
     network_interface_matches: { '10.130.0.19': [Array] },
     configuration:
      { 'ai-bolit': [Object],
        awstats: [Object],
        backup: [Object],
        bind9: [Object],
        composer: [Object],
        databases: [Object],
        email: [Object],
        fail2ban: [Object],
        ftp: [Object],
        git: [Object],
        jpegoptim: [Object],
        memcached: [Object],
        optipng: [Object],
        php_version: [Object],
        phppgadmin: [Object],
        postgresql10: [Object],
        postgresql11: [Object],
        postgresql12: [Object],
        postgresql96: [Object],
        quota: [Object],
        rainloop: [Object],
        redis: [Object],
        roundcube: [Object],
        sftp: [Object],
        shellinabox: [Object],
        spamassassin: [Object],
        wpcli: [Object] },
     database_servers: [ [Object] ],
     panel_version: '1.9.227',
     single_dns_account: true,
     show_statistics: false,
     spamassassin: false,
     insecure_domain: false,
     tos_agreed: true,
     time_offset: 0,
     os_release: 'cen7',
     send_notification_localy: false,
     email_notification: { type: 'sendgrid', email: '', host: '', port: 0 },
     notifications: [],
     accepted_notifications: {} } }
```

### users()

Получить список пользователей

#### Ввод:

```js
Api.users();
```

#### Вывод:

```bash
{ data:
   [ { action: null,
       allowed_user_count: 0,
       allowed_virtualhost_count: 0,
       avail_virtualhost_count: 0,
       created_at: '2021-04-11T19:27:02.658153773Z',
       enabled: true,
       home_dir: '/var/www/fastuser/data',
       id: 1,
       php_version: null,
       quota: null,
       reseller_creating: false,
       restore_email: 'mayer.dev@yahoo.com',
       roles: [Array],
       sites_allocated: 0,
       user_creating: false,
       username: 'fastuser',
       virtualhost_count: 0 }, ... ] }
```

### user(id пользователя)

Получить информацию о пользователе

#### Ввод:

```js
Api.user(1);
```

#### Вывод:

```bash
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
     quota: null,
     reseller_creating: false,
     restore_email: 'mayer.dev@yahoo.com',
     roles: [ 'ROLE_SUPER_ADMIN' ],
     sites_allocated: 0,
     user_creating: false,
     username: 'fastuser',
     virtualhost_count: 0 } }
```
