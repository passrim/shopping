// function TabContent(props) {
//     if(props.tab === 0){
//         return <div>내용1</div>
//     }
//     if(props.tab === 1){
//         return <div>내용2</div>
//     }
//     if(props.tab === 2){
//         return <div>내용3</div>
//     }
// }

import { useEffect, useState } from "react";

function TabContent({tab}) {
    let[fade,setFade] = useState('');
    useEffect(() => {
        let a = setTimeout(() => { setFade('end');},100);
        return () => {
            clearTimeout(a);
            setFade('');
        }
    },[tab]);
    return (
        <div className={`start ${fade}`}>
            {[
            <div>내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1</div>,
            <div>올원뱅크 필리핀 무계좌 해외송금 서비스 시작됩니다. 샘플 공지사항 제목 노출 테스트</div>,
            <div>내용3</div>]
            [tab]}
        </div>
        
    )
}

export default TabContent;
