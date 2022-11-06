export const api = {
	// 개발환경이면 개발서버 운영 환경이면 운영서버
	baseURL:
		process.env.NODE_ENV === 'development'
			? 'http://localhost:4000'
			: '운영 url',
	timeout: 25000,
};
