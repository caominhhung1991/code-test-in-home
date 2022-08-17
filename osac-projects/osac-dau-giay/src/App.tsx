import React, {useEffect} from 'react'
import {localeConfig, MyIntlProvider} from '@caominhhung1991/components'
import {ConfigProvider} from 'antd'
import enUS from 'antd/es/locale/en_US'
import viVN from 'antd/es/locale/vi_VN'
import moment from 'moment'
import 'moment/locale/vi'
import RenderRouter from './routes'
import {useAppState} from 'stores'
import {history, HistoryRouter} from 'routes/history'

const App: React.FC = () => {
  const {locale} = useAppState(state => state.user)

  useEffect(() => {
    if (locale === 'en_US') {
      moment.locale('en')
    } else if (locale === 'vi_VN') {
      moment.locale('vi')
    }
  }, [locale])

  const getAntdLocale = () => {
    if (locale === 'en_US') {
      return enUS
    } else if (locale === 'vi_VN') {
      return viVN
    }
  }

  return (
    <ConfigProvider locale={getAntdLocale()} componentSize="middle">
      <MyIntlProvider locale={locale.split('_')[0]} messages={localeConfig[locale]}>
        <HistoryRouter history={history}>
          <RenderRouter/>
        </HistoryRouter>
      </MyIntlProvider>
    </ConfigProvider>
  )
}

export default App
