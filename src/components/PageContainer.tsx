import Container from '@mui/material/Container'
import { SxProps } from '@mui/system'

interface PageContainerProps {
  children: React.ReactNode
  dataQA: string
  sx?: SxProps
}

export function PageContainer({ children, dataQA, sx }: PageContainerProps) {
  return (
    <Container
      sx={{
        paddingBottom: '24px',
        paddingTop: '24px',
        ...sx,
      }}
      data-qa={dataQA}
    >
      {children}
    </Container>
  )
}
