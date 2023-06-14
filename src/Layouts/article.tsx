import { motion, Variants } from 'framer-motion'
import { GridItemStyle } from '../components/grid-item'
import { Helmet } from 'react-helmet'

interface LayoutProps {
  children: React.ReactNode
  title?: string
}

const variants: Variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -0, y: 20 }
}

const Layout = ({ children, title }: LayoutProps) => {
  const t = `${title} - Takuya Matsuyama`
  return (
    <motion.article
      initial='hidden'
      animate='enter'
      exit='exit'
      variants={variants}
      transition={{ duration: 0.4, type: 'easeInOut' }}
      style={{ position: 'relative' }}
    >
      <>
        {title && (
          <Helmet>
            <title>{t}</title>
            <meta name='twitter:title' content={t} />
            <meta property='og:title' content={t} />
          </Helmet>
        )}
        {children}

        <GridItemStyle />
      </>
    </motion.article>
  )
}

export default Layout
