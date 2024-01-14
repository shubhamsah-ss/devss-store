import Heading from "@/components/back-office/Heading";
import TableActionBtns from "@/components/back-office/TableActionBtns";

const Banners = () => {
  return (
    <div className="space-y-10">

      {/* HEADER */}
      <Heading title={"Banners"} />

      {/* ACTIONS BUTTONS */}
      <TableActionBtns 
      href={"/dashboard/banners/new"}
      linkTitle={"Add Banner"}
      />
      
      
    </div>
  );
};

export default Banners;
