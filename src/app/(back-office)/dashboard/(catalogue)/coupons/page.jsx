import CustomDataTable from "@/components/back-office/CustomDataTable";
import Heading from "@/components/back-office/Heading";
import TableActionBtns from "@/components/back-office/TableActionBtns";

const Coupons = () => {
  return (
    <div className="space-y-10">

      {/* HEADER */}
      <Heading title={"Coupons"} />

      {/* ACTIONS BUTTONS */}
      <TableActionBtns
        href={"/dashboard/coupons/new"}
        linkTitle={"Add Coupons"}
      />
      
      {/* TABLE */}
      <CustomDataTable
      tableHeading={"Coupons"} 
      searchable={true}
      checkboxselection={true} 
      />
    </div>
  );
};

export default Coupons;
