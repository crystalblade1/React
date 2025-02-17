import React, { useEffect, useState } from "react";

const GitHubFetchData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
    

      try {
     
          const res = await fetch(
            "https://api.github.com/users/crystalblade1/repos"
          );
          const result = await res.json();
          setData(result);
          console.log(result);
        
      } catch (err) {
        console.error("error not found");
      }
    }
    fetchData();



  }, []);

  return (
    <div>
      {data ? (
        <ul>
          {data.map(repo => (
            <li key={repo.id}>{repo.name}</li>
          ))}
        </ul>
      ) : (
        "loading..."
      )}
    </div>
  );
};

export default GitHubFetchData;
