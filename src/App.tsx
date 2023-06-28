import React from "react";
import {ThemeProvider} from "styled-components";
import {useUnit} from "effector-react";
import {$theme} from "./models/theme/theme.store.ts";
import {ETheme} from "./models/theme/theme.types.ts";
import {darkTheme, lightTheme} from "./styles/themes.ts";
import 'normalize.css';
import {GlobalStyle} from './styles/global.styled.ts'
import {Main} from "./components/main/main.tsx";

const App: React.FC = () => {

  const theme = useUnit($theme);

  return (
      <div>
          <ThemeProvider theme={theme === ETheme.Dark ? darkTheme : lightTheme}>
            <GlobalStyle/>
            <Main/>
          </ThemeProvider>
      </div>

  )
}

export default App
