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

### domains()

Получить список DNS-доменов

#### Ввод:

```js
Api.domains();
```

#### Вывод:

```bash
{ data:
   [ { id: 1,
       owner_id: 5,
       owner: [Object],
       virtualhost_id: 2,
       certificate: null,
       name: 'billing.mayerdev.com',
       fallback: '',
       ips: [Array],
       mail_to: 'local',
       dkim: true,
       use_for_emails: true,
       ns: null,
       share: false,
       default: false,
       source: 'client',
       delegated_to: null,
       is_delegated: true,
       action: null,
       created_at: '2021-04-12T06:46:31.59321267Z',
       updated_at: '2021-04-12T06:46:32.544513189Z' }, ... ] }
```

### domain(id домена)

Получить список DNS-записей домена

#### Ввод:

```js
Api.domain(1);
```

#### Вывод:

```bash
{ data:
   [ { id: 1,
       domain_id: 1,
       action: null,
       name: 'billing.mayerdev.com.',
       type: 'A',
       hash: '...',
       email: '',
       content: '84.201.***.***',
       hidden: false,
       ttl: 0,
       priority: 0,
       weight: 0,
       port: 0 },
     { id: 2,
       domain_id: 1,
       action: null,
       name: 'www.billing.mayerdev.com.',
       type: 'A',
       hash: '...',
       email: '',
       content: '84.201.***.***',
       hidden: false,
       ttl: 0,
       priority: 0,
       weight: 0,
       port: 0 },
     { id: 3,
       domain_id: 1,
       action: null,
       name: 'mail.billing.mayerdev.com.',
       type: 'A',
       hash: '...',
       email: '',
       content: '84.201.***.***',
       hidden: false,
       ttl: 0,
       priority: 0,
       weight: 0,
       port: 0 }, ... ] }
```

### sites(максимальное количество, по умолчанию 30)

Получить список сайтов

#### Ввод:

```js
Api.sites(1);
```

#### Вывод:

```bash
{ data:
   [ { access_log: true,
       action: null,
       admin_email: 'admin@mayerdev.com',
       aliases: [Array],
       autosubdomains: false,
       awstats: false,
       backups: [],
       charset: 'UTF-8',
       created_at: '2021-04-11 07:38:21',
       databases_size: 0,
       domain: 'mayerdev.com',
       enabled: true,
       error_count: 1,
       error_log: true,
       expired: 0,
       fpm_workers_count: 2,
       generate_user: false,
       gzip: true,
       gzip_comp_level: 1,
       hsts: false,
       http2: false,
       id: 1,
       index_dir: '/var/www/fastuser/data/www/mayerdev.com',
       index_page: 'index.php index.html',
       ips: [],
       is_scan_failed: false,
       log_period: 'daily',
       main_domain: null,
       manual_changes: true,
       mode: 'php_fpm',
       owner: [Object],
       php: true,
       php_version: 71,
       port: 80,
       redirect_to_https: false,
       rotate: 10,
       scan_status: false,
       settings: [Object],
       size: 0,
       ssi: '',
       ssi_value: '',
       static_extension:
	'jpg,jpeg,gif,png,svg,js,css,mp3,ogg,mpeg,avi,zip,gz,bz2,rar,swf,ico,7z,doc,docx,map,ogg,otf,pdf,tff,tif,txt,wav,
	webp,woff,woff2,xls,xlsx,xml',
       static_file_handler: true,
       status: 200,
       sub_directory: '',
       temp_link_flag: true,
       update_state_date: '0001-01-01T00:00:00Z' } ],
  meta:
   { counts:
      { all: 3,
        scan_status: 0,
        not_available: 0,
        certificate_expires: 0,
        certificate_expired: 0,
        error: 3,
        frozen: 0,
        no_backup: 3,
        disabled: 0,
        query_count: 0 } } }
```

### site(id сайта)

Получить информацию о сайте

#### Ввод:

```js
Api.site(1);
```

#### Вывод:

```bash
{ data:
   { access_log: true,
     action: null,
     admin_email: 'admin@mayerdev.com',
     aliases: [ [Object] ],
     autosubdomains: false,
     awstats: false,
     backups: [],
     charset: 'UTF-8',
     created_at: '2021-04-11 07:38:21',
     databases_size: 0,
     domain: 'mayerdev.com',
     enabled: true,
     error_count: 1,
     error_log: true,
     expired: 0,
     fpm_workers_count: 2,
     generate_user: false,
     gzip: true,
     gzip_comp_level: 1,
     hsts: false,
     http2: false,
     id: 1,
     index_dir: '/var/www/fastuser/data/www/mayerdev.com',
     index_page: 'index.php index.html',
     ips: [ [Object] ],
     is_scan_failed: false,
     log_period: 'daily',
     main_domain: null,
     manual_changes: true,
     mode: 'php_fpm',
     owner: { id: 1, username: 'fastuser' },
     php: true,
     php_version: 71,
     port: 80,
     redirect_to_https: false,
     rotate: 10,
     scan_status: false,
     settings:
      { burst: 1,
        burst_flag: false,
        no_delay: false,
        req_limit: false,
        req_limit_rate: 'second',
	req_limit_value: 1 },
     size: 0,
     ssi: '',
     ssi_value: '',
     static_extension:
      'jpg,jpeg,gif,png,svg,js,css,mp3,ogg,mpeg,avi,zip,gz,bz2,rar,swf,ico,7z,doc,docx,map,ogg,otf,pdf,tff,tif,txt,wav,we
	bp,woff,woff2,xls,xlsx,xml',
     static_file_handler: true,
     status: 200,
     sub_directory: '',
     temp_link_flag: true,
     update_state_date: '0001-01-01T00:00:00Z' } }
```
