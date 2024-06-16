
import NewFarmerForm from "@/components/back-office/NewFarmerForm";
import { getData } from "@/lib/getData";

export default async function Onboarding({ params: { id } }) {

  const user = await getData(`users/${id}`)

  return (
    <div className="flex flex-col items-center gap-10 my-10">
      {user ? (
        <>
          <h2 className="text-xl">Hello {user.name}, Tell More About Yourself</h2>
          <NewFarmerForm user={user} />
        </>
      ) : (
        <h2 className="text-xl">Error loading user data. Please try again later.</h2>
      )}
    </div>
  );
}
