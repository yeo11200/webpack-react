import React, { useRef } from 'react';
import * as io from 'socket.io-client';

/**
 * 소켓을 연동하는 곳
 */
const useSocket = () => {
	const socket = useRef<io.Socket>();

	// io.connect('http://localhost:4000', { path: '/socket.io' });

	/**
	 * 초기 소켓을 연동하는 함수
	 */
	const init = () => {
		if (!socket.current) {
			socket.current = io.connect('http://localhost:4000', {
				path: '/socket.io',
			});
		}

		socket.current.emit('init', { name: 'bella' });

		socket.current.on('welcome', msg => {
			console.log(msg);
		});
	};

	/**
	 * socket Room 에 접근할 함수
	 * @param _channel { string } : socket 명령어
	 * @param _room { string } : sokcet 접근할 위치
	 * @param _callback
	 */
	const fnSetJoinRoom = (
		_channel: string,
		_room: string,
		_callback: (data: io.Socket) => void
	) => {
		if (!socket.current) {
			return;
		}

		socket.current.emit(_channel, { room: _room, token: 'test' });

		_callback(socket.current);
	};

	const fnGetJoinRoom = (_channel: string, _callback: (data: any) => void) => {
		// socket.on(_channel, _callback);
	};

	/**
	 * 클라이언트에서 소켓을 정리할 떄 타는 함수
	 */
	const close = () => {
		// socket.close();
	};

	/**
	 * socket Room에서 나갈 사용 함수
	 * @param _channel { string } : socket 명령어
	 * @param _room { string } : sokcet 접근할 위치
	 */
	const fnRemoveRoom = (_channel: string, _room: string) => {
		// socket.emit(_channel, _room);
	};

	return { init, fnSetJoinRoom, fnGetJoinRoom, close, fnRemoveRoom };
};

export default useSocket;
