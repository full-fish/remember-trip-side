import axios from 'axios';
import React, { useState, useCallback, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { stateContext } from '../store';

function SignIn() {
  const [id, setId] = useState('');
  const [pwd, setPwd] = useState('');

  const context = useContext(stateContext);

  const navigate = useNavigate();

  const onIdHandler = event => {
    setId(event.currentTarget.value);
  };

  const onPasswordHandler = event => {
    setPwd(event.currentTarget.value);
  };

  const onReset = useCallback(() => {
    setId('');
    setPwd('');
  }, [setId, setPwd]);

  const onLogin = event => {
    event.preventDefault();

    if (!id || !pwd) {
      alert('모든 값을 정확하게 입력해주세요');
      return;
    }

    axios
      .post('http://localhost:8080/signin', {
        user_id: id,
        password: pwd,
      })
      .then(data => {
        console.log(data.data.data);
        context.funcs.loginHandler(id, pwd, data.data.data);
      })
      .then(() => {
        alert('로그인');
        navigate('/');
        onReset();
      });
  };

  return (
    <div
      className="SignIn"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100vh',
      }}
    >
      <h1>Remember Trip</h1>
      <form>
        <label htmlFor="user_id">아이디:</label>
        <input
          id="user_id"
          value={id}
          onChange={onIdHandler}
          placeholder="아이디를 입력해주세요"
          required
        />
        <hr />
        <label htmlFor="user_pwd">비밀번호:</label>
        <input
          id="user_pwd"
          value={pwd}
          onChange={onPasswordHandler}
          placeholder="비밀번호를 입력해주세요"
          required
        />
        <hr />
      </form>
      <button type="submit" value="로그인" onClick={onLogin}>
        SignIn
      </button>
      <Link to="/sign-up">
        <button type="submit" value="회원가입">
          SignUp
        </button>
      </Link>
    </div>
  );
}

export default SignIn;
