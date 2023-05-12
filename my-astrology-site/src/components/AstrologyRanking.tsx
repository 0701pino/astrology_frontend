import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

interface Astrology {
  rank: number;
  nameEn: string;
  nameJp: string;
  date: string;
}

const AstrologyRanking = () => {
  const [astrologyData, setAstrologyData] = useState<Astrology[]>([]);

  const dummyData: Astrology[] = [
    { rank: 1, nameEn: "aries", nameJp: "牡羊座", date: "3月21日 - 4月19日" },
    { rank: 2, nameEn: "taurus", nameJp: "牡牛座", date: "4月20日 - 5月20日" },
    { rank: 3, nameEn: "gemini", nameJp: "双子座", date: "5月21日 - 6月20日" },
    { rank: 4, nameEn: "cancer", nameJp: "蟹座", date: "6月21日 - 7月22日" },
    { rank: 5, nameEn: "leo", nameJp: "獅子座", date: "7月23日 - 8月22日" },
    { rank: 6, nameEn: "virgo", nameJp: "乙女座", date: "8月23日 - 9月22日" },
    { rank: 7, nameEn: "libra", nameJp: "天秤座", date: "9月23日 - 10月22日" },
    { rank: 8, nameEn: "scorpio", nameJp: "蠍座", date: "10月23日 - 11月21日" },
    { rank: 9, nameEn: "sagittarius", nameJp: "射手座", date: "11月22日 - 12月21日" },
    { rank: 10, nameEn: "capricorn", nameJp: "山羊座", date: "12月22日 - 1月19日" },
    { rank: 11, nameEn: "aquarius", nameJp: "水瓶座", date: "1月20日 - 2月18日" },
    { rank: 12, nameEn: "pisces", nameJp: "魚座", date: "2月19日 - 3月20日" },
  ];
  
  useEffect(() => {
    setAstrologyData(dummyData);
  }, []);

  return (
    <>
      <Header />
      <div className="min-h-screen flex flex-col items-center ">
        <div className="container mx-auto mt-8">
          <h2 className="text-3xl text-center mb-4">X月X日の星座ランキング</h2>
          <ul className="space-y-2">
            {astrologyData.map((astrology) => (
              <li className="text-center" key={astrology.nameEn}>
                <div className="flex justify-center items-center mb-2">
                  {astrology.rank === 1 && <span className="mr-2">🥇</span>}
                  {astrology.rank === 2 && <span className="mr-2">🥈</span>}
                  {astrology.rank === 3 && <span className="mr-2">🥉</span>}
                  <Link
                    to={`/astrology-details/${encodeURIComponent(
                      astrology.nameEn
                    )}`}
                  >
                    {astrology.nameJp}
                  </Link>
                  <span className="ml-2 text-gray-500 text-sm">
                    {astrology.date}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default AstrologyRanking;
