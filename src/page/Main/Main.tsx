import React, { useEffect, useState } from 'react';
import { Socket } from 'socket.io-client';
import useSocket from '../../hooks/useSocket';
import className from 'classnames/bind';
import style from './Main.module.scss';
import { fnGetAxios } from '../../common/Axios';

const cx = className.bind(style);

const Main = () => {
	const [data, setData] = useState<number>(0);
	const { init, fnSetJoinRoom } = useSocket();

	useEffect(() => {
		init();

		fnSetJoinRoom('room_join', 'test', (aaa: Socket) => {
			console.log(aaa);

			aaa.on('room_join_emit', _e => {
				console.log('testtttt');
				console.log(_e);
			});
		});

		fnGetAxios('test', { test: 111 })
			.then()
			.catch(_error => console.log(_error));
	}, []);

	const fnUpdateData = () => {
		setData(data + 1);
	};
	return (
		<div className={cx('aaa')}>
			{data}
			<button onClick={fnUpdateData}>테스트 버튼</button>
		</div>
	);
};

export default Main;
