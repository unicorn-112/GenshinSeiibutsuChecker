import { useState } from "react";
import backImg from "./back.png";
import godImg from "./god.png";
import goodImg from "./good.png";
import fightImg from "./fight.png";

function App() {
  const [stats, setStats] = useState({ baseStat: 0, criRate: 0, criDmg: 0 });
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const getEvaluation = (score) => {
    if (score >= 45) return { img: godImg, text: "神聖遺物！！" };
    if (score >= 25) return { img: goodImg, text: "いいね♪" };
    return { img: fightImg, text: "まだまだ…" };
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setStats({
      ...stats,
      [e.target.name]: value === "" ? 0 : parseFloat(value),
    });
  };

  const checkArtifact = async () => {
    if (stats.baseStat < 0 || stats.criRate < 0 || stats.criDmg < 0) {
      setError("0以上の数値を入力してください");
      setResult(null);
      return;
    }

    setError("");
    try {
      const response = await fetch(
        "https://genshinseiibutsucheckerapp.onrender.com/api/artifact/calculate",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(stats),
        },
      );
      const data = await response.json();
      setResult(data);
    } catch {
      setError("通信エラー");
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url(${backImg})`,
        minHeight: "100vh",
        backgroundSize: "cover",
        padding: "40px",
        color: "white",
      }}
    >
      <h1
        style={{ marginBottom: "40px", fontSize: "2rem", textAlign: "center" }}
      >
        聖遺物スコアチェッカーfor原神
      </h1>

      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          display: "flex",
          gap: "40px",
          alignItems: "flex-start",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          {[
            { name: "baseStat", label: "攻撃力/防御力/HP" },
            { name: "criRate", label: "会心率" },
            { name: "criDmg", label: "会心ダメージ" },
          ].map((item) => (
            <div
              key={item.name}
              style={{ display: "flex", alignItems: "center", gap: "10px" }}
            >
              <label style={{ width: "160px" }}>{item.label}</label>
              <input
                name={item.name}
                type="number"
                min="0"
                step="0.1"
                placeholder="0"
                onChange={handleInputChange}
                style={{ width: "60px" }}
              />
              <span>%</span>
            </div>
          ))}
          <button
            onClick={checkArtifact}
            style={{ padding: "8px 20px", marginTop: "10px", width: "100px" }}
          >
            診断
          </button>
          {error && (
            <p
              style={{
                color: "red",
                fontSize: "0.9em",
                fontWeight: "bold",
              }}
            >
              {error}
            </p>
          )}
        </div>

        <div
          style={{
            border: "2px solid white",
            padding: "20px",
            width: "250px",
            textAlign: "center",
            backgroundColor: "rgba(0,0,0,0.5)",
          }}
        >
          <p>計算結果</p>
          {result &&
            (() => {
              const evalResult = getEvaluation(result.score);
              return (
                <div style={{ marginTop: "10px" }}>
                  <img
                    src={evalResult.img}
                    alt="result"
                    style={{ width: "80px" }}
                  />
                  <p>スコア: {result.score}</p>
                  <p style={{ fontWeight: "bold", fontSize: "1.2em" }}>
                    {evalResult.text}
                  </p>
                </div>
              );
            })()}
        </div>
      </div>
    </div>
  );
}

export default App;
