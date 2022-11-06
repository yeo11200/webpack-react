import axios from 'axios';
import { api } from '../utils/config';

const axiosInterface = axios.create(api);

// 요청할 떄 공통 처리
axiosInterface.interceptors.request.use(
	request => {
		axios.defaults.headers.post['Content-Type'] = 'application/json';

		return request;
	},
	error => {
		return Promise.reject(error);
	}
);

// 응답받을 때 공통 처리
axiosInterface.interceptors.response.use(
	response => {
		return response;
	},
	error => {
		return Promise.reject(error);
	}
);

/**
 * Axios Get을 할 수 있는 공통
 * @param _url { string }
 * @param _param { undefined | any }
 * @returns { axios }
 */
const fnGetAxios = (_url: string, _param?: any) => {
	try {
		return axiosInterface.get(_url, _param);
	} catch (_e) {
		return Promise.reject(_e);
	}
};

/**
 * Axios Post을 할 수 있는 공통
 * @param _url { string }
 * @param _data { undefined | any }
 * @param _config { undefined | any }
 * @returns { axios }
 */
const fnPostAxios = (_url: string, _data?: any, _config?: any) => {
	try {
		return axiosInterface.post(_url, JSON.stringify(_data), _config);
	} catch (_e) {
		return Promise.reject(_e);
	}
};

export { fnGetAxios, fnPostAxios };
