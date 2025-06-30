import { useState } from 'react';
import jsPDF from "jspdf";
import "jspdf-autotable";

const methods = []; // Add your method data here

export default function App() {
  const [favorites, setFavorites] = useState([]);
  const [expanded, setExpanded] = useState(null);

  const toggleFavorite = (methodName) => {
    setFavorites(prev => 
      prev.includes(methodName) 
        ? prev.filter(m => m !== methodName) 
        : [...prev, methodName]
    );
  };

  const handleExportPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text("Your Favorite Tobacco Cessation Methods", 14, 20);

    const tableData = favorites.map(name => {
      const method = methods.find(m => m.name === name);
      return [
        method.name,
        method.type,
        method.cost,
        method.sample,
        method.goodrx
      ];
    });

    doc.autoTable({
      head: [["Name", "Type", "Cost", "Free Sample (MDHHS)", "GoodRx URL"]],
      body: tableData,
      startY: 30,
      styles: { fontSize: 10, cellWidth: 'wrap' },
      columnStyles: {
        4: { cellWidth: 60 }
      }
    });

    doc.save("tobacco_cessation_favorites.pdf");
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Heal Better Tobacco Cessation</h1>
      <p>This is your Vite + React starter template. Add your interactive methods below.</p>
      <button onClick={handleExportPDF}>Export Favorites as PDF</button>
    </div>
  );
}
