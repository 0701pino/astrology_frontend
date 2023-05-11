import React from "react";

const Header = () => {
  return (
    <header className="bg-gray-900 text-white">
      <div className="container mx-auto py-4">
        <h1 className="text-3xl font-bold text-center">
          星占い
        </h1>
        <p className="text-center mt-2">
          あなたの運勢を占おう！
        </p>
      </div>
    </header>
  );
};

export default Header;
