const runEnv = 'test' // 设置当前运行环境

const dev = () => {
	const baseUrl = 'https://dev-qq.com'

	return {
		host: 'dev.xxx.com',
		baseUrl
	}
}

const test = () => {
	const baseUrl = 'https://test-qq.com'

	return {
		host: 'test.xxx.com',
		baseUrl
	}
}
const pre = () => {
	const baseUrl = 'https://pre-qq.com'

	return {
		host: 'pre.xxx.com',
		baseUrl
	}
}

const product = () => {
	const baseUrl = 'https://product-qq.com'

	return {
		host: 'product.xxx.com',
		baseUrl
	}
}

export const getEnvConfig = () => {
	switch (runEnv) {
		case 'dev':
			return dev();
		case 'test':
			return test();
		case 'pre':
			return pre();
		case 'product':
			return product();
	}
}

export const TOKEN = 'token'
