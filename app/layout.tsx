import '@/app/ui/global.css';
import {inter} from "@/app/ui/fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    {/*//调用inter（）时，nextJs会返回一个对象，包含了一些可以在组件中使用的属性*/}
    </html>
  );
}
