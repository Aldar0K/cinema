import { type FC } from "react";

import { useGetUsersQuery } from "@/entities/user";
import { cn } from "@/shared/utils";
import { UsersListAllSkeleton } from "./UsersListAllSkeleton";

export type UsersListAllProps = {
  className?: string;
};

const UsersListAll: FC<UsersListAllProps> = (props) => {
  const { className } = props;
  const { data: users, isLoading } = useGetUsersQuery();

  if (isLoading) {
    return <UsersListAllSkeleton />;
  }

  if (!users.length) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">Нет доступных сеансов</p>
      </div>
    );
  }

  return (
    <div
      className={cn("flex flex-col gap-8", className)}
      data-testid="UsersListAll"
    >
      {/* {users.map((groupedSeance) => (
        <SeanceGroupCard
          key={groupedSeance.date.getTime()}
          groupedSeance={groupedSeance}
          editable
          deleteable
        />
      ))} */}
    </div>
  );
};

export default UsersListAll;
