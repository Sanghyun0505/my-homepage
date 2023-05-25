import React, { useEffect, useState } from "react";
import * as S from "./style";
import { IoIosBatteryFull, IoIosSearch, IoIosWifi } from "react-icons/io";
import { getCurrentTime } from "../../lib/getCurrentTime";
import MyInfo from "./MyInfo";
import Project from "./Project";

export default function PortPolio() {
  const [currentTime, setCurrentTime] = useState<string>(getCurrentTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(getCurrentTime());
    }, 1000); // 1초마다 현재 시간 갱신

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <S.PortPolioWrap>
      <S.IphoneProContainer>
        <S.Able isHead={true}>
          <div style={{ fontSize: "16px", fontWeight: "500" }}>
            {currentTime}
          </div>
          <S.Notch />
          <div style={{ display: "flex", gap: "7px" }}>
            <IoIosWifi size={20} />
            <IoIosBatteryFull size={22} />
          </div>
        </S.Able>
        <S.Screen>
          <Project />
        </S.Screen>
        <S.Able>
          <S.FootContainer>
            <IoIosSearch size={15} />
            <div>검색</div>
          </S.FootContainer>
          <S.FootContainer isApp={true}>
            <MyInfo />
          </S.FootContainer>
        </S.Able>
      </S.IphoneProContainer>
    </S.PortPolioWrap>
  );
}
