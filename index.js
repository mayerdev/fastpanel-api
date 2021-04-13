const axios = require('axios');

module.exports = class FastPanel {
	constructor(url) {
		this.url = url;
	}
	
	auth(username, password) {
		return new Promise(async (resolve, reject) => {
			const res = await axios.post(`${this.url}/login`, { username, password });

			if(!res.data.token) {
				console.log('[FastPanel API by MayerDev] Username or password incorrect');
				reject();
			}

			console.log('[FastPanel API by MayerDev] Got token:');
			console.log(res.data.token);

			this.token = res.data.token;
			resolve();
		});
	}
	
	_get(route) {
		return new Promise(async (resolve, reject) => {
			const res = await axios.get(`${this.url}/${route}`, {
				headers: {
					Authorization: `Bearer ${this.token}`
				}
			});
			
			resolve(res.data);
		});
	}
	
	_post(route, data) {
		return new Promise(async (resolve, reject) => {
			const res = await axios.post(`${this.url}/${route}`, data, {
				headers: {
					Authorization: `Bearer ${this.token}`
				}
			});
			
			resolve(res.data);
		});
	}
	
	me() {
		return new Promise(async (resolve, reject) => {
			const res = await this._get('api/me');
			if(res) resolve(res);
			
			reject(res)
		});
	}
	
	settings() {
		return new Promise(async (resolve, reject) => {
			const res = await this._get('api/settings');
			if(res) resolve(res);
			
			reject(res)
		});
	}
	
	users() {
		return new Promise(async (resolve, reject) => {
			const res = await this._get('api/users');
			if(res) resolve(res);
			
			reject(res)
		});
	}
	
	user(id) {
		return new Promise(async (resolve, reject) => {
			const res = await this._get(`api/users/${id}`);
			if(res) resolve(res);
			
			reject(res)
		});
	}
	
	domains() {
		return new Promise(async (resolve, reject) => {
			const res = await this._get('api/dns/domains');
			if(res) resolve(res);
			
			reject(res)
		});
	}
	
	domain(id) {
		return new Promise(async (resolve, reject) => {
			const res = await this._get(`api/dns/domain/${id}/records`);
			if(res) resolve(res);
			
			reject(res)
		});
	}
	
	sites(limit = 30) {
		return new Promise(async (resolve, reject) => {
			const res = await this._get(`api/sites/list?filter[limit]=${limit}&filter[type]=all&filter[offset]=0`);
			if(res) resolve(res);
			
			reject(res)
		});
	}
	
	site(id) {
		return new Promise(async (resolve, reject) => {
			const res = await this._get(`api/sites/${id}`);
			if(res) resolve(res);
			
			reject(res)
		});
	}
	
	createUser(data) {		
		return new Promise(async (resolve, reject) => {
			const res = await this._post('api/users', data.role === 'user' ? {
				fpuser: {
					username: data.username,
					password: data.password,
					roles: this.roles[data.role],
					allowed_virtualhost_count: data.sites,
				}
			} : {
				fpuser: {
					username: data.username,
					password: data.password,
					roles: this.roles[data.role],
					allowed_virtualhost_count: data.sites,
					allowed_user_count: data.create ? data.users : 0,
					user_creating: data.create
				}
			});
			if(res) resolve(res);
			
			reject(res)
		});
	}
	
	deleteUser(id) {
		return new Promise(async (resolve, reject) => {
			const res = await this._delete(`api/users/${id}`);
			if(res) resolve(res);
			
			reject(res)
		});
	}
}
