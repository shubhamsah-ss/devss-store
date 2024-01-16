import RegisterForm from '@/components/formInputs/RegisterForm'

export default function RegisterFarmer() {
  return (
    <div className="md:container w-[95%] lg:w-1/2 mx-auto">
      <div className="flex h-screen justify-center items-center">
        <RegisterForm role={"FARMER"} formHeading={"Create a farmer account"} />
      </div>
    </div>
  )
}
