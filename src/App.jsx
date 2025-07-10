import methods from "./methods"; // tobacco cessation methods are in methods.js
import { useState, useEffect } from "react";
import { getIframeHeight } from "./iframeHeight";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import "./App.css";

const isValidUrl = (url) => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

export default function HealBetterTobaccoCessationOptions() {
  const [favorites, setFavorites] = useState([]);
  const [expanded, setExpanded] = useState(null);
  const [showFreeSamplesOnly, setShowFreeSamplesOnly] = useState(false);
  const [filter, setFilter] = useState("All");

  const toggleFavorite = (methodName) => {
    setFavorites(prev =>
      prev.includes(methodName)
        ? prev.filter(m => m !== methodName)
        : [...prev, methodName]
    );
  };

  const filteredMethods = methods.filter(m => {
    if (showFreeSamplesOnly && m.sample?.toLowerCase() !== "yes") {
      return false;
    }
    if (filter === "All") return true;
    return m.tags?.includes(filter);
  });

  const handleExportPDF = () => {
    const doc = new jsPDF({
      orientation: "landscape",
      unit: "in",
      format: [11, 8.5]
    });
    doc.setFontSize(16);
    doc.text("Your Favorite Tobacco Cessation Methods", 0.5, 0.75);

      const tableData = favorites.map(name => {
        const method = methods.find(m => m.name === name);
        return [
          method?.name ?? "",
          method?.type ?? "",
          method?.sample ?? "",
          method?.goodrx ?? ""
        ];
      });

    autoTable(doc, {
      head: [["Name", "Type", "Free Sample (Quitlink)", "GoodRx URL"]],
      body: tableData,
      startY: 1,
      margin: { left: 0.5, right: 0.5 },
      styles: { fontSize: 10, cellWidth: 'wrap' },
      columnStyles: {
        4: { cellWidth: 2.5 }
      },
      tableWidth: doc.internal.pageSize.getWidth() - 1
    });

    doc.save("tobacco_cessation_favorites.pdf");
  };

  useEffect(() => {
    const sendHeight = () => {
      const height = getIframeHeight();
      window.parent.postMessage({ type: 'hb-height', height }, '*');
    };

    sendHeight();
    window.addEventListener('resize', sendHeight);
    return () => window.removeEventListener('resize', sendHeight);
  }, []);

  return (
    <>
    <div className="container">
      <h1 className="title">Tobacco Cessation Support Strategies</h1>
      <p className="welcome">
        Explore resources to help you quit! Click on any of the options to learn more about it. Save your favorites and print them as a reminder.
      </p>
      <div className="controls">
        <button
          className={`btn ${showFreeSamplesOnly ? 'active' : ''}`}
          onClick={() => setShowFreeSamplesOnly(!showFreeSamplesOnly)}
        >
          Free Sample from the Quitlink
        </button>
        <div className="filter-group">
          {['All', 'Nicotine Replacement', 'Prescription Medication', 'Other'].map(cat => (
            <button
              key={cat}
              className={`btn ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid">
        {filteredMethods.map((method, index) => (
          <div
            key={index}
            className={`card ${favorites.includes(method.name) ? 'favorite' : ''}`}
            onClick={() => setExpanded(expanded === method.name ? null : method.name)}
          >
            <img
              src={method.image}
              alt={method.name}
            />
            <div className="card-content">
              <h2>{method.name}</h2>
              <p>{method.description}</p>
            </div>

            {expanded === method.name && (
              <div className="card-details" onClick={(e) => e.stopPropagation()}>
                <p><strong>Pros:</strong> {method.pros?.join(", ")}</p>
                <p><strong>Cons:</strong> {method.cons?.join(", ")}</p>
                <p><strong>How to Use:</strong> {method.usage}</p>
                <p><strong>How to Get It:</strong> {method.access}</p>
               <p>
  <strong>Free Sample Available From the Quitlink:</strong> {method.sample}
  {method.sample && method.sample.toLowerCase() === "yes" && (
    <>
      {' '}
      <a
        href="https://michigan.quitlogix.org/en-us/"
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => e.stopPropagation()}
        className="text-blue-600 underline"
      >
        Learn more
      </a>
    </>
  )}
</p>
                {method.goodrx && isValidUrl(method.goodrx) && (
                  <p><strong>GoodRx Estimate:</strong>{" "}
                    <a
                      href={method.goodrx}
                      className="text-blue-600 underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View on GoodRx
                    </a>
                  </p>
                )}
                <button
                  className={`btn favorite-btn ${favorites.includes(method.name) ? 'active' : ''}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFavorite(method.name);
                  }}
                >
                  <svg
                    className="heart-icon"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
                  {favorites.includes(method.name) ? 'Remove from Favorites' : 'Add to Favorites'}
                </button>
              </div>
            )}
          </div>
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
              <button className="btn" onClick={handleExportPDF}>
                Export as PDF
              </button>
          </>
        )}
      </div>
    </div>
    <footer className="footer">
      Made by <a href="https://www.hbomich.org/" target="_blank" rel="noopener noreferrer">HBOM</a>. Last updated {new Date(document.lastModified).toLocaleDateString("en-US")}
    </footer>
    </>
  );
}
