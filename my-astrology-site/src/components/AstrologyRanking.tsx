import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

interface Astrology {
  rank: number;
  nameEn: string;
  nameJp: string;
}

const AstrologyRanking = () => {
  const [astrologyData, setAstrologyData] = useState<Astrology[]>([]);

  const dummyData: Astrology[] = [
    { rank: 1, nameEn: "aries", nameJp: "牡羊", },
    { rank: 2, nameEn: "taurus", nameJp: "牡牛",  },
    // 他の星座データも追加する
  ];
  

  useEffect(() => {
    setAstrologyData(dummyData);
  }, []);

  return (
    <>
      <Header />
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-3xl text-center mb-4">星座ランキング</h2>
        <div className="w-full max-w-screen-lg flex flex-wrap justify-center">
          {astrologyData.map((astrology) => (
            <div
              key={astrology.nameEn}
              className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8"
            >
              <div className="flex flex-col justify-center items-center">
                <img
                  src={`/images/${astrology.nameEn.toLowerCase()}.png`}
                  alt={astrology.nameJp}
                  className="w-64 h-64 object-cover rounded-full border-4 border-yellow-500"
                />
                <Link
                  to={`/astrology-details/${encodeURIComponent(
                    astrology.nameEn
                  )}`}
                  className="text-xl mt-4 text-center"
                >
                  {astrology.nameJp}座
                </Link>
                <p className="text-gray-600">{astrology.rank}位</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AstrologyRanking;
