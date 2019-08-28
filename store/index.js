import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		hasLogin: false,
		userInfo: {},
		user_id: ''
	},
	mutations: {
		login(state, userInfo) {
			state.hasLogin = true;
			state.userInfo = userInfo;
			state.user_id = userInfo.id;
			console.log(state.userInfo);
		},
		logout(state) {
			state.hasLogin = false;
			state.userInfo = {};
			state.user_id = '';

		},
		setOpenid(state, openid) {
			state.openid = openid
		}
	},
	actions: {}

})

export default store
