import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";
import axios from "axios";
import { sign_info } from "./common";

interface AstrologyData {
  rank: number;
  nameEn: string;
  nameJp: string;
  fortune: string;
  luckyColor: string;
  luckyItem: string;
}

interface AstrologyDetail {
  color: string;
  date: string;
  fortune: string;
  item: string;
  number: string;
  ranking: number;
  sign: string;
}

const AstrologyDetails = () => {
  const [astrologyData, setAstrologyData] = useState<AstrologyData | null>(null);

  const { astrologyName } = useParams<{ astrologyName: string }>();

  // WebAPIからデータを取得する場合
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get<AstrologyDetail>(
        `https://r36klb1lk9.execute-api.ap-northeast-1.amazonaws.com/Prod/astrology?sign=${astrologyName}`
      );
      console.log(response.data)
      const detail : AstrologyData ={
        rank: response.data.ranking,
        nameEn: response.data["sign"],
        nameJp: sign_info[response.data.sign]["nameJp"],
        fortune: response.data["fortune"],
        luckyColor: response.data["color"],
        luckyItem: response.data["item"],
      }
      setAstrologyData(detail);
    };

    fetchData();
  }, [astrologyName]);

  // // ダミーデータを使用する場合
  // const dummyData: Astrology = {
  //   rank: 1,
  //   nameEn: "aries",
  //   nameJp: "牡羊座",
  //   fortune: "今日はラッキーな日です。",
  //   luckyColor: "赤",
  //   luckyItem: "ペンダント",
  // };
  // useState(() => {
  //   setAstrologyData(dummyData);
  // });

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
