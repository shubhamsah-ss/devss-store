import RegisterForm from "@/components/formInputs/RegisterForm";

export default function Register() {
  return (
    <div className="md:container w-[95%] lg:w-1/2 mx-auto">
      <div className="flex h-screen justify-center items-center">
        <RegisterForm role={"USER"} formHeading={"Create new account"} />
      </div>
    </div>
  );
}
