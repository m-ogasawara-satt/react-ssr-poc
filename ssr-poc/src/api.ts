export async function getBooks(offset: number) {
  const response = await fetch(`https://railway.bookreview.techtrain.dev/public/books?offset=${offset}`);
  if (!response.ok) {
    throw new Error(`エラー内容: ${response.status}`);
  }
  return await response.json();
}