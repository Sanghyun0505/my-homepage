import styled from "styled-components";
import { PROJECT_APP_ITEMS } from "../../../constants/icon.constant";
import { AppIcon } from "../style";

export default function Project() {
  return (
    <>
      {PROJECT_APP_ITEMS.map((item) => (
        <AppContainer key={item.id}>
          <AppIcon
            src={item.icon}
            onClick={() => (window.location.href = item.link)}
          />
          <div>{item.name}</div>
        </AppContainer>
      ))}
    </>
  );
}

export const AppContainer = styled.div`
  width: 75px;
  height: 70px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;

  color: #ffffff;
  font-size: 11px;
  margin-top: 10px;
`;
