import CustomDataTable from "@/components/back-office/CustomDataTable";
import Heading from "@/components/back-office/Heading";
import TableActionBtns from "@/components/back-office/TableActionBtns";

const Products = () => {
  return (
    <div className="space-y-10">

      {/* HEADER */}
      <Heading title={"Products"} />

      {/* ACTIONS BUTTONS */}
      <TableActionBtns 
      href={"/dashboard/products/new"}
      linkTitle={"Add Product"}
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

export default Products;
