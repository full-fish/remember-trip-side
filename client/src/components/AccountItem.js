// import React, { useRef, useState } from "react";

// function AccountItem({
//   onEdit,
//   onRemove,
//   id,
//   item_name,
//   category,
//   price,
//   paid_person,
//   currency,
//   created_date,
//   write_date,
// }) {
//   const [isEdit, setIsEdit] = useState(false);
//   const toggleIsEdit = () => {
//     setIsEdit(!isEdit);
//     console.log("isEdit의 state는? ->", isEdit);
//   };
//   const [localContent, setLocalContent] = useState(price);
//   const localContentInput = useRef();

//   const handleRemove = () => {
//     if (window.confirm(`${id + 1}번째 기록을 삭제할까요?`)) {
//       onRemove(id);
//     }
//   };

//   const handleQuitEdit = () => {
//     setIsEdit(false);
//     setLocalContent(price);
//   };

//   const handleEdit = () => {
//     if (localContent.length < 1) {
//       localContentInput.current.focus();
//       return;
//     }
//     if (window.confirm(`${id + 1}번째 가계부를 수정할까요 ?`)) {
//       onEdit(id, localContent);
//       toggleIsEdit();
//     }
//   };

//   return (
//     <div className="AccountItem">
//       <div className="info">
//         <span>
//           이름 : {item_name} <br></br>
//           구매한 사람 : {paid_person}
//           <br></br>
//           통화 : {currency}
//           <br></br>
//           카테고리 : {category}
//         </span>
//         <br />
//         <span className="date">{write_date}</span>
//       </div>
//       <div className="content">
//         {isEdit ? (
//           <>
//             <input
//               ref={localContentInput}
//               value={localContent}
//               onChange={(e) => setLocalContent(e.target.value)}
//             />
//           </>
//         ) : (
//           <>쓴 돈 : {price}</>
//         )}
//       </div>
//       {isEdit ? (
//         <>
//           <button onClick={handleQuitEdit}>수정 취소</button>
//           <button onClick={handleEdit}>수정 완료</button>
//         </>
//       ) : (
//         <>
//           <button onClick={handleRemove}>삭제</button>
//           <button onClick={toggleIsEdit}>수정</button>
//         </>
//       )}
//     </div>
//   );
// }

// export default AccountItem;
//!
import React, { useRef, useState } from "react";

function AccountItem({
  onEdit,
  onRemove,
  id,
  item_name,
  category,
  price,
  paid_person,
  currency,
  created_date,
  write_date,
}) {
  const [isEdit, setIsEdit] = useState(false);
  const toggleIsEdit = () => {
    setIsEdit(!isEdit);
    console.log("isEdit의 state는? ->", isEdit);
  };
  const [localContent, setLocalContent] = useState(price);
  const localContentInput = useRef();

  const handleRemove = () => {
    if (window.confirm(`${id + 1}번째 기록을 삭제할까요?`)) {
      onRemove(id);
    }
  };

  const handleQuitEdit = () => {
    setIsEdit(false);
    setLocalContent(price);
  };

  const handleEdit = () => {
    if (localContent.length < 1) {
      localContentInput.current.focus();
      return;
    }
    if (window.confirm(`${id + 1}번째 가계부를 수정할까요 ?`)) {
      onEdit(id, localContent);
      toggleIsEdit();
    }
  };

  return (
    <div className="AccountItem">
      <div className="info">
        <span>
          이름 : {item_name} <br></br>
          구매한 사람 : {paid_person}
          <br></br>
          통화 : {currency}
          <br></br>
          카테고리 : {category}
        </span>
        <br />
        <span className="date">{write_date}</span>
      </div>
      <div className="content">
        {isEdit ? (
          <>
            <input
              ref={localContentInput}
              value={localContent}
              onChange={(e) => setLocalContent(e.target.value)}
            />
          </>
        ) : (
          <>쓴 돈 : {price}</>
        )}
      </div>
      {isEdit ? (
        <>
          <button onClick={handleQuitEdit}>수정 취소</button>
          <button onClick={handleEdit}>수정 완료</button>
        </>
      ) : (
        <>
          <button onClick={handleRemove}>삭제</button>
          <button onClick={toggleIsEdit}>수정</button>
        </>
      )}
    </div>
  );
}

export default AccountItem;
