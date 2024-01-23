import { useEffect, useCallback } from "react";
import axios from "axios";

export default function ReqPage() {
  useEffect(() => {
    handleGet();
  }, []);

  async function handleGet() {
    const res = await axios.get("https://dummyjson.com/products/");
    console.log(res);
  }

  const handlePost = useCallback(async () => {
    const res = await axios.post("https://jsonplaceholder.typicode.com/posts", {
      title: "Criando com axios",
      content: "Algum conteúdo",
    });
    console.log(res);
  }, []);
  useEffect(() => {
    handlePost();
  }, [handlePost]);

  return <>Teste</>;
}
