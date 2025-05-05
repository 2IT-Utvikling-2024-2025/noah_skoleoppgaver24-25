import React from 'react';
import './inventory.css';

const Inventory = () => {
  const guns = [
    {
      "id": 1,
      "name": "AK-47 | Red Laminate",
      "rarity": "Covert",
      "details": "A custom skin for the AK-47, featuring a red laminate finish.",
      "worth": 809.00
    },
        {
          "id": 1,
          "name": "AK-47 | Red Laminate",
          "rarity": "Covert",
          "details": "A custom skin for the AK-47, featuring a red laminate finish.",
          "worth": 809.00
        },
        {
          "id": 2,
          "name": "M4A4 | Asiimov",
          "rarity": "Classified",
          "details": "A futuristic skin for the M4A4, featuring a sleek and metallic design.",
          "worth": 30.99
        },
        {
          "id": 3,
          "name": "AWP | Dragon Lore",
          "rarity": "Legendary",
          "details": "A legendary skin for the AWP, featuring a dragon-scale design and a fiery red color scheme.",
          "worth": 10000.00
        },
        {
          "id": 4,
          "name": "Glock-18 | Gamma Doppler",
          "rarity": "Covert",
          "details": "A sleek and modern skin for the Glock-18, featuring a gamma doppler design and a metallic finish.",
          "worth": 20.99
        },
        {
          "id": 5,
          "name": "M9 Bayonet | Crimson Web",
          "rarity": "Classified",
          "details": "A deadly skin for the M9 Bayonet, featuring a crimson web design and a black handle.",
          "worth": 100.00
        },
        {
          "id": 6,
          "name": "USP-S | Cyrex",
          "rarity": "Covert",
          "details": "A futuristic skin for the USP-S, featuring a cyrex design and a metallic finish.",
          "worth": 20.99
        },
        {
          "id": 7,
          "name": "Desert Eagle | Conspiracy",
          "rarity": "Classified",
          "details": "A mysterious skin for the Desert Eagle, featuring a conspiracy-themed design and a black finish.",
          "worth": 78.99
        },
        {
          "id": 8,
          "name": "MAC-10 | Neon Rider",
          "rarity": "Covert",
          "details": "A neon-lit skin for the MAC-10, featuring a neon rider design and a futuristic finish.",
          "worth": 20.99
        },
        {
          "id": 9,
          "name": "P90 | Death by Puppy",
          "rarity": "Classified",
          "details": "A cute and deadly skin for the P90, featuring a death by puppy design and a pastel color scheme.",
          "worth": 10.00
        },
        {
          "id": 10,
          "name": "SCAR-20 | Jungle Storm",
          "rarity": "Covert",
          "details": "A jungle-themed skin for the SCAR-20, featuring a jungle storm design and a green finish.",
          "worth": 30.23
        },
        {
          "id": 11,
          "name": "AK-47 | Aquamarine Revenge",
          "rarity": "Mil-Spec Grade",
          "details": "A custom skin for the AK-47, featuring an aquamarine revenge design and a blue finish.",
          "worth": 250.00
        },
        {
          "id": 12,
          "name": "M4A1-S | Hot Rod",
          "rarity": "Restricted",
          "details": "A sleek and modern skin for the M4A1-S, featuring a hot rod design and a metallic finish.",
          "worth": 69.99
        },
        {
          "id": 13,
          "name": "Glock-18 | Weave",
          "rarity": "Mil-Spec Grade",
          "details": "A custom skin for the Glock-18, featuring a weave design and a black finish.",
          "worth": 100.00
        },
        {
          "id": 14,
          "name": "FAMAS | Valence",
          "rarity": "Restricted",
          "details": "A futuristic skin for the FAMAS, featuring a valence design and a metallic finish.",
          "worth": 20.99
        },
        {
          "id": 15,
          "name": "SSG 08 | Abyss",
          "rarity": "Mil-Spec Grade",
          "details": "A custom skin for the SSG 08, featuring an abyss design and a black finish.",
          "worth": 250.00
        }
      
  ];

  return (
    <div className="inventory-container">
      <h1>Inventory</h1>
      <ul>
        {guns.map((gun) => (
          <li key={gun.id}>
            <div className="gun-info">
              <h2>{gun.name}</h2>
              <p>Rarity: {gun.rarity}</p>
              <p>Details: {gun.details}</p>
              <p>Worth: ${gun.worth}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Inventory;