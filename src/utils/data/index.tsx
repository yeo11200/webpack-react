// 쿠키데이터 전용 세팅
export const cookie = {
	/**
	 * 쿠키를 세팅하는 곳
	 * @param _name {string} : 쿠키 이름
	 * @param _value {string} : 쿠키 값
	 * @param _exp {number} : 쿠키 일정
	 *                          - default 9999
	 */
	set: (_name: string, _value: string, _exp: number = 9999) => {
		const date: Date = new Date();
		date.setTime(date.getTime() + _exp * 24 * 60 * 60 * 1000);
		document.cookie =
			_name + '=' + _value + ';expires=' + date.toUTCString() + ';path=/';
	},
	/**
	 * 쿠키 데이터 가지고 오는 곳
	 * @param _name {string}
	 * @returns { null | string }
	 */
	get: (_name: string) => {
		const value: RegExpMatchArray | null = document.cookie.match(
			'(^|;) ?' + _name + '=([^;]*)(;|$)'
		);
		return value ? value[2] : null;
	},
	/**
	 * 쿠키 삭제 하는 곳
	 * @param _name {string}
	 */
	remove: (_name: string) => {
		document.cookie = _name + '=; expires=Thu, 01 Jan 1999 00:00:10 GMT;';
	},
	/**
	 * 쿠키 전체 삭제
	 */
	allRemove: () => {
		const cookies = document.cookie.split(';');

		const nCookieLength: number = cookies.length;

		if (!nCookieLength) {
			return;
		}

		for (var i = 0; i < nCookieLength; i++) {
			var cookie = cookies[i];
			var eqPos = cookie.indexOf('=');
			var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
			document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT';
		}
	},
};

// 로컬스토리지 데이터 세팅
export const localstroage = {
	/**
	 * 로컬 스토리지 세팅
	 * @param _key {string}
	 * @param _value {string}
	 */
	set: (_key: string, _value: string) => {
		localStorage.setItem(_key, _value);
	},
	/**
	 * 로컬스토리지 데이터 가지고 오기
	 * @param _key {string}
	 * @returns {any}
	 */
	get: (_key: string) => {
		return localStorage.getItem(_key);
	},
	/**
	 * 로컬스토리지 데이터 삭제
	 * @param _key {string}
	 */
	remove: (_key: string) => {
		localStorage.removeItem(_key);
	},
};
