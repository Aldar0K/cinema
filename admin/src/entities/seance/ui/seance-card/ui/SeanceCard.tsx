import { FC } from "react";
import { useNavigate } from "react-router-dom";

import type { Seance } from "@/entities/seance";
import { buildSeancePath } from "@/shared/constants";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui";
import { cn } from "@/shared/utils";

export type SeanceCardProps = {
  seance: Seance;
  linkable?: boolean;
  editable?: boolean;
  deleteable?: boolean;
};

const SeanceCard: FC<SeanceCardProps> = (props) => {
  const { seance, linkable = true } = props;
  const navigate = useNavigate();

  const onClick = () => {
    navigate(buildSeancePath(seance.id));
  };

  return (
    <Card
      onClick={linkable && onClick}
      className={cn({
        "cursor-pointer transition-shadow hover:shadow-md": linkable,
      })}
      role={linkable && "link"}
      aria-label={linkable && `View details for ${seance.time}`}
    >
      <CardHeader>
        <CardTitle>{seance.time}</CardTitle>
      </CardHeader>

      <CardContent className="space-y-2">
        {/* {seance.seances && <p>Seances: {seance.seances.length}</p>} */}

        <div className="flex justify-end gap-2">
          {/* {editable && <EditSeanceButton seance={seance} />} */}
          {/* {deleteable && <DeleteSeanceButton seance={seance} />} */}
        </div>
      </CardContent>
    </Card>
  );
};

export default SeanceCard;
