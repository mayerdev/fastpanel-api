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
}
