import { FC } from "react";

import { UserEntity } from "@/entities/user";
import { EditUserButton } from "@/features/user/edit-user";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui";
import { cn } from "@/shared/utils";

export type UserCardProps = {
  user: UserEntity;
  editable?: boolean;
  deleteable?: boolean;
  className?: string;
};

const UserCard: FC<UserCardProps> = (props) => {
  const {
    user,
    user: { id: userId, email },
    editable = false,
    // deleteable = false,
    className,
  } = props;

  return (
    <Card
      className={cn(className)}
      role="button"
      aria-label={`View details for ${email} (${userId})`}
    >
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium">#{userId}</CardTitle>
        <CardTitle className="text-base font-medium">{email}</CardTitle>
      </CardHeader>

      <CardContent className="space-y-1.5">
        <div className="flex justify-end gap-2">
          {editable && <EditUserButton user={user} />}
          {/* {deleteable && <DeleteUserButton user={user} />} */}
        </div>
      </CardContent>
    </Card>
  );
};

export default UserCard;
