import { useState } from "react";
import SearchBar from "../components/SearchBar";

export default function CatalogPage() {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    console.log("Searching for:", query);
  };

  return (
    <div style={{ padding: 20 }}>
      <SearchBar
        value={query}
        onChange={setQuery}
        onSearch={handleSearch}
        placeholder="Поиск карточек..."
      />
    </div>
  );
}
