import Heading from "@/components/back-office/Heading";
import TableActionBtns from "@/components/back-office/TableActionBtns";

const Markets = () => {
  return (
    <div className="space-y-10">

      {/* HEADER */}
      <Heading title={"Markets"} />

      {/* ACTIONS BUTTONS */}
      <TableActionBtns 
      href={"/dashboard/markets/new"}
      linkTitle={"Add Market"}
      />
      
      
    </div>
  );
};

export default Markets;
