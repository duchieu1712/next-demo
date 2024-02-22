import Error from "./error";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import Loading from "./loading";
import { Suspense } from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const reset = () => {};
  return (
    <section>
      <Suspense fallback={<Loading />}>
        <ErrorBoundary children={children} errorComponent={Error}/>
      </Suspense>
    </section>
  );
}
