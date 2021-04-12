const api = require('./index');

const Api = new api('https://cp.mayerdev.com');

Api.auth('fastuser', 'password').then(async () => {
	Api.me();
});