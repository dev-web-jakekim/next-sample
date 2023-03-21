import { useRouter } from 'next/router';
import { ScriptProps } from 'next/script';
import { APP_MENU_LIST } from '@/pages/index';

import AppImg from '@/public/sample-app.png';

import {
  LayOutWrapper,
  LayoutHeader,
  AppImage,
  AppNameContainer,
  AppNameTitle,
  NavContainer,
  NavItem,
} from './AppLayout.styled';

const AppLayout = ({ children }: ScriptProps): React.ReactElement => {
  const routes = useRouter();
  return (
    <div>
      {!routes.pathname.includes('error') && (
        <LayOutWrapper>
          <LayoutHeader>
            {/* image */}
            <AppImage src={AppImg} alt="App Title Image" />
            {/* Title */}
            <AppNameContainer>
              <AppNameTitle>APP SAMPLE EXAMPLE</AppNameTitle>
            </AppNameContainer>
          </LayoutHeader>
          {/* Route Menu list */}
          <NavContainer>
            {APP_MENU_LIST.map((element) => {
              return (
                <NavItem
                  active={routes.pathname.includes(element.name).toString()}
                  key={element.name}
                  href={`/${element.name}`}
                >
                  {element.name}
                </NavItem>
              );
            })}
          </NavContainer>
        </LayOutWrapper>
      )}
      {/* children component */}
      {children}
    </div>
  );
};

export default AppLayout;
