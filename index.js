
import React, { useState } from "react";

export default function Home() {
  const [image, setImage] = useState(null);
  const [results, setResults] = useState([]);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleGrading = () => {
    const sampleResults = [
      { label: "Matang", confidence: 0.93 },
      { label: "Tangkai Panjang", confidence: 0.87 },
      { label: "Buah Kecil", confidence: 0.65 },
    ];
    setResults(sampleResults);
  };

  return (
    <div style={{ padding: 20, maxWidth: 600, margin: "0 auto" }}>
      <h1 style={{ color: 'green' }}>FELCRA Grading BTS (MPOB)</h1>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      {image && <img src={image} alt="Uploaded BTS" style={{ width: "100%", marginTop: 10 }} />}
      <button onClick={handleGrading} style={{ marginTop: 20, padding: 10, backgroundColor: 'green', color: 'white' }}>
        Jalankan Grading AI
      </button>
      {results.length > 0 && (
        <ul style={{ marginTop: 20 }}>
          {results.map((res, idx) => (
            <li key={idx}>✅ {res.label} ({Math.round(res.confidence * 100)}%)</li>
          ))}
        </ul>
      )}
    </div>
  );
}
