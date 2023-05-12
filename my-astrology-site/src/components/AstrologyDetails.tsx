import { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";

interface Astrology {
  rank: number;
  nameEn: string;
  nameJp: string;
  fortune: string;
  luckyColor: string;
  luckyItem: string;
}

const AstrologyDetails = () => {
  const [astrologyData, setAstrologyData] = useState<Astrology | null>(null);

  const { astrologyName } = useParams<{ astrologyName: string }>();

  // ダミーデータを使用する
  const dummyData: Astrology = {
    rank: 1,
    nameEn: "aries",
    nameJp: "牡羊座",
    fortune: "今日はラッキーな日です。",
    luckyColor: "赤",
    luckyItem: "ペンダント",
  };

  // WebAPIからデータを取得する場合
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await axios.get<Astrology>(
  //       `https://your-api-url/astrology/${astrologyName}`
  //     );
  //     setAstrologyData(response.data);
  //   };

  //   fetchData();
  // }, [astrologyName]);

  // ダミーデータを使用する場合
  useState(() => {
    setAstrologyData(dummyData);
  });

  if (!astrologyData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header />
      <div className="min-h-screen flex flex-col items-center justify-center">
        <div className="mt-8">
          <h2 className="text-3xl text-center mb-4">
            {astrologyData.nameJp}の詳細
          </h2>
          <div className="flex justify-center mb-8">
            <img
              src={`/images/${astrologyData.nameEn}.jpg`}
              alt={astrologyData.nameEn}
              className="w-64 h-64 object-cover rounded-full border-4 border-yellow-500"
            />
          </div>
          <table className="table-auto mx-auto mb-8">
            <tbody>
              <tr>
                <th className="border px-4 py-2">順位</th>
                <td className="border px-4 py-2">{astrologyData.rank}位</td>
              </tr>
              <tr>
                <th className="border px-4 py-2">運勢</th>
                <td className="border px-4 py-2">{astrologyData.fortune}</td>
              </tr>
              <tr>
                <th className="border px-4 py-2">ラッキーカラー</th>
                <td className="border px-4 py-2">{astrologyData.luckyColor}</td>
              </tr>
              <tr>
                <th className="border px-4 py-2">ラッキーアイテム</th>
                <td className="border px-4 py-2">{astrologyData.luckyItem}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AstrologyDetails;
