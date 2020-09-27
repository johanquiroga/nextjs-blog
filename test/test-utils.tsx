import { render, RenderOptions, RenderResult } from '@testing-library/react'
import AppProviders from "../context";

function Providers({ children }: { children?: React.ReactNode}): JSX.Element {
  return (
    <AppProviders>{children}</AppProviders>
  );
}

const customRender = (ui: React.ReactElement, options?: RenderOptions): RenderResult =>
  render(ui, { wrapper: Providers, ...options })

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }