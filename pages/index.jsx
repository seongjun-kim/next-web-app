import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const router = useRouter();

  return (
    <div>
      <h2>Links</h2>

      <div>
        <button type="button" onClick={() => router.replace("/sub")}>
          서브페이지
        </button>
        <p />
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ marginRight: "12px" }}
        />
        <button type="button" onClick={() => router.push(`/category/${name}`)}>
          검색
        </button>
      </div>
    </div>
  );
};

export default App;
