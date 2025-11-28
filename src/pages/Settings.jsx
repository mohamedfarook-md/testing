import React, { useState } from "react";
import settingsData from "../data/settings.json";

export default function Settings() {
  const [settings, setSettings] = useState(settingsData);

  const handleToggle = (cardIndex, itemIndex) => {
    const updated = { ...settings };
    updated.cards[cardIndex].items[itemIndex].enabled =
      !updated.cards[cardIndex].items[itemIndex].enabled;
    setSettings(updated);
  };

  return (
    <div id="settings" className="section">
      <h1 className="page-title">Settings</h1>

      <div className="settings-container">
        {settings.cards.map((card, cIdx) => (
          <div className="settings-card" key={cIdx}>
            <h3><i className={`fas ${card.icon}`}></i> {card.title}</h3>

            {card.items.map((it, iIdx) => (
              <div className="setting-item" key={iIdx}>
                <div className="setting-info">
                  <h4>{it.title}</h4>
                  <p>{it.desc}</p>
                </div>

                <div
                  className={`switch ${it.enabled ? "active" : ""}`}
                  onClick={() => handleToggle(cIdx, iIdx)}
                >
                  <div className="switch-slider"></div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}