import { useState } from 'react'

export default function TodoInput({ onAdd }) {
    const [newText, setNewText] = useState("");
    function addNewText() {
        // trim()
        if (newText.trim() === "") {
            return setNewText("")
        }
        onAdd(newText);
        setNewText("");
    }

    // keyPress, keyDown, keyUp
    // enter 키 이벤트 처리
    function keyDown(e) {
        if (e.key === 'Enter') {
            addNewText()
            // 이벤트 키가 enter 키면 addNewText 함수 호출
        }
    }
    return (
        <>
            {/* 인풋 추가  */}
            <div>
                <h2 className='sub-title'>할 일 추가</h2>
                <div className='input-wrap'>
                    <input className='input-add' type="text" placeholder='할 일을 입력해주세요' value={newText} onChange={(e) => setNewText(e.target.value)} onKeyDown={keyDown} />
                    <button className='btn' onClick={addNewText}>추가</button>
                </div>
            </div>
        </>
    )
}