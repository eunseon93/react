import { useState } from 'react';

export default function Chat({
  contact,
  message,
  dispatch
}) {
  return (
    <section className="chat">
      <textarea
        value={message}
        placeholder={'Chat to ' + contact.name}
        onChange={e => {
          // TODO: dispatch edited_message
          // (Read the input value from e.target.value)
          dispatch({
            type: 'edited_message',
            message: e.target.value
          })
        }}
      />
      <br />
      <button 
        onClick={() => {
          // 수신자의 email과 message를 담은 경고창(alert) 표시하기.
          alert(`Sending "${message}" to ${contact.email}`);
          // input의 message 값 지우기
          dispatch({
            type: 'sent_message',
          })
        }}
        >Send to {contact.email}</button>
    </section>
  );
}
