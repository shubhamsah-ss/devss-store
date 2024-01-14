import CustomDataTable from "@/components/back-office/CustomDataTable";
import Heading from "@/components/back-office/Heading";
import TableActionBtns from "@/components/back-office/TableActionBtns";

const Categories = () => {
  return (
    <div className="space-y-10">

      {/* HEADER */}
      <Heading title={"Categories"} />

      {/* ACTIONS BUTTONS */}
      <TableActionBtns 
      href={"/dashboard/categories/new"}
      linkTitle={"Add Category"}
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
