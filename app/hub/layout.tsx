import Sidebar from "@/components/shared/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex items-center justify-center relative bg-primary-black overflow-hidden w-screen min-h-screen">
      <Sidebar />
      {children}
    </div>
  );
}
