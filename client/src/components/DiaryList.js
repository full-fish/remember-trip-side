import React from "react";

import DiaryItem from "./DiaryItem";

function DiaryList({ diaryList, onEdit, onRemove }) {
  console.log(diaryList);
  return (
    <div className="DiaryList">
      <h2>일기리스트</h2>
      <h4>{diaryList.length}개의 기록이 있어요 !</h4>
      <div>
        {diaryList.map((it) => (
          <DiaryItem
            onEdit={onEdit}
            onRemove={onRemove}
            diaryList={diaryList}
            key={it.id}
            {...it}
          />
        ))}
      </div>
    </div>
  );
}

DiaryList.defaultProps = {
  diaryList: ["에러발생 !"],
};

export default DiaryList;
