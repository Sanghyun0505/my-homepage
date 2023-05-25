import notion from "../assets/notion.png";
import github from "../assets/github.png";
import instagram from "../assets/instagram.png";
import call from "../assets/call.png";
import b1nd from "../assets/b1nd.png";
import daechelin from "../assets/daechelin.webp";

interface Type {
  id: number;
  icon: string;
  link: string;
  name?: string;
}

export const MYINFO_APP_ITEMS: Type[] = [
  {
    id: 0,
    icon: call,
    link: "010-4051-3772",
  },
  {
    id: 1,
    icon: notion,
    link: "https://notion.mingyu.run/",
  },
  {
    id: 2,
    icon: instagram,
    link: "https://www.instagram.com/slow._.heartbeat",
  },
  {
    id: 3,
    icon: github,
    link: "https://github.com/Mingyuuu0108",
  },
];

export const PROJECT_APP_ITEMS: Type[] = [
  {
    id: 0,
    icon: daechelin,
    name: "대슐랭 가이드",
    link: "https://apps.apple.com/kr/app/%EB%8C%80%EC%8A%90%EB%9E%AD-%EA%B0%80%EC%9D%B4%EB%93%9C-%EB%8C%80%EC%86%8C%EA%B3%A0-%EA%B8%89%EC%8B%9D-%EC%95%B1/id1671086233",
  },
  {
    id: 1,
    icon: b1nd,
    name: "도담도담",
    link: "https://apps.apple.com/kr/app/%EB%8F%84%EB%8B%B4%EB%8F%84%EB%8B%B4-%EC%8A%A4%EB%A7%88%ED%8A%B8-%EC%8A%A4%EC%BF%A8-%EC%84%9C%EB%B9%84%EC%8A%A4/id6446231215",
  },
];
