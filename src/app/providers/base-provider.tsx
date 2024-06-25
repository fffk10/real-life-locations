import { UIProvider } from '@yamada-ui/react'
import type { ReactNode } from 'react'

export default function BaseProvider({ children }: { children: ReactNode }) {
  return <UIProvider>{children}</UIProvider>
}
