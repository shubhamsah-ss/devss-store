import toast from "react-hot-toast";

export async function makePostRequest(
  setLoading,
  endpoint,
  data,
  resourceName,
  reset, 
  redirect,
) {


  try {
    setLoading(true);
    const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL;
    const response = await fetch(`${baseUrl}/${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if(response.ok) {
        setLoading(false);
        toast.success(`New ${resourceName} created successfully`)
        reset()
        redirect()
    } else {
        setLoading(false);
        if(response.status === 409) {
          const { error } = await response.json();
          console.log(response)
            toast.error(error)
        } else {
          console.log("second:", response)
            toast.error("Something went wrong...")
        }
    }
  } catch (error) {
    setLoading(false)
    toast.error(error.message)
    console.log(error)
  }
}

export async function getData(endpoint) {

  try {
    const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL;

    console.log(baseUrl+"/api/"+endpoint)

   const response = await fetch(`${baseUrl}/api/${endpoint}`)

    if (!response.ok) {
      throw new Error(`Failed to fetch data. Status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Received data:", data)
    return data;

  } catch (error) {
    console.error("Error in getData:", error);
  }
}