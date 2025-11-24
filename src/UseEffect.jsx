import { useEffect, useState } from 'react'

const Timer = () => {
    useEffect[() => {
        const timer = setInterval(() => {
            console.log('Timer is working...')
        }, 1000);

        return () => {
            clearInterval(timer);
            console.log('timer has stoped')
        }
    }];
    return (
        <>
            <p>Start Timer!</p>
        </>
    )
}


export default function UseEffect() {
    // function addNewText() {
    //     trim()
    //     if (newText.trim() === "") {
    //       return setNewText("")
    //     }
    //     setTodos([...todos, newText]);
    //     setNewText("")
    //   }
    // useEffect
    // 1. 화면이 랜더링 될 때 마다, 매번 실행됨
    //   useEffect(() => {
    //     console.log('hello')
    //   });
    // 2.리스트가 추가 될 때만 실행
    //   useEffect(() => {
    //     console.log('리스트 추가됨')
    //   }, [todos]);
    // 3.첫 랜더링시에만 실행
    //   useEffect(() => {
    //     console.log('처음만 실행')
    //   }, []);

    const [showTimer, setShowTimer] = useState(false);
    return (
        <div>
            {/* showTimer 가 참일때만 <Timer />를 표시 */}
            {showTimer && <Timer />}
            <button className='btn' onClick={() => setShowTimer(!showTimer)}>Toggle Button</button>
        </div>
    )
}