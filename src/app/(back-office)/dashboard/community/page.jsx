import CustomDataTable from "@/components/back-office/CustomDataTable";
import Heading from "@/components/back-office/Heading";
import TableActionBtns from "@/components/back-office/TableActionBtns";

const Categories = () => {
  return (
    <div className="space-y-10">

      {/* HEADER */}
      <Heading title={"Community Training"} />

      {/* ACTIONS BUTTONS */}
      <TableActionBtns
      href={"/dashboard/community/new"}
      linkTitle={"Add Training"}
      />
      
      {/* TABLE */}
      <CustomDataTable 
      tableHeading={"Table"} 
      searchable={true}
      checkboxselection={true} 
      />
    </div>
  );
};

export default Categories;
