import React from 'react';
import { connect, io } from 'socket.io-client';

/**
 * 소켓을 연동하는 곳
 */
const useSocket = () => {
    const socket = connect('http://localhost:4000');

    /**
     * 초기 소켓을 연동하는 함수
     */
    const init = () => {
        socket.on('connect', () => {
            console.log('connent to socket');
        });
    }

    /**
     * socket Room 에 접근할 함수
     * @param _channel { string } : socket 명령어
     * @param _room { string } : sokcet 접근할 위치
     */
    const fnSetJoinRoom = (_channel: string, _room: string, _callback: (data: any) => void) => {
        socket.emit(_channel, _room, _callback);
    }

    const fnGetJoinRoom = (_channel: string, _callback: (data: any) => void) => {
        socket.on(_channel, _callback);
    }

    /**
     * 클라이언트에서 소켓을 정리할 떄 타는 함수
     */
    const close = () => {
        socket.close();
    }

    /**
     * socket Room에서 나갈 사용 함수
     * @param _channel { string } : socket 명령어
     * @param _room { string } : sokcet 접근할 위치
     */
    const fnRemoveRoom = (_channel: string, _room: string) => {
        socket.emit(_channel, _room);
    }

    return { init, fnSetJoinRoom, fnGetJoinRoom, close, fnRemoveRoom};
}
