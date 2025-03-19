import { FC } from "react";

import { authActions } from "@/entities/auth";
import { useGetViewerQuery } from "@/entities/viewer";
import { useAppDispatch } from "@/shared/hooks";
import { Button, Skeleton } from "@/shared/ui";
import { cn } from "@/shared/utils";

type ViewerProfileProps = {
  className?: string;
};

const ViewerProfile: FC<ViewerProfileProps> = (props) => {
  const { className } = props;
  const dispatch = useAppDispatch();
  const { data, isLoading } = useGetViewerQuery();

  const logout = () => {
    dispatch(authActions.signOut());
  };

  if (isLoading) {
    return (
      <div
        className={cn("p-4", "flex items-center gap-[16px]", className)}
        data-testid="ViewerProfile"
      >
        <Skeleton className="h-[20px] w-[152px]" />
        <Skeleton className="h-[40px] w-[76px]" />
      </div>
    );
  }

  if (!data) {
    return <h2>No data</h2>;
  }

  // TODO update
  const viewer = data[0];

  return (
    <div
      className={cn("p-4", "flex items-center gap-[16px]", className)}
      data-testid="ViewerProfile"
    >
      <h4>{viewer.email}</h4>
      <Button variant="outline" onClick={logout}>
        Logout
      </Button>
    </div>
  );
};

export default ViewerProfile;
