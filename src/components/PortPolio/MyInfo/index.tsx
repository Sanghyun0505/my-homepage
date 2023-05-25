import React from "react";
import { MYINFO_APP_ITEMS } from "../../../constants/icon.constant";
import { AppIcon } from "../style";

export default function MyInfo() {
  return (
    <>
      {MYINFO_APP_ITEMS.map((item) => {
        return (
          <React.Fragment key={item.id}>
            {item.id === 0 ? (
              <a href={`tel:${item.link}`}>
                <AppIcon src={item.icon} alt="" />
              </a>
            ) : (
              <AppIcon
                src={item.icon}
                alt=""
                onClick={() => (window.location.href = item.link!!)}
              />
            )}
          </React.Fragment>
        );
      })}
    </>
  );
}
