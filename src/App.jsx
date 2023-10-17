import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import CharactersContainer from "./components/CharactersContainer";
import UpButton from "./components/UpButton";
import { useState } from "react";
import Footer from "./components/Footer";

function App() {
  const [search, setSearch] = useState("");
  return (
    <>
      <main className="min-h-screen bg-bgPrimary px-10 md:px-20 py-10 relative">
        <Header />
        <SearchBar setSearch={setSearch} />
        <CharactersContainer search={search} />
        <UpButton />
      </main>
      <Footer />
    </>
  );
}

export default App;
