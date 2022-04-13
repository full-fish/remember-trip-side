import React, { useRef, useState } from "react";

function DiaryEditor({ onCreate }) {
  const locationInput = useRef();
  const contentInput = useRef();
  const [state, setState] = useState({
    location: "",
    content: "",
    write_date: 1,
  });

  const handleChangeState = (e) => {
    console.log("타겟이름: ", e.target.name);
    console.log("타겟벨류: ", e.target.value);
    setState({ ...state, [e.target.name]: e.target.value });
    // name : value
    //ex) input에 입력시 location(input name): e.target.value(onchange동작)
  };

  const handleSubmit = (e) => {
    if (state.location.length < 1) {
      locationInput.current.focus();
      return;
    }

    if (state.content.length < 5) {
      contentInput.current.focus();
      return;
    }
    onCreate(state.location, state.content, state.write_date);
    console.log("일기작성여부확인 :", state);
    alert("저장성공!");
    setState({
      location: "",
      content: "",
      write_date: 1,
    });
  };

  return (
    <div className="DiaryEditor">
      <h2>오늘의 일기</h2>
      <div>
        <input ref={locationInput} value={state.location} name="location" onChange={handleChangeState} />
        <div>
          <textarea ref={contentInput} value={state.content} name="content" onChange={handleChangeState} />
        </div>
      </div>
      <div>
        <label>기분 점수 : </label>
        <select select name="write_date" value={state.write_date} onChange={handleChangeState}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </div>
      <div>
        <button onClick={handleSubmit}>✏️</button>
      </div>
    </div>
  );
}

export default DiaryEditor;
