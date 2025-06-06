function TryItNowBtn({ color = "text-black" }) {
    return (
        <span className={`font-normal text-[14px] flex align-middle gap-2.5 py-2.5 hover:cursor-pointer lg:text-[17px] arrow-container ${color}`}>
        Try it now  
        <span className="arrow-shift">&rarr;</span>
      </span>
      
    )
}

export default TryItNowBtn
