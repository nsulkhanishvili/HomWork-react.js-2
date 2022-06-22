export default function Buatton ({ text, onClick, customClass}) {
    return(
        <button 
         onClick={onClick}
         className={`Button ${customClass ? customClass : ""}`}
        >{text}</button>
    )
}
