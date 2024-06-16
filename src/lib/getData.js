export async function getData(endpoint) {
    try {
      const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL;

      const response = await fetch(`${baseUrl}/api/${endpoint}`, {
        cache: "no-store",
      });
  
      if (!response.ok) {
        throw new Error(`Failed to fetch data: ${response.status} ${response.statusText}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error in getData:", error);
    }
  }