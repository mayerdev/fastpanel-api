# fastpanel-api
NodeJS API client for FastPanel

## Example

```js
const api = require('./index');

const Api = new api('https://cp.mayerdev.com');

Api.auth('fastuser', 'password').then(async () => {
	console.log(await Api.me());
});
```

## Output

```bash
[FastPanel API by MayerDev] Got token:
<token here>
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
