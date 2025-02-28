import { FC, HTMLAttributes } from "react";
import Image from "next/image";
import Button from "@/components/Button";

interface UserPanelProps extends HTMLAttributes<HTMLDivElement> {
  avatarUrl: string;
  username: string;
  onFollow?: () => void;
  onMessage?: () => void;
}

const UserPanel: FC<UserPanelProps> = ({
  avatarUrl,
  username,
  onFollow,
  onMessage,
  className = "",
  ...props
}) => {
  return (
    <div
      className={`flex flex-wrap gap-2 justify-between ${className}`}
      {...props}
    >
      <div className="flex items-center gap-3">
        <Image width={24} height={24} src={avatarUrl} alt={username} />
        <div className="text-lg">{username}</div>
      </div>
      <div className="flex items-center gap-2">
        <Button
          size="sm"
          onClick={onMessage}
          variant="outlined"
          className="border-black"
        >
          Message
        </Button>
        <Button size="sm" onClick={onFollow}>
          Follow
        </Button>
      </div>
    </div>
  );
};

export default UserPanel;
