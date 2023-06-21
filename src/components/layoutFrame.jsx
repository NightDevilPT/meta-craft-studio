import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";

import { BsArrowUpCircleFill } from "react-icons/bs";

const LayoutFrame = ({ children }) => {
  const scrollRef = useRef();
  const [hideScrollBtn, setHideScrollBtn] = useState(true);
  const router = useRouter();

  const GoScrollTop = (e) => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top:"0",
        behavior:"smooth"
      })
    }
  }

  useEffect(() => {
    if (!router.isReady) return;
    router.push(router.pathname);
  }, [])
  
  useEffect(() => {
    GoScrollTop(null)
  },[children])



  return (
    <div className="App" ref={scrollRef} onScroll={e => {
      // console.log(e.target.scrollTop)
      if (e.target.scrollTop > 80) {
        setHideScrollBtn(false);
      } else {
        setHideScrollBtn(true);
      }
    }}>
      {children}
      <BsArrowUpCircleFill onClick={e=>{GoScrollTop(e)}} style={{display:hideScrollBtn?'none':"block"}} className="scroll-top-icon" />
    </div>
  );
};

export default LayoutFrame;
