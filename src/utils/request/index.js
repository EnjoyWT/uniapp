// 引入配置
import config from '@/common/config'
// 引入拦截器配置
import { requestInterceptors, responseInterceptors } from './interceptors.js'
//  初始化请求配置
const initRequest = (vm) => {
	// uview-Plus配置
	uni.$u.http.setConfig((defaultConfig) => {
		/* defaultConfig 为默认全局配置 */
		defaultConfig.baseURL = config.baseUrl /* 根域名 */
		return defaultConfig
	})
	// 请求拦截
	requestInterceptors()
	// 响应拦截
	responseInterceptors()
}
export {
	initRequest
}




