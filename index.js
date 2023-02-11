const axios = require('axios');

class FastPanel {
  roles = {
    user: 'ROLE_USER',
    reseller: 'ROLE_RESELLER_ADMIN',
    admin: 'ROLE_SUPER_ADMIN'
  }

  constructor(url) {
    this.url = url;
  }

  async auth(username, password) {
    try {
      const res = await axios.post(`${this.url}/login`, { username, password });
      this.token = res.data.token;
      console.log('[FastPanel API by MayerDev] Got token:');
      console.log(this.token);
      return true;
    } catch (error) {
      console.log('[FastPanel API by MayerDev] Username or password incorrect');
      throw error;
    }
  }

  async _request(method, route, data) {
    try {
      const res = await axios({
        method,
        url: `${this.url}/${route}`,
        data,
        headers: {
          Authorization: `Bearer ${this.token}`
        }
      });
      return res.data;
    } catch (error) {
      throw error;
    }
  }

  async me() {
    return this._request('get', 'api/me');
  }

  async settings() {
    return this._request('get', 'api/settings');
  }

  async users() {
    return this._request('get', 'api/users');
  }

  async user(id) {
    return this._request('get', `api/users/${id}`);
  }

  async domains() {
    return this._request('get', 'api/dns/domains');
  }

  async domain(id) {
    return this._request('get', `api/dns/domain/${id}/records`);
  }

  async sites(limit = 30) {
    return this._request('get', `api/sites/list?filter[limit]=${limit}&filter[type]=all&filter[offset]=0`);
  }

  async site(id) {
    return this._request('get', `api/sites/${id}`);
  }

  async createUser(data) {
    const payload = data.role === 'user' ? {
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
    };

    return this._request('post', 'api/users', payload);
  }

  async deleteUser(id) {
    return this._request('delete', `api/users/${id}`);
  }

  async pauseUser(id) {
    return this._request('post', `api/users/${id}/status`, {
      fpuser: {
        enabled: false
      }
    });
  }

  async unpauseUser(id) {
    return this._request('post', `api/users/${id}/status`, {
      fpuser: {
        enabled: true
      }
    });
  }
}

module.exports = FastPanel;
