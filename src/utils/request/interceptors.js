
/**
 * 请求拦截
 * @param {Object} http
 */
const requestInterceptors = (vm) => {
	uni.$u.http.interceptors.request.use((config) => { // 可使用async await 做异步操作
		// 初始化请求拦截器时，会执行此方法，此时data为undefined，赋予默认{}
		config.data = config.data || {}
		// 可以在此通过vm引用vuex中的变量，具体值在vm.$store.state中
		// console.log(vm.$store.state);
		return config
	}, (config) => // 可使用async await 做异步操作
		Promise.reject(config))
}
/**
 * 响应拦截
 * @param {Object} http 
 */
const responseInterceptors = (vm) => {
	uni.$u.http.interceptors.response.use((response) => { /* 对响应成功做点什么 可使用async await 做异步操作*/
		const data = response.data
		console.log(response)
		// 自定义响应拦截参数参数
		const custom = response.config?.custom
		if (data.code !== 200) { // 服务端返回的状态码不等于200，则reject()
			uni.$u.toast(data.msg)
			return Promise.reject(data)
		}
		return data.data || {}
	}, (response) => { /*  对响应错误做点什么 （statusCode !== 200）*/
		return Promise.reject(response)
	})
}

export {
	requestInterceptors,
	responseInterceptors
}


