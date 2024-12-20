import { useParams } from "react-router-dom";
import { ComponentsOverview } from "./ComponentsOverview";

const COMPONENT_PAGES = [
  { path: "overview", page: <ComponentsOverview /> },
] as const satisfies Array<{ path: string; page: React.ReactNode }>;

export const ComponentsRoot = () => {
  const params = useParams();

  return (
    COMPONENT_PAGES.find((p) => p.path === params.component)?.page ?? (
      <div>404 not found</div>
    )
  );
};
