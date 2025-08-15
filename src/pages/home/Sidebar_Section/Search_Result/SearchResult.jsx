function SearchResult({ searchResult }) {
  return (
    <div className="space-y-2 mt-4 flex-1 overflow-scroll scrollbar overflow-x-hidden bg-gray-600 rounded ">
      {searchResult.map((user, i) => (
        <h1 key={i}>{user.name}</h1>
      ))}
    </div>
  );
}

export default SearchResult;
