import { Link } from "@heroui/react";

type LinkComponentProps = {
  url?: string;
  label: string;
  onPress?: () => void;
};

export default function App({ url, label, onPress }: LinkComponentProps) {
  return (
    <Link
      className="cursor-pointer text-xs"
      isExternal
      href={url}
      onPress={onPress}
    >
      {label}
    </Link>
  );
}
