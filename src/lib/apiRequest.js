import toast from "react-hot-toast";

export async function makePostRequest(
  setLoading,
  endpoint,
  data,
  resourceName,
  reset
) {
  try {
    setLoading(true);
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
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
        
    } else {
        setLoading(false);
        toast.error("Something went wrong")
        // if(response.status === 409) {
        //     toast.error("The giving warehouse stock is NOT enough")
        // } else {
        //     toast.error("Something went wrong")
        // }
    }
  } catch (error) {
    setLoading(false)
    console.log(error)
  }
}
