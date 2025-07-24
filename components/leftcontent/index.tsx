"use client";
import Image from "next/image";
import Link from "next/link";

export default function LeftContent() {
  const categorytop = [
    {
      name: "라이브카지노",
      nameEng: "Live Casino",
      href: "/categories/livecasino",
      src: "/icon_category/icon_05.png",
    },
    {
      name: "음포게임",
      nameEng: "Slot Game",
      href: "/categories/slot",
      src: "/icon_category/icon_06.png",
    },
    {
      name: "라이브스포츠",
      nameEng: "Live Sports",
      href: "/categories/sports-live-kor",
      src: "/icon_category/icon_02.png",
    },
    {
      name: "스포츠",
      nameEng: "Sports",
      href: "/categories/sports",
      src: "/icon_category/icon_04.png",
    },
    {
      name: "미니게임",
      nameEng: "Mini Game",
      href: "/categories/minigame",
      src: "/icon_category/icon_03.png",
    },
    {
      name: "토큰게임",
      nameEng: "Token game",
      href: "/categories/tokengame",
      src: "/icon_category/icon_08.png",
    },
    {
      name: "회수",
      nameEng: "Payback",
      href: "/categories/payback",
      src: "/icon_category/icon_09.png",
    },
    {
      name: "스포츠 특집",
      nameEng: "Special Sports",
      href: "/categories/sportsspecial",
      src: "/icon_category/icon_10.png",
    },
  ];

  const navigationLinks = [
    { label: "출석체크", href: "/navigation/attendance" },
    { label: "마이페이", href: "/navigation/mypage" },
    { label: "고객센터", href: "/navigation/help" },
    { label: "쪽지함", href: "/navigation/message" },
    { label: "이벤트", href: "/navigation/event" },
    { label: "공지사항", href: "/navigation/notice" },
    { label: "베팅내역", href: "/navigation/betlist" },
  ];

  const categoryLinks = [
    { label: "슬롯", href: "/categories/slot" },
    { label: "카지노", href: "/categories/livecasino" },
    { label: "토큰게임", href: "/categories/tokengame" },
    { label: "벳365", href: "/categories/bet365" },
    { label: "미니게임", href: "/categories/minigame" },
    { label: "실시간", href: "/categories/sports-live-kor" },
    { label: "스페셜", href: "/categories/sportsspecial" },
  ];

  return (
    <div className="flex flex-col gap-2 h-dvh">
      <div className="flex flex-col rounded-sm gap-2 p-2">
        {categorytop.map((categoryt, index) => (
          <Link
            key={index}
            href={categoryt.href}
            className="flex flex-row items-center gap-4 p-2 px-6 sidebarbg hover:[box-shadow:inset_0_0_8px_#3b82f6] rounded-lg"
          >
            <Image
              src={categoryt.src}
              width={40}
              height={40}
              alt="testing"
              className="w-8 h-8"
            />
            <div className="flex flex-col">
              <div className="nav-btn-primary-c">{categoryt.name}</div>
              <div className="text-sm text-neutral-400">
                {categoryt.nameEng}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
