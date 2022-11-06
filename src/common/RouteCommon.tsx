// 첫번째 url deps를 가져오는 데이터
/**
 * 첫번째 url deps를 가져오는 데이터
 * @typedef url {string}: url 경로
 * @typedef conponent: {()=> JSX.Element}: 컴포넌트 상태
 * @typedef isLogin {boolean} : 로그인 여부
 */
export const FirstRoute: {
	url: string;
	conponent: () => JSX.Element;
	isLogin: boolean;
}[] = [];
