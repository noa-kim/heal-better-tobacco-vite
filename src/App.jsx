import methods from "./methods"; //tobacco cessation methods are in methods.js
import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import jsPDF from "jspdf";
import "jspdf-autotable";

export default function HealBetterTobaccoCessationOptions() {
  const [favorites, setFavorites] = useState([]);
  const [expanded, setExpanded] = useState(null);
  const [showFreeSamplesOnly, setShowFreeSamplesOnly] = useState(false);

  const toggleFavorite = (methodName) => {
    setFavorites(prev =>
      prev.includes(methodName)
        ? prev.filter(m => m !== methodName)
        : [...prev, methodName]
    );
  };

  const filteredMethods = showFreeSamplesOnly
    ? methods.filter(m => m.sample?.toLowerCase() === "yes")
    : methods;

  const handleExportPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text("Your Favorite Tobacco Cessation Methods", 14, 20);

    const tableData = favorites.map(name => {
      const method = methods.find(m => m.name === name);
      return [
        method?.name ?? "",
        method?.type ?? "",
        method?.cost ?? "",
        method?.sample ?? "",
        method?.goodrx ?? ""
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
    <div className="p-6">
      <div className="mb-4">
        <label className="inline-flex items-center space-x-2">
          <input
            type="checkbox"
            checked={showFreeSamplesOnly}
            onChange={() => setShowFreeSamplesOnly(!showFreeSamplesOnly)}
            className="accent-blue-600"
          />
          <span>Show only methods with free samples from MDHHS</span>
        </label>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {filteredMethods.map((method, index) => (
          <Card
            key={index}
            className={`relative border-2 transition-all duration-200 ${
              favorites.includes(method.name) ? 'border-green-500' : 'border-transparent'
            }`}
            onClick={() => setExpanded(expanded === method.name ? null : method.name)}
          >
            <img
              src={method.image}
              alt={method.name}
              className="w-full h-40 object-contain p-4"
            />
            <CardContent className="text-center">
              <h2 className="text-lg font-semibold">{method.name}</h2>
              <p className="text-sm text-gray-600">{method.type}</p>
            </CardContent>

            {expanded === method.name && (
              <div className="bg-gray-100 text-sm p-4">
                <p><strong>Estimated Cost:</strong> {method.cost}</p>
                <p><strong>Pros:</strong> {method.pros?.join(", ")}</p>
                <p><strong>Cons:</strong> {method.cons?.join(", ")}</p>
                <p><strong>How to Use:</strong> {method.usage}</p>
                <p><strong>How to Get It:</strong> {method.access}</p>
                <p><strong>Free Sample Available From MDHHS:</strong> {method.sample}</p>
                <p><strong>GoodRx Estimate:</strong> <a href={method.goodrx} className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">{method.cost} (View on GoodRx)</a></p>
                <Button className="mt-2" onClick={(e) => { e.stopPropagation(); toggleFavorite(method.name); }}>
                  {favorites.includes(method.name) ? "Remove from Favorites" : "Add to Favorites"}
                </Button>
              </div>
            )}
          </Card>
        ))}
      </div>

      <div className="col-span-full mt-8">
        <h3 className="text-xl font-semibold mb-2">Your Favorites</h3>
        {favorites.length === 0 ? (
          <p className="text-sm text-gray-500">Click on a method to save it here.</p>
        ) : (
          <>
            <ul className="list-disc pl-5">
              {favorites.map((fav, i) => <li key={i}>{fav}</li>)}
            </ul>
            <Button className="mt-4" onClick={handleExportPDF}>
              Export as PDF
            </Button>
          </>
        )}
      </div>
    </div>
  );
}
