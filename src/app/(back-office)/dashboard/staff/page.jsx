import CustomDataTable from "@/components/back-office/CustomDataTable";
import Heading from "@/components/back-office/Heading";
import TableActionBtns from "@/components/back-office/TableActionBtns";

const Farmers = () => {
  return (
    <div className="space-y-10">

      {/* HEADER */}
      <Heading title={"Staff"} />

      {/* ACTIONS BUTTONS */}
      <TableActionBtns
        href={"/dashboard/staff/new"}
        linkTitle={"Add Staff"}
      />
      
      {/* TABLE */}
      <CustomDataTable
      tableHeading={"Farmers"} 
      searchable={true}
      checkboxselection={true} 
      />
    </div>
  );
};

export default Farmers;
