import { useState } from "react"

const LocalStorageExample = () => {
    let userName
    const [calledName, setCalledName] = useState(null)

    const saveData = () => {
        if (!userName || userName === '') {
            alert('이름을 입력해주세요')
            return
        }

        window.localStorage.setItem('userName', userName)
        alert('저장되었습니다')
    }

    const callData = () => {
        setCalledName(window.localStorage.getItem('userName') ?? '저장된 이름이 없습니다')
    }
    
    const deleteData = () => {
        window.localStorage.removeItem('userName')
    }

    return (
        <div>
            <input
                name="userName"
                onChange={(e) => userName = e.target.value}
                placeholder="이름을 입력하세요!"
            />
            <button onClick={saveData}>저장하기</button>
            <button onClick={callData}>불러오기</button>
            <button onClick={deleteData}>초기화</button>

            <p>{calledName}</p>
        </div>
    );
}

export default LocalStorageExample