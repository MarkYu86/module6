import React, { useState } from "react";
const phrases = new Map([
  ["english", "Happy Birthday"],
  ["german", "Alles Gute zum Geburtstag"],
  ["spanish", "Feliz Cumpleaños"],
  ["french", "Bon Anniversaire"],
  ["italian", "Buon Compleanno"],
  ["portuguese", "Feliz Aniversário"],
  ["dutch", "Fijne Verjaardag"],
  ["swedish", "Grattis på födelsedagen"],
  ["japanese", "お誕生日おめでとう"],
  ["chinese", "生日快乐"],
]);
export function BirthdayTranslator() {
  const [currentPhrase, setCurrentPhrase] = useState({
    lang: "english",
    phrase: "Happy Birthday",
  });
  const handleChangeLanguage = (newlang) => {
    setCurrentPhrase({
      lang: newlang,
      phrase: phrases.get(newlang),
    });
  };
  // Dynamically generate language buttons from the phrases Map
  const languageButtons = [...phrases.keys()].map((language) => (
    <button
      key={language}
      onClick={() => handleChangeLanguage(language)}
      className={currentPhrase.lang}
    >
      {/* Capitalize the first letter of each language name */}
      {language.charAt(0).toUpperCase() + language.slice(1)}
    </button>
  ));
  return (
    <div className="BirthdayTranslator componentBox">
      {/* Display the current phrase and language */}
      <h3>
        {currentPhrase.phrase}! ({currentPhrase.lang})
      </h3>
      {/* Container for all language buttons */}
      <div className="button-container">{languageButtons}</div>
    </div>
  );
}
export default BirthdayTranslator;






