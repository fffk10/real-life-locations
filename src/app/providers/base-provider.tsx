import { ReactNode } from 'react'
import { UIProvider } from '@yamada-ui/react'

export default function BaseProvider({ children }: { children: ReactNode }) {
  return <UIProvider>{children}</UIProvider>
}
