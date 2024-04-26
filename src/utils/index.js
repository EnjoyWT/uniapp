import { getEnvConfig, TOKEN} from './constants.js'



const overrideRequest = (method, url, data, options = { loading: true }) => {
	const config = getEnvConfig()
	const baseUrl = config.baseUrl
	return new Promise((resolve, reject) => {
		const token = uni.getStorageSync(TOKEN)

		if (options.loading !== false) {
			// uni.showLoading({
			// 	title: '正在加载...'
			// });
		}

		uni.request({
			url: /^http|https/.test(url) ? url : baseUrl + url, 
			data,
			method,
			header: {
				'token': token || '',
			},
			success: (res) => {
				// token 失效
				// if (res.data?.code === 401 || res.statusCode === 401) {
				// 	uni.reLaunch({
				// 		url: '/pages/login/Page/index'
				// 	})
				// 	return;
				// }
				if(res.statusCode !== 200){
					uni.showToast({
						title: '网络错误',
						icon: 'none'
					})
					reject(res?.data)
				}
				// 错误
				if (res.data?.code !== 200) {
					uni.showToast({
						title: res.data?.msg || res.data?.message,
						icon: 'none'
					})
					reject(res?.data)
					return;
				}
				resolve(res?.data.data)
			},
			fail: (res) => {
				reject(res?.data)
			}
		});
	})
}

const request = () => {
	return {
		post: (url, params, options) => {
			return overrideRequest('POST', url, params, options)
		},
		get: (url, params, options) => {
			return overrideRequest('GET', url, params, options)
		}
	}
}

export const req = request()

export const getAppConfig = () => {
	const envConfig = getEnvConfig()
	return [envConfig.host];
}

export const getLocationParams = (name) => {
	//获取页面栈
	const pages = getCurrentPages();
	//获取路由参数
	const curPage = pages[pages.length - 1];
	return name ? curPage.options[name] : curPage.options;
}