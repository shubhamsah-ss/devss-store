import FormHeader from "@/components/back-office/FormHeader";
import NewFarmerForm from "@/components/back-office/NewFarmerForm";

const NewFarmer = () => {
  
  return (
    <div className="space-y-10">
      <FormHeader headerTitle={"New Farmer"} />
      <NewFarmerForm />
    </div>
  );
};

export default NewFarmer;
