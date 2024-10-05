import type { Metadata } from "next";
import NoSsr from "@/utils/NoSsr";
import "../../src/index.scss";
import MainProvider from "./MainProvider";
import { detectLanguage } from "./i18n/server";
import { I18nProvider } from "./i18n/i18n-context";
import ErrorBoundary from "@/Common/ErrorBoundry";
import './globals.css';

export const metadata: Metadata = {
  title: "Cion - Premium Admin Template",
  description: "Cion - Premium Admin Template",
};

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const lng = await detectLanguage();
  return (
    <I18nProvider language={lng}>
      <html lang={lng}>
        <head>
          <link rel='icon' href='/assets/images/favicon.png' type='image/x-icon' />
          <link rel='shortcut icon' href='/assets/images/favicon.png' type='image/x-icon' />
          <link href='https://fonts.googleapis.com/css2?family=Lexend:wght@100;200;300;400;500;600;700;800;900&amp;family=Nunito+Sans:ital,opsz,wght@0,6..12,200;0,6..12,300;0,6..12,400;0,6..12,500;0,6..12,600;0,6..12,700;0,6..12,800;0,6..12,900;0,6..12,1000;1,6..12,200;1,6..12,300;1,6..12,400;1,6..12,500;1,6..12,600;1,6..12,700;1,6..12,800;1,6..12,900;1,6..12,1000&amp;display=swap' rel='stylesheet' />
          <script type='text/javascript' src='https://maps.googleapis.com/maps/api/js?v=3.exp'></script>
        </head>
        <body>
          <NoSsr>
            <ErrorBoundary>
              <MainProvider>{children}</MainProvider>
            </ErrorBoundary>
          </NoSsr>
        </body>
      </html>
    </I18nProvider>
  );
}
