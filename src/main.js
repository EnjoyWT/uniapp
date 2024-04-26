import {
	createSSRApp
} from "vue";
import App from "./App.vue";
import uviewPlus from 'uview-plus'
import store from '@/store'
import { initRequest } from './utils/request';
import { router } from '@/router'
// import routerGuards from '@/router/guards' //模板中不添加守卫

export function createApp() {
	const app = createSSRApp(App);
	app.use(store)
	// 注册路由
	app.use(router)
	// 路由守卫
	// app.use(routerGuards, router)
	app.use(uviewPlus)
	//注册请求
	initRequest(app)
	return {
		app,
	};
}
