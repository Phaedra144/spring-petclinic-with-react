import { Route } from "react-router-dom";
import { FindOwner } from "src/pages/FindOwner";
import { OwnerList } from "src/pages/OwnerList";

export const OwnerRoutes = () => {
  return (
    <>
      <Route index={true} element={<OwnerList />} />
      <Route index={false} path="find" element={<FindOwner />} />
    </>
  );
};
